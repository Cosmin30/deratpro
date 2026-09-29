import Button from "@/components/Button";
import Icon from "@/components/Icon";
import HeroScene from "@/components/three/HeroScene";
import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="scroll-mt-44 bg-linear-to-br from-surface-page via-blue-50/70 to-emerald-50/60 sm:scroll-mt-32 lg:scroll-mt-20" id="top">
      <div className="mx-auto grid max-w-[1580px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:items-start xl:pt-24 xl:pb-36 xl:grid-cols-[1.08fr_0.92fr] xl:gap-16">
        <div className="xl:mt-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-slate-600 shadow-sm sm:text-xs">
            <Icon name="badge" className="size-4 text-tertiary" />
            {heroContent.badge}
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl xl:text-[3.5rem]">
            {heroContent.headlineStart}
            <span className="block text-secondary">{heroContent.headlineEmphasis}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
            {heroContent.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#contact">
              {heroContent.primaryAction} <Icon name="arrow" className="size-4" />
            </Button>
            <Button href="tel:0800800700" variant="secondary">
              <Icon name="phone" className="size-4 text-secondary" />
              {heroContent.phoneAction}
            </Button>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {heroContent.metrics.map((metric) => (
              <li className="rounded-lg border border-white/80 bg-white/75 px-4 py-3 shadow-sm" key={metric.label}>
                <p className="flex items-center gap-1.5 font-display text-lg font-bold text-primary">
                  <Icon name={metric.icon} className="size-5 text-secondary" />
                  {metric.value}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-text-secondary">{metric.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto aspect-[4/4.4] w-full overflow-hidden rounded-2xl bg-primary shadow-2xl shadow-slate-900/20 sm:aspect-square md:max-w-136 xl:mx-0 xl:aspect-[0.88/1] xl:max-w-148 xl:max-h-168 xl:justify-self-end">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
