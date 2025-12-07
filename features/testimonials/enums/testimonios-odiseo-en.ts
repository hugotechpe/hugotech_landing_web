import type { TestimonioCardProps } from "@/components/cards/TestimonioCard";

/**
 * Real testimonials from Odiseo program (Vonex)
 * Agile Coaching program and soft skills development
 *
 * Note: Some participants chose to remain anonymous
 */

export interface TestimonioOdiseo
  extends Omit<TestimonioCardProps, "avatarSrc" | "avatarAlt"> {
  esAnonimo: boolean;
  empresa: string;
  programa?: string;
}

export const TESTIMONIOS_ODISEO_EN: TestimonioOdiseo[] = [
  {
    quote:
      "As a coach, Hugo helped not only me but my entire team to work in coordination, express my ideas, improve workflow, grow professionally and personally, and above all, expand and enhance my soft skills.",
    authorName: "Junior Mayanga Contreras",
    jobTitle: "Frontend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Soft Skills", "Communication", "Teamwork"],
    linkedInUrl: undefined,
  },
  {
    quote:
      "This experience helped me improve my leadership level and become more human.",
    authorName: "Anonymous Participant",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Leadership", "Personal Growth"],
  },
  {
    quote:
      "Since the workshops with you started, I feel the team's mindset changed, improving collaboration and communication among us, becoming a more organized team. On a personal level, I feel I've improved my soft skills and also enhanced my technical skills, as you helped us identify which qualities we were lacking and which we should improve.",
    authorName: "Anonymous Participant",
    jobTitle: "Frontend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Teamwork", "Soft Skills", "Mentoring"],
    highlight: "changed the team's mindset",
  },
  {
    quote:
      "I'm grateful for the opportunity to be part of this training experience. In each session, you helped me realize that many times I don't perform at 100% not because I don't know how to do something, but because the soft side is deficient, out of practice, since it's not always given the value it has. I learned to develop and practice effective communication with the team and others, to lose the fear of expressing myself (doubts, questions, ideas), and also to know how to address situations that affect the technical side of the team.",
    authorName: "Anonymous Participant",
    jobTitle: "Software Analyst",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Communication", "Confidence", "Agility"],
    highlight: "the soft side is deficient",
  },
  {
    quote:
      "This time of coaching with you allowed me to discover how important it is to develop my soft skills and how they greatly influence my work and personal life. I'm very grateful for that.",
    authorName: "Yoemir De Oro",
    jobTitle: "QA Engineer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Soft Skills", "Personal Growth"],
  },
  {
    quote:
      "Personally, you helped me reinforce agility concepts, I learned new dynamics to perform better planning, retros, dailies, etc. Clarity in my work role, the tasks allowed me to investigate more, clarifying concepts and learning new ones, the importance of being empathetic, new tools and dynamics for process improvement, improving as a moderator, the responsibility and involvement an agile coach should have, reminding me that we should always seek to be a better version.",
    authorName: "Alan Willer Perez Llamos",
    jobTitle: "Scrum Master",
    empresa: "Odiseo",
    esAnonimo: false,
    tags: ["Agility", "Leadership", "Growth"],
    highlight: "be a better version",
  },
  {
    quote:
      "You helped me express my feelings better, and want to improve attitudes I thought were impossible to change.",
    authorName: "Anonymous Participant",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Communication", "Self-awareness"],
  },
  {
    quote:
      "Usually in meetings I didn't express my ideas or discomforts, and thanks to the sessions I was able to feel confident as you encouraged me to leave my comfort zone. Maybe others might have felt annoyed, but personally it was like a splash of cold water that made me react and understand that doing the same thing wasn't going to achieve the desired results.",
    authorName: "Jhon Landeo Sanchez",
    jobTitle: "Database Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Confidence", "Personal Growth"],
    highlight: "leave my comfort zone",
  },
  {
    quote:
      "I want to share my experience about the mentoring I received. Most of the meetings I attended were focused on introspection, something that was quite difficult for me at first, because I've always been more technically oriented. Talking from the 'I' perspective is complicated, especially in the software area, where it tends to be our Achilles' heel. However, thanks to the mentoring with Hugo, I managed to leave my comfort zone. He is a person who truly breaks paradigms and works to help you find your best version. Only after recognizing and strengthening that personal version can one project it to the team. And that's when real changes begin and when we can truly contribute to a high-performance team.",
    authorName: "Melissa Gutierrez Montalban",
    jobTitle: "QA Engineer",
    empresa: "Odiseo",
    esAnonimo: false,
    tags: ["Self-awareness", "Teamwork", "Leadership"],
    highlight: "breaks paradigms",
  },
  {
    quote:
      "Hugo is very clear. He manages to generate the confidence one needs to work with him and take advantage of what he teaches.",
    authorName: "Anonymous Participant",
    jobTitle: "Technical Coordinator",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Confidence", "Communication"],
  },
  {
    quote:
      "The sessions with Hugo helped me understand that professional development goes beyond the technical. I learned to express my ideas clearly, to generate trust in the team, and to raise my personal standards. His approach inspired me to reflect on my role and to always seek to be a better version of myself.",
    authorName: "Anonymous Participant",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Personal Growth", "Communication", "Leadership"],
  },
];

export function getTestimoniosOdiseoEn() {
  return TESTIMONIOS_ODISEO_EN;
}
