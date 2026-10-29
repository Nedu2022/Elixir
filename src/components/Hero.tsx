"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/site";
import Icon from "./Icon";
import SearchButton from "./SearchButton";
import styles from "./Hero.module.css";

const DURATION = 7000;

type Slide = { eyebrow: string; title: string; text: string; image: string; href: string; cta: string };

export default function Hero({ projects, intro }: { projects: Project[]; intro: Omit<Slide, "image"> & { image?: string } }) {
  const slides: Slide[] = [
    { ...intro, image: intro.image ?? projects[0].cover },
    ...projects.map((p) => ({
      eyebrow: `${p.location} · ${p.year}`,
      title: p.title,
      text: p.summary,
      image: p.cover,
      href: `/projects/${p.slug}`,
      cta: "View project",
    })),
  ];
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState<"prev" | "next" | null>(null);
  const drag = useRef<number | null>(null);

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + total) % total), [total]);

  useEffect(() => {
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [index, go]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const peek = hover === "prev" ? slides[(index - 1 + total) % total] : hover === "next" ? slides[(index + 1) % total] : null;

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Featured work">
      <div
        className={styles.viewport}
        data-cursor="drag"
        onPointerDown={(e) => (drag.current = e.clientX)}
        onPointerUp={(e) => {
          if (drag.current === null) return;
          const dx = e.clientX - drag.current;
          if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
          drag.current = null;
        }}
      >
        <div className={styles.track} style={{ transform: `translateX(${-index * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={s.title} className={`${styles.slide} ${i === index ? styles.active : ""}`} aria-hidden={i !== index}>
              <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className={styles.img} draggable={false} />
              <div className={styles.shade} />
              <div className={styles.content}>
                <span className={styles.dash} />
                <p className="eyebrow">{s.eyebrow}</p>
                <h1 className={`h-xl ${styles.title}`}>{s.title}</h1>
                <p className={styles.text}>{s.text}</p>
                <Link href={s.href} className="btn" tabIndex={i === index ? 0 : -1} draggable={false}>
                  <span>{s.cta}</span>
                  <span>
                    <Icon name="arrow" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-lines" aria-hidden="true">
        <i style={{ left: "1%", top: 0, bottom: 0, width: 1 }} />
        <i style={{ left: "66.5%", top: 0, bottom: 0, width: 1 }} />
        <i style={{ left: "1%", right: "33.5%", top: "24%", height: 1 }} />
        <i style={{ left: "1%", right: "33.5%", top: "88%", height: 1 }} />
        <i style={{ left: "66.5%", right: 0, top: "56%", height: 1 }} />
      </div>

      <SearchButton className={styles.search} />

      <div className={styles.arrows}>
        {peek && (
          <div className={`${styles.peek} ${hover === "next" ? styles.peekNext : ""}`} aria-hidden="true">
            <Image src={peek.image} alt="" fill sizes="220px" />
          </div>
        )}
        <button
          className="sq"
          onClick={() => go(-1)}
          onMouseEnter={() => setHover("prev")}
          onMouseLeave={() => setHover(null)}
          aria-label="Previous slide"
        >
          <Icon name="left" />
        </button>
        <button
          className="sq"
          onClick={() => go(1)}
          onMouseEnter={() => setHover("next")}
          onMouseLeave={() => setHover(null)}
          aria-label="Next slide"
        >
          <Icon name="right" />
        </button>
      </div>

      <div className={styles.bar}>
        <div className={styles.barMain}>
          <div className="dots" style={{ color: "#fff" }}>
            {slides.map((s, i) => (
              <button key={s.title} aria-label={`Go to slide ${i + 1}`} aria-current={i === index} onClick={() => setIndex(i)} />
            ))}
          </div>
          <span className={styles.progress}>
            <span key={index} style={{ animationDuration: `${DURATION}ms` }} />
          </span>
        </div>
        <span className={`cell ${styles.count}`}>
          <span key={index}>{pad(index + 1)}</span>
        </span>
        <span className={`cell ${styles.count}`}>{pad(total)}</span>
        <a href="#explore" className={styles.explore}>
          <span>Start explore</span>
        </a>
      </div>
    </section>
  );
}
