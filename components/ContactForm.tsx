"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full min-h-11 rounded-lg border border-input bg-background px-4 py-2.5 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30 sm:text-sm"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <>
      {sent && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">
          <CheckCircle2 className="h-5 w-5" /> Merci ! Votre message a bien été envoyé.
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nom complet" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Téléphone" name="phone" />
          <Field label="Service" name="service" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full min-h-11 rounded-lg border border-input bg-background px-4 py-2.5 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30 sm:text-sm"
            placeholder="Décrivez votre besoin..."
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Envoyer la demande <Send className="h-4 w-4" />
        </button>
      </form>
    </>
  );
}
