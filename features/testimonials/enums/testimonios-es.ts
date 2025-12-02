import type { TestimonioCardProps } from "@/components/cards/TestimonioCard";

// Enum de identificadores de testimonios (basado en el listado del Excel)
// Agrega aquí una entrada por cada fila del Excel (nombre único por persona)
export enum TestimonioId {
  LEONARDO_MANUEL = "Leonardo Manuel",
  MAGALY_AYERBE = "Magaly Ayerbe",
  MELISSA_CALDERON = "Melissa Calderon",
  MIGUEL_BUSTILLOS = "Miguel Bustillos",
  KATHERINE_CRUZ = "Katherine Cruz",
  ADELI_ZAMORA = "Adeli Zamora",
  JONATHAN_ORA = "Jonathan Ora",
  ESTEFANI_AYQUIPA = "Estefani Ayquipa",
  FRANCIS_MATEO = "Francis Mateo",
  JOSE_URETA = "Jose Ureta",
  PAUL_CAM = "Paul Cam",
  ANDREA_DE_LAS_CASAS = "Andrea de las casas",
  CARLA_TAFUR = "Carla Tafur",
  ANGELO_MORENO = "Angelo Moreno",
  VERA_LUCIA_TOVAR = "Vera Lucia Tovar",
  ERICK_PALOMINO = "Erick Palomino",
  ANONIMO = "Anónimo",
  YAZMIN_OCAMPO = "Yazmin Ocampo",
  LEENKIN = "Leenkin",
  MAJO_ZAMBRANO = "Majo Zambrano",
  SANDRA_SEMINARIO = "Sandra Seminario",
  DAN_RODRIGUEZ = "Dan Rodriguez",
  ANDREWS_POSTILLOS = "Andrews postillos",
  STHEFANNY_CISNEROS = "Sthefanny Cisneros",
  HANS_ALFARO = "Hans Alfaro",
  ANTONIO_CABRERA = "Antonio Cabrera",
  MANUEL_BAZAES = "Manuel Bazaes",
  ALESSANDRA_PEREZ = "Alessandra Pérez",
  GABRIEL_GRANADOS = "Gabriel Granados",
  JOSE_LOSTAUNAU = "Jose Lostaunau",
}

