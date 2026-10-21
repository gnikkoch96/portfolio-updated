type TechPillProps = {
    tech: string;
    className?: string;
}

export default function TechPill({ tech, className = '' } : TechPillProps) {
  return (
    <span
      className={`border border-muted/30 rounded-full px-2 text-sm shadow ${className}`}
    >
      {tech}
    </span>
  );
}
