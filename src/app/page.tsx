import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import Services from "@/sections/Services";
import WhyUs from "@/sections/WhyUs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
