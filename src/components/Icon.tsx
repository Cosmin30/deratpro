import type { SVGProps } from "react";

export type IconName =
  | "shield"
  | "shieldCheck"
  | "shieldSearch"
  | "verified"
  | "building"
  | "stopwatch"
  | "sun"
  | "idCard"
  | "sparkles"
  | "zap"
  | "leaf"
  | "badge"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "arrow";

const paths: Record<IconName, string[]> = {
  shield: ["M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"],
  shieldCheck: [
    "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z",
    "m8.5 12.5 2.3 2.3 4.7-5",
  ],
  shieldSearch: [
    "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z",
    "M11 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
    "m13 14 2 2",
  ],
  verified: [
    "m12 2.5 2.1 1.4 2.5-.2 1.2 2.3 2.4 1.2-.2 2.5 1.4 2.3-1.4 2.3.2 2.5-2.4 1.2-1.2 2.3-2.5-.2L12 21.5l-2.1-1.4-2.5.2-1.2-2.3-2.4-1.2.2-2.5L2.6 12l1.4-2.3-.2-2.5 2.4-1.2 1.2-2.3 2.5.2L12 2.5Z",
    "m8.5 12 2.2 2.2 4.8-4.8",
  ],
  building: [
    "M3 21V4h9v17M12 9h9v12M6 7h.01M9 7h.01M6 10h.01M9 10h.01M6 13h.01M9 13h.01M6 16h.01M9 16h.01M15 12h.01M18 12h.01M15 15h.01M18 15h.01M15 18h.01M18 18h.01M2 21h20",
  ],
  stopwatch: [
    "M10 2h4M12 14V9m5.5-5.5 1.5-1.5",
    "M12 6a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z",
  ],
  sun: [
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
    "M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12",
  ],
  idCard: [
    "M3 5h18v14H3zM15 10h3m-3 4h3",
    "M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3 4c0-1.7 1.2-2.5 3-2.5s3 .8 3 2.5",
  ],
  sparkles: ["M12 3 14.1 9.9 21 12l-6.9 2.1L12 21l-2.1-6.9L3 12l6.9-2.1L12 3Z"],
  zap: ["m13 2-3 9h7L8 22l3-9H4l9-11Z"],
  leaf: ["M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16ZM5 21c2-5 5-8 10-11"],
  badge: [
    "M12 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z",
    "m8.5 15-1 7 4.5-2.5 4.5 2.5-1-7",
    "m9.5 10 1.7 1.7 3.3-3.4",
  ],
  phone: [
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.8a2 2 0 0 1-.6 1.7L7 10a16 16 0 0 0 7 7l1.8-1.9a2 2 0 0 1 1.7-.6l2.8.4a2 2 0 0 1 1.7 2Z",
  ],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6"],
  pin: [
    "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z",
    "M14.5 10a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z",
  ],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-16v6l4 2"],
  check: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m7.5 12 3 3 6-6"],
  arrow: ["M5 12h14m-7-7 7 7-7 7"],
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export default function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name].map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}
