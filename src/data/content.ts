import type { IconName } from "@/components/Icon";

export const navigation = [
  { label: "Servicii", href: "#services" },
  { label: "De ce DeratPro", href: "#why-us" },
  { label: "Cum Funcționează", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  badge: "Certificat DSP & ANSVSA · Tehnologie Avansată Bio-Control",
  headlineStart: "Protejăm spațiile tale.",
  headlineEmphasis: "Rapid. Sigur. Profesional.",
  description:
    "Soluții complete de deratizare, dezinsecție și dezinfecție pentru companii, depozite logistice, HoReCa și spații rezidențiale. Fără întreruperea activității tale, folosind protocoale certificate ecologic.",
  primaryAction: "Solicită ofertă",
  phoneAction: "Sună acum: 0800 800 700",
  metrics: [
    { icon: "verified", value: "99,8%", label: "Rată de succes auditată" },
    { icon: "building", value: "+3.500", label: "Spații industriale & comerciale" },
    { icon: "stopwatch", value: "< 2 Ore", label: "Timp de răspuns la apel" },
  ] satisfies { icon: IconName; value: string; label: string }[],
};

export const servicesContent = {
  eyebrow: "Servicii specializate",
  title: "Tratamente profesionale DDD de ultimă generație",
  description:
    "Abordare integrată pentru eliminare completă și prevenție pe termen lung, susținută de echipamente ULV de calibrul medical.",
  items: [
    {
      icon: "shieldCheck",
      iconTone: "blue",
      badge: "Protocol HACCP",
      title: "Deratizare",
      description:
        "Combaterea și eliminarea eficientă a rozătoarelor prin stații de intoxicare securizate, capcane mecanice ecologice și monitorizare digitală permanentă conform normelor europene.",
      features: [
        "Stații sigilate cu cheie",
        "Garanție de recurență zero",
        "Monitorizare trimestrială inclusă",
      ],
    },
    {
      icon: "sun",
      iconTone: "green",
      badge: "Ceață Rece ULV",
      title: "Dezinsecție",
      description:
        "Tratamente de șoc și remanență împotriva tuturor tipurilor de insecte târâtoare și zburătoare cu atomizoare de ceață rece ULV și geluri specifice inodore de ultimă generație.",
      features: [
        "Fără evacuare prelungită",
        "Sigur pentru oameni și animale",
        "Substanțe avizate pentru spații sensibile",
      ],
    },
    {
      icon: "sparkles",
      iconTone: "blue",
      badge: "Standard Medical",
      title: "Dezinfecție",
      description:
        "Sterilizare de înalt nivel a microorganismelor și a suprafețelor cu biocide virucide, bactericide și fungicide certificate de Ministerul Sănătății și instituțiile autorizate.",
      features: [
        "Eficiență 99,99% împotriva patogenilor",
        "Nebulizare volumetrică fină",
        "Proces-verbal sanitar oficial inclus",
      ],
    },
  ] satisfies {
    icon: IconName;
    iconTone: "blue" | "green";
    badge: string;
    title: string;
    description: string;
    features: string[];
  }[],
};

export const advantagesContent = {
  eyebrow: "De ce DeratPro",
  title: "Standarde industriale fără compromisuri",
  description:
    "Oferim predictibilitate, protecție legală completă și eficacitate garantată pentru orice dimensiune de afacere din România.",
  certification: "Intervenții conforme ISO 9001 & ISO 14001",
  items: [
    {
      icon: "zap",
      eyebrow: "Timp record",
      title: "Intervenție rapidă",
      highlight: "< 2 Ore",
      description:
        "Echipe mobile echipate complet disponibile 24/7 în mai multe huburi, pentru orice situație critică de biosecuritate.",
      tone: "blue",
    },
    {
      icon: "leaf",
      eyebrow: "Avize ministeriale",
      title: "Substanțe avizate",
      highlight: "100% Avizate",
      description:
        "Formule sigure de la Comisia Națională pentru Produse Biocide, ideale pentru spații alimentare, birouri și depozite.",
      tone: "green",
    },
    {
      icon: "idCard",
      eyebrow: "Calificare riguroasă",
      title: "Personal autorizat",
      highlight: "Operatori Certificați",
      description:
        "Tehnicieni instruiți riguros, cu atestate profesionale recunoscute și echipamente complete de protecție individuală.",
      tone: "blue",
    },
    {
      icon: "shieldSearch",
      eyebrow: "Fără riscuri",
      title: "Garanție contractuală",
      highlight: "Garanție Totală",
      description:
        "Dacă problema persistă în perioada asumată, re-intervenim gratuit până la eradicarea completă și conformarea sanitară.",
      tone: "green",
    },
  ] satisfies {
    icon: IconName;
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    tone: "blue" | "green";
  }[],
};

export const processContent = {
  eyebrow: "Proces simplificat",
  title: "Eficiență în 3 pași clari",
  description:
    "De la primul contact până la raportul oficial sanitar eliberat pe loc, fără birocrație sau timp pierdut.",
  items: [
    {
      number: "01",
      badge: "Răspuns în 15 min",
      title: "Ne contactezi",
      description:
        "Completezi formularul online sau ne suni direct. Stabilim natura suspiciunii, gradul de urgență și alocăm echipa tehnică specializată.",
    },
    {
      number: "02",
      badge: "Audit tehnic gratuit",
      title: "Evaluare & Plan",
      description:
        "Un inspector tehnic evaluează spațiul la fața locului, identifică vectorii biologici de risc și propune schema optimă de tratament chimic și mecanic.",
    },
    {
      number: "03",
      badge: "Garanție & dosar DDD inclus",
      title: "Intervenție & Certificare",
      description:
        "Aplicăm tratamentul cu echipamente de precizie și emitem procesul-verbal sanitar obligatoriu pentru controalele DSP, ANSVSA și auditurile ISO.",
    },
  ],
};

export const contactContent = {
  eyebrow: "Consultanță fără obligații",
  title: "Solicită o ofertă personalizată",
  description:
    "Completează datele de mai jos, iar un specialist tehnic îți va trimite planul de acțiune și cotația de preț.",
  company: "DeratPro Tehnologii Sanitare S.R.L.",
  companyDescription: "Echipe de intervenție operaționale la orice oră.",
  contacts: [
    {
      icon: "phone",
      label: "Linie verde urgentă",
      value: "0800 800 700",
      detail: "sau +40 721 000 999",
      href: "tel:0800800700",
    },
    {
      icon: "mail",
      label: "Departament contracte",
      value: "contact@deratpro.ro",
      detail: "",
      href: "mailto:contact@deratpro.ro",
    },
    {
      icon: "pin",
      label: "Sediu central",
      value: "Str. Tehnologilor nr. 14, Sector 1, București",
      detail: "Acoperire București–Ilfov & național B2B",
    },
  ] satisfies {
    icon: IconName;
    label: string;
    value: string;
    detail: string;
    href?: string;
  }[],
  accreditations: [
    "DSP Autorizat",
    "ANSVSA Conform",
    "ISO 9001:2015",
    "ISO 14001:2015",
    "Licență ANSVSA",
  ],
};

export const footerContent = {
  description:
    "Operator autorizat B2B specializat în biosecuritate, dezinfecție, deratizare și dezinsecție la standarde europene. Soluții certificate pentru facilități industriale, retail, industria alimentară și medicală.",
  accreditations: [
    "DSP Autorizat",
    "ANSVSA Conform",
    "ISO 9001:2015",
    "ISO 14001:2015",
  ],
  servicesHeading: "Servicii DDD",
  services: [
    "Deratizare Industrială",
    "Dezinsecție Spații Comerciale",
    "Dezinfecție Medicală & Horeca",
    "Monitorizare Digitală Dăunători",
    "Audit de Conformitate HACCP",
  ],
  coverageHeading: "Acoperire națională",
  coverage: [
    { region: "București & Ilfov:", detail: "Dispecerat Dedicat 24/7" },
    { region: "Transilvania:", detail: "Cluj-Napoca, Brașov, Sibiu" },
    { region: "Moldova:", detail: "Iași, Bacău, Suceava" },
    { region: "Vest:", detail: "Timișoara, Arad, Oradea" },
    { region: "Sud & Litoral:", detail: "Constanța, Ploiești, Craiova" },
  ],
  assistanceHeading: "Asistență directă",
  emergencyLabel: "Dispecerat Național Urgențe",
  phone: "+40 721 000 999",
  phoneHref: "tel:+40721000999",
  email: "contact@deratpro.ro",
  emailHref: "mailto:contact@deratpro.ro",
  address: "Str. Preciziei 24, Sector 6, București",
  supportLabel: "Deschide tichet suport",
  copyright:
    "© 2024 DeratPro Solutions S.R.L. Toate drepturile rezervate. · CUI: RO38928190 · J40/12984/2018",
  legalLinks: ["Termeni & Condiții", "Politica GDPR", "ANPC"],
};
