import Image from "next/image";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { pageContent } from "./content/page-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <Header />
      <header className="border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-xs font-semibold text-blue-400">
              <Image src="/logo.png" alt="Logo" width={28} height={28} />
            </div>
          </div>
        </div>
      </header>

      {/* All sections now use modular components with content from page-content.ts */}
      <HeroSection {...pageContent.hero} />
      <ServicesSection {...pageContent.services} />
      <ProjectsSection {...pageContent.projects} />
      <ProcessSection {...pageContent.process} />
      <ContactSection {...pageContent.contact} />
      <Footer {...pageContent.footer} />
    </main>
  );
}
