import type { Metadata } from "next";
import NewsBoard from "@/components/NewsBoard";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import { pageImages, posts } from "@/lib/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "News",
  description: "Studio journal: ideas, projects and notes on architecture and interiors.",
};

export default function NewsPage() {
  return (
    <PageTransition>
      <PageBanner
        eyebrow="Our journal"
        title="Our latest news"
        text="Ideas, project notes and lessons from the studio."
        image={pageImages.intro}
      />
      <div id="content" className={styles.spacerRow} style={{ gridTemplateColumns: "66.5% 1fr" }} aria-hidden="true">
        <span />
        <span />
      </div>
      <NewsBoard posts={posts} />
    </PageTransition>
  );
}
