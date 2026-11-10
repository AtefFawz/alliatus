export const siteConfig = {
  name: "Alliatus",
  tagline: "Level up with a curated mastermind circle",
  description:
    "A portfolio concept exploring how small, thoughtful mastermind circles can support shared progress.",
} as const;

/** Sections that appear in the navigation, in page order. */
export const sectionNav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "How it works" },
  { id: "circle", label: "The circle" },
  { id: "guidance", label: "Guidance" },
  { id: "facilitators", label: "Facilitators" },
  { id: "pricing", label: "Plans" },
  { id: "faq", label: "FAQ" },
] as const;

export type SectionId = (typeof sectionNav)[number]["id"];
