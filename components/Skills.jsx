"use client";

import { useState } from "react";
import {
  Info,
  Code,
  Database,
  Cloud,
  GitBranch,
  Box,
  Figma,
  TestTube,
  Zap,
  Globe,
  Server,
  FileCode,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function Skills() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Combined skills with icons
  const allSkills = [
    { name: "React", icon: Box, color: "text-blue-500" },
    { name: "Next.js", icon: Globe, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: FileCode, color: "text-blue-600" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: "HTML/CSS", icon: Layers, color: "text-orange-500" },
    { name: "Node.js", icon: Server, color: "text-green-600" },
    { name: "Python", icon: Code, color: "text-blue-500" },
    { name: "REST APIs", icon: Database, color: "text-purple-500" },
    { name: "Database", icon: Database, color: "text-blue-600" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
    { name: "Django", icon: Box, color: "text-blue-500" },
    { name: "Laravel", icon: Cloud, color: "text-orange-500" },
    { name: "Figma", icon: Figma, color: "text-purple-600" },
    { name: "C++", icon: TestTube, color: "text-green-500" },
  ];

  const certificates = [
    {
      name: "CCS Layout: From Float to Flexbox and Grid",
      issuer: "Linkedin Learning",
      date: "2025",
      image: "/certificates/css-cert.jpg", 
      link: "https://www.linkedin.com/learning/certificates/f4dcf8c8b65b6a641a48168bcdb2cdb7e5e4eda7c514c2530d4b6c5b717b6ac1"
    },
    {
      name: "Figma for UX Design",
      issuer: "Linkedin Learning",
      date: "2025",
      image: "/certificates/figma-cert.jpg",
      link:"https://www.linkedin.com/learning/certificates/afe119aae419630743ad4949ecbce5321425a9c853905711bda5f563fd7723bb"
    },
    {
      name: "Learning Github",
      issuer: "Linkedin Learning",
      date: "2025",
      image: "/certificates/git-cert.jpg",
      link:"https://www.linkedin.com/learning/certificates/e94976d5a5f684eb6c2f7c7a3b261ef44b6e4cc6fd8d6a4e5745c41cabc11130"
    },
    {
      name: "React Essential Training",
      issuer: "Linkedin Learning",
      date: "2025",
      image: "/certificates/react-cert.jpg",
      link:"https://www.linkedin.com/learning/certificates/494d7f48367890a183a04837f6cfb7833ddde6e8b2a38a3b5875822fbab87457"
    },
    {
      name: "Ignite Bootcamp - Venture Idea Development - Philippines",
      issuer: "Wadhwani Foundation",
      date: "2025",
      image: "/certificates/wadwhani-cert.jpg",
      link:"https://web.certificate.wfglobal.org/en/certificate?certificateId=69395af749e895be1f168493"
    },
    {
      name: "JavaScript: Security Essentials",
      issuer: "Linkedin Learning",
      date: "2025",
      image: "/certificates/js-cert.jpg",
      link:"https://www.linkedin.com/learning/certificates/3b708faeabda64bee95819c588fddedd57c19e1e4793f7bf863675115dec0f69"
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-primary dark:text-grey-50 mb-3 sm:mb-4 text-center">
          Skills & Certificates
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Skills Container */}
          <div className="bg-grey-50 dark:bg-grey-100 p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg border border-grey-200 dark:border-grey-300 overflow-hidden">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-primary font-bold text-primary dark:text-grey-50 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              Skills
            </h3>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {/* First row - sliding left */}
              <div className="overflow-hidden relative">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 animate-slide-left">
                  {/* Duplicate skills for seamless loop */}
                  {[...allSkills, ...allSkills].map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 md:gap-1.5 px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-1 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px] xl:min-w-[100px] shrink-0 hover:scale-110 transition-all duration-300"
                        title={skill.name}
                      >
                        <IconComponent
                          className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 ${skill.color}`}
                        />
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium text-center text-primary dark:text-grey-50 whitespace-nowrap leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second row - sliding right */}
              <div className="overflow-hidden relative">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 animate-slide-right">
                  {/* Duplicate skills in reverse for seamless loop */}
                  {[...allSkills]
                    .reverse()
                    .concat([...allSkills].reverse())
                    .map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex flex-col items-center justify-center gap-0.5 sm:gap-1 md:gap-1.5 px-0.5 sm:px-1 md:px-2 py-0.5 sm:py-1 min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px] xl:min-w-[100px] shrink-0 hover:scale-110 transition-all duration-300"
                          title={skill.name}
                        >
                          <IconComponent
                            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 ${skill.color}`}
                          />
                          <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium text-center text-primary dark:text-grey-50 whitespace-nowrap leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Container */}
          <div className="bg-grey-50 dark:bg-grey-100 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-grey-200 dark:border-grey-300 relative">
            <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-primary font-bold text-primary dark:text-grey-50">
                Certificates
              </h3>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary dark:text-grey-50 hover:text-accent dark:hover:text-accent"
                    aria-label="View all certificates"
                  >
                    <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl sm:text-3xl font-primary">
                      All Certificates
                    </DialogTitle>
                    <DialogDescription>
                      View all my professional certifications
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid sm:grid-cols-2 gap-6 mt-4">
                    {certificates.map((certificate, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-grey-200 p-4 rounded-lg border border-grey-200 dark:border-grey-300"
                      >
                        <div className="mb-4 aspect-video bg-grey-200 dark:bg-grey-300 rounded-lg overflow-hidden flex items-center justify-center relative">
                          {certificate.image ? (
                            <>
                              <img
                                src={certificate.image}
                                alt={certificate.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  console.error("Image failed to load:", certificate.image);
                                  e.target.style.display = "none";
                                  const placeholder = document.getElementById(`placeholder-${index}`);
                                  if (placeholder) {
                                    placeholder.style.display = "flex";
                                  }
                                }}
                                onLoad={(e) => {
                                  console.log("Image loaded successfully:", certificate.image);
                                  const placeholder = document.getElementById(`placeholder-${index}`);
                                  if (placeholder) {
                                    placeholder.style.display = "none";
                                  }
                                }}
                              />
                              <div
                                id={`placeholder-${index}`}
                                className="absolute inset-0 w-full h-full flex items-center justify-center text-secondary dark:text-grey-400 text-sm"
                                style={{ display: "none" }}
                              >
                                Certificate Image Not Found
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-secondary dark:text-grey-400 text-sm">
                              Certificate Image
                            </div>
                          )}
                        </div>
                        <h4 className="text-lg font-primary font-semibold text-primary dark:text-grey-50 mb-2">
                          {certificate.name}
                        </h4>
                        <p className="text-sm text-secondary dark:text-grey-300 mb-1">
                          <span className="font-medium text-primary dark:text-grey-50">
                            Issued by:
                          </span>{" "}
                          {certificate.issuer}
                        </p>
                        <p className="text-sm text-secondary dark:text-grey-300 mb-1">
                          <span className="font-medium text-primary dark:text-grey-50">
                            Date:
                          </span>{" "}
                          {certificate.date}
                        </p>
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-block px-4 py-2 bg-accent text-white dark:bg-primary dark:text-grey-50 rounded font-semibold text-sm hover:opacity-90 transition">
                            View Certificate
                        </a>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-secondary dark:text-grey-300">
                Click the info icon to view all certificates with photos.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {certificates.slice(0, 3).map((cert, index) => (
                  <div
                    key={index}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-grey-200 dark:bg-grey-300 rounded text-[10px] sm:text-xs md:text-sm text-secondary dark:text-grey-400"
                  >
                    {cert.name.split(" ")[0]} {cert.name.split(" ")[1]}
                  </div>
                ))}
                {certificates.length > 3 && (
                  <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-grey-200 dark:bg-grey-300 rounded text-[10px] sm:text-xs md:text-sm text-secondary dark:text-grey-400">
                    +{certificates.length - 3} more
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
