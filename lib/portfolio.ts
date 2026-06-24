export type NavLink = {
  label: string;
  href: string;
};

export type HeroAction = NavLink & {
  variant: "primary" | "secondary";
};

export type SummarySection = {
  title: string;
  body?: string;
  items?: string[];
};

export type ProjectAction = NavLink;

export type Project = {
  title: string;
  description: string;
  status: "Completed" | "Coming Soon" | "Planned";
  badges: string[];
  actions?: ProjectAction[];
};

export const profile = {
  name: "Rob Merrill",
  initials: "RM",
  role: "Customer-Facing Technical Solutions Builder",
  email: "mailto:hello@robmerrill.dev",
  navLinks: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
};

export const hero = {
  eyebrow: "Technical consulting portfolio",
  headline: "I build practical solutions that solve real business problems.",
  subheadline:
    "I bridge the gap between business needs and technical implementation. With a background in software engineering and technical education, I design, build, document, and explain solutions that improve workflows and create measurable impact.",
  actions: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
  ] satisfies HeroAction[],
  roleTags: [
    "Software Engineering",
    "Workflow Automation",
    "Technical Consulting",
    "Solution Design",
    "Documentation",
    "Customer-Facing Delivery",
  ],
};

export const summarySections: SummarySection[] = [
  {
    title: "What I Do",
    body: "Build lightweight software and workflow solutions that eliminate manual processes and improve business operations.",
  },
  {
    title: "How I Work",
    body: "Partner closely with stakeholders, understand business requirements, prototype quickly, iterate often, and deliver maintainable solutions.",
  },
  {
    title: "Technical Strengths",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "APIs",
      "Workflow Automation",
      "Airtable",
      "GitHub",
      "Vercel",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Event Registration Workflow Automation",
    description: `A real implementation-style workflow automation project for a training organization transitioning from manual spreadsheets and email-based event tracking to a structured registration system.

Focused on:
- Requirements gathering and workflow design
- Data modeling and employee import simulation
- Implementation readiness and launch planning tradeoffs

Simulated a real-world implementation workflow for onboarding and automating event registration processes in a training organization.

Role: Implementation Consultant simulation (post-sale workflow automation)`,
    status: "Completed",
    badges: ["Completed", "Next.js", "Automation", "TypeScript"],
    actions: [
      {
        label: "Live Demo",
        href: "https://event-registration-workflow.vercel.app/",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/robgmerrill/event-registration-workflow",
      },
      {
        label: "Case Study",
        href: "https://github.com/robgmerrill/event-registration-workflow/blob/main/docs/case-study.md",
      },
      {
        label: "Architecture",
        href: "https://github.com/robgmerrill/event-registration-workflow/blob/main/docs/architecture.md",
      },
      {
        label: "Technical Tradeoffs",
        href: "https://github.com/robgmerrill/event-registration-workflow/blob/main/docs/technical-tradeoffs.md",
      },
      { label: "Loom Walkthrough", href: "#" },
    ],
  },
  {
    title: "Customer Onboarding Portal",
    description:
      "A guided onboarding experience designed to collect customer details, clarify implementation steps, and reduce repetitive kickoff communication.",
    status: "Coming Soon",
    badges: ["Coming Soon", "React", "Portal", "Documentation"],
  },
  {
    title: "Help Desk Automation System",
    description:
      "A workflow automation concept for intake, prioritization, routing, and response tracking across internal support requests.",
    status: "Planned",
    badges: ["Planned", "Automation", "APIs", "Operations"],
  },
  {
    title: "Enterprise Proof of Concept",
    description:
      "A concise technical validation project for evaluating requirements, documenting architecture decisions, and presenting a clear implementation path.",
    status: "Planned",
    badges: ["Planned", "Next.js", "REST APIs", "Stakeholders"],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Airtable",
  "GitHub",
  "Vercel",
  "REST APIs",
  "Workflow Automation",
];

export const footerLinks: NavLink[] = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: profile.email },
];
