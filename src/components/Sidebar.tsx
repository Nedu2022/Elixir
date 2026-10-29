"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import Icon from "./Icon";
import styles from "./Sidebar.module.css";

// Fixed left rail: scroll-progress line, social links and a share button.
export default function Sidebar() {
  const barRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleY(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const share = async () => {
    const data = { title: document.title, url: location.href };
    if (navigator.share) {
      await navigator.share(data).catch(() => {});
    } else {
      await navigator.clipboard?.writeText(location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <aside className={styles.side} aria-label="Social links">
      <div className={styles.progress} aria-hidden="true">
        <span ref={barRef} />
      </div>
      <div className={styles.fill} />
      <div className={styles.socials}>
        {site.socials.map((s) => (
          <a key={s.short} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            {s.short}
          </a>
        ))}
      </div>
      <button className={styles.share} onClick={share} aria-label="Share this page">
        {copied ? <small>Copied</small> : <Icon name="share" size={30} />}
      </button>
    </aside>
  );
}
