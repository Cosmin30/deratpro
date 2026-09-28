"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const fieldStyles =
  "mt-1.5 min-h-11 w-full rounded-md border border-transparent bg-surface-subtle px-3 text-sm text-primary outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/15";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-primary">
          Nume și Prenume *
          <input
            autoComplete="name"
            className={fieldStyles}
            minLength={2}
            name="name"
            placeholder="ex. Alexandru Popescu"
            required
          />
        </label>
        <label className="text-xs font-semibold text-primary">
          Număr de Telefon *
          <input
            autoComplete="tel"
            className={fieldStyles}
            name="phone"
            pattern="[+0-9() .-]{7,}"
            placeholder="ex. 0721 000 000"
            required
            title="Introdu un număr de telefon valid."
            type="tel"
          />
        </label>
        <label className="text-xs font-semibold text-primary">
          Tipul Serviciului *
          <select className={fieldStyles} defaultValue="" name="service" required>
            <option disabled value="">
              Selectează serviciul
            </option>
            <option>Deratizare</option>
            <option>Dezinsecție</option>
            <option>Dezinfecție</option>
            <option>Pachet complet DDD</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-primary">
          Suprafața estimată (mp)
          <input
            className={fieldStyles}
            min="1"
            name="area"
            placeholder="ex. 250 mp"
            type="number"
          />
        </label>
      </div>
      <label className="block text-xs font-semibold text-primary">
        Detalii despre locație sau problemă *
        <textarea
          className={`${fieldStyles} min-h-24 resize-y py-3`}
          minLength={10}
          name="message"
          placeholder="Descrie pe scurt specificul activității, adresa orientativă sau dacă este vorba de o urgență sanitară..."
          required
          rows={4}
        />
      </label>
      <label className="flex items-start gap-2 text-xs leading-5 text-text-secondary">
        <input className="mt-1 size-4 shrink-0 cursor-pointer accent-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" name="privacy" required type="checkbox" />
        <span>
          Sunt de acord cu prelucrarea datelor cu caracter personal conform
          politicii GDPR pentru a primi oferta de preț.
        </span>
      </label>
      <Button className="w-full" type="submit">
        Solicită Ofertă Gratuită <Icon name="arrow" className="size-4" />
      </Button>
      {submitted ? (
        <p className="flex items-center justify-center gap-2 text-center text-xs font-medium text-emerald-700" role="status">
          <Icon name="check" className="size-4" />
          Mulțumim! Solicitarea ta a fost înregistrată.
        </p>
      ) : (
        <p className="flex items-center justify-center gap-2 text-center text-[11px] text-text-secondary">
          <Icon name="clock" className="size-3.5 text-tertiary" />
          Te vom contacta în maxim 15 minute în intervalul de lucru.
        </p>
      )}
    </form>
  );
}
