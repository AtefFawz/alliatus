import { z } from "zod";

export const ROLES = [
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "solopreneur", label: "Solopreneur" },
  { value: "freelancer", label: "Freelancer" },
  { value: "other", label: "Something else" },
] as const;

export const STAGES = [
  { value: "idea", label: "Just an idea" },
  { value: "launched", label: "Launched, finding traction" },
  { value: "growing", label: "Growing steadily" },
  { value: "scaling", label: "Scaling up" },
] as const;

const values = <T extends readonly { value: string }[]>(list: T) =>
  list.map((item) => item.value) as [T[number]["value"], ...T[number]["value"][]];

export const applicationSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name").max(80, "That name is too long"),
  email: z
    .string()
    .trim()
    .max(254, "Email is too long")
    .pipe(z.email("Enter a valid email address")),
  role: z.enum(values(ROLES), "Choose the option that fits best"),
  stage: z.enum(values(STAGES), "Choose your current stage"),
  goal: z
    .string()
    .trim()
    .min(30, "Share a little more (at least 30 characters)")
    .max(800, "Please keep it under 800 characters"),
  commitment: z.literal("on", "Please confirm you can attend regularly"),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
export const APPLICATION_FIELDS = ["name", "email", "role", "stage", "goal", "commitment"] as const;
export type ApplicationField = (typeof APPLICATION_FIELDS)[number];
