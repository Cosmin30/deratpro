type StepCardProps = {
  number: string;
  badge: string;
  title: string;
  description: string;
};

export default function StepCard({ number, badge, title, description }: StepCardProps) {
  const numberStyle = number === "02" ? "bg-secondary" : "bg-black";

  return (
    <article className="flex h-full flex-col items-center rounded-card bg-white px-6 py-7 text-center">
      <span
        className={`mb-4 grid size-14 place-items-center rounded-full border-4 border-blue-100 font-display text-lg font-bold text-white ${numberStyle}`}
      >
        {number}
      </span>
      <span className="mb-3 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-secondary">
        {badge}
      </span>
      <h3 className="text-base font-bold text-primary">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-text-secondary">{description}</p>
    </article>
  );
}
