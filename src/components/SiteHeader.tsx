"use client";

import { useEffect, useState } from "react";
import Brand from "@/components/Brand";
import Button from "@/components/Button";
import { navigation } from "@/data/content";

export default function SiteHeader() {
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    function updateHeader() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
        const activationLine = window.innerHeight * 0.38;
        const activeSection = navigation.find(({ href }) => {
          const section = document.querySelector<HTMLElement>(href);
          if (!section) return false;

          const bounds = section.getBoundingClientRect();
          return bounds.top <= activationLine && bounds.bottom > activationLine;
        });

        setActiveHref(activeSection?.href ?? null);
      });
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/70 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none ${
        isScrolled ? "bg-white/95 shadow-sm" : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex max-w-[1580px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-2 sm:px-8 lg:flex-nowrap lg:px-12">
        <Brand />
        <nav
          aria-label="Navigare principală"
          className="order-3 flex w-full flex-wrap gap-x-4 text-xs font-semibold text-slate-600 sm:justify-center lg:order-none lg:w-auto"
        >
          {navigation.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                aria-current={isActive ? "location" : undefined}
                className={`relative inline-flex min-h-11 shrink-0 items-center rounded-sm transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-secondary after:transition-transform after:duration-300 hover:text-secondary hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:after:transition-none ${
                  isActive ? "text-secondary after:scale-x-100" : "after:scale-x-0"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden min-h-11 flex-col justify-center text-right text-[10px] font-bold leading-tight text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:flex"
            href="tel:0721000999"
          >
            LINIE DISPECERAT
            <span className="block text-xs">+40 721 000 999</span>
          </a>
          <Button className="min-h-11 px-3 text-xs" href="#contact">
            Solicită Ofertă
          </Button>
        </div>
      </div>
    </header>
  );
}
