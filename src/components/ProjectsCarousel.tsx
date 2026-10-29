"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import Icon from "./Icon";
import { useSlider } from "./useSlider";
import styles from "./ProjectsCarousel.module.css";

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const s = useSlider(projects.length, [
    [1024, 2],
    [0, 1],
  ]);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className={styles.wrap}>
      <div className={styles.viewport} data-cursor="drag">
        <div className={styles.track} style={s.trackStyle}>
          {projects.map((p, i) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className={styles.card}>
              <Image src={p.thumb} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className={styles.img} />
              <span className={styles.shade} />
              <span className={`tag ${styles.tag}`}>{p.categories[0]}</span>
              <span className={styles.info}>
                <span className={styles.title}>{p.title}</span>
                <span className={styles.summary}>{p.subtitle}</span>
              </span>
              <span className={styles.no}>{pad(i + 1)}.</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className="sq" onClick={() => s.go(-1)} aria-label="Previous projects">
          <Icon name="left" />
        </button>
        <button className="sq" onClick={() => s.go(1)} aria-label="Next projects">
          <Icon name="right" />
        </button>
        <div className={styles.dotsCell}>
          <div className="dots" style={{ color: "#fff" }}>
            {Array.from({ length: s.pages }, (_, i) => (
              <button key={i} aria-label={`Go to page ${i + 1}`} aria-current={i === s.index} onClick={() => s.setIndex(i)} />
            ))}
          </div>
        </div>
        <span className={`cell ${styles.num}`}>{pad(s.index + 1)}</span>
        <span className={`cell ${styles.num}`}>{pad(s.pages)}</span>
        <Link href="/projects" className={`btn-block ${styles.all}`}>
          View all projects
        </Link>
      </div>
    </div>
  );
}
