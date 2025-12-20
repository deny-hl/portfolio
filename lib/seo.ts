import type { Metadata } from "next";
import type { Profile, Project } from "@/lib/types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function buildBaseMetadata(profile: Profile): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${profile.name} | ${profile.role}`,
      template: `%s | ${profile.name}`,
    },
    description: profile.shortBio,
    openGraph: {
      type: "website",
      url: siteUrl,
      title: `${profile.name} | ${profile.role}`,
      description: profile.shortBio,
      siteName: profile.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.name} | ${profile.role}`,
      description: profile.shortBio,
    },
  };
}

export function projectMetadata(project: Project, profile: Profile): Metadata {
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url: `${siteUrl}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
    authors: [{ name: profile.name }],
  };
}

export function personJsonLd(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    address: profile.location,
    email: profile.email,
    url: siteUrl,
    sameAs: profile.links.map((link) => link.href),
  };
}

export function projectJsonLd(project: Project, profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    author: {
      "@type": "Person",
      name: profile.name,
    },
    dateCreated: project.date,
    url: `${siteUrl}/projects/${project.slug}`,
    keywords: project.tags.join(", "),
  };
}
