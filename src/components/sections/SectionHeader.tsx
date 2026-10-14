type SectionHeaderProps = {
  sectionTitle: string;
  sectionSubtext: string;
};

export default function SectionHeader({
  sectionTitle,
  sectionSubtext,
}: SectionHeaderProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-accent">{sectionTitle}</h2>
      <p className="text-muted">{sectionSubtext}</p>
    </div>
  );
}
