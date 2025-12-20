import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "teamflow",
    title: "TeamFlow",
    description: "Collaborative sprint planning app with realtime boards and analytics.",
    summary:
      "Built a full-stack planning tool that helps product teams align on sprint scope, track dependencies, and ship faster.",
    featured: true,
    tags: ["Full-Stack", "Collaboration", "SaaS"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    highlights: [
      "Realtime drag-and-drop sprint board",
      "Role-based access with audit logging",
      "Performance budget dashboard"
    ],
    date: "2024-10-01",
    links: [
      { label: "Live Site", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/username/teamflow" }
    ],
    screenshots: [
      { src: "/images/projects/teamflow-1.svg", alt: "TeamFlow sprint board" },
      { src: "/images/projects/teamflow-2.svg", alt: "TeamFlow analytics view" }
    ],
    problem:
      "Planning across multiple squads was fragmented and updates got lost in spreadsheets and chat threads.",
    solution:
      "Designed a unified workspace with realtime status, automated reporting, and clear ownership for every task.",
    learnings: [
      "Scoped realtime updates to reduce unnecessary re-renders",
      "Balanced database indexing with developer ergonomics",
      "Built reusable UI patterns for future product modules"
    ]
  },
  {
    slug: "finch",
    title: "Finch",
    description: "Personal finance dashboard that helps users build better spending habits.",
    summary:
      "A responsive dashboard that visualizes income, expenses, and goals with actionable insights.",
    featured: false,
    tags: ["Frontend", "Data Viz"],
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    highlights: [
      "Customizable budget categories",
      "Interactive charts with CSV export",
      "Mobile-first UX"
    ],
    date: "2024-06-15",
    links: [
      { label: "Live Site", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/username/finch" }
    ],
    screenshots: [
      { src: "/images/projects/finch-1.svg", alt: "Finch dashboard" },
      { src: "/images/projects/finch-2.svg", alt: "Finch mobile charts" }
    ],
    problem:
      "Users wanted a clearer picture of where their money went without digging through spreadsheets.",
    solution:
      "Built an intuitive dashboard with charts, budget alerts, and quick filters for recurring expenses.",
    learnings: [
      "Improved chart accessibility with keyboard support",
      "Optimized large datasets for faster render times",
      "Created data summaries for non-technical users"
    ]
  },
  {
    slug: "clearpulse",
    title: "ClearPulse",
    description: "Healthcare appointment portal with secure scheduling and reminders.",
    summary:
      "A patient portal that streamlines bookings, reminders, and doctor follow-ups.",
    featured: false,
    tags: ["Backend", "Healthcare"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Secure auth and patient data handling",
      "Automated email reminder queue",
      "Admin dashboard for staff"
    ],
    date: "2023-11-20",
    links: [
      { label: "Case Study", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/username/clearpulse" }
    ],
    screenshots: [
      { src: "/images/projects/clearpulse-1.svg", alt: "ClearPulse scheduling" },
      { src: "/images/projects/clearpulse-2.svg", alt: "ClearPulse admin view" }
    ],
    problem:
      "Clinics struggled with last-minute cancellations and manual scheduling workflows.",
    solution:
      "Delivered a self-serve booking portal with automated reminders and a unified admin dashboard.",
    learnings: [
      "Handled sensitive data with careful audit trails",
      "Worked with stakeholders to define success metrics",
      "Iterated on the scheduling UX with patient feedback"
    ]
  },
  {
    slug: "northwind",
    title: "Northwind Supply",
    description: "Inventory management system for a small wholesale business.",
    summary:
      "A lightweight inventory tracker with barcode scanning and supplier insights.",
    featured: false,
    tags: ["Full-Stack", "Operations"],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Inventory alerts and reorder suggestions",
      "Supplier performance reports",
      "Warehouse-friendly tablet layout"
    ],
    date: "2023-03-08",
    links: [
      { label: "Live Demo", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/username/northwind" }
    ],
    screenshots: [
      { src: "/images/projects/northwind-1.svg", alt: "Northwind inventory view" },
      { src: "/images/projects/northwind-2.svg", alt: "Northwind supplier insights" }
    ],
    problem:
      "Manual inventory checks created delays and over-ordering across multiple warehouses.",
    solution:
      "Created a real-time dashboard with barcode scanning and smart reorder alerts.",
    learnings: [
      "Designed workflows optimized for warehouse tablets",
      "Learned to model relational data for reporting",
      "Collaborated closely with operations stakeholders"
    ]
  }
];
