"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Wordmark } from "./Logo";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the menu once navigation lands on a new route.
  if (open && pathname !== openedAt) {
    setOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const tel = site.phone.replace(/[^+\d]/g, "");

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label={`${site.name} home`}>
          <Wordmark />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? styles.active : ""}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.spacer} />

        <div className={styles.contact}>
          <span>Call:</span>
          <a href={`tel:${tel}`}>{site.phone}</a>
          <span>Write:</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => {
            setOpenedAt(pathname);
            setOpen((o) => !o);
          }}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <i />
          <i />
        </button>
      </header>

      <div id="site-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} inert={!open}>
        <nav className={styles.menuNav} aria-label="Menu">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? styles.menuActive : ""}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              <small>0{i + 1}.</small>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.menuInfo}>
          <p>
            <span>Call:</span> <a href={`tel:${tel}`}>{site.phone}</a>
          </p>
          <p>
            <span>Write:</span> <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <span>Find us:</span> {site.address.join(", ")}
          </p>
          <div className={styles.menuSocials}>
            {site.socials.map((s) => (
              <a key={s.short} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
