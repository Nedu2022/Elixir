"use server";

export type ContactState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: bots fill hidden fields, people don't.
  if (formData.get("company_website")) return { ok: true, message: "Thank you." };

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "A few more words about your project, please.";
  if (Object.keys(errors).length) return { ok: false, message: "Please check the highlighted fields.", errors };

  // TODO: deliver the enquiry (e.g. Resend, Postmark, SMTP or a CRM webhook).
  console.log("New enquiry", {
    name,
    email,
    phone: formData.get("phone"),
    message,
  });

  return { ok: true, message: `Thank you, ${name.split(" ")[0]}. We'll be in touch within two working days.` };
}
