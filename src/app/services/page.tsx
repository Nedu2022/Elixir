import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import ServiceRows from "@/components/ServiceRows";
import { pageImages, process } from "@/lib/site";
import styles from "../inner.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "Architecture, interior design, renovation and furniture services.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageBanner
        eyebrow="What we do"
        title="Services & expertise"
        text="From feasibility to the final fitting, one team responsible for the whole project."
        image={pageImages.services}
      />
      <section id="content">
        <ServiceRows />
      </section>

      <section className={styles.split}>
        <div className={styles.splitText}>
          <span className="dash reveal" />
          <h2 className="h-lg reveal">How we work</h2>
          <ol className={`${styles.steps} reveal`}>
            {process.map((s) => (
              <li key={s.no}>
                {s.no}. {s.title}
              </li>
            ))}
          </ol>
          <p className="reveal">
            {process.map((s) => s.text).join(" ")}
          </p>
          <Link href="/contact" className="btn reveal">
            <span>Discuss your project</span>
            <span>
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
        <div className="reveal-img" style={{ position: "relative", minHeight: 420 }}>
          <Image src={pageImages.aboutSide} alt="" fill sizes="(max-width: 1024px) 100vw, 34vw" style={{ objectFit: "cover" }} />
        </div>
      </section>
    </PageTransition>
  );
}
