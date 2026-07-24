"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactTrigger() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="inline-flex items-center justify-center gap-2 rounded-sm border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-parchment transition-colors hover:border-crop hover:text-crop"
      >
        Send message
      </button>
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>
  );
}