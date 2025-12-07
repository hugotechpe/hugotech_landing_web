import type { TestimonioCardProps } from "@/components/cards/TestimonioCard";

/**
 * Testimonios reales del programa Odiseo (Vonex)
 * Programa de Agile Coaching y desarrollo de habilidades blandas
 *
 * Nota: Algunos participantes eligieron mantener anonimato
 */

export interface TestimonioOdiseo
  extends Omit<TestimonioCardProps, "avatarSrc" | "avatarAlt"> {
  esAnonimo: boolean;
  empresa: string;
  programa?: string;
}

export const TESTIMONIOS_ODISEO: TestimonioOdiseo[] = [
  {
    quote:
      "Cómo coach Hugo me ayudó no solo a mi sino a mi equipo a trabajar en coordinación, expresar mis ideas, mejorar el flujo de trabajo, crecer en el lado profesional y humano y sobre todo expandir y mejorar mis habilidades blandas",
    authorName: "Junior Mayanga Contreras",
    jobTitle: "Frontend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Habilidades Blandas", "Comunicación", "Trabajo en Equipo"],
    linkedInUrl: undefined, // Agregar si está disponible
  },
  {
    quote:
      "En esta experiencia me ha ayudado a mejorar mi nivel de liderazgo y ser más humano",
    authorName: "Participante Anónimo",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Liderazgo", "Crecimiento Personal"],
  },
  {
    quote:
      "Desde que empezaron los talleres contigo siento que cambió la mentalidad del equipo mejorando la colaboración y la comunicación entre nosotros siendo un equipo más organizado. A nivel personal siento que he mejorado mis habilidades blandas y también siento que he potenciado mis habilidades técnicas ya que nos has ayudado a identificar que cualidades nos hacían falta y cuales debemos mejorar.",
    authorName: "Participante Anónimo",
    jobTitle: "Frontend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Trabajo en Equipo", "Habilidades Blandas", "Mentoría"],
    highlight: "cambió la mentalidad del equipo",
  },
  {
    quote:
      "Estoy agradecida por la oportunidad de formar parte de esta experiencia de formación. En cada sesión me ayudaste a darme cuenta que muchas veces no rindo al 100% no por no saber hacer algo sino porque la parte blanda está deficiente, fuera de práctica ya que no siempre se le da ese valor que tiene. He aprendido a desarrollar y poner en práctica la comunicación efectiva con el equipo y demás, en perder el miedo a expresarme (dudas, consultas, ideas) y también a saber cómo abordar situaciones que afectan la parte técnica del equipo.",
    authorName: "Participante Anónimo",
    jobTitle: "Analista de Software",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Comunicación", "Confianza", "Agilidad"],
    highlight: "la parte blanda está deficiente",
  },
  {
    quote:
      "En este tiempo de coaching contigo me ha permito descubrir lo importante que es desarrollar mis habilidades blandas y como estas influyen en gran manera en mi vida laboral y personal. Estoy muy agradecido por eso.",
    authorName: "Yoemir De Oro",
    jobTitle: "QA Engineer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Habilidades Blandas", "Crecimiento Personal"],
  },
  {
    quote:
      "En lo personal, me ayudaste a reforzar conceptos de agilidad, aprendí nuevas dinámicas para realizar un mejor planning, retros, daily, etc. Claridad en mi rol de trabajo, las tareas me permitieron investigar más logrando aclarar conceptos y aprendiendo nuevos, la importancia de ser empático, nuevas herramientas y dinámicas para mejora de procesos, mejorar como moderador, la responsabilidad e involucramiento que debe tener un agile coach, recordarme que debemos buscar siempre ser una versión mejor.",
    authorName: "Alan Willer Perez Llamos",
    jobTitle: "Scrum Master",
    empresa: "Odiseo",
    esAnonimo: false,
    tags: ["Agilidad", "Liderazgo", "Crecimiento"],
    highlight: "ser una versión mejor",
  },
  {
    quote:
      "Me ayudaste a poder expresarme mejor mi sentir, y querer mejorar actitudes que creía imposible cambiar",
    authorName: "Participante Anónimo",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Comunicación", "Autoconocimiento"],
  },
  {
    quote:
      "Usualmente en las reuniones no expresaba mis ideas o incomodidades, y gracias a las sesiones pude sentirme confiado ya que me animaste a salir de mi zona de confort, talvez otros pudieron haberse sentido fastidiado pero personalmente fue como un baldazo de agua que me hizo reaccionar y entender que haciendo lo mismo no iba a conseguir los resultados deseados",
    authorName: "Jhon Landeo Sanchez",
    jobTitle: "Database Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: false,
    tags: ["Confianza", "Crecimiento Personal"],
    highlight: "salir de mi zona de confort",
  },
  {
    quote:
      "Quiero compartir mi experiencia sobre la mentoría que recibí. La mayor parte de las reuniones a las que asistí estuvieron enfocadas en la introspección, algo que al inicio me costó bastante, porque siempre he estado más orientada a lo técnico. Hablar desde el 'yo' es complicado, especialmente en el área de software, donde suele ser nuestro talón de Aquiles. Sin embargo, gracias a las mentorías con Hugo, logré salir de mi zona de confort. Él es una persona que realmente rompe paradigmas y trabaja en ayudarte a encontrar tu mejor versión. Solo después de reconocer y fortalecer esa versión personal, uno puede proyectarla al equipo. Y es ahí cuando comienzan los cambios reales y cuando podemos aportar de verdad a un equipo de alto rendimiento.",
    authorName: "Melissa Gutierrez Montalban",
    jobTitle: "QA Engineer",
    empresa: "Odiseo",
    esAnonimo: false,
    tags: ["Autoconocimiento", "Trabajo en Equipo", "Liderazgo"],
    highlight: "rompe paradigmas",
  },
  {
    quote:
      "Hugo es bastante claro. Logra generar la confianza que uno necesita para poder trabajar con él y poder sacar provecho de lo que enseña",
    authorName: "Participante Anónimo",
    jobTitle: "Coordinador Técnico",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Confianza", "Comunicación"],
  },
  {
    quote:
      "Las sesiones con Hugo me ayudaron a entender que el desarrollo profesional va más allá de lo técnico. Aprendí a expresar mis ideas con claridad, a generar confianza en el equipo y a elevar mis estándares personales. Su enfoque me inspiró a reflexionar sobre mi rol y a buscar siempre ser una mejor versión de mí mismo.",
    authorName: "Participante Anónimo",
    jobTitle: "Backend Developer",
    empresa: "Vonex / Odiseo",
    esAnonimo: true,
    tags: ["Crecimiento Personal", "Comunicación", "Liderazgo"],
  },
];

export function getTestimoniosOdiseo() {
  return TESTIMONIOS_ODISEO;
}
