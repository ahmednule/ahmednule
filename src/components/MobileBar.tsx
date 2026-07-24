"use client";

import { useState, useEffect } from "react";

const NAV = [
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#service", label: "Service" },
  { href: "#about", label: "About" },
  { href: "#creds", label: "Creds" },
  { href: "#contact", label: "Contact" },
];

const READING = [
  { label: "Station", value: "Thika, KE" },
  { label: "Coordinates", value: "01.03\u00b0S 37.07\u00b0E" },
  { label: "Role", value: "Founder, Stable Stack" },
  { label: "Study", value: "BSCCS \u00b7 MKU '26" },
  { label: "Systems logged", value: "6 entries" },
  { label: "Assignments", value: "4 postings" },
  { label: "Credentials", value: "5 on file" },
];

export default function MobileBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between border-b border-line bg-soil/95 px-4 py-3 backdrop-blur">
        <a href="#top" className="font-display text-sm tracking-tight">
          Ahmed Nule
        </a>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-8 h-8 rounded-sm border border-line hover:border-crop/40 transition-colors"
          aria-label="Open menu"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-parchment-dim" />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-soil/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-screen w-[260px] border-r border-line bg-soil px-6 py-8 overflow-y-auto transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display text-base tracking-tight">
            Ahmed Nule
          </span>
          <button
            onClick={() => setOpen(false)}
            className="font-mono text-[11px] text-parchment-dim hover:text-crop transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2 mb-8">
          {NAV.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-parchment-dim hover:text-crop transition-colors text-left py-1.5"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-1 border-t border-line pt-5">
          {READING.map((r) => (
            <div key={r.label} className="flex flex-col gap-0.5 py-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-parchment-dim">
                {r.label}
              </span>
              <span className="font-mono text-[13px] text-parchment">
                {r.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-line mt-5 pt-5">
          <span className="status-dot" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-parchment-dim">
            Open to new builds
          </span>
        </div>
      </div>
    </>
  );
}