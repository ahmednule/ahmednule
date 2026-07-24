import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type MpesaBody = {
  phoneNumber?: string;
  amount?: string | number;
};

const REQUIRED_ENV = [
  "MPESA_CONSUMER_KEY",
  "MPESA_CONSUMER_SECRET",
  "MPESA_PASSKEY",
  "MPESA_CALLBACK_URL",
] as const;

function buildTimestamp() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(new Date())
    .reduce<Record<string, string>>((accumulator, part) => {
      if (part.type !== "literal") {
        accumulator[part.type] = part.value;
      }
      return accumulator;
    }, {});

  return `${parts.year}${parts.month}${parts.day}${parts.hour}${parts.minute}${parts.second}`;
}

function normalizePhoneNumber(phoneNumber: string) {
  const digits = phoneNumber.replace(/\D/g, "");

  if (digits.startsWith("254")) {
    return digits;
  }

  if (digits.startsWith("0") && digits.length === 10) {
    return `254${digits.slice(1)}`;
  }

  if (digits.startsWith("7") && digits.length === 9) {
    return `254${digits}`;
  }

  return digits;
}

export async function POST(request: NextRequest) {
  let body: MpesaBody;

  try {
    body = (await request.json()) as MpesaBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const missingEnv = REQUIRED_ENV.filter((name) => !process.env[name]);

  if (missingEnv.length > 0) {
    return NextResponse.json(
      {
        error: `Missing M-Pesa environment variables: ${missingEnv.join(", ")}`,
      },
      { status: 500 },
    );
  }

  const shortcode = process.env.MPESA_SHORTCODE ?? "6534864";
  const baseUrl = process.env.MPESA_BASE_URL ?? "https://api.safaricom.co.ke";
  const phoneNumber = normalizePhoneNumber(String(body.phoneNumber ?? ""));
  const amount = Number(body.amount);

  if (!/^2547\d{8}$/.test(phoneNumber)) {
    return NextResponse.json(
      {
        error: "Enter a valid Kenyan mobile number in 2547XXXXXXXX format.",
      },
      { status: 400 },
    );
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json(
      { error: "Enter a valid amount greater than zero." },
      { status: 400 },
    );
  }

  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const passkey = process.env.MPESA_PASSKEY;
  const callbackUrl = process.env.MPESA_CALLBACK_URL;
  const accountReference = process.env.MPESA_ACCOUNT_REFERENCE ?? "Ahmed Nule";
  const transactionDesc = process.env.MPESA_TRANSACTION_DESC ?? "Support payment";

  const tokenResponse = await fetch(
    `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")}`,
      },
    },
  );

  if (!tokenResponse.ok) {
    return NextResponse.json(
      { error: "Could not fetch the M-Pesa access token." },
      { status: 502 },
    );
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string };

  if (!tokenData.access_token) {
    return NextResponse.json(
      { error: "M-Pesa access token was not returned by Safaricom." },
      { status: 502 },
    );
  }

  const timestamp = buildTimestamp();
  const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

  const stkResponse = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.round(amount),
      PartyA: phoneNumber,
      PartyB: shortcode,
      PhoneNumber: phoneNumber,
      CallBackURL: callbackUrl,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    }),
  });

  const stkData = (await stkResponse.json().catch(() => ({}))) as {
    ResponseCode?: string;
    ResponseDescription?: string;
    CustomerMessage?: string;
    CheckoutRequestID?: string;
  };

  if (!stkResponse.ok || stkData.ResponseCode !== "0") {
    return NextResponse.json(
      {
        error:
          stkData.ResponseDescription ??
          stkData.CustomerMessage ??
          "M-Pesa could not start the payment request.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      stkData.CustomerMessage ??
      "Check your phone for the M-Pesa prompt and enter your PIN there.",
    checkoutRequestID: stkData.CheckoutRequestID,
  });
}