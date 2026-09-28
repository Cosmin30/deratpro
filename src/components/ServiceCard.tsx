import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";

type ServiceCardProps = {
  icon: IconName;
  iconTone: "blue" | "green";
  badge: string;
  title: string;
  description: string;
  features: string[];
};

export default function ServiceCard({
  icon,
  iconTone,
  badge,
  title,
  description,
  features,
}: ServiceCardProps) {
  const iconColor = iconTone === "green" ? "text-tertiary" : "text-secondary";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-slate-100 bg-white shadow-card">
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center justify-between">
          <span className={`grid size-14 place-items-center rounded-2xl bg-blue-100 ${iconColor}`}>
            <Icon name={icon} className="size-6" />
          </span>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-secondary">
            {badge}
          </span>
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>
      <ul className="space-y-2 bg-surface-subtle px-6 py-4">
        {features.map((feature) => (
          <li className="flex items-start gap-2 text-xs text-slate-700" key={feature}>
            <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-tertiary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
