import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import { PixelMark } from "@/components/Logo";
import PageTransition from "@/components/PageTransition";
import Partners from "@/components/Partners";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { heroSlides, offerCategories, pageImages, projects, services, site } from "@/lib/site";
import styles from "./home.module.css";

export default function Home() {
  return (
    <PageTransition>
      <Hero
        projects={heroSlides.slice(1)}
        intro={{
          eyebrow: "Welcome to our studio",
          title: `${site.name} architecture & design studio`,
          text: site.description,
          image: heroSlides[0].cover,
          href: "/projects",
          cta: "Our portfolio",
        }}
      />

      {/* Studio intro */}
      <section id="explore" className={styles.intro}>
        <div className={styles.introText}>
          <span className="dash reveal" />
          <p className="eyebrow reveal">Who we are</p>
          <h2 className="h-lg reveal">Welcome to our architecture creative studio</h2>
          <p className="text reveal">
            For nearly two decades we have designed homes, workplaces and public buildings guided by light,
            proportion and honest materials. Every project is shaped by close collaboration with the people who will
            live and work in it, from the first sketch to the final detail on site.
          </p>
          <Link href="/about" className="btn reveal">
            <span>Read more about us</span>
            <span>
              <Icon name="arrow" />
            </span>
          </Link>
        </div>
        <div className={styles.introTiles}>
          {offerCategories.map((c, i) => (
            <Link key={c.title} href="/services" className={styles.tile}>
              <span className={`${styles.tileImg} reveal-img`} style={{ "--delay": `${i * 0.15}s` } as React.CSSProperties}>
                <Image src={c.image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" />
                <span className={styles.tileMark}>
                  <PixelMark size={11} color="#fff" />
                </span>
              </span>
              <span className={styles.tileLabel}>{c.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <div className={styles.spacerRow} aria-hidden="true">
        <span />
        <span />
      </div>

      {/* Latest projects */}
      <section className={styles.latest}>
        <div className={styles.latestHead}>
          <div className={styles.latestText}>
            <span className="dash reveal" />
            <h2 className="h-lg reveal">Our latest projects</h2>
            <p className="text text-light reveal">
              A selection of recent homes, workplaces and public buildings, each shaped by its site and the people who
              use it.
            </p>
          </div>
          <span className={styles.latestCell} />
          <span className={styles.latestCell} />
        </div>
        <ProjectsCarousel projects={projects} />
      </section>

      {/* What we offer */}
      <section className={styles.offer}>
        <div className={styles.offerHead}>
          <div className={styles.offerText}>
            <span className="dash reveal" />
            <h2 className="h-lg reveal">What we offer</h2>
            <p className="reveal">
              From a single room to a new building, we offer a complete design service: briefing, concept, planning,
              technical design and site supervision, with interiors and furniture designed alongside the architecture.
            </p>
          </div>
          <div className={`${styles.offerImg} reveal-img`}>
            <Image src={pageImages.aboutSide} alt="Recent residential project" fill sizes="(max-width: 1024px) 100vw, 33vw" />
          </div>
        </div>
        <div className={styles.cards}>
          {services.slice(0, 3).map((s, i) => (
            <article key={s.no} className={`${styles.card} reveal`} style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}>
              <span className="num-badge">{s.no}.</span>
              <span className={styles.icon}>
                <Icon name={s.icon} size={28} />
              </span>
              <h3 className="h-md">{s.title}</h3>
              <p>{s.text}</p>
              <ul className={styles.tags}>
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={styles.orderRow}>
          <Link href="/contact" className="btn-block">
            Order your project
          </Link>
          <span />
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.clients}>
        <div className={styles.banner}>
          <Image src={pageImages.cta} alt="" fill sizes="100vw" className={styles.bannerImg} />
          <div className="grid-lines" aria-hidden="true">
            <i style={{ left: "66.5%", top: 0, bottom: 0, width: 1 }} />
            <i style={{ left: "83%", top: 0, bottom: "20%", width: 1 }} />
            <i style={{ left: 0, right: 0, top: "80%", height: 1 }} />
          </div>
          <div className={styles.bannerText}>
            <p className="eyebrow">Our partners</p>
            <h2 className="h-lg">Clients and testimonials</h2>
            <p>What the people we design for say about working with us.</p>
          </div>
        </div>
        <div className={styles.testimonials}>
          <TestimonialsCarousel />
        </div>
        <Partners />
      </section>
    </PageTransition>
  );
}
