interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="section-title">{title}</h1>
      <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="section-subtitle">
          {"< "}{subtitle}{" />"}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
