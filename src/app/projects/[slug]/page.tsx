import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import PageTransition from "@/components/PageTransition";
import { getNextProject, getProject, projects } from "@/lib/site";
import banner from "@/components/PageBanner.module.css";
import styles from "../../inner.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  const facts = [
    ["Client", project.client],
    ["Location", project.location],
    ["Year", project.year],
    ["Area", project.area],
    ["Category", project.categories.join(", ")],
  ];

  return (
    <PageTransition>
      <section className={banner.banner}>
        <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
          <Image src={project.cover} alt={project.title} fill priority sizes="100vw" className={banner.img} />
        </ViewTransition>
        <div className="grid-lines" aria-hidden="true">
          <i style={{ left: "1%", top: 0, bottom: 0, width: 1 }} />
          <i style={{ left: "66.5%", top: 0, bottom: 0, width: 1 }} />
          <i style={{ left: 0, right: 0, top: "16%", height: 1 }} />
          <i style={{ left: 0, right: 0, top: "84%", height: 1 }} />
        </div>
        <div className={banner.content}>
          <Link href="/projects" className="eyebrow">
            ← Portfolio
          </Link>
          <h1 className="h-xl">{project.title}</h1>
          <p className={banner.text}>{project.subtitle}</p>
        </div>
        <a href="#content" className={banner.explore}>
          <span>Start explore</span>
        </a>
      </section>

      <dl id="content" className={styles.facts}>
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <section className={styles.head}>
        <span className="dash reveal" />
        <h2 className="h-lg reveal">{project.summary}</h2>
        {project.body.map((para) => (
          <p key={para.slice(0, 24)} className="text reveal">
            {para}
          </p>
        ))}
      </section>

      <section className={styles.gallery}>
        <Gallery images={project.gallery} title={project.title} />
      </section>

      <Link href={`/projects/${next.slug}`} className={styles.next}>
        <Image src={next.cover} alt="" fill sizes="100vw" />
        <div className={styles.nextText}>
          <p className="eyebrow">Next project</p>
          <p className="h-lg">{next.title}</p>
        </div>
        <span className={styles.nextCta}>
          <span>View project</span>
          <span>
            <Icon name="arrow" />
          </span>
        </span>
      </Link>
    </PageTransition>
  );
}
