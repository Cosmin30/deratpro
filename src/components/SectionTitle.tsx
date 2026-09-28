type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      <span className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-secondary">
        {eyebrow}
      </span>
      <h2 className="text-3xl leading-tight tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
        {description}
      </p>
    </div>
  );
}
