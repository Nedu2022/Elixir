import type { Metadata } from "next";
import { Michroma, Saira } from "next/font/google";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import RevealObserver from "@/components/RevealObserver";
import Sidebar from "@/components/Sidebar";
import { site } from "@/lib/site";
import "./globals.css";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${michroma.variable} ${saira.variable}`}>
      <body>
        <Preloader />
        <RevealObserver />
        <Cursor />
        <Header />
        <Sidebar />
        <div className="page">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
