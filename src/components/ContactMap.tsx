"use client";

import { useState } from "react";
import { location } from "@/lib/site";
import styles from "./ContactMap.module.css";

// OpenStreetMap embed with our own zoom buttons (the embed has no API, so zoom rebuilds the bbox).
export default function ContactMap() {
  const [zoom, setZoom] = useState(11);
  const { lat, lon } = location;
  const halfLon = (700 * 360) / (256 * 2 ** zoom);
  const halfLat = halfLon * Math.cos((lat * Math.PI) / 180) * 0.55;
  const bbox = [lon - halfLon, lat - halfLat, lon + halfLon, lat + halfLat].map((n) => n.toFixed(5)).join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat},${lon}`;

  return (
    <div className={styles.map}>
      <iframe key={zoom} title="Studio location" loading="lazy" src={src} />
      <div className={styles.zoom}>
        <button onClick={() => setZoom((z) => Math.min(17, z + 1))} aria-label="Zoom in">
          +
        </button>
        <button onClick={() => setZoom((z) => Math.max(4, z - 1))} aria-label="Zoom out">
          −
        </button>
      </div>
      <a
        className={styles.open}
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`}
        target="_blank"
        rel="noreferrer"
      >
        Open in maps
      </a>
    </div>
  );
}
