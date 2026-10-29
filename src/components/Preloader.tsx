"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => setTimeout(() => setDone(true), 900);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setGone(true), 1200);
    return () => clearTimeout(t);
  }, [done]);

  if (gone) return null;

  return (
    <div className={`${styles.preloader} ${done ? styles.done : ""}`} aria-hidden="true">
      <div className={styles.inner}>
        <span className={styles.name}>
          {site.name.split("").map((ch, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties}>
              {ch}
            </span>
          ))}
        </span>
        <span className={styles.bar} />
      </div>
    </div>
  );
}
