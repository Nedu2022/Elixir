"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

// Ring cursor that follows the pointer; over [data-cursor="drag"] it grows into a black disc with ↔.
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const el = ref.current!;
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.dataset.visible = "true";
      const t = e.target as Element | null;
      el.dataset.mode = t?.closest("[data-cursor='drag']")
        ? "drag"
        : t?.closest("a, button, input, textarea, select, label")
          ? "link"
          : "";
    };
    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    const leave = () => (el.dataset.visible = "false");

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={styles.cursor} aria-hidden="true">
      <span className={styles.ring}>
        <b>↔</b>
      </span>
    </div>
  );
}
