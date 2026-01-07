"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

function EducationItem({ edu, index, onVisible, resetKey, scrollRoot }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(index === 0);
    if (index === 0) onVisible(0);
  }, [resetKey]);

  useEffect(() => {
    if (!scrollRoot?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onVisible(index);
        }
      },
      {
        root: scrollRoot.current, // ✅ OBSERVE DIALOG SCROLL
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px", // ✅ MOBILE FRIENDLY
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index, onVisible, scrollRoot]);

  return (
    <div ref={ref} className="relative flex gap-6">
      {/* DOT */}
      <div className="relative z-10">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-700
            ${visible ? "bg-accent scale-110" : "bg-grey-300"}
          `}
        >
          <GraduationCap
            className={`w-4 h-4 transition-colors duration-700
              ${visible ? "text-white" : "text-grey-500"}
            `}
          />
        </div>
      </div>

      {/* CARD */}
      <div
        className={`flex-1 bg-white dark:bg-grey-200 p-5 rounded-lg border
          border-grey-200 dark:border-grey-300 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h4 className="text-lg sm:text-xl font-semibold text-primary">
          {edu.degree}
        </h4>

        <p className="text-secondary mt-1">{edu.institution}</p>

        <div className="flex flex-wrap gap-4 text-sm text-secondary mt-2">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {edu.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {edu.period}
          </span>
        </div>

        {edu.achievements.length > 0 && (
          <ul className="mt-4 space-y-1">
            {edu.achievements.map((ach, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Award size={14} className="text-accent mt-1" />
                {ach}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dialogScrollRef = useRef(null);

  useEffect(() => {
    if (isEducationOpen) {
      setActiveIndex(-1);
    }
  }, [isEducationOpen]);

  const educationHistory = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Filamer Christian University",
      location: "Roxas City, Philippines",
      period: "2023 - 2027",
      achievements: [
        "Dean's List - 1 semester",
      ],
    },
    {
      degree: "Senior High School Graduate",
      institution: "Capiz National High School",
      location: "Roxas City, Philippines",
      period: "2021 - 2023",
      achievements: [
        "With Honor",
        "Capstone Project Awardee",
      ],
    },
    {
      degree: "High School Graduate",
      institution: "Capiz National High School",
      location: "Roxas City, Philippines",
      period: "2017 - 2021",
      achievements: [
        "With Honor",
      ],
    },
    {
      degree: "Elementary Graduate",
      institution: "Adlawan Elementary School",
      location: "Roxas City, Philippines",
      period: "2011 - 2017",
      achievements: [
        "With Honor",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-grey-50 dark:bg-grey-50 transition-colors"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-primary dark:text-grey-50 mb-3 sm:mb-4 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Side - Description (Desktop) / Bottom (Mobile) */}
          <div className="order-3 md:order-1 flex flex-col justify-start">
            <p className="text-base sm:text-lg text-secondary dark:text-grey-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              beautiful and functional web applications. With knowledge in modern
              frameworks, and I bring ideas to
              life through code.
            </p>
            <p className="text-base sm:text-lg text-secondary dark:text-grey-300 mb-4 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
            <p className="text-base sm:text-lg text-secondary dark:text-grey-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating
              user-centered designs that make a difference.
            </p>
          </div>

          {/* Right Side - Profile Photo + Education (Desktop) / Top (Mobile) */}
          <div className="order-1 md:order-2 space-y-6 sm:space-y-2">
            {/* Profile Picture with Animated Circle */}
            <div className="flex justify-center md:justify-center">
              <div className="relative flex justify-center w-48 h-48 sm:w-72 sm:h-72 md:w-72 md:h-60">
                <div className="animated-circle-glow"></div>
                <div className="animated-circle">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="absolute inset-0 w-full h-full bg-grey-200 dark:bg-grey-300 flex items-center justify-center text-secondary dark:text-grey-400 text-sm rounded-full z-10"
                    style={{ display: "none" }}
                  >
                    <img src="/profile/profile.jpg" alt="formal picture" />
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-primary/5 dark:bg-grey-100/10 p-6 sm:p-6 rounded-lg border border-grey-50 dark:border-grey-300 transition-colors">
              <h3 className="text-xl sm:text-2xl font-primary font-semibold text-primary dark:text-grey-50 mb-4 sm:mb-4">
                Education Background
              </h3>
              {/* <ul className="space-y-3 sm:space-y-4"> */}

                {/* Education */}
                <div className="bg-primary/5 dark:bg-grey-50/10 p-2 rounded-lg">
                  <Dialog open={isEducationOpen} onOpenChange={setIsEducationOpen}>
                    <DialogTrigger asChild>
                      <button className="text-left text-secondary hover:text-accent">
                        <strong>Education:</strong> Degree / Background <br />
                        <span className="text-xs text-accent">(Click to view)</span>
                      </button>
                    </DialogTrigger>

                    <DialogContent ref={dialogScrollRef} className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-2xl">
                          <GraduationCap className="text-accent" />
                          Education Roadmap
                        </DialogTitle>
                        <DialogDescription>
                          My educational background and achievements
                        </DialogDescription>
                      </DialogHeader>

                      {/* ROADMAP */}
                      <div className="relative mt-8">
                        {/* BASE LINE */}
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-grey-300 overflow-hidden">
                          <div
                            className="absolute left-0 top-0 w-full bg-accent transition-all duration-700"
                            style={{
                              height:
                                activeIndex >= 0
                                  ? `${((activeIndex + 1) / educationHistory.length) * 100}%`
                                  : "0%",
                            }}
                          />
                        </div>
                          
                        <div className="space-y-10">
                          {educationHistory.map((edu, index) => (
                            <EducationItem
                              key={index}
                              edu={edu}
                              index={index}
                              onVisible={setActiveIndex}
                              resetKey={isEducationOpen}
                              scrollRoot={dialogScrollRef}
                            />
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
