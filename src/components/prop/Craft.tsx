"use client";

import { useContext, type JSX } from "react";
import { ArrowUpRight } from "lucide-react";
import { ThemeContext } from "../../context/themecontext";
import Navbar from "./Navbar";
import { Fade } from "react-awesome-reveal";

type ProjectType = "FullStack" | "frontend" | "design" | "Linux";

interface Project {
  id: number;
  title: string;
  image: string;
  type: ProjectType;
  technologies: string[];
  figma?: string;
  behance?: string;
  github?: string;
  demo?: string;
}

const Craft = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects: Project[] = [
    {
      id: 1,
      title: "Hookraft — React hooks for lifecycle, side effects, and async flows",
      image: "",
      type: "FullStack",
      technologies: ["React", "Tailwind"],
      demo: "https://hookraft.site/",
    },
    {
      id: 2,
      title:
        "OJobs — clean, fast platform helping Nigerian students and freelancers find real work, and orgs find real talent",
      image: "",
      type: "FullStack",
      technologies: ["Next.js", "Supabase", "Tailwind"],
      github: "https://github.com/purposewalks9",
      demo: "https://ojobs.site",
    },
    {
      id: 3,
      title: "Raven",
      image: "https://res.cloudinary.com/do4b0rrte/image/upload/v1765118372/Ubuntu_vuufl8.png",
      type: "Linux",
      technologies: ["Ubuntu", "Python", "System"],
      github: "https://github.com/purposewalks9",
      demo: "https://github.com/purposewalks9/raven",
    },
    {
      id: 4,
      title: "Runic",
      image: "https://res.cloudinary.com/do4b0rrte/image/upload/v1765116350/Fastshare_3_snp0ae.png",
      type: "frontend",
      technologies: ["React", "Tailwind", "Express"],
      github: "https://github.com/purposewalks9/runic",
      demo: "https://www.fastshare.name.ng/",
    },
  ];

  const TechIcons: Record<string, JSX.Element> = {
    React: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
      </svg>
    ),
    Tailwind: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
      </svg>
    ),
    Express: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
    Python: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25 2h-4.5C7.9 2 6 3.9 6 6v3.75C6 11.55 7.45 13 9.25 13h5.5c1.8 0 3.25-1.45 3.25-3.25V6c0-2.1-1.9-4-3.75-4zm-2.25 2a1 1 0 110 2 1 1 0 010-2zM9.75 11a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2z" />
        <path d="M9.75 22h4.5c1.85 0 3.75-1.9 3.75-4v-3.75C18 12.45 16.55 11 14.75 11h-5.5C7.45 11 6 12.45 6 14.25V18c0 2.1 1.9 4 3.75 4zm2.25-2a1 1 0 110-2 1 1 0 010 2zm-3.5-6a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
    Ubuntu: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-6 10a2 2 0 114 0 2 2 0 01-4 0zm12 0a2 2 0 114 0 2 2 0 01-4 0zm-5 7a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    ),
    System: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h18v14H3V4zm2 2v10h14V6H5zm2 12h10v2H7v-2z" />
      </svg>
    ),
    Firebase: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
      </svg>
    ),
    Figma: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-9.333h4V6.667H8a3.667 3.667 0 100 7.333zM8 6h4V0H8a3 3 0 000 6zm5-6v6.667h4a3.333 3.333 0 100-6.667H13zm0 14.667a4 4 0 118 0 4 4 0 01-8 0z" />
      </svg>
    ),
    "UI/UX": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    Prototyping: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" />
      </svg>
    ),
    "Next.js": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm5.5 16.9-7-9.6v9.4h-1.4V7h1.7l6.6 9V7h1.4v9.9h-1.3z" />
      </svg>
    ),
    Supabase: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 23.7c-.6 0-1.1-.5-1.1-1.1v-7.9H4.2c-1.1 0-1.7-1.3-1-2.2L14.3.3c.4-.5 1.2-.1 1.2.5v7.9h6.6c1.1 0 1.7 1.3 1 2.2L13 23.3c-.2.3-.6.4-1.1.4z" />
      </svg>
    ),
  };

  const typeStyles: Record<ProjectType, { label: string; bg: string; text: string }> = {
    frontend: { label: "Frontend", bg: "bg-yellow-600", text: "text-white" },
    design: { label: "Design", bg: "bg-blue-600", text: "text-white" },
    FullStack: { label: "Full stack", bg: "bg-white", text: "text-black" },
    Linux: { label: "Linux", bg: "bg-orange-600", text: "text-white" },
  };

  return (
    <div className={`min-h-screen ${darkMode ? "text-white" : "bg-white text-black"}`}>
      <main className="max-w-screen-2xl mx-auto px-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-24">
          {projects.map((project, index) => {
            const mainLink =
              project.type === "design" ? project.behance || project.figma : project.demo || project.github;
            const badge = typeStyles[project.type] || typeStyles.frontend;

            return (
              <Fade key={project.id} direction="up" delay={index * 150} duration={900} triggerOnce>
                <a
                  href={mainLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-end h-64 sm:h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 transition-all duration-300 hover:border-white/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
                >
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md ${badge.bg} ${badge.text}`}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>

                  <div className="absolute inset-0 bg-neutral-900">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element -- external cloudinary images
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 text-sm font-medium">
                        {project.title.split(" ")[0]}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-2 p-4 sm:p-5">
                    <h3 className="text-white text-[15px] font-medium leading-snug line-clamp-2">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="w-7 h-7 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-white/80"
                          title={tech}
                        >
                          {TechIcons[tech]}
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </Fade>
            );
          })}
        </div>
      </main>
      <div className="fixed bottom-10 left-0 right-0 z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Craft;
