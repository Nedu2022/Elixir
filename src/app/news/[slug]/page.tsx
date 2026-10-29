import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LatestPosts, SidebarBlock, TagList } from "@/components/NewsParts";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import { formatDate, getPost, postTags, posts } from "@/lib/site";
import news from "@/components/News.module.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const i = posts.indexOf(post);
  const prev = posts[i - 1];
  const next = posts[i + 1];

  return (
    <PageTransition>
      <PageBanner eyebrow="Our journal" title={post.title} text={post.excerpt} image={post.image} />
      <div id="content" className={news.layout}>
        <div className={news.main}>
          <article className={news.article}>
            <div className={`${news.articleImg} reveal-img`}>
              <Image src={post.image} alt="" fill sizes="(max-width: 1100px) 100vw, 60vw" />
            </div>
            <p className={news.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
            <div className={news.prose}>
              {post.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </article>
          <nav className={news.postNav} aria-label="More posts">
            {prev ? (
              <Link href={`/news/${prev.slug}`}>
                <small>Newer post</small>
                <strong>{prev.title}</strong>
              </Link>
            ) : (
              <Link href="/news">
                <small>Journal</small>
                <strong>All posts</strong>
              </Link>
            )}
            {next ? (
              <Link href={`/news/${next.slug}`}>
                <small>Older post</small>
                <strong>{next.title}</strong>
              </Link>
            ) : (
              <Link href="/news">
                <small>Journal</small>
                <strong>All posts</strong>
              </Link>
            )}
          </nav>
        </div>
        <aside className={news.sidebar}>
          <form className={news.search} role="search" action="/news">
            <input name="q" placeholder="Search.." aria-label="Search posts" />
            <button type="submit" aria-label="Search">
              <Icon name="search" size={22} />
            </button>
          </form>
          <SidebarBlock title="Latest posts">
            <LatestPosts posts={posts.filter((p) => p.slug !== post.slug).slice(0, 3)} />
          </SidebarBlock>
          <SidebarBlock title="Popular tags">
            <TagList tags={postTags} />
          </SidebarBlock>
        </aside>
      </div>
    </PageTransition>
  );
}
