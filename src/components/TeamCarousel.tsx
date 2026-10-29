"use client";

import Image from "next/image";
import { team } from "@/lib/site";
import Icon from "./Icon";
import { useSlider } from "./useSlider";
import styles from "./TeamCarousel.module.css";

export default function TeamCarousel() {
  const s = useSlider(team.length, [
    [1100, 3],
    [700, 2],
    [0, 1],
  ]);

  return (
    <div className={styles.wrap}>
      <div className={styles.viewport} data-cursor="drag">
        <div className={styles.track} style={s.trackStyle}>
          {team.map((m, i) => (
            <article key={m.name} className={styles.slot}>
              <div className={styles.card}>
                <div className={styles.photo}>
                  <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 700px) 100vw, 30vw" />
                  <span className="num-badge">{String(i + 1).padStart(2, "0")}.</span>
                  <p className={styles.bio}>{m.bio}</p>
                </div>
                <div className={styles.meta}>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={() => s.go(-1)} aria-label="Previous team members">
          <Icon name="left" />
        </button>
        <span className={styles.filler} />
        <div className={styles.dotsCell}>
          <div className="dots">
            {Array.from({ length: s.pages }, (_, i) => (
              <button key={i} aria-label={`Go to page ${i + 1}`} aria-current={i === s.index} onClick={() => s.setIndex(i)} />
            ))}
          </div>
        </div>
        <span className={styles.filler} />
        <button className={styles.arrow} onClick={() => s.go(1)} aria-label="Next team members">
          <Icon name="right" />
        </button>
      </div>
    </div>
  );
}
