import Icon from "@/components/Icon";

type BrandProps = {
  className?: string;
};

export default function Brand({ className = "" }: BrandProps) {
  return (
    <a
      aria-label="DeratPro, pagina principală"
      className={`inline-flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${className}`}
      href="#top"
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-tertiary">
        <Icon name="shield" className="size-5" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-primary">
        Derat<span className="text-secondary">Pro</span>
      </span>
    </a>
  );
}
