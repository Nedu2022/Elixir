"use client";

import { useEffect, useState } from "react";
import { postTags, type Post } from "@/lib/site";
import Icon from "./Icon";
import { LatestPosts, PostCard, SidebarBlock, TagList } from "./NewsParts";
import styles from "./News.module.css";

// Post grid with a sidebar whose search box and tags filter the list in place.
export default function NewsBoard({ posts }: { posts: Post[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  // Accept ?q= and ?tag= links from post pages without making this route dynamic.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time read of the URL on mount */
    if (params.get("q")) setQ(params.get("q")!);
    if (params.get("tag")) setTag(params.get("tag"));
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const term = q.trim().toLowerCase();
  const shown = posts.filter(
    (p) =>
      (!tag || p.tags.includes(tag)) &&
      (!term || [p.title, p.excerpt, ...p.tags].some((f) => f.toLowerCase().includes(term))),
  );

  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        {(tag || term) && (
          <div className={styles.filterNote}>
            <span>
              {shown.length} {shown.length === 1 ? "post" : "posts"}
              {tag && ` tagged “${tag}”`}
              {term && ` matching “${q}”`}
            </span>
            <button
              onClick={() => {
                setQ("");
                setTag(null);
              }}
            >
              Clear <Icon name="close" size={16} />
            </button>
          </div>
        )}
        <div className={styles.grid}>
          {shown.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
          {shown.length === 0 && <p className={styles.empty}>No posts found.</p>}
        </div>
      </div>

      <aside className={styles.sidebar}>
        <form className={styles.search} role="search" onSubmit={(e) => e.preventDefault()}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search.." aria-label="Search posts" />
          <span aria-hidden="true">
            <Icon name="search" size={22} />
          </span>
        </form>
        <SidebarBlock title="Latest posts">
          <LatestPosts posts={posts.slice(0, 3)} />
        </SidebarBlock>
        <SidebarBlock title="Popular tags">
          <TagList tags={postTags} active={tag} onSelect={(t) => setTag((cur) => (cur === t ? null : t))} />
        </SidebarBlock>
      </aside>
    </div>
  );
}
