import Brand from "@/components/Brand";
import { footerContent } from "@/data/content";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-subtle px-5 pb-6 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_0.95fr] lg:gap-8">
        <div>
          <Brand />
          <p className="mt-4 max-w-sm text-xs leading-5 text-text-secondary">
            {footerContent.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {footerContent.accreditations.map((accreditation) => (
              <li
                className="rounded bg-blue-100 px-2 py-1 text-[9px] font-semibold text-primary"
                key={accreditation}
              >
                {accreditation}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-wide text-primary">
            {footerContent.servicesHeading}
          </h2>
          <ul className="mt-2 space-y-1 text-xs leading-5 text-text-secondary">
            {footerContent.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-wide text-primary">
            {footerContent.coverageHeading}
          </h2>
          <ul className="mt-2 space-y-1 text-xs leading-5 text-text-secondary">
            {footerContent.coverage.map((area) => (
              <li key={area.region}>
                <span className="font-semibold text-primary">{area.region}</span>{" "}
                {area.detail}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[10px] font-bold uppercase tracking-wide text-primary">
            {footerContent.assistanceHeading}
          </h2>
          <p className="mt-2 text-xs font-semibold text-primary">
            {footerContent.emergencyLabel}
          </p>
          <a
            className="mt-1 inline-flex min-h-11 items-center rounded-sm font-display text-lg font-bold text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            href={footerContent.phoneHref}
          >
            {footerContent.phone}
          </a>
          <a
            className="block break-words text-xs text-text-secondary hover:text-secondary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            href={footerContent.emailHref}
          >
            {footerContent.email}
          </a>
          <p className="mt-1 text-xs leading-5 text-text-secondary">
            {footerContent.address}
          </p>
          <a
            className="mt-3 inline-flex min-h-11 items-center rounded-sm text-[10px] font-bold uppercase tracking-wide text-primary hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            href={`${footerContent.emailHref}?subject=Solicitare%20suport`}
          >
            {footerContent.supportLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1480px] flex-col gap-3 border-t border-slate-200/80 pt-5 text-[10px] text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>{footerContent.copyright}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-medium text-primary">
          {footerContent.legalLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
