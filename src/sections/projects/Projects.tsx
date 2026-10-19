import reactTimerExtensionImage from "../../assets/projects/react-timer-extension.webp";
import reactWeatherAppImage from "../../assets/projects/react-weather-app.webp";
import musicPlayerImage from "../../assets/projects/music-app.webp";
import githubIcon from "../../assets/icons/github.svg";

import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../../components/sections/SectionHeader";
import { ArrowRight } from "lucide-react";

const projects: Project[] = [
  {
    name: "React Weather App",
    pic: reactWeatherAppImage,
    pic_alt: "React Weather App image",
    desc: "Built a weather app with React and TypeScript that lets users search for cities and view current conditions from the Open-Meteo API. I added configurable units, managed shared settings with Redux Toolkit, and validated API responses with Zod to handle unreliable data gracefully.",
    project_url: "https://github.com/gnikkoch96/react-weather-app",
    techs: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Playwright",
      "Jest",
    ],
  },
  {
    name: "Music Player",
    pic: musicPlayerImage,
    pic_alt: "Music Player Image",
    desc: "Built a browser-based music player with HTML, CSS, and vanilla JavaScript, featuring a three-track playlist, playback controls, automatic track advancement, and a clickable progress bar for seeking. The interface updates the cover art, track details, background, and playback time as each song plays, demonstrating practical use of the Audio API and event-driven UI updates.",
    project_url:
      "https://github.com/gnikkoch96/Frontend-Dev-Portfolio/tree/main/Music%20Player",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "React Timer Extension",
    pic: reactTimerExtensionImage,
    pic_alt: "React Timer Extension",
    desc: "Built a Chrome timer extension with React and TypeScript that lets users launch preset or custom timers from the popup or a right-click menu. I used Chrome’s alarms, storage, notifications, and offscreen audio APIs to keep timers running after the popup closes and deliver a visible, audible alert when time is up. The project demonstrates how I connect a responsive interface with browser background features to solve a practical everyday problem.",
    project_url: "https://github.com/gnikkoch96/react-timer-extension",
    techs: [
      "React",
      "TypeScript",
      "Vite",
      "Chrome Extensions API (Manifest V3)",
      "HTML",
      "CSS",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      {/* projects header */}
      <SectionHeader
        sectionTitle="Projects"
        sectionSubtext="A selection of personal projects that I've built"
      />

      {/* project cards */}
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}

      {/* github button */}
      <a
        className="flex items-center justify-center gap-3 p-3 rounded-xl bg-accent"
        target="_blank"
        href="https://github.com/gnikkoch96"
      >
        <img
          className="h-5.5 bg-white rounded-full"
          src={githubIcon}
          alt="Github Icon"
        />
        Explore More on Github <ArrowRight size={20} />
      </a>
    </section>
  );
}
