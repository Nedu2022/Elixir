"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/site";
import Icon from "./Icon";
import styles from "./SearchButton.module.css";

// Square search trigger that opens a full-screen project search.
export default function SearchButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const term = q.trim().toLowerCase();
  const results = term
    ? projects.filter((p) =>
        [p.title, p.location, p.summary, ...p.categories].some((f) => f.toLowerCase().includes(term)),
      )
    : projects;

  return (
    <>
      <button className={`sq ${className}`} onClick={() => setOpen(true)} aria-label="Search projects">
        <Icon name="search" />
      </button>
      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Search projects">
          <div className={styles.top}>
            <input
              ref={input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
            />
            <button className="sq sq-light" onClick={() => setOpen(false)} aria-label="Close search">
              <Icon name="close" />
            </button>
          </div>
          <div className={styles.results}>
            {results.length === 0 && <p className={styles.empty}>No projects match “{q}”.</p>}
            {results.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className={styles.result} onClick={() => setOpen(false)}>
                <span className={styles.thumb}>
                  <Image src={p.thumb} alt="" fill sizes="160px" />
                </span>
                <span className={styles.name}>{p.title}</span>
                <span className={styles.meta}>{p.location}</span>
                <span className={styles.no}>{String(i + 1).padStart(2, "0")}.</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
