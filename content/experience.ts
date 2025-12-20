import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Intern",
    company: "BrightLabs",
    period: "2024",
    summary: "Shipped new onboarding flows and API integrations for a B2B SaaS product.",
    bullets: [
      "Led the rebuild of the onboarding checklist in React and TypeScript",
      "Reduced initial load time by 28% through code-splitting and caching",
      "Partnered with design to improve accessibility across core flows"
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Independent",
    period: "2022 - 2023",
    summary: "Delivered responsive sites and web apps for startups and local businesses.",
    bullets: [
      "Built marketing sites with conversion-focused UX",
      "Integrated Stripe checkout and email automation",
      "Provided ongoing maintenance and analytics reporting"
    ]
  },
  {
    role: "Teaching Assistant",
    company: "State University",
    period: "2021 - 2022",
    summary: "Supported coursework in web development and data structures.",
    bullets: [
      "Ran weekly labs on React fundamentals",
      "Helped students debug complex projects",
      "Organized code reviews and demo days"
    ]
  }
];
