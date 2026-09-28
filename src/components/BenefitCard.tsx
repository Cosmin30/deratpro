import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

type BenefitCardProps = {
  icon: IconName;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  tone: "blue" | "green";
};

export default function BenefitCard({
  icon,
  eyebrow,
  title,
  highlight,
  description,
  tone,
}: BenefitCardProps) {
  const toneStyles =
    tone === "green"
      ? "bg-emerald-50 text-tertiary"
      : "bg-blue-100 text-secondary";

  return (
    <article className="rounded-card border border-slate-100 bg-white p-5 sm:p-6">
      <span className={`mb-4 grid size-12 place-items-center rounded-xl ${toneStyles}`}>
        <Icon name={icon} className="size-5" />
      </span>
      <p className="text-[10px] font-bold uppercase tracking-wide text-secondary">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-base font-bold text-primary">{title}</h3>
      <p className="mt-2 font-display text-lg font-bold text-secondary">{highlight}</p>
      <p className="mt-3 text-xs leading-5 text-text-secondary">{description}</p>
    </article>
  );
}
