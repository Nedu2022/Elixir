"use client";

import { partners } from "@/lib/site";
import Icon from "./Icon";
import { useSlider } from "./useSlider";
import styles from "./Partners.module.css";

// Simple geometric marks so the strip reads as logos until real ones are supplied.
const marks = [
  <path key="0" d="M20 4 34 12v16L20 36 6 28V12z M14 30V16l6-4 6 4v14" />,
  <path key="1" d="M6 34V6l14 16L34 6v28" />,
  <path key="2" d="M6 20a14 14 0 1 0 28 0 14 14 0 1 0-28 0M20 6v28M6 20h28" />,
  <path key="3" d="M6 6h28v28H6zM6 6l28 28" />,
  <path key="4" d="M20 4 36 34H4z M12 26h16" />,
  <path key="5" d="M8 8h10v10H8zM22 8h10v10H22zM8 22h10v10H8zM22 22h10v10H22z" />,
];

export default function Partners() {
  const s = useSlider(partners.length, [
    [1100, 4],
    [700, 3],
    [0, 2],
  ]);

  return (
    <div className={styles.strip}>
      <div className={styles.viewport}>
        <div className={styles.track} style={s.trackStyle}>
          {partners.map((name, i) => (
            <div key={name} className={styles.logo}>
              <svg viewBox="0 0 40 40" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                {marks[i % marks.length]}
              </svg>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="sq sq-light" onClick={() => s.go(-1)} aria-label="Previous partners">
        <Icon name="left" />
      </button>
      <button className="sq sq-light" onClick={() => s.go(1)} aria-label="Next partners">
        <Icon name="right" />
      </button>
    </div>
  );
}
