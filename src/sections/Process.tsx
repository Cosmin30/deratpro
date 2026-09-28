import SectionTitle from "@/components/SectionTitle";
import StepCard from "@/components/StepCard";
import { processContent } from "@/data/content";

export default function Process() {
  return (
    <section className="scroll-mt-44 bg-surface-subtle px-5 py-section sm:scroll-mt-32 sm:px-8 lg:scroll-mt-20 lg:px-12" id="process">
      <div className="mx-auto max-w-[1480px]">
        <SectionTitle
          description={processContent.description}
          eyebrow={processContent.eyebrow}
          title={processContent.title}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6 sm:[&>article:last-child]:col-span-2 sm:[&>article:last-child]:mx-auto sm:[&>article:last-child]:w-full sm:[&>article:last-child]:max-w-[calc(50%-0.5rem)] lg:[&>article:last-child]:col-span-1 lg:[&>article:last-child]:max-w-none">
          {processContent.items.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
