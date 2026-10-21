import { SquareArrowOutUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import TechPill from "../../components/TechPill";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-muted/30 p-3 rounded-xl flex flex-col gap-5">
      {/* image */}
      <div className="aspect-2/1 w-full border rounded-2xl border-muted/10 bg-surface/60 overflow-hidden">
        <img className="h-full w-full object-contain" src={project.pic} alt={project.pic_alt} loading="lazy" />
      </div>

      {/* text */}
      <div className="flex flex-col gap-2">
        {/* name and link */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold lg:text-xl">{project.name}</h3>
          <a className="text-muted" target="blank" href={project.project_url}>
            <SquareArrowOutUpRight className="size-6 lg:size-4"/>
          </a>
        </div>
        {/* desc */}
        <p className="text-muted lg:text-md">{project.desc}</p>
      </div>

      {/* tech */}
      <div className="flex flex-wrap">
        {project.techs.map((tech) => (
          <TechPill key={tech} tech={tech}/>
        ))}
      </div>
    </div>
  );
}
