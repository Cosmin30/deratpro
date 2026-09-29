import BenefitCard from "@/components/BenefitCard";
import SectionTitle from "@/components/SectionTitle";
import { advantagesContent } from "@/data/content";

export default function WhyUs() {
  return (
    <section className="scroll-mt-44 bg-surface-page px-5 py-section sm:scroll-mt-32 sm:px-8 lg:scroll-mt-20 lg:px-12" id="why-us">
      <div className="mx-auto max-w-370">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            align="left"
            description={advantagesContent.description}
            eyebrow={advantagesContent.eyebrow}
            title={advantagesContent.title}
          />
          <p className="flex shrink-0 items-center gap-2 pb-1 text-[11px] font-semibold text-text-secondary">
            <span className="size-2 rounded-full bg-tertiary" />
            {advantagesContent.certification}
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {advantagesContent.items.map((advantage) => (
            <BenefitCard key={advantage.title} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  );
}
