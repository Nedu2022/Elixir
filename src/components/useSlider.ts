"use client";

import { useCallback, useEffect, useState } from "react";

// Shared state for card carousels. `perView` maps min-widths to visible card counts.
export function useSlider(total: number, perView: [minWidth: number, count: number][]) {
  const [per, setPer] = useState(perView[perView.length - 1][1]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const match = perView.find(([w]) => window.innerWidth >= w);
      setPer(match ? match[1] : perView[perView.length - 1][1]);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // perView is a static literal at each call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pages = Math.max(1, total - per + 1);
  const current = Math.min(index, pages - 1);
  const go = useCallback((dir: number) => setIndex((i) => (Math.min(i, pages - 1) + dir + pages) % pages), [pages]);

  return {
    index: current,
    pages,
    per,
    go,
    setIndex,
    trackStyle: {
      "--per": per,
      transform: `translateX(calc(${current} * -100% / ${per}))`,
    } as React.CSSProperties,
  };
}
