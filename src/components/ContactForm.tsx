"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xeeypqee";

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-soil/85 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-[520px] rounded-sm border border-line-strong bg-soil-raised shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6 sm:py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-crop sm:text-[11px]">
            New Transmission
          </span>
          <button
            onClick={onClose}
            className="font-mono text-[11px] text-parchment-dim hover:text-crop transition-colors"
          >
            ✕ CLOSE
          </button>
        </div>

        {status === "sent" ? (
          <div className="px-5 py-16 text-center sm:px-6 sm:py-20">
            <span className="text-3xl text-crop">✓</span>
            <p className="mt-3 font-display text-xl text-parchment">
              Message sent
            </p>
            <p className="mt-2 font-body text-[14px] text-parchment-dim">
              Transmission received. I&rsquo;ll respond within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4 sm:px-6 sm:py-6">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 focus:border-crop/60 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 focus:border-crop/60 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                Subject
              </label>
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 focus:border-crop/60 transition-colors"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-sm border border-line bg-soil px-3 py-2 font-mono text-[13px] text-parchment outline-none placeholder:text-parchment-dim/30 focus:border-crop/60 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-[11px] text-dust">
                Something went wrong. Try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-sm bg-crop px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-soil transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send transmission"}
            </button>

            <p className="text-center font-mono text-[9px] text-parchment-dim/40">
              Messages are sent via Formspree. Your email stays private.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}