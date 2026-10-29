import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { PixelMark } from "./Logo";
import styles from "./ServiceRows.module.css";

// Alternating image / text rows with tags and an indicative price.
export default function ServiceRows() {
  return (
    <div className={styles.rows}>
      {services.map((s, i) => (
        <article key={s.no} className={`${styles.row} ${i % 2 ? styles.flip : ""}`}>
          <div className={`${styles.media} reveal-img`}>
            <Image src={s.image} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 45vw" />
            <span className={styles.no}>{s.no}.</span>
            <span className={styles.mark}>
              <PixelMark size={10} color="#fff" />
            </span>
          </div>
          <div className={styles.body}>
            <h3 className="h-lg reveal">{s.title}</h3>
            <p className="reveal">{s.text}</p>
            <ul className={`${styles.tags} reveal`}>
              {s.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Link href="/contact" className={`btn-block reveal ${styles.price}`}>
              Price {s.price}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
