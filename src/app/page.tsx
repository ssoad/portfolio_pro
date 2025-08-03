import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import BottomNavigation from "@/components/BottomNavigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <BottomNavigation />
    </div>
  );
}
