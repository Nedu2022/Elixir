import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import ImageSlider from "@/components/ImageSlider";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import ServiceRows from "@/components/ServiceRows";
import TeamCarousel from "@/components/TeamCarousel";
import { pageImages, projects, site } from "@/lib/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}: our story, process, services and people.`,
};

const steps = ["01. Idea and start", "02. Design and create", "03. Build and finish"];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageBanner
        eyebrow="Who we are"
        title="About our studio"
        text="A small, focused team of architects and interior designers working from first sketch to final detail."
        image={pageImages.about}
      />

      <section id="content" className={styles.split}>
        <div className={styles.splitText}>
          <h2 className="h-lg reveal">Welcome to our architecture creative studio</h2>
          <p className="reveal">
            {site.name} was founded on a simple belief: that good buildings and interiors make everyday life better.
            We are architects, interior designers and makers who work closely together, so that structure, space,
            light and furniture are designed as one idea rather than in separate stages.
          </p>
          <p className="reveal">
            We take on a limited number of projects each year so that each one receives the attention it deserves. Our
            work is rooted in its context, generous with light and honest in its materials, and it is built to last.
          </p>
          <span className={styles.rule} />
          <h3 className="h-md reveal">Working process</h3>
          <ol className={`${styles.steps} reveal`}>
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <span className={styles.rule} />
          <Link href="/projects" className="btn reveal">
            <span>View our projects</span>
            <span>
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
        <ImageSlider images={[projects[6].cover, projects[0].cover, projects[4].cover]} alt="Studio project" />
      </section>
      <div className={styles.spacerRow} aria-hidden="true">
        <span />
        <span />
      </div>

      <section>
        <div className={styles.head}>
          <span className="dash reveal" />
          <h2 className="h-lg reveal">Our services</h2>
          <p className="text reveal">
            Everything you need to take a project from idea to completion, with indicative fee ranges to help you plan.
          </p>
        </div>
        <ServiceRows />
      </section>

      <section>
        <div className={styles.head}>
          <span className="dash reveal" />
          <h2 className="h-lg reveal">Our team</h2>
        </div>
        <TeamCarousel />
      </section>
    </PageTransition>
  );
}
