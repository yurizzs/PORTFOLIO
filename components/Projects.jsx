import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Scrimggs",
      description:
        "A frontend-only website for gamers that uses APIs to schedule scrims through Calendly and to contact the scrim owner.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yurizzs/scrimggs",
      demo: "https://example.com",
      image: "/projects/scrimggs.png",
    },
    {
      title: "DigiChart",
      description:
        "A web-based healthcare for digitally managing patient records with role-based access for admins, nurses, and doctors.",
      technologies: ["HTML", "Tailwind CSS", "Django", "MySQL"],
      github: "https://github.com/yurizzs/DigiChart",
      demo: "https://example.com",
      image: "/projects/digichart.png",
    },
    {
      title: "Photongina",
      description:
        "A simple frontend-only website photobooth, letting users take three pictures, choose a border color, and add the date.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/zavraze/photonginamo",
      demo: "https://zavraze.github.io/photonginamo/",
      image: "/projects/photongina.png",
    },
  ];

  return (
    <section
      id="projects"
      className="flex justify-center py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-grey-50 dark:bg-grey-50 transition-colors"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-primary dark:text-grey-50 mb-3 sm:mb-4 text-center">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="items-center bg-white dark:bg-grey-100 rounded-lg border border-grey-200 dark:border-grey-300 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 bg-primary/5 dark:bg-grey-200/20 overflow-hidden">
                {project.image &&
                typeof project.image === "string" &&
                project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full text-5xl sm:text-6xl">
                    <span>{project.image}</span>
                  </div>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-xl font-secondary font-semibold text-primary dark:text-grey-50 mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-sm text-primary dark:text-grey-300 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-grey-100 dark:bg-grey-200 text-secondary dark:text-grey-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 text-secondary dark:text-grey-300 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                  >
                    <ExternalLink
                      size={16}
                      className="sm:w-[18px] sm:h-[18px]"
                    />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
