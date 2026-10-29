import { site } from "@/lib/site";

// Wordmark set in the display face with a wide tracking, plus a small pixel monogram.
export function Wordmark() {
  return (
    <span style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "0.14em", textTransform: "uppercase" }}>
      {site.name}
    </span>
  );
}

// 5×5 pixel monogram of the first letter of the brand name, used as a decorative mark.
const E = ["11111", "10000", "11110", "10000", "11111"];

export function PixelMark({ size = 10, color = "currentColor" }: { size?: number; color?: string }) {
  const gap = Math.round(size * 0.3);
  return (
    <svg
      width={5 * size + 4 * gap}
      height={5 * size + 4 * gap}
      viewBox={`0 0 ${5 * size + 4 * gap} ${5 * size + 4 * gap}`}
      aria-hidden="true"
    >
      {E.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === "1" ? (
            <rect key={`${x}-${y}`} x={x * (size + gap)} y={y * (size + gap)} width={size} height={size} fill={color} />
          ) : null,
        ),
      )}
    </svg>
  );
}
