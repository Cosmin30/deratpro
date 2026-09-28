import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import { servicesContent } from "@/data/content";

export default function Services() {
  return (
    <section className="scroll-mt-44 bg-surface-subtle px-5 py-section sm:scroll-mt-32 sm:px-8 lg:scroll-mt-20 lg:px-12" id="services">
      <div className="mx-auto max-w-[1480px]">
        <SectionTitle
          description={servicesContent.description}
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {servicesContent.items.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
