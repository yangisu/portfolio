export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
};

export const portfolioData = {
  profile: {
    name: "[본인 이름]",
    role: "Frontend Developer",
    introduction:
      "I design and build thoughtful web products with strong UX fundamentals and reliable engineering quality.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    experience: "[입력]",
  },
  about: {
    description:
      "I focus on clean architecture, measurable outcomes, and practical collaboration. My goal is to ship interfaces that are fast, accessible, and easy for teams to maintain.",
    workStyle: [
      "User-first decisions backed by analytics and qualitative feedback",
      "Iterative delivery with short feedback loops",
      "Clear communication across design, product, and engineering",
    ],
    strengths: [
      "Component architecture and design system thinking",
      "Performance optimization and Core Web Vitals improvements",
      "Structured collaboration in cross-functional teams",
    ],
    values: ["Clarity", "Ownership", "Craft", "Consistency"],
  },
  skillGroups: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      title: "Tools",
      skills: ["Firebase", "Vercel", "Figma", "GitHub", "Jest", "Playwright"],
    },
    {
      title: "Workflow",
      skills: [
        "Design-to-code handoff",
        "Code review",
        "Performance tuning",
        "Technical documentation",
        "Agile delivery",
      ],
    },
  ],
  experiences: [
    {
      period: "2025 - Present",
      title: "Frontend Developer",
      company: "Product Team",
      summary:
        "Led interface modernization for core dashboard experiences, improving usability and reducing implementation overhead.",
    },
    {
      period: "2023 - 2025",
      title: "Frontend Engineer",
      company: "Digital Studio",
      summary:
        "Built reusable component patterns and collaborated with designers to standardize visual and interaction quality.",
    },
    {
      period: "2021 - 2023",
      title: "Web Developer",
      company: "Startup Environment",
      summary:
        "Delivered MVP features quickly while establishing robust frontend foundations for future scale.",
    },
  ],
  projects: [
    {
      title: "InsightBoard Analytics",
      description:
        "A product analytics dashboard with role-based views, live trend visualizations, and action-focused reporting.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/your-username/insightboard",
      demoUrl: "https://insightboard-demo.vercel.app",
    },
    {
      title: "FlowTask Workspace",
      description:
        "A team task management platform featuring smart filters, activity timelines, and collaboration-ready UI patterns.",
      tags: ["React", "Zustand", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/your-username/flowtask",
      demoUrl: "https://flowtask-demo.vercel.app",
    },
    {
      title: "Commerce UI Revamp",
      description:
        "A conversion-focused storefront redesign that improved checkout completion through cleaner information hierarchy.",
      tags: ["Next.js", "A/B Testing", "Performance", "Accessibility"],
      githubUrl: "https://github.com/your-username/commerce-ui-revamp",
      demoUrl: "https://commerce-ui-demo.vercel.app",
    },
    {
      title: "Dev Portfolio System",
      description:
        "A modular portfolio starter template with data-driven sections, reusable components, and responsive behavior.",
      tags: ["Next.js", "Tailwind CSS", "Reusable Components"],
      githubUrl: "https://github.com/your-username/dev-portfolio-system",
      demoUrl: "https://portfolio-system-demo.vercel.app",
    },
  ] as Project[],
  caseStudy: {
    title: "Case Study: InsightBoard Analytics",
    context:
      "A B2B SaaS team needed a cleaner analytics experience to help non-technical users discover key trends quickly.",
    challenge:
      "The previous dashboard had low signal-to-noise ratio, inconsistent component behavior, and poor mobile usability.",
    approach: [
      "Built a reusable dashboard UI system with strict spacing and typography rules",
      "Reworked information architecture around decision-oriented user journeys",
      "Introduced progressive disclosure and optimized data visualization density",
      "Improved loading strategy with route-level caching and skeleton states",
    ],
    outcome: [
      "Reduced time-to-insight by 37% in internal usability tests",
      "Improved mobile engagement with responsive card-first layouts",
      "Cut UI implementation time for new analytics modules by 32%",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Chart.js"],
  },
  contact: {
    email: "youremail@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },
};
