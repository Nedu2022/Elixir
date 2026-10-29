"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition, ViewTransition } from "react";
import { categories, type Category, type Project } from "@/lib/site";
import styles from "./PortfolioGrid.module.css";

// Column spans (out of 5) cycle so rows read 2-2-1, 2-1-2 like a mosaic.
const SPANS = [2, 2, 1, 2, 1, 2];

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [, startTransition] = useTransition();
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {shown.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={styles.item}
            style={{ gridColumn: `span ${SPANS[i % SPANS.length]}` }}
          >
            <ViewTransition name={`project-${p.slug}`} share="morph" default="none">
              <Image src={p.thumb} alt={p.title} fill sizes="(max-width: 700px) 100vw, 40vw" className={styles.img} />
            </ViewTransition>
            <span className={`tag ${styles.tag}`}>{p.categories.join("  ")}</span>
            <span className={styles.label}>
              <span>{p.title}</span>
              <b>{pad(projects.indexOf(p) + 1)}.</b>
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.bar}>
        <div className={styles.filters} role="tablist" aria-label="Filter projects">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={filter === c ? styles.on : ""}
              onClick={() => startTransition(() => setFilter(c))}
            >
              {c === "All" ? "All projects" : c}
            </button>
          ))}
        </div>
        <span className={styles.count} title="Shown">
          {pad(shown.length)}
        </span>
        <span className={styles.count} title="Total">
          {pad(projects.length)}
        </span>
      </div>
    </div>
  );
}
