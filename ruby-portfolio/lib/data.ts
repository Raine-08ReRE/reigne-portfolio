export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  screenshot: string;
  liveUrl?: string;
  repoUrl?: string;
  year: string;
};

export type ProcessStep = {
  number: string;
  name: string;
  description: string;
};

export type Credential = {
  title: string;
  issuer: string;
  date: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  honors: string;
  location: string;
};

export const profile = {
  name: "Reigne Cristine Rivera",
  firstName: "REIGNE",
  lastName: "RIVERA.",
  role: "Frontend Developer & UI/UX",
  location: "Taguig City, PH",
  year: 2025,
  email: "reignerivera02@gmail.com",
  github: "https://github.com/Raine-08ReRE",
  linkedin: "https://www.linkedin.com/in/reigne-cristine-rivera",
  tagline: "Crafted with intention, built with precision",
  bio: "Computer Science student at the University of Makati, majoring in Application Development. I build interfaces where design precision meets engineering craft — translating Figma files into living products. Currently leading UI/UX and frontend for ForeRent, a Laravel-based property management platform. Based in Taguig, open to freelance and entry-level frontend roles.",
  primaryStack: ["REACT", "NEXT.JS", "TYPESCRIPT", "FRAMER MOTION"],
  bioTags: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Laravel",
    "Figma",
    "MySQL",
  ],
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Discover",
    description:
      "Listen first. Map the constraints, the audience, the success criteria — before a single pixel is placed.",
  },
  {
    number: "02",
    name: "Design",
    description:
      "Translate intent into structure in Figma. Type, color, motion — every decision earns its place or gets cut.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Ship working code that mirrors the design. Accessible, responsive, type-safe. Reviewed before merged.",
  },
  {
    number: "04",
    name: "Ship",
    description:
      "Deploy, measure, iterate. The launch is the start, not the finish line — real users surface real edges.",
  },
];

export const featuredProjects: Project[] = [
  {
    slug: "forerent",
    title: "ForeRent",
    summary:
      "Led UI/UX design and frontend development for an automated rental property management platform. Built in Laravel + Tailwind CSS, focused on a clean dashboard for landlords and a frictionless flow for tenants.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Figma"],
    screenshot: "/images/projects/forerent.webp",
    year: "2025 — Present",
  },
  {
    slug: "ready-seat-go",
    title: "Ready, Seat, Go",
    summary:
      "Engineered a full-stack real-time seat reservation system. Live availability updates, conflict-free booking, and a clean admin view. CodeIgniter on the backend, vanilla JS on the frontend.",
    tech: ["CodeIgniter", "JavaScript", "HTML/CSS", "MySQL"],
    screenshot: "/images/projects/ready-seat-go.webp",
    year: "2024 — 2025",
  },
  {
    slug: "merchants-seeker",
    title: "The Merchant's Seeker",
    summary:
      "Managed the full software lifecycle as solo game developer — design, mechanics, art direction, and code. Built in Unity with C#, shipped as a mobile experience.",
    tech: ["Unity", "C#", "Mobile"],
    screenshot: "/images/projects/merchants-seeker.webp",
    year: "2024 — 2025",
  },
];

export const otherWork: Project[] = [
  {
    slug: "pillfluence",
    title: "PillFluence",
    summary:
      "Native Android medication tracker. Built in Java with Android Studio.",
    tech: ["Java", "Android"],
    screenshot: "/images/projects/pillfluence.webp",
    year: "2023 — 2024",
  },
  {
    slug: "mrvl",
    title: "MRVL",
    summary:
      "Full-stack e-commerce / library management application built in C#.",
    tech: ["C#", "MySQL"],
    screenshot: "/images/projects/mrvl.webp",
    year: "2022 — 2023",
  },
];

export const education: Education[] = [
  {
    institution: "University of Makati",
    degree: "BS Computer Science — Application Development",
    period: "Aug 2022 — Present",
    honors: "Dean's Lister · LANI Scholar · CAS Merit Scholar",
    location: "Taguig City, PH",
  },
  {
    institution: "University of Makati",
    degree: "Senior High School — STEM Strand",
    period: "Aug 2020 — May 2022",
    honors: "Graduated with High Honors",
    location: "Taguig City, PH",
  },
];

export const certifications: Credential[] = [
  { title: "SQL", issuer: "HackerRank", date: "Jan 2026" },
  { title: "CSS", issuer: "HackerRank", date: "Jan 2026" },
  { title: "IT Specialist — Databases", issuer: "Certiport", date: "Dec 2025" },
  {
    title: "SHE++ Masterclass on Alibaba Cloud System",
    issuer: "PhilDev S&T Foundation & Alibaba Cloud",
    date: "Feb 2025",
  },
  {
    title: "SHE++ Workshop — Design Thinking & Strategic Foresight",
    issuer: "PhilDev S&T Foundation & Alibaba Cloud",
    date: "Feb 2025",
  },
  {
    title: "SHE++ Workshop — Leadership & Technopreneurial Mindset",
    issuer: "PhilDev S&T Foundation & Alibaba Cloud",
    date: "Feb 2025",
  },
];
