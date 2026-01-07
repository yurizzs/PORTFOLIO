import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-primary dark:bg-grey-100 text-grey-50 dark:text-grey-300 py-6 sm:py-6 text-center transition-colors">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Iris Tiffany Yu. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
