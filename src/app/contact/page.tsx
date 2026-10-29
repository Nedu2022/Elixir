import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import { pageImages, site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contacts",
  description: `Get in touch with ${site.name} to discuss your project.`,
};

export default function ContactPage() {
  const tel = site.phone.replace(/[^+\d]/g, "");
  const cards = [
    { label: "Our mail", value: site.email, href: `mailto:${site.email}` },
    { label: "Our phone", value: site.phone, href: `tel:${tel}` },
    { label: "Our location", value: site.address.join(", ") },
  ];

  return (
    <PageTransition>
      <PageBanner
        eyebrow="Get in touch"
        title="Our contacts"
        text="Tell us about your site, your ambitions and your timeline. We reply to every enquiry within two working days."
        image={pageImages.contact}
      />
      <div id="content" className={styles.spacer} aria-hidden="true">
        <span />
        <span />
      </div>

      <section className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.cards}>
            {cards.map((c, i) => (
              <div key={c.label} className={`${styles.card} reveal`} style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}>
                <span className={styles.corner} aria-hidden="true" />
                <strong className={styles.no}>0{i + 1}.</strong>
                <span className={styles.label}>{c.label} :</span>
                {c.href ? (
                  <a href={c.href} className={styles.value}>
                    {c.value}
                  </a>
                ) : (
                  <span className={styles.value}>{c.value}</span>
                )}
              </div>
            ))}
          </div>
          <ContactMap />
          <div className={styles.socials}>
            <span />
            {site.socials.map((s) => (
              <a key={s.short} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
            <span />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.intro}>
            <h2 className="h-lg reveal">Get in touch with us</h2>
            <p className="reveal">
              Whether you have a site, a building to transform or just the beginnings of an idea, we&rsquo;d love to
              hear about it. Share a few details and we&rsquo;ll arrange a call or a studio visit. {site.hours}.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
