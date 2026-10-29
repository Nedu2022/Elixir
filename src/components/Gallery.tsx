"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const total = images.length;

  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={src + i}
            className={`${styles.item} reveal-img`}
            onClick={() => setOpen(i)}
            aria-label={`Open image ${i + 1} of ${total}`}
          >
            <Image
              src={src}
              alt={`${title}, image ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.img}
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className={styles.backdrop} onClick={() => setOpen(null)} aria-label="Close" />
          <div className={styles.stage} key={open}>
            <Image
              src={images[open]}
              alt={`${title}, image ${open + 1}`}
              fill
              sizes="90vw"
              className={styles.full}
            />
          </div>
          <div className={styles.bar}>
            <span>
              {String(open + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className={styles.nav}>
              <button onClick={() => step(-1)}>Prev</button>
              <button onClick={() => step(1)}>Next</button>
              <button onClick={() => setOpen(null)}>Close ✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
