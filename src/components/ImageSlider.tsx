"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";
import styles from "./ImageSlider.module.css";

export default function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((n) => (n + d + images.length) % images.length);

  return (
    <div className={styles.slider} data-cursor="drag">
      {images.map((src, n) => (
        <div key={src + n} className={`${styles.slide} ${n === i ? styles.on : ""}`} aria-hidden={n !== i}>
          <Image src={src} alt={`${alt} ${n + 1}`} fill sizes="(max-width: 1024px) 100vw, 34vw" />
        </div>
      ))}
      <button className={`sq ${styles.prev}`} onClick={() => go(-1)} aria-label="Previous image">
        <Icon name="left" />
      </button>
      <button className={`sq ${styles.next}`} onClick={() => go(1)} aria-label="Next image">
        <Icon name="right" />
      </button>
      <div className={`dots ${styles.dots}`} style={{ color: "#fff" }}>
        {images.map((src, n) => (
          <button key={src + n} aria-label={`Image ${n + 1}`} aria-current={n === i} onClick={() => setI(n)} />
        ))}
      </div>
    </div>
  );
}
