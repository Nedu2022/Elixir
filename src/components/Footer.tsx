"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "@/app/actions";
import { site } from "@/lib/site";
import Icon from "./Icon";
import { PixelMark } from "./Logo";
import styles from "./Footer.module.css";

const initial: SubscribeState = { ok: false, message: "" };

export default function Footer() {
  const [state, action, pending] = useActionState(subscribe, initial);
  const tel = site.phone.replace(/[^+\d]/g, "");

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.about}>
          <p>{site.footerBlurb}</p>
          <span className={styles.mark}>
            <PixelMark size={11} color="#555" />
          </span>
        </div>

        <div className={styles.contact}>
          <dl>
            <dt>Call:</dt>
            <dd>
              <a href={`tel:${tel}`}>{site.phone}</a>
            </dd>
            <dt>Write:</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
            <dt>Find us:</dt>
            <dd>{site.address.join(", ")}</dd>
          </dl>
          <div className={styles.socials}>
            {site.socials.map((s) => (
              <a key={s.short} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <form action={action} className={styles.news}>
          <h3>Subscribe to our newsletter</h3>
          <label className={styles.input}>
            <span className="sr">Email</span>
            <input type="email" name="email" placeholder="Your e-mail" required autoComplete="email" />
          </label>
          {state.message ? (
            <p className={styles.msg} role="status">
              {state.message}
            </p>
          ) : null}
          <button type="submit" className={styles.submit} disabled={pending}>
            <span>{pending ? "Sending…" : "Submit"}</span>
            <span>
              <Icon name="arrow" />
            </span>
          </button>
        </form>
      </div>

      <div className={styles.bottom}>
        <p>
          © {site.name} — All rights reserved.
        </p>
        <button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <Icon name="up" size={26} />
        </button>
        <div className={styles.fillCell} />
      </div>
    </footer>
  );
}
