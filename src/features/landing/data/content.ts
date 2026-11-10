import aboutImage from "@/assets/about/about.webp";
import faqImage from "@/assets/faq/faq.webp";
import amiraPortrait from "@/assets/facilitators/amira.webp";
import elenaPortrait from "@/assets/facilitators/elena.webp";
import jasonPortrait from "@/assets/facilitators/jason.webp";
import lucasPortrait from "@/assets/facilitators/lucas.webp";
import heroImage from "@/assets/home/hero.webp";
import forYou from "@/assets/work/for-you.webp";
import member from "@/assets/work/member.webp";
import notForYou from "@/assets/work/not-for-you.webp";

/** All copy and data for the landing page lives here, typed, so components stay presentational. */

export { aboutImage, faqImage, heroImage, member };

export interface Pillar {
  title: string;
  description: string;
}

export const aboutIntro =
  "Alliatus is a product concept for a curated mastermind experience: small groups, thoughtful conversations, honest feedback, and shared accountability.";

export const pillars: Pillar[] = [
  {
    title: "Small, handpicked circles",
    description:
      "The concept is designed around small, focused groups rather than broad, noisy networking.",
  },
  {
    title: "Real conversations",
    description:
      "Thoughtful questions, honest feedback, and shared brainstorming make room for practical perspective.",
  },
  {
    title: "Consistent growth",
    description:
      "Regular check-ins are intended to turn good conversations into focused follow-through.",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Share your goals",
    description: "Explore the application flow and describe the kind of peer support you are looking for.",
  },
  {
    number: "02",
    title: "Find your circle",
    description:
      "A matching process would bring together people with complementary goals and perspectives.",
  },
  {
    number: "03",
    title: "Meet with intention",
    description:
      "The proposed experience uses guided online sessions for focused conversation and peer feedback.",
  },
  {
    number: "04",
    title: "Carry it forward",
    description:
      "Turn useful ideas into next steps and return to the circle with an honest progress update.",
  },
];

export const included: string[] = [
  "A proposed private member space",
  "Goal-tracking and reflection tools",
  "Optional session notes and reflection prompts",
  "Session preparation templates",
  "Curated learning resources",
];

export interface Audience {
  title: string;
  items: string[];
  image: string;
  alt: string;
  highlighted: boolean;
}

export const audiences: Audience[] = [
  {
    title: "This is for you if…",
    items: [
      "You’re an entrepreneur, solopreneur, or freelancer",
      "You crave honest feedback and outside perspective",
      "You want to help others while evolving yourself",
      "You value real conversations over shallow networking",
    ],
    image: forYou,
    alt: "A member smiling during an online session",
    highlighted: true,
  },
  {
    title: "This is NOT for you if…",
    items: [
      "You’re just looking to promote your business",
      "You can’t commit to regular attendance",
      "You’re not open to giving or receiving feedback",
      "You prefer passive learning to active participation",
    ],
    image: notForYou,
    alt: "A person working alone at a laptop",
    highlighted: false,
  },
];

/**
 * Fictional sample profiles used to demonstrate the proposed facilitator section.
 * Replace these personas and portraits with consented, verified information before launch.
 */
export interface FacilitatorProfile {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  image: string;
  imageAlt: string;
  number: string;
}

export const facilitatorProfiles: FacilitatorProfile[] = [
  {
    number: "01",
    name: "Amira Sullivan",
    role: "Creative Strategy & Group Facilitation",
    bio: "Creates room for different perspectives and keeps every conversation focused, welcoming, and useful.",
    focus: ["Conversation design", "Creative thinking"],
    image: amiraPortrait,
    imageAlt: "Portrait used for the fictional sample profile of Amira Sullivan",
  },
  {
    number: "02",
    name: "Lucas Varela",
    role: "Accountability & Sustainable Momentum",
    bio: "Turns ambitious plans into clear commitments and helps peers follow through without adding pressure.",
    focus: ["Goal clarity", "Weekly momentum"],
    image: lucasPortrait,
    imageAlt: "Portrait used for the fictional sample profile of Lucas Varela",
  },
  {
    number: "03",
    name: "Elena Morozova",
    role: "Reflection & Community Building",
    bio: "Uses thoughtful prompts to challenge assumptions and help members see their next move more clearly.",
    focus: ["Guided reflection", "Peer connection"],
    image: elenaPortrait,
    imageAlt: "Portrait used for the fictional sample profile of Elena Morozova",
  },
  {
    number: "04",
    name: "Jason Kim",
    role: "Strategy & Practical Growth",
    bio: "Connects strategic thinking with small experiments, helping ideas move from conversation into action.",
    focus: ["Strategic clarity", "Practical action"],
    image: jasonPortrait,
    imageAlt: "Portrait used for the fictional sample profile of Jason Kim",
  },
];

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    question: "What is a mastermind circle?",
    answer:
      "It is a small peer group that meets around shared goals and practical challenges. Members exchange perspectives, ask thoughtful questions, and decide on useful next steps together.",
  },
  {
    question: "Who is the concept designed for?",
    answer:
      "The idea is aimed at entrepreneurs, independent professionals, and people building something who value honest feedback and consistent peer support.",
  },
  {
    question: "How might a session work?",
    answer:
      "A typical session could include a brief check-in, one or two focused member challenges, guided peer discussion, and a commitment each person wants to carry into the next week.",
  },
  {
    question: "How are circles intended to be matched?",
    answer:
      "The proposed matching approach considers each person's goals, current stage, availability, and the perspectives they can contribute to a group.",
  },
  {
    question: "Are the prices shown live membership prices?",
    answer:
      "No. The prices and plan features are illustrative sample content used to demonstrate the interface. This site does not process payments or create memberships.",
  },
  {
    question: "Does the application form send my details?",
    answer:
      "Only when a real submission endpoint is configured by the site operator. In preview mode, the form shows a demo confirmation and does not transmit or store your information.",
  },
  {
    question: "How should a circle handle privacy?",
    answer:
      "The concept assumes clear group agreements around confidentiality and consent. Any real service would need to publish its own privacy policy and recording practices before collecting member information.",
  },
  {
    question: "Can I join a circle through this website?",
    answer:
      "Not yet. This is a front-end product demonstration. The application flow can be connected to a secure form service or a custom backend when the service is ready to accept real applications.",
  },
];
