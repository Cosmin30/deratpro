import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import SectionTitle from "@/components/SectionTitle";
import { contactContent } from "@/data/content";

export default function Contact() {
  return (
    <section className="scroll-mt-44 bg-surface-page px-5 py-section sm:scroll-mt-32 sm:px-8 lg:scroll-mt-20 lg:px-12" id="contact">
      <div className="mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:gap-10">
        <div className="rounded-card bg-white p-5 shadow-card sm:p-8">
          <SectionTitle
            align="left"
            description={contactContent.description}
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
          />
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside className="flex flex-col overflow-hidden rounded-card bg-primary text-white shadow-2xl shadow-slate-900/15">
          <div className="flex-1 p-6 sm:p-8">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-tertiary">
              <span className="size-2 rounded-full bg-tertiary" /> Dispecerat național
            </p>
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              {contactContent.company}
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              {contactContent.companyDescription}
            </p>
            <ul className="mt-7 space-y-5">
              {contactContent.contacts.map((contact) => (
                <li className="flex gap-3" key={contact.label}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-tertiary">
                    <Icon name={contact.icon} className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a className="mt-0.5 inline-flex min-h-11 max-w-full items-center break-words rounded-sm text-sm font-semibold text-white hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary" href={contact.href}>
                        {contact.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold text-white">{contact.value}</p>
                    )}
                    {contact.detail && (
                      <p className="mt-0.5 text-xs text-slate-400">{contact.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/10 bg-white/5 px-6 py-5 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Acreditări & autorizații active
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {contactContent.accreditations.map((accreditation) => (
                <li className="rounded bg-white/10 px-2 py-1 text-[9px] font-semibold text-slate-200" key={accreditation}>
                  {accreditation}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
