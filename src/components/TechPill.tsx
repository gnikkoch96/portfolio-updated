type TechPillProps = {
    tech: string;
}

export default function TechPill({ tech } : TechPillProps) {
  return (
    <span
      className="border border-muted/30 rounded-full px-2 text-sm shadow lg:text-lg"
    >
      {tech}
    </span>
  );
}
