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
  image?: string;
  hours?: string;
};

export type TechCategory = {
  label: string;
  count: string;
  items: string[];
};

export type TechCard = {
  name: string;
  initial: string;
  category: string;
  year: string;
  note: string;
  size: "lg" | "md" | "sm";
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  honors: string;
  location: string;
};

export type Affiliation = {
  role: string;
  org: string;
  period: string;
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
  primaryRoles: ["UI/UX DESIGNER", "FRONTEND DEV", "FULL-STACK DEV"],
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

export const techStack: TechCategory[] = [
  {
    label: "LANGUAGES",
    count: "07",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "PHP", "C#", "Java"],
  },
  {
    label: "FRAMEWORKS",
    count: "07",
    items: [
      "React",
      "Next.js",
      "Laravel",
      "Tailwind CSS",
      "CodeIgniter",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    label: "TOOLS",
    count: "05",
    items: ["VS Code", "Git / GitHub", "Docker", "Android Studio", "Unity"],
  },
  {
    label: "DESIGN",
    count: "04",
    items: ["Figma", "Canva", "UI/UX Design", "Hi-Fi Prototyping"],
  },
  {
    label: "DATABASES",
    count: "02",
    items: ["MySQL", "SQL"],
  },
];

export const techCollection: TechCard[] = [
  // Featured / large
  {
    name: "React",
    initial: "R",
    category: "FRAMEWORK",
    year: "2025",
    note: "Component-driven UIs at scale. The lingua franca of modern frontend.",
    size: "lg",
  },
  {
    name: "Next.js",
    initial: "N",
    category: "FRAMEWORK",
    year: "2025",
    note: "App Router, server components, zero-config deploys. This portfolio.",
    size: "lg",
  },
  {
    name: "TypeScript",
    initial: "TS",
    category: "LANGUAGE",
    year: "2025",
    note: "Type-safe components. The professionalism signal mid-roles look for.",
    size: "lg",
  },
  {
    name: "Laravel",
    initial: "L",
    category: "FRAMEWORK",
    year: "2025",
    note: "Backend MVC powering ForeRent's property management platform.",
    size: "lg",
  },
  {
    name: "Figma",
    initial: "Fi",
    category: "DESIGN",
    year: "2023",
    note: "Where the design lives before it becomes code. Hi-fi prototyping home.",
    size: "lg",
  },
  // Medium
  {
    name: "Tailwind CSS",
    initial: "Tw",
    category: "FRAMEWORK",
    year: "2024",
    note: "Utility-first CSS. Pairs with shadcn for consistent component design.",
    size: "md",
  },
  {
    name: "JavaScript",
    initial: "JS",
    category: "LANGUAGE",
    year: "2022",
    note: "The runtime that runs the web. Foundation of everything client-side.",
    size: "md",
  },
  {
    name: "PHP",
    initial: "P",
    category: "LANGUAGE",
    year: "2023",
    note: "Server-side language behind ForeRent and Ready, Seat, Go.",
    size: "md",
  },
  {
    name: "C#",
    initial: "C#",
    category: "LANGUAGE",
    year: "2023",
    note: "Unity scripting for The Merchant's Seeker. Strong typing, OOP roots.",
    size: "md",
  },
  {
    name: "MySQL",
    initial: "My",
    category: "DATABASE",
    year: "2022",
    note: "Relational data home. Powers every full-stack project shipped.",
    size: "md",
  },
  {
    name: "Git / GitHub",
    initial: "Gh",
    category: "TOOL",
    year: "2022",
    note: "Version control + collaboration. Where code history is told.",
    size: "md",
  },
  {
    name: "Unity",
    initial: "U",
    category: "TOOL",
    year: "2024",
    note: "Game engine. Shipped The Merchant's Seeker as solo developer.",
    size: "md",
  },
  {
    name: "Framer Motion",
    initial: "Fm",
    category: "FRAMEWORK",
    year: "2025",
    note: "Every animation in this portfolio — letter physics, parallax, springs.",
    size: "md",
  },
  // Small
  {
    name: "HTML",
    initial: "H",
    category: "LANGUAGE",
    year: "2022",
    note: "The structure of the web.",
    size: "sm",
  },
  {
    name: "CSS",
    initial: "C",
    category: "LANGUAGE",
    year: "2022",
    note: "The skin and the soul.",
    size: "sm",
  },
  {
    name: "Java",
    initial: "Ja",
    category: "LANGUAGE",
    year: "2023",
    note: "Native Android. PillFluence medication tracker.",
    size: "sm",
  },
  {
    name: "VS Code",
    initial: "Vs",
    category: "TOOL",
    year: "2022",
    note: "Editor of choice.",
    size: "sm",
  },
  {
    name: "Docker",
    initial: "D",
    category: "TOOL",
    year: "2024",
    note: "Containerized dev environments.",
    size: "sm",
  },
  {
    name: "Android Studio",
    initial: "As",
    category: "TOOL",
    year: "2023",
    note: "Native Android development IDE.",
    size: "sm",
  },
  {
    name: "CodeIgniter",
    initial: "Ci",
    category: "FRAMEWORK",
    year: "2024",
    note: "Lightweight PHP MVC. Ready, Seat, Go.",
    size: "sm",
  },
];

export const techMarqueeItems = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "LARAVEL",
  "TAILWIND",
  "FIGMA",
  "MYSQL",
  "PHP",
  "JAVASCRIPT",
  "C#",
  "UNITY",
  "JAVA",
  "DOCKER",
  "FRAMER MOTION",
  "CODEIGNITER",
  "BOOTSTRAP",
];

export const affiliations: Affiliation[] = [
  {
    role: "Creatives Committee Member",
    org: "CCIS Student Council, University of Makati",
    period: "Aug 2022 — May 2025",
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
    hours: "8 hours",
    image: "/images/certificates/she-alibaba-cloud.webp",
  },
  {
    title: "SHE++ Workshop — Design Thinking & Strategic Foresight",
    issuer: "PhilDev S&T Foundation & Alibaba Cloud",
    date: "Feb 2025",
    hours: "12 hours",
    image: "/images/certificates/she-design-thinking.webp",
  },
  {
    title: "SHE++ Workshop — Leadership & Technopreneurial Mindset",
    issuer: "PhilDev S&T Foundation & Alibaba Cloud",
    date: "Feb 2025",
    hours: "12 hours",
    image: "/images/certificates/she-leadership.webp",
  },
];
