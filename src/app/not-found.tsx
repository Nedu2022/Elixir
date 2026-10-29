import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./inner.module.css";

export default function NotFound() {
  return (
    <section className={styles.head} style={{ minHeight: "70vh", justifyContent: "center", alignItems: "flex-start" }}>
      <span className="dash" />
      <p className="eyebrow">Error 404</p>
      <h1 className="h-xl">Page not found</h1>
      <p className="text">The page you are looking for has moved or no longer exists.</p>
      <Link href="/" className="btn">
        <span>Back home</span>
        <span>
          <Icon name="arrow" />
        </span>
      </Link>
    </section>
  );
}
