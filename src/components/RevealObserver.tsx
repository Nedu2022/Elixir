"use client";

import { useEffect } from "react";

const SELECTOR = ".reveal, .reveal-img";

// Adds `is-visible` to any .reveal / .reveal-img element as it scrolls into view,
// including elements rendered later by client-side navigation.
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const observeAll = (root: ParentNode) =>
      root.querySelectorAll(`:is(${SELECTOR}):not(.is-visible)`).forEach((el) => io.observe(el));

    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(SELECTOR)) io.observe(node);
          observeAll(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