// Mapa tipado de datos por cada testimonio
// Incluye la foto (avatarSrc) como imagen representativa del testimonio
export const TESTIMONIOS: Record<TestimonioId, TestimonioCardProps> = {
  [TestimonioId.MELISSA_CALDERON]: {
    quote: `Hugooo, cuando llegué a la empresa, me encontré con un líder que iba más allá de las expectativas: alguien ágil, resiliente y profundamente inspirador. Fuiste una guía en mis primeros pasos, enseñándome no solo el camino, sino también el significado profundo de ser un verdadero líder.
    
    Admiro profundamente tu capacidad para enfrentar tropiezos—tanto personales como profesionales—con valentía y humildad, transformándolos en valiosas lecciones. Aprendiste a reconocer tus errores, algo que no solo te hizo más fuerte, sino que también fortaleció a quienes tuvimos la fortuna de trabajar a tu lado.
    
    Tu entrega, compromiso y pasión por inspirar a tu equipo son cualidades que marcaron mi trayectoria y que hoy, mirando hacia atrás, agradezco inmensamente. Me ayudaste a comprender que liderar no es simplemente dirigir, sino servir, motivar y construir con empatía genuina y convicción.
    
    Te recuerdo con respeto y admiración, porque más allá de los logros profesionales, dejaste en mí una huella que trasciende el ámbito laboral. Gracias por tu tiempo, por tus enseñanzas y por demostrar que un líder no nace, sino se construye con cada decisión, con cada error asumido y con cada persona a quien inspiras.
    
    Un abrazo gatuno a la distancia. Meli.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Líder humano",
      "Vulnerabilidad auténtica",
      "Empatía genuina",
      "Transformación profunda",
    ],
    highlight: "dejaste en mí una huella que trasciende el ámbito laboral",
  },
  [TestimonioId.MAGALY_AYERBE]: {
    quote: `Cuando te conocí en la primera entrevista, sentí una química al instante. Aunque dicen que soy sociable, suelo ser distante con personas nuevas, pero contigo fue diferente desde el inicio. Había algo auténtico en tu forma de ser que me hizo sentir en confianza.
    Trabajar juntos me permitió descubrir que compartimos un carácter similar. Me ayudaste a reconocer y potenciar mis habilidades como estratega, esa capacidad para brindar soluciones efectivas de forma inmediata. Fortaleciste mi agilidad natural de una manera que nadie más lo había hecho.
    Eres ese "adulto tiburón" que admiro profundamente, alguien que con el tiempo—queriendo y sin querer—me ha ido dejando enseñanzas de vida y profesionales que hoy llevo conmigo y pongo en práctica cada día.
    Gracias por todo, Hugo.`,
    authorName: "Magaly Ayerbe",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Magaly Ayerbe",
    linkedInUrl: "https://www.linkedin.com/in/magaly-ayerbe-malaver/",
    tags: ["Conexión auténtica", "Empoderamiento", "Agilidad"],
    highlight: "reconocer y potenciar mis habilidades como estratega",
  },
  [TestimonioId.LEONARDO_MANUEL]: {
    quote: `Trabajar contigo fue una experiencia hermosa, como todo trabajo tiene sus altos y bajos, momentos retadores que nos hacen crecer. Pero lo que realmente valoro es la manera genuina en que nos apoyaste y guiaste, siempre creyendo en nuestro potencial para ser mejores profesionales. Tu forma de liderar desde la cercanía y el respeto marcó una diferencia real en mi desarrollo.`,
    authorName: "Leonardo Manuel",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/leonardo-manuel.jpg",
    avatarAlt: "Foto de perfil de Leonardo Manuel",
    linkedInUrl:
      "https://www.linkedin.com/in/leonardo-manuel-alvarez-27bb43123/",
    tags: ["Guía humana", "Crecimiento profesional", "Liderazgo cercano"],
    highlight: "apoyaste y guiaste, siempre creyendo en nuestro potencial",
  },
  [TestimonioId.MIGUEL_BUSTILLOS]: {
    quote: `Me ayudaste profundamente en mi carrera profesional, pero sobre todo en algo más valioso: sentirme parte de una verdadera familia en el equipo de trabajo. Generaste un espacio donde pude desarrollar más confianza en mis habilidades, donde sentí que mi voz importaba. Gracias a tu acompañamiento cercano y genuino, cada día me esfuerzo por ser mejor profesional, llevando conmigo esa sensación de pertenencia y apoyo mutuo que cultivaste en el equipo.`,
    authorName: "Miguel Bustillos",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/miguel-bustillos.jpg",
    avatarAlt: "Foto de perfil de Miguel Bustillos",
    linkedInUrl: "https://www.linkedin.com/in/miguel-angel-bustillos-alayo/",
    tags: ["Familia laboral", "Confianza genuina", "Pertenencia"],
    highlight: "sentirme parte de una verdadera familia",
  },
  [TestimonioId.KATHERINE_CRUZ]: {
    quote: `Bueno, hablaré de cuando llegué a la empresa, porque realmente cambió mi mentalidad de trabajo de una forma profunda. Ver y sentirme parte de la familia que estábamos construyendo juntos fue muy alentador y significativo para mí.
    
    Fue un espacio donde aprendí a adaptarme con apertura, a crecer desde la autenticidad y a confiar genuinamente en el proceso. Sé que ha habido muchos cambios en el camino, y he tratado de adaptarme a lo que venga con resiliencia y esperanza.
    
    Porque siento firmemente que contigo como líder, siempre vendrá algo mejor. Tu forma de guiar desde la empatía genuina y la visión clara me ha dado esa seguridad profunda para enfrentar lo nuevo con confianza 😌💪🏽`,
    authorName: "Katherine Cruz",
    jobTitle: "Te entrevisté en un proceso de selección.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Katherine Cruz",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Transformación profunda",
      "Familia auténtica",
      "Resiliencia",
      "Confianza genuina",
    ],
    highlight: "sentirme parte de la familia que estábamos construyendo",
  },
  [TestimonioId.ADELI_ZAMORA]: {
    quote: `Trabajar en On Road me ha enseñado a escuchar mejor y a conectar de manera auténtica con cada cliente. A lo largo de mi experiencia trabajando en On Road he aprendido que no solo se trata de vender, sino de ayudar a las personas. Esta experiencia me ha ayudado mucho tanto en mi crecimiento personal como profesional. Y agradezco a Hugo por haberme brindado la oportunidad de pertenecer a este gran equipo, por todas sus enseñanzas y por haber confiado en mí y en todo el equipo de Perú desde el principio.`,
    authorName: "Adeli Zamora",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/adeli-zamora.jpg",
    avatarAlt: "Foto de perfil de Adeli Zamora",
    linkedInUrl:
      "https://www.linkedin.com/in/adeli-marcy-zamora-calderón-133a3318b/",
    tags: ["Crecimiento", "Confianza", "Oportunidad"],
    highlight: "haber confiado en mí",
  },
  [TestimonioId.JONATHAN_ORA]: {
    quote: `Nunca dejes de compartir esa actitud de ánimo que te caracteriza. Siempre habrá alguien que necesite ver esa luz genuina y sentirse motivado a ser parte del cambio. Tu energía auténtica inspira a otros a atreverse, a creer que es posible crecer y transformarse. Esa capacidad de contagiar esperanza y acción es un regalo que el mundo necesita.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Inspiración auténtica",
      "Energía transformadora",
      "Esperanza genuina",
    ],
    highlight: "contagiar esperanza y acción es un regalo",
  },
  [TestimonioId.ESTEFANI_AYQUIPA]: {
    quote: `Personalmente, si no estaba de acuerdo con algo, tenía la confianza genuina de expresarte mi opinión porque sabía, desde lo más profundo, que ibas a tener esa apertura auténtica para escucharme.
    
    Sentí en muchas oportunidades que valoraste profundamente mi compromiso con mi trabajo y el apoyo que pude brindar cuando lo solicitaban. Esa validación sincera hizo una diferencia inmensa en mi forma de entregar mi esfuerzo.
    
    Considero que cuando uno se siente verdaderamente valorado—como yo me sentí contigo—uno apoya con todo el corazón en lo que puedan pedir, porque sientes que tu trabajo, compromiso, empeño y todo tu esfuerzo es reconocido y retribuido con humanidad.`,
    authorName: "Estefani Ayquipa",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/estefani-ayquipa.jpg",
    avatarAlt: "Foto de perfil de Estefani Ayquipa",
    linkedInUrl:
      "https://www.linkedin.com/in/mary-estefani-ayquipa-maceda-8697ab1b7/",
    tags: [
      "Seguridad psicológica auténtica",
      "Reconocimiento genuino",
      "Apertura humana",
      "Valoración profunda",
    ],
    highlight: "cuando uno se siente verdaderamente valorado",
  },
  [TestimonioId.FRANCIS_MATEO]: {
    quote: `Gracias por tu guía genuina, siempre práctica y orientada a resultados reales. Me ayudaste profundamente a enfocarme en lo verdaderamente importante y a seguir avanzando con propósito. Tu forma de acompañar desde la claridad y la acción concreta hizo que cada paso tuviera sentido y dirección.`,
    authorName: "Francis Mateo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/francis-mateo.jpg",
    avatarAlt: "Foto de perfil de Francis Mateo",
    linkedInUrl: "https://www.linkedin.com/in/francis-mateo-ayala/",
    tags: [
      "Enfoque auténtico",
      "Resultados con propósito",
      "Acompañamiento práctico",
    ],
    highlight: "cada paso tuviera sentido y dirección",
  },
  [TestimonioId.JOSE_URETA]: {
    quote: `Desde un inicio me sentí profundamente apoyado en todo sentido, de una manera genuina que marcó la diferencia. Me incentivabas a afrontar nuevos retos con confianza, y además tuve la seguridad auténtica de proponer y debatir en un ambiente donde me sentía verdaderamente seguro y escuchado. Esa confianza mutua transformó mi forma de trabajar y crecer.`,
    authorName: "Jose Ureta",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/jose-ureta.jpg",
    avatarAlt: "Foto de perfil de Jose Ureta",
    linkedInUrl: "https://www.linkedin.com/in/josé-antonio-ureta-chipana/",
    tags: [
      "Seguridad auténtica",
      "Apoyo genuino",
      "Confianza mutua",
      "Crecimiento transformador",
    ],
    highlight: "me sentía verdaderamente seguro y escuchado",
  },
  [TestimonioId.PAUL_CAM]: {
    quote: `La oportunidad laboral que me diste fue el escalón profesional que genuinamente necesitaba para experimentar las bases y aspectos avanzados del rubro. Me ayudó profundamente a encontrar un camino en el que me siento cómodo, con ánimos auténticos de especializarme más y obtener nuevas oportunidades de crecimiento profesional.
    
    Ese primer apoyo sincero y tu constante motivación humana serán siempre motivo de profundo agradecimiento de mi parte. Marcaste una diferencia real en mi trayectoria, y por eso estaré siempre agradecido.`,
    authorName: "Paul Cam",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/paul-cam.jpg",
    avatarAlt: "Foto de perfil de Paul Cam",
    linkedInUrl: "https://www.linkedin.com/in/paul-cam/",
    tags: [
      "Oportunidad transformadora",
      "Crecimiento auténtico",
      "Camino profesional",
      "Gratitud profunda",
    ],
    highlight: "marcaste una diferencia real en mi trayectoria",
  },
  [TestimonioId.ANDREA_DE_LAS_CASAS]: {
    quote: `El tiempo que trabajé en tu equipo, sentí profundamente que trabajaba por un fin genuino, y realmente conocí lo que es ser valorada de forma auténtica en una empresa. Había momentos retadores, pero siempre bajo tu guía humana supe salir adelante, por más que a veces no fuera de forma directa.
    
    Me gustó mucho cómo organizaste todo con tanto cuidado, para que el equipo tuviera todas las herramientas necesarias al momento de trabajar. Realmente fue una gran experiencia que hasta el momento no he vuelto a repetir. Ese sentido de propósito y pertenencia que construiste quedará siempre en mi memoria.`,
    authorName: "Andrea de las casas",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/andrea-de-las-casas.jpg",
    avatarAlt: "Foto de perfil de Andrea de las casas",
    linkedInUrl:
      "https://www.linkedin.com/in/andrea-de-las-casas-koo-9637499a/",
    tags: [
      "Propósito genuino",
      "Reconocimiento auténtico",
      "Pertenencia",
      "Experiencia única",
    ],
    highlight: "ser valorado en una empresa",
  },
  [TestimonioId.CARLA_TAFUR]: {
    quote: `Haces un gran trabajo al involucrarte genuinamente con el equipo, no como un jefe sino como un líder auténtico. Eso ayuda profundamente a que nos podamos sentir en confianza real y con ganas sinceras de seguir dando más en el trabajo. Tu forma de liderar desde la cercanía y la humanidad crea un ambiente donde cada persona se siente valorada y motivada a crecer.`,
    authorName: "Carla Tafur",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/carla-tafur.jpg",
    avatarAlt: "Foto de perfil de Carla Tafur",
    linkedInUrl: "https://www.linkedin.com/in/carla-cotrina-tafur-7178b11a9/",
    tags: [
      "Liderazgo auténtico",
      "Cercanía genuina",
      "Confianza real",
      "Motivación humana",
    ],
    highlight: "líder auténtico que crea confianza real",
  },
  [TestimonioId.ANGELO_MORENO]: {
    quote: `Trabajar con Hugo fue una de las mejores experiencias de mi carrera. Obviamente no todo es perfecto, pero eso es lo genuino: siempre se esforzaba auténticamente por mejorar y crecer con nosotros. Esa humildad para reconocer que el crecimiento es un camino compartido, donde todos aprendemos juntos, hizo toda la diferencia en mi desarrollo profesional.`,
    authorName: "Angelo Moreno",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/angelo-moreno.jpeg",
    avatarAlt: "Foto de perfil de Angelo Moreno",
    linkedInUrl: "https://www.linkedin.com/in/angelo-moreno-a9934a205",
    tags: [
      "Mejora auténtica",
      "Humildad genuina",
      "Crecimiento compartido",
      "Aprendizaje mutuo",
    ],
    highlight: "siempre se esforzaba por mejorar y crecer con nosotros",
  },
  [TestimonioId.VERA_LUCIA_TOVAR]: {
    quote: `Trabajar con Hugo fue aprender a confiar en mí y en mis capacidades por medio de su guía constante para aprender todo lo relacionado al proyecto con mucha paciencia, constancia, ánimos y empoderamiento, haciendo el proceso de ingresar a un área completamente nueva para mí, mucho más fácil. 
Aprendí de su compromiso para terminar todo lo que se comienza, la constancia para aprender desde cero, la humildad con la que se debe liderar y que la experiencia te da seguridad. Gracias a su guía y a la oportunidad que me dio para desenvolverme en el área, pude identificar el rumbo al que deseo dirigir mi futuro laboral y me señaló el camino que debo continuar.`,
    authorName: "Vera Lucia Tovar",
    jobTitle:
      "Fui parte de tu equipo · Te guié como mentor o coach · Te entrevisté en un proceso de selección · Mi líder de área",
    avatarSrc: "/images/testimonials/vera-lucia-tovar.jpg",
    avatarAlt: "Foto de perfil de Vera Lucia Tovar",
    linkedInUrl: "https://www.linkedin.com/in/veratovar/",
    tags: ["Confianza", "Empoderamiento", "Paciencia", "Humildad"],
    highlight: "aprender a confiar en mí",
  },
  [TestimonioId.ERICK_PALOMINO]: {
    quote: `Me inspiró profundamente a afrontar nuevos retos, muchos de los cuales solo los postergaba una y otra vez por miedo. Me hizo ver con claridad y empatía que la confianza genuina en uno mismo es vital—no solo útil, sino esencial—para desarrollar estos retos y transformarlos en oportunidades reales de crecimiento. Esa perspectiva cambió mi forma de enfrentar desafíos.`,
    authorName: "Anónimo",
    jobTitle:
      "Fui parte de tu equipo · Me guiaste como mentor o coach · Me entrevistaste en un proceso de selección",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Inspiración profunda",
      "Superación de miedos",
      "Confianza genuina",
      "Transformación personal",
    ],
    highlight: "la confianza genuina en uno mismo es vital",
  },
  [TestimonioId.ANONIMO]: {
    quote: `Eres un buen lider, guiando al equipo en un buen camino, empatico, agradable, pero tambien aveces exigente jeje, pero se que fue para que sea una mejora`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Empatía", "Balance", "Exigencia positiva"],
    highlight: "empatico, agradable",
  },
  [TestimonioId.YAZMIN_OCAMPO]: {
    quote: `Bueno, yo formé parte de tu equipo, y definitivamente fue una experiencia profundamente agradable compartir con un profesional como tú. Siempre tus palabras fueron de motivación genuina hacia mi persona, y eso creó un ambiente donde me sentí valorada y con ganas de dar lo mejor de mí. Tu forma de acompañar desde el ánimo sincero hizo una diferencia real en mi desarrollo.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Motivación genuina",
      "Profesionalismo humano",
      "Valoración sincera",
      "Impacto real",
    ],
    highlight: "motivación genuina que creó un ambiente valioso",
  },
  [TestimonioId.LEENKIN]: {
    quote: `Ha sido genial trabajar contigo, Hugo. Siempre tienes todo bien claro y lo explicas de una forma súper sencilla y genuina, lo que hace que sea súper fácil de entender para todos. Sobre todo porque se nota profundamente que tienes muchísima experiencia en el mundo tech, pero la compartes con humildad y cercanía auténtica. Esa combinación de conocimiento y humanidad es inspiradora.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Claridad genuina",
      "Comunicación humilde",
      "Experiencia compartida",
      "Cercanía auténtica",
    ],
    highlight: "lo explicas con humildad y cercanía auténtica",
  },
  [TestimonioId.MAJO_ZAMBRANO]: {
    quote: `Siempre estuviste ahí genuinamente para escuchar a los talentos, con esa presencia auténtica que hace sentir que realmente importas. Me sentí profundamente valorada en mi trabajo, y llegar cada día era sentir que llegaba a un ambiente verdaderamente humano, lleno de positivismo sincero y apoyo real. Esa atmósfera de confianza y humanidad transforma la experiencia laboral en algo significativo.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Escucha genuina",
      "Ambiente humano",
      "Valoración profunda",
      "Positivismo sincero",
    ],
    highlight: "me sentí profundamente valorada",
  },
  [TestimonioId.SANDRA_SEMINARIO]: {
    quote: `Desde que entré he sentido profundamente el apoyo auténtico y la confianza genuina para poder intentar y explorar nuevas tareas más allá de mi puesto. Poder interactuar con herramientas que están usando, aprovechando las oportunidades que comentan con apertura, me hizo sentir valorada.
    
    Me siento bastante bien por el ambiente humano que se creó y, sobre todo, por la oportunidad sincera de permitirme aprender haciendo. Esa confianza para experimentar y crecer ha sido transformadora en mi desarrollo profesional.`,
    authorName: "Sandra Seminario",
    jobTitle:
      "Te entrevisté en un proceso de selección, parte del equipo de ti",
    avatarSrc: "/images/testimonials/sandra-seminario.jpg",
    avatarAlt: "Foto de perfil de Sandra Seminario",
    linkedInUrl: "https://www.linkedin.com/in/sangaselu/",
    tags: [
      "Apoyo auténtico",
      "Aprender haciendo",
      "Oportunidades reales",
      "Confianza transformadora",
    ],
    highlight: "la oportunidad sincera de aprender haciendo",
  },
  [TestimonioId.DAN_RODRIGUEZ]: {
    quote: `Con Hugo aprendí profundamente lo que significa tener un líder comprensivo y genuino, que no solo confía auténticamente en las capacidades de su equipo, sino que también brinda oportunidades reales para crecer tanto en lo personal como en lo laboral.
    
    Su liderazgo es un ejemplo vivo de inspiración y apoyo constante, donde cada persona se siente vista, valorada y acompañada en su camino de desarrollo. Esa forma de liderar desde la humanidad transforma equipos y vidas.`,
    authorName: "Dan Rodriguez",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/dan-rodriguez.jpg",
    avatarAlt: "Foto de perfil de Dan Rodriguez",
    linkedInUrl:
      "https://www.linkedin.com/in/dan-azareel-rodriguez-hernandez-b09015135/",
    tags: [
      "Liderazgo genuino",
      "Comprensión profunda",
      "Crecimiento integral",
      "Humanidad transformadora",
    ],
    highlight: "líder comprensivo que transforma equipos y vidas",
  },
  [TestimonioId.ANDREWS_POSTILLOS]: {
    quote: `Mi testimonio no es sobre mí, sino sobre mi hermano y cómo tu proyecto transformó su vida. Recuerdo esos días difíciles antes de que ingresara a Onroad, cuando tuvimos discusiones familiares sobre su decisión de dejar temporalmente la universidad para buscar trabajo. Yo lo apoyé en todo momento, pero mi mayor miedo era que no lo aceptaran.
    
    Cuando postuló a Onroad, ya estábamos casi por rendirnos. Lo acompañé a la entrevista, y cuando salió, me dijo: "Ya pasé, Andrews, respondí todo bien". Fue un momento de alegría indescriptible. No lo había visto tan convencido ni tan seguro como ese día.
    
    Con el tiempo, noté cómo poco a poco iba cambiando para bien. Me contaba sobre sus nuevos amigos, lo escuchaba reír mientras hablaba con ellos, y me alegraba saber que ahora tenía compañeros que lo integraban y valoraban.
    
    Doy testimonio de que el proyecto que lideraste, Hugo, le dio un nuevo rumbo a la vida de mi hermano, y por eso estoy profundamente agradecido. Tu forma de crear espacios donde las personas pueden crecer y pertenecer trasciende lo laboral—transforma vidas y familias enteras.`,
    authorName: "Andrews Postillos",
    jobTitle: "Soy tu hermano y cercano testigo de tu labor.",
    avatarSrc: "/images/testimonials/andrews-postillos.jpg",
    avatarAlt: "Foto de perfil de Andrews Postillos",
    linkedInUrl:
      "https://www.linkedin.com/in/andrews-leonard-postillos-estrada-416537333/",
    tags: [
      "Impacto familiar profundo",
      "Transformación vital",
      "Pertenencia genuina",
      "Espacio de crecimiento",
      "Gratitud profunda",
    ],
    highlight: "transformó la vida de mi hermano y a nuestra familia",
  },
  [TestimonioId.STHEFANNY_CISNEROS]: {
    quote: `Al trabajar con Hugo aprendí mucho sobre cómo debo tratar genuinamente a mis clientes. Es alguien a quien le gusta que las cosas se hagan bien, pero a la vez te acompaña en el proceso con sus ideas y apoyo constante.
    
    La comunicación siempre—siempre—fue positiva y sincera, y eso es algo difícil de encontrar que hace que uno pueda trabajar feliz y con confianza. Esa combinación de exigencia y humanidad crea un ambiente donde te sientes seguro para crecer.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Comunicación positiva genuina",
      "Acompañamiento constante",
      "Trabajo feliz",
      "Exigencia con humanidad",
    ],
    highlight: "comunicación siempre positiva que hace trabajar feliz",
  },
  [TestimonioId.HANS_ALFARO]: {
    quote: `Me gusta profundamente que seas metódico y rápido en resolver lo que se presenta. Esa combinación de metodología clara y velocidad de respuesta genuina hace que trabajar contigo sea eficiente y confiable. Tu forma de abordar los problemas con estructura y agilidad crea un ambiente donde las cosas fluyen y se resuelven de manera efectiva.`,
    authorName: "Hans Alfaro",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/testimonials/hans-alfaro.jpg",
    avatarAlt: "Foto de perfil de Hans Alfaro",
    linkedInUrl: "https://www.linkedin.com/in/hans-alfaro-23a2b7135/",
    tags: [
      "Metodología clara",
      "Rapidez genuina",
      "Resolución efectiva",
      "Eficiencia confiable",
    ],
    highlight: "metódico y rápido en resolver",
  },
  [TestimonioId.ANTONIO_CABRERA]: {
    quote: `Una persona bastante proactiva que cada problema lo ve genuinamente como un reto y una oportunidad de crecimiento. El trato con los demás siempre con manejo profesional y amable, creando un ambiente de respeto y cercanía auténtica.
    
    En lo personal, tenía mis dudas al principio, pero conforme fue transcurriendo el tiempo se fueron disipando y se fue generando una confianza profunda. Esa capacidad de construir confianza de manera genuina, tanto como profesional como persona, es algo que valoro inmensamente.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil de Anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Proactividad genuina",
      "Confianza profunda",
      "Trato profesional y humano",
      "Oportunidad en cada reto",
    ],
    highlight: "construir confianza genuina como profesional y persona",
  },
  [TestimonioId.MANUEL_BAZAES]: {
    quote: `Trabajamos mucho estos últimos meses, tuvimos múltiples sesiones y estuviste apoyándome en cada una de ellas. También cuando hubo inconvenientes, sentí la motivación y el compromiso. Me fue grato trabajar juntos sinceramente, y aunque hubo momentos de estrés, vi cómo te apoyaste en mí. Espero seguir mejorando aspectos que siento son detalles normales cuando recién estamos empezando con nuestro nuevo Líder.`,
    authorName: "Manuel Bazaes",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil de Manuel Bazaes",
    linkedInUrl:
      "https://www.linkedin.com/in/manuel-alejandro-bazaes-loarte-51b685175/",
    tags: ["Colaboración", "Apoyo mutuo", "Crecimiento conjunto"],
    highlight: "sentí la motivación y el compromiso",
  },
  [TestimonioId.ALESSANDRA_PEREZ]: {
    quote: `Al principio fue neutral ya que no te veía mucho, pero poco a poco nos conocimos mejor y surgió la buena comunicación. Ha sido tranquilo el trabajo, sobre todo sabiendo que hay alguien que nos apoya con los desafíos más grandes.`,
    authorName: "Anónimo",
    jobTitle: "Soy parte de tu equipo en OnRoad.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Foto de perfil anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Comunicación", "Apoyo", "Confianza"],
    highlight: "surgió la buena comunicación",
  },
  [TestimonioId.GABRIEL_GRANADOS]: {
    quote: `A mis 23 años he tenido diversos mentores, y siento que no he podido conectar con muchos ni trabajar de la mano en armonía. Caso contrario trabajando con Hugo como mentor. La confianza, la motivación y el trabajo en equipo es algo que siempre se puede rescatar, sin contar el apoyo y los incentivos para emplear mejor nuestro trabajo. Sin duda alguna, la confianza y la cercanía con el equipo hace que vea de otra manera el trabajar, y ver de manera positiva mi futuro profesional.`,
    authorName: "Anónimo",
    jobTitle: "Soy parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Mentoría", "Conexión", "Trabajo en equipo", "Futuro profesional"],
    highlight: "la confianza y la cercanía con el equipo",
  },
  [TestimonioId.JOSE_LOSTAUNAU]: {
    quote: `Como jefe llegas a motivar a todos los que trabajan a tu alrededor y a mostrar tu apoyo para que los demás se sientan cómodos. Esa capacidad de crear un ambiente donde todos nos sentimos respaldados marca la diferencia.`,
    authorName: "Anónimo",
    jobTitle: "Fui parte de tu equipo.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Foto de perfil anónimo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Motivación", "Ambiente positivo", "Liderazgo cercano"],
    highlight: "motivar a todos los que trabajan a tu alrededor",
  },
};

// Lista en array, útil para recorrer directamente en el componente
export const TESTIMONIOS_LIST: TestimonioCardProps[] = [
  TESTIMONIOS[TestimonioId.LEONARDO_MANUEL],
  TESTIMONIOS[TestimonioId.ANDREWS_POSTILLOS],
  TESTIMONIOS[TestimonioId.ESTEFANI_AYQUIPA],
  TESTIMONIOS[TestimonioId.MIGUEL_BUSTILLOS],
  TESTIMONIOS[TestimonioId.ANTONIO_CABRERA],
  TESTIMONIOS[TestimonioId.DAN_RODRIGUEZ],
  TESTIMONIOS[TestimonioId.MELISSA_CALDERON],
  TESTIMONIOS[TestimonioId.VERA_LUCIA_TOVAR],
  TESTIMONIOS[TestimonioId.MAJO_ZAMBRANO],
  TESTIMONIOS[TestimonioId.LEENKIN],
  TESTIMONIOS[TestimonioId.PAUL_CAM],
  TESTIMONIOS[TestimonioId.ADELI_ZAMORA],
  TESTIMONIOS[TestimonioId.ANGELO_MORENO],
  TESTIMONIOS[TestimonioId.STHEFANNY_CISNEROS],
  TESTIMONIOS[TestimonioId.SANDRA_SEMINARIO],
  TESTIMONIOS[TestimonioId.YAZMIN_OCAMPO],
  TESTIMONIOS[TestimonioId.JOSE_URETA],
  TESTIMONIOS[TestimonioId.ERICK_PALOMINO],
  TESTIMONIOS[TestimonioId.FRANCIS_MATEO],
  TESTIMONIOS[TestimonioId.MAGALY_AYERBE],
  TESTIMONIOS[TestimonioId.JONATHAN_ORA],
  TESTIMONIOS[TestimonioId.CARLA_TAFUR],
  TESTIMONIOS[TestimonioId.ANDREA_DE_LAS_CASAS],
  TESTIMONIOS[TestimonioId.HANS_ALFARO],
  TESTIMONIOS[TestimonioId.KATHERINE_CRUZ],
  TESTIMONIOS[TestimonioId.MANUEL_BAZAES],
  TESTIMONIOS[TestimonioId.ALESSANDRA_PEREZ],
  TESTIMONIOS[TestimonioId.GABRIEL_GRANADOS],
  TESTIMONIOS[TestimonioId.JOSE_LOSTAUNAU],
];
