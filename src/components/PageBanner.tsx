import Image from "next/image";
import styles from "./PageBanner.module.css";

export default function PageBanner({
  eyebrow,
  title,
  text,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={styles.banner}>
      <Image src={image} alt="" fill priority sizes="100vw" className={styles.img} />
      <span className={styles.glass} aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true">
        <i style={{ left: "1%", top: 0, bottom: 0, width: 1 }} />
        <i style={{ left: "66.5%", top: 0, bottom: 0, width: 1 }} />
        <i style={{ left: "83.2%", top: "16%", bottom: "16%", width: 1 }} />
        <i style={{ left: 0, right: 0, top: "16%", height: 1 }} />
        <i style={{ left: 0, right: 0, top: "84%", height: 1 }} />
      </div>
      <span className={styles.topCell} aria-hidden="true" />
      <div className={styles.content}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-xl">{title}</h1>
        {text && <p className={styles.text}>{text}</p>}
        {children}
      </div>
      <a href="#content" className={styles.explore}>
        <span>Start explore</span>
        <span className={styles.mouse} aria-hidden="true">
          <i />
        </span>
      </a>
    </section>
  );
}
