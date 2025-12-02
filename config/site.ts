export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HugoTech",
  title: "HugoTech - Mentoring Tech con Propósito | Coach Profesional ICF",
  description:
    "Acompaño a jóvenes talentos tech a encontrar su propósito en la era de la IA. Sesiones 1 a 1 gratuitas de coaching y mentoring tecnológico. Equipos de alto rendimiento con cultura consciente.",
  keywords: [
    "mentoring tech",
    "coaching para jóvenes profesionales",
    "carrera tech",
    "propósito profesional",
    "primer empleo TI",
    "desarrollo profesional tech",
    "anti-burnout",
    "liderazgo ágil",
    "equipos de alto rendimiento",
    "transformación digital consciente",
    "IA y propósito",
    "mentalidad de crecimiento",
    "coach profesional ICF",
    "seguridad psicológica",
    "retención de talento tech",
  ],
  author: {
    name: "Hugo Casanova",
    role: "Coach Profesional ICF, Mentor Tech, Líder Ágil",
    image: "/images/image1.png",
    linkedin: "https://linkedin.com/in/hugocasanova",
  },
  url: "https://hugotech.pe",
  ogImage: "/images/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/in/hugocasanova",
    facebook: "https://facebook.com/hugotechpe",
    instagram: "https://instagram.com/hugotechpe",
    calendly: "https://calendly.com/hugotechpe",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
