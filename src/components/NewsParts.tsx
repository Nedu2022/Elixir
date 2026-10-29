import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/site";
import Icon from "./Icon";
import styles from "./News.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Formatted by hand so server and browser render identical text.
function longDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d} ${MONTHS[+m - 1]} ${y}`;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className={styles.cardCell}>
      <div className={styles.card}>
        <Link href={`/news/${post.slug}`} className={styles.cardImg} tabIndex={-1}>
          <Image src={post.image} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
        </Link>
        <div className={styles.cardBody}>
          <h2>
            <Link href={`/news/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className={styles.meta}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </p>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
        <Link href={`/news/${post.slug}`} className={styles.more}>
          <span>Read more</span>
          <span>
            <Icon name="right" />
          </span>
        </Link>
      </div>
    </article>
  );
}

export function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.block}>
      <h3 className={styles.blockTitle}>
        {title}
        <span />
      </h3>
      <div className={styles.blockBody}>{children}</div>
    </section>
  );
}

export function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className={styles.latest}>
      {posts.map((p) => (
        <li key={p.slug}>
          <Link href={`/news/${p.slug}`}>
            <span className={styles.latestImg}>
              <Image src={p.image} alt="" fill sizes="150px" />
            </span>
            <span>
              <strong>{p.title}</strong>
              <time dateTime={p.date}>{longDate(p.date)}</time>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function TagList({
  tags,
  active,
  onSelect,
}: {
  tags: string[];
  active?: string | null;
  onSelect?: (tag: string) => void;
}) {
  return (
    <div className={styles.tags}>
      {tags.map((t) =>
        onSelect ? (
          <button key={t} className={active === t ? styles.tagOn : ""} aria-pressed={active === t} onClick={() => onSelect(t)}>
            {t}
          </button>
        ) : (
          <Link key={t} href={`/news?tag=${encodeURIComponent(t)}`}>
            {t}
          </Link>
        ),
      )}
    </div>
  );
}
