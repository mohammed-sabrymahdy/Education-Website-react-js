export const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <span className="text-primary">pracice Advice</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
