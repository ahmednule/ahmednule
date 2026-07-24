"use client";

import { useState } from "react";

type PaymentStatus = "idle" | "sending" | "sent" | "error";

export default function MpesaTrigger() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [form, setForm] = useState({ phoneNumber: "", amount: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/mpesa/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Could not start the M-Pesa payment request.");
      }

      setStatus("sent");
      setMessage(
        data.message ?? "Check your phone for the M-Pesa prompt and enter your PIN there.",
      );
      setForm({ phoneNumber: "", amount: "" });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not start the M-Pesa payment request.",
      );
    }
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="inline-flex items-center justify-center gap-2 rounded-sm border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-parchment transition-colors hover:border-crop hover:text-crop"
      >
        Buy me Coffee
      </button>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-soil/85 px-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowForm(false);
              setStatus("idle");
              setMessage("");
            }
          }}
        >
          <div className="w-full max-w-[520px] rounded-sm border border-line-strong bg-soil-raised shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6 sm:py-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-crop sm:text-[11px]">
                M-Pesa payment
              </span>
              <button
                onClick={() => {
                  setShowForm(false);
                  setStatus("idle");
                  setMessage("");
                }}
                className="font-mono text-[11px] text-parchment-dim transition-colors hover:text-crop"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="rounded-sm border border-line bg-soil px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                  Paybill
                </p>
                <p className="mt-1 font-display text-2xl text-parchment">6534864</p>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-parchment-dim">
                  Enter your phone number and amount below. Safaricom will send
                  an STK push to your phone, and you enter your PIN on the phone
                  itself to approve the payment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                    Phone number
                  </label>
                  <input
                    required
                    inputMode="numeric"
                    value={form.phoneNumber}
                    onChange={(event) =>
                      setForm({ ...form, phoneNumber: event.target.value })
                    }
                    className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 transition-colors focus:border-crop/60"
                    placeholder="2547XXXXXXXX"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                    Amount
                  </label>
                  <input
                    required
                    inputMode="numeric"
                    value={form.amount}
                    onChange={(event) =>
                      setForm({ ...form, amount: event.target.value })
                    }
                    className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 transition-colors focus:border-crop/60"
                    placeholder="500"
                  />
                </div>

                {message ? (
                  <p
                    className={`font-mono text-[11px] ${status === "error" ? "text-dust" : "text-crop"}`}
                  >
                    {message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending prompt..."
                    : "Send M-Pesa prompt"}
                </button>

                <p className="text-center font-mono text-[9px] text-parchment-dim/40">
                 In progress
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}