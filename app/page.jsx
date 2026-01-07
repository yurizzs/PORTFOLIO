import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-grey-50 dark:bg-grey-900 transition-colors">
      {/* Navigation/Header */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-primary dark:bg-grey-100 text-grey-50 dark:text-grey-400 py-6 px-4 transition-colors">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">

          {/* Left: Name & Role */}
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Iris Tiffany Yu
            </p>
            <p className="text-xs sm:text-sm opacity-80">
              Bachelor of Science in Information Technology
            </p>
            <p className="text-xs opacity-60 mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Divider (mobile only) */}
          <div className="block sm:hidden h-px bg-grey-50/30 dark:bg-grey-300/30" />

          {/* Right: Contact Info */}
          <div className="text-xs sm:text-sm space-y-1">
            <p>
              <span className="ml-1">+63 945 674 5020</span>
            </p>
            <p>
              <span className="ml-1">Filamer Christian University</span>
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
