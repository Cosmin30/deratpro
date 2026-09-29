# DeratPro

Landing page modernă și responsive pentru **DeratPro**, o companie fictivă de deratizare, dezinsecție și dezinfecție (DDD).

## Demo

* **Repository:** github.com/Cosmin30/deratpro
* **Live:** https://deratpro-sigma.vercel.app/

---

## Despre proiect

DeratPro este un site de prezentare construit pentru a inspira încredere și pentru a încuraja solicitările de ofertă. Aplicația este dezvoltată în **Next.js + TypeScript**, iar animația din secțiunea Hero este realizată cu **Three.js**, utilizând **React Three Fiber**.

## Funcționalități

* Hero cu animație 3D și buton principal (CTA)
* Secțiune Servicii cu cele trei servicii DDD
* Secțiune „De ce DeratPro” cu avantajele companiei
* Proces de lucru în 3 pași
* Formular de contact cu validare în browser și mesaj de confirmare
* Navigare cu ancore și evidențierea secțiunii active
* Design complet responsive pentru mobil, tabletă și desktop

## Tehnologii

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Three.js
* @react-three/fiber

## Concept de design

Conceptul vizual a fost creat în **Google Stitch** și adaptat într-o implementare funcțională în Next.js, păstrând direcția modernă și minimalistă a designului.

### Prompt utilizat (rezumat)

> Creează o landing page modernă și responsive pentru DeratPro, o companie românească de deratizare, dezinsecție și dezinfecție. Designul trebuie să transmită încredere și profesionalism, să includă un Hero cu un vizual tehnologic abstract, carduri pentru servicii, avantaje, un proces în trei pași și un formular de contact. Folosește o paletă curată cu accente albastre și verzi și adaptează layoutul pentru mobil și desktop.

## Decizii și compromisuri

* Animația Hero folosește particule, conexiuni și o undă discretă de scanare pentru a sugera tehnologie și precizie.
* Scena 3D este implementată cu React Three Fiber și animată prin `useFrame`.
* Formularul validează datele doar în browser, fără integrare cu un backend.
* Conținutul repetat este separat în `src/data/content.ts`, iar fiecare secțiune este organizată ca o componentă reutilizabilă.
* Au fost utilizate doar dependențele necesare proiectului.

## Rulare locală

### Cerințe

* Node.js
* npm

### Instalare

```bash
npm ci
npm run dev
```

Deschide **http://localhost:3000** în browser.

## Verificare

```bash
npm run lint
npm run build
```

## Structura proiectului

```text
src/
├── app/                 # App Router și stiluri globale
├── components/          # Componente reutilizabile
│   └── three/           # Scena Three.js din Hero
├── data/                # Conținut static
├── sections/            # Cele 5 secțiuni ale paginii
└── lib/                 # Utilitare
```

## Autor

**Cosmin Cocea**
