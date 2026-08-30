interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

const SectionHeader = ({ title, subtitle, eyebrow }: SectionHeaderProps) => {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</p>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="w-12 h-0.5 bg-primary rounded-full mb-4" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
