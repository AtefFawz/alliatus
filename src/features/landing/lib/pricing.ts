export type Billing = "monthly" | "annual";

/** Annual billing charges 10 months for 12: "two months free". */
export const ANNUAL_MONTHS_CHARGED = 10;

export interface Plan {
  id: "starter" | "growth" | "circle-plus";
  name: string;
  /** Monthly price in euros. */
  monthly: number;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 49,
    tagline: "A simple starting point for peer support.",
    features: [
      "2 group sessions per month",
      "Community access",
      "Session summaries",
      "Private messaging",
    ],
    cta: "Explore Starter",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 89,
    tagline: "More structure for consistent momentum.",
    features: [
      "Weekly group sessions",
      "Goal-tracking tools",
      "Full community access",
      "Access to recordings",
      "Priority support",
    ],
    cta: "Explore Growth",
    featured: true,
  },
  {
    id: "circle-plus",
    name: "Circle+",
    monthly: 149,
    tagline: "An expanded concept with individual guidance.",
    features: [
      "Everything in Growth",
      "Monthly 1:1 coaching",
      "Personalised session recaps",
      "VIP Q&A calls",
      "Early event access",
    ],
    cta: "Explore Circle+",
    featured: false,
  },
];

/** Effective price per month for the chosen billing period. */
export function pricePerMonth(plan: Plan, billing: Billing): number {
  if (billing === "monthly") return plan.monthly;
  return Math.round(((plan.monthly * ANNUAL_MONTHS_CHARGED) / 12) * 100) / 100;
}

/** What is charged per year when billed annually. */
export function annualTotal(plan: Plan): number {
  return plan.monthly * ANNUAL_MONTHS_CHARGED;
}

export function formatEuro(amount: number): string {
  return Number.isInteger(amount) ? `€${amount}` : `€${amount.toFixed(2)}`;
}
