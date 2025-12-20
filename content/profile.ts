import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Jordan Lee",
  role: "Junior Full-Stack Developer",
  location: "Austin, TX",
  shortBio:
    "I build accessible web apps with thoughtful UX, clean code, and measurable performance wins.",
  email: "hello@jordanlee.dev",
  links: [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
    { label: "Email", href: "mailto:hello@jordanlee.dev" }
  ],
  hero: {
    headline: "Building reliable, human-centered web products from idea to launch.",
    subhead:
      "I partner with teams to ship fast, responsive experiences using React, TypeScript, and modern backend tooling.",
    ctas: [
      { label: "View Projects", href: "/projects", variant: "primary" },
      { label: "Contact Me", href: "/contact", variant: "ghost" }
    ],
    stats: [
      { label: "Projects shipped", value: "12+" },
      { label: "Focus", value: "Full-stack" },
      { label: "Now", value: "Open to roles" }
    ]
  },
  copy: {
    featuredIntro: "A selection of recent projects focused on product impact and clean execution.",
    projectsIntro: "Filter by focus area and explore detailed case studies.",
    skillsIntro: "Tools and areas I use most often in full-stack delivery.",
    testimonialsIntro: "Feedback from teams and collaborators.",
    projectsPageIntro: "Browse a collection of full-stack and frontend projects."
  },
  about: {
    story: [
      "I started building web apps while studying computer science and fell in love with solving real problems through software.",
      "Today I focus on full-stack development with an emphasis on accessibility, performance, and clean developer handoffs.",
      "I enjoy collaborating with designers, turning messy requirements into scalable systems, and shipping features that delight users."
    ],
    values: [
      {
        title: "Craft with purpose",
        description: "Every component should serve a user need and be simple to extend."
      },
      {
        title: "Communicate early",
        description: "I share progress, call out risks, and collaborate across disciplines."
      },
      {
        title: "Ship and learn",
        description: "Rapid feedback loops help us iterate toward the best outcome."
      }
    ]
  },
  contact: {
    intro:
      "Have a role, project, or collaboration in mind? Send a note and I will reply within two business days."
  },
  resume: {
    intro:
      "A snapshot of my experience across web apps, APIs, and product-focused delivery.",
    highlights: [
      "React, Next.js, TypeScript, Node.js",
      "API design, database schema modeling, auth",
      "Testing, CI/CD, and performance tuning"
    ]
  },
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs", "Auth"] },
    { category: "Tooling", items: ["Git", "CI/CD", "Vercel", "Testing Library"] }
  ],
  privacy: {
    updated: "January 2025",
    summary:
      "This site only collects the information you send in the contact form. I never sell or share your data.",
    items: [
      {
        title: "What is collected",
        description:
          "Your name, email, subject, and message are used only to respond to your inquiry."
      },
      {
        title: "How it is stored",
        description:
          "Messages are logged securely and retained only as long as needed to follow up."
      },
      {
        title: "Your control",
        description:
          "You can request deletion by emailing me anytime using the address on this page."
      }
    ]
  },
  testimonials: [
    {
      quote: "Clear communication and reliable delivery. Jordan made our launch feel effortless.",
      name: "Avery Smith",
      role: "Product Manager"
    },
    {
      quote: "Thoughtful code, clean handoff, and great attention to accessibility.",
      name: "Riley Chen",
      role: "UX Designer"
    }
  ]
};
