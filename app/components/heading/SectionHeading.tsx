type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <div className="w-24 h-1 bg-[#D6A739] mx-auto mb-5 rounded-full" />
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">{subtitle}</p>
      )}
    </div>
  );
}
