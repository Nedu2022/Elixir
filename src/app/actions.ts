"use server";

export type SubscribeState = { ok: boolean; message: string };

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: "Please enter a valid email." };

  // TODO: add the address to your mailing list (Mailchimp, Resend Audiences, ConvertKit…).
  console.log("Newsletter signup", email);
  return { ok: true, message: "Thanks — you're on the list." };
}
