export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  email: string;
  links: SocialLink[];
  hero: {
    headline: string;
    subhead: string;
    ctas: { label: string; href: string; variant: "primary" | "ghost" }[];
    stats: { label: string; value: string }[];
  };
  copy: {
    featuredIntro: string;
    projectsIntro: string;
    skillsIntro: string;
    testimonialsIntro: string;
    projectsPageIntro: string;
  };
  about: {
    story: string[];
    values: { title: string; description: string }[];
  };
  contact: {
    intro: string;
  };
  resume: {
    intro: string;
    highlights: string[];
  };
  skills: { category: string; items: string[] }[];
  privacy: {
    updated: string;
    summary: string;
    items: { title: string; description: string }[];
  };
  testimonials: { quote: string; name: string; role: string }[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  featured: boolean;
  tags: string[];
  stack: string[];
  highlights: string[];
  date: string;
  links: ProjectLink[];
  screenshots: { src: string; alt: string }[];
  problem: string;
  solution: string;
  learnings: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};
