"use client";

import { testimonials } from "@/lib/site";
import Icon from "./Icon";
import { useSlider } from "./useSlider";
import styles from "./TestimonialsCarousel.module.css";

export default function TestimonialsCarousel() {
  const s = useSlider(testimonials.length, [
    [1280, 3],
    [800, 2],
    [0, 1],
  ]);

  return (
    <div>
      <div className={styles.viewport} data-cursor="drag">
        <div className={styles.track} style={s.trackStyle}>
          {testimonials.map((t, i) => (
            <figure key={t.name} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <figcaption>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </figcaption>
                <span className={styles.no}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.foot}>
                <span>{t.date}</span>
                <span>Via {t.source}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.dotsCell}>
          <div className="dots">
            {Array.from({ length: s.pages }, (_, i) => (
              <button key={i} aria-label={`Go to page ${i + 1}`} aria-current={i === s.index} onClick={() => s.setIndex(i)} />
            ))}
          </div>
        </div>
        <div className={styles.arrows}>
          <button onClick={() => s.go(-1)} aria-label="Previous testimonials">
            <Icon name="left" />
          </button>
          <button onClick={() => s.go(1)} aria-label="Next testimonials">
            <Icon name="right" />
          </button>
        </div>
        <span className={styles.line} aria-hidden="true" />
      </div>
    </div>
  );
}
