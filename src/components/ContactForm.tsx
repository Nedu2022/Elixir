"use client";

import { useActionState } from "react";
import { sendEnquiry, type ContactState } from "@/app/contact/actions";
import styles from "./ContactForm.module.css";

const initial: ContactState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initial);

  if (state.ok) {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>Message received</p>
        <p>{state.message}</p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={action} className={styles.form} noValidate>
      <Field name="name" placeholder="Your Name *" error={err.name} autoComplete="name" />
      <Field name="email" type="email" placeholder="Your Email *" error={err.email} autoComplete="email" />
      <Field name="phone" type="tel" placeholder="Your Phone" autoComplete="tel" />
      <label className={`${styles.field} ${err.message ? styles.invalid : ""}`}>
        <span className="sr">Your message</span>
        <textarea name="message" rows={6} placeholder="Your Message *" aria-invalid={!!err.message} />
        {err.message && <em>{err.message}</em>}
      </label>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
      {state.message && <p className={styles.formError}>{state.message}</p>}
      <button type="submit" className={`btn-block ${styles.send}`} disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  error,
  autoComplete,
}: {
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <label className={`${styles.field} ${error ? styles.invalid : ""}`}>
      <span className="sr">{placeholder.replace(" *", "")}</span>
      <input type={type} name={name} placeholder={placeholder} autoComplete={autoComplete} aria-invalid={!!error} />
      {error && <em>{error}</em>}
    </label>
  );
}
