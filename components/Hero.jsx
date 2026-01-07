"use client";

import { Button } from "./ui/button";
import { ArrowDown, Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 relative overflow-hidden hero-pattern-bg"
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-grey-200/50 dark:bg-grey-50/90"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-primary font-bold text-primary dark:text-grey-50 mb-4 sm:mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-accent">Iris Tiffany Yu</span>
          </h1>
          <p className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-semibold font-primary text-secondary dark:text-grey-300 mb-3 sm:mb-3">
            Full Stack Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-primary dark:text-grey-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            I build beautiful, functional web applications with modern
            technologies. Passionate about creating exceptional user experiences.
          </p>

          <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <a href="/profile/Yu-CombinationResume.pdf" download>
            <Button
              className="w-full sm:w-auto bg-accent !text-grey-50 hover:text-grey-50 dark:text-grey-500 hover:bg-accent-hover font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              >
              Download CV
            </Button>
            </a>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="w-50% sm:w-auto border-primary dark:border-grey-50 text-primary dark:text-grey-50 bg-grey-50 hover:bg-grey-50 dark:hover:bg-primary hover:text-grey-50 dark:hover:!text-grey-50 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-colors"
              >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="https://github.com/yurizzs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors hover:scale-130"
              aria-label="GitHub"
            >
              <Github size={28} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/iris-tiffany-yu-315118357/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors hover:scale-130"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.facebook.com/iristiffany.yu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors hover:scale-130"
              aria-label="facebook"
            >
              <Facebook size={28} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={30} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

