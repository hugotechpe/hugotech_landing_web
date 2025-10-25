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
  
}

// Mapa tipado de datos por cada testimonio
// Incluye la foto (avatarSrc) como imagen representativa del testimonio
export const TESTIMONIOS: Record<TestimonioId, TestimonioCardProps> = {
  [TestimonioId.MELISSA_CALDERON]: {
    quote: `Hugooo, Cuando llegué a la empresa, me encontré con un líder que iba más allá de las expectativas: alguien ágil, resiliente y profundamente inspirador. Fuiste una guía en mis primeros pasos, enseñándome no solo el camino, sino también el significado profundo de ser un verdadero líder.
    Admiro profundamente tu capacidad para enfrentar tropiezos ,tanto personales como profesionales, con valentía y humildad, transformándolos en valiosas lecciones. Aprendiste a reconocer tus errores, algo que no solo te hizo más fuerte, sino que también fortaleció a quienes tuvimos la fortuna de trabajar a tu lado.
    Tu entrega, compromiso y pasión por inspirar a tu equipo son cualidades que marcaron mi trayectoria y que hoy, mirando hacia atrás, agradezco inmensamente. Me ayudaste a comprender que liderar no es simplemente dirigir, sino servir, motivar y construir con empatía y convicción.
    Te recuerdo con respeto y admiración, porque más allá de los logros profesionales, dejaste en mí una huella que trasciende el ámbito laboral. Gracias por tu tiempo, por tus enseñanzas y por demostrar que un líder no nace, sino se construye con cada decisión, con cada error asumido y con cada persona a quien inspiras.
    Un abrazo gatuno a la distancia. Meli.`,
    authorName: "Melissa Calderon",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Melissa Calderon",
    linkedInUrl: "https://www.linkedin.com",
  },
    [TestimonioId.MAGALY_AYERBE]: {
    quote: `Cuando te conocí, en la primera entrevista, creo que fue química al instante, a pesar de que dicen que soy sociable, yo siento que soy muy distante cuando conozco a una persona por primera vez, pero contigo fue distinto.
    El iniciar un trabajo juntos, me hizo ver y sentir que tenemos un carácter similar, me ayudaste a reconocer y potenciar mis habilidades como estratega y la habilidad para brindar soluciones efectivas inmediatas, afianzaste mi skill de agilidad.
    Eres ese "adulto tiburón" que admiro, que con el tiempo, querer y sin querer me has ido dejando enseñanzas de vida y de profesión que llevo y pongo en práctica.
    Gracias por todo Hugo.`,
    authorName: "Magaly Ayerbe",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Magaly Ayerbe",
    linkedInUrl: "https://www.linkedin.com",
  },
    [TestimonioId.LEONARDO_MANUEL]: {
    quote: `Fue una experiencia bonita como todo trabajo tiene sus altos y bajos. Pero muy contento por la manera de apoyar y guiar a ser mejores profesionales `,
    authorName: "Leonardo Manuel",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Leonardo Manuel",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.MIGUEL_BUSTILLOS]: {
    quote: `Me ayudaste en mi carrera profesional, en sentirme como parte de una familia en un equipo de trabajo, a tener mas confianza en mis habilidades y a ser cada día mejor a nivel profesional`,
    authorName: "Miguel Bustillos",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Miguel Bustillos",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.KATHERINE_CRUZ]: {
    quote: `Bueno hablaré de cuando llegue a la empresa, ya que realmente cambio mi mentalidad de trabajo. Viendo y sintiéndome parte de la familia que estábamos formando, fue muy alentador  aprender a ser parte de …. Se qué hay muchos cambios pero e tratado de adaptarme a lo que venga ya que siento que siempre vendrá algo mejor contigo de líder 😌💪🏽`,
    authorName: "Katherine Cruz",
    role: "Te entrevisté en un proceso de selección.",
    avatarSrc: "/images/image4.png",
    avatarAlt: "Foto de perfil de Katherine Cruz",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ADELI_ZAMORA]: {
    quote: `Trabajar en On Road me ha enseñado a escuchar mejor y a conectar de manera auténtica con cada cliente. A lo largo de mi experiencia trabajando en On Road he aprendido que no solo se trata de vender, sino de ayudar a las personas. Esta experiencia me ha ayudado mucho tanto en mi crecimiento personal como profesional. Y agradezco a Hugo por haberme brindado la oportunidad de pertenecer a este gran equipo, por todas sus enseñanzas y por haber confiado en mí y en todo el equipo de Perú desde el principio.`,
    authorName: "Adeli Zamora",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image3.png",
    avatarAlt: "Foto de perfil de Adeli Zamora",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.JONATHAN_ORA]: {
    quote: `Nunca dejes de compartir esa actitud de ánimo! Siempre habrá alguien que necesite ver ello y motivarse a ser parte del cambio!`,
    authorName: "Jonathan Ora",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image2.png",
    avatarAlt: "Foto de perfil de Jonathan Ora",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ESTEFANI_AYQUIPA]: {
    quote: `Personalmente si no estaba de acuerdo con algo tenia la confianza de expresarte mi opinión porque sabía que ibas a tener esa apertura para escucharme. Asimismo sentí en muchas oportunidades que valoraste mucho mi compromiso con mi trabajo y el apoyo que pude haber brindado cuando lo solicitaban en algunas ocasiones. Considero que cuando uno se siente valorado (en este caso por ti) uno apoya con mucho gusto en lo que puedan pedir porque sientes que tu trabajo, compromiso, empeño y todo tu esfuerzo es retribuido.`,
    authorName: "Estefani Ayquipa",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image1.png",
    avatarAlt: "Foto de perfil de Estefani Ayquipa",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.FRANCIS_MATEO]: {
    quote: `Gracias por tu guía, siempre práctica y orientada a resultados. Me ayudaste a enfocarme en lo importante y a seguir avanzando.`,
    authorName: "Francis Mateo",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image9.png",
    avatarAlt: "Foto de perfil de Francis Mateo",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.JOSE_URETA]: {
    quote: `Desde un inicio me senti apoyado en todo sentido, me incentivaba afrontar nuevo retos ademas tuve la confianza de proponer y debatir en un ambiente de seguro.`,
    authorName: "Jose Ureta",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image8.png",
    avatarAlt: "Foto de perfil de Jose Ureta",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.PAUL_CAM]: {
    quote: `La oportunidad laboral que me diste fue el escalón profesional que necesitaba para experimentar las bases y cosas avanzadas del rubro, me ayudó a encontrar un camino en el que me siento cómodo y con ánimos de especializarme más y obtener más oportunidades de crecimiento profesional. Ese primer apoyo y constante motivación será siempre de agradecimiento de mi parte`,
    authorName: "Paul Cam",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image7.png",
    avatarAlt: "Foto de perfil de Paul Cam",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ANDREA_DE_LAS_CASAS]: {
    quote: `El tiempo que trabajé en tu equipo, sentí que trabajaba por un fin, y realmente conocí lo que es ser valorado en una empresa, habían momentos retadores pero siempre bajo tu guía supe salir adelante, por más que a veces no era de forma directa.
Me gustó mucho como organizaste todo, para que el equipo tenga todas las herramientas necesarias al momento de trabajar, realmente fue una gran experiencia que hasta el momento no he vuelto a repetir.`,
    authorName: "Andrea de las casas",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image6.png",
    avatarAlt: "Foto de perfil de Andrea de las casas",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.CARLA_TAFUR]: {
    quote: `Haces un gran trabajo al involucrarte con el equipo, no como un jefe sino como lider; eso ayuda que nos podamos sentir en confianza y con ganas de seguir dando más en el trabajo`,
    authorName: "Carla Tafur",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Carla Tafur",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ANGELO_MORENO]: {
    quote: `Trabajar con Hugo fue una de las mejores experiencias, obviamente no todo es perfecto, pero siempre se esforzaba por mejorar y crecer con nosotros`,
    authorName: "Angelo Moreno",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image4.png",
    avatarAlt: "Foto de perfil de Angelo Moreno",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.VERA_LUCIA_TOVAR]: {
    quote: `Trabajar con Hugo fue aprender a confiar en mí y en mis capacidades por medio de su guía constante para aprender todo lo relacionado al proyecto con mucha paciencia, constancia, ánimos y empoderamiento, haciendo el proceso de ingresar a un área completamente nueva para mí, mucho más fácil. 
Aprendí de su compromiso para terminar todo lo que se comienza, la constancia para aprender desde cero, la humildad con la que se debe liderar y que la experiencia te da seguridad. Gracias a su guía y a la oportunidad que me dio para desenvolverme en el área, pude identificar el rumbo al que deseo dirigir mi futuro laboral y me señaló el camino que debo continuar.`,
    authorName: "Vera Lucia Tovar",
    role: "Fui parte de tu equipo · Te guié como mentor o coach · Te entrevisté en un proceso de selección · Mi líder de área",
    avatarSrc: "/images/image3.png",
    avatarAlt: "Foto de perfil de Vera Lucia Tovar",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ERICK_PALOMINO]: {
    quote: `Me inspiró a afrontar nuevos retos, muchos de los cuales solo los postergaba y postergaba, me hizo ver que la confianza en uno mismo es vital para desarrollar estos`,
    authorName: "Erick Palomino",
    role: "Fui parte de tu equipo · Te guié como mentor o coach · Te entrevisté en un proceso de selección",
    avatarSrc: "/images/image2.png",
    avatarAlt: "Foto de perfil de Erick Palomino",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ANONIMO]: {
    quote: `Eres un buen lider, guiando al equipo en un buen camino, empatico, agradable, pero tambien aveces exigente jeje, pero se que fue para que sea una mejora`,
    authorName: "Anónimo",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image1.png",
    avatarAlt: "Foto de perfil",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.YAZMIN_OCAMPO]: {
    quote: `Bueno yo formé parte de tu equipo, definitivamente si fue una agradable experiencia compartir con un profesional como tu, siempre tus palabras fueron de motivación hacia mi persona.`,
    authorName: "Yazmin Ocampo",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image9.png",
    avatarAlt: "Foto de perfil de Yazmin Ocampo",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.LEENKIN]: {
    quote: `Ha sido genial trabajar contigo, Hugo. Siempre tienes todo bien claro y lo explicas de una forma súper sencilla, lo que lo hace súper fácil de entender, sobre todo porque se nota que tienes muchísima experiencia en el mundo tech.`,
    authorName: "Leenkin",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image8.png",
    avatarAlt: "Foto de perfil de Leenkin",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.MAJO_ZAMBRANO]: {
    quote: `Siempre estuviste ahí para escuchar a los talentos. Me sentí valorada en mi trabajo. Y llegar al trabajo era sentir que llegaba a un ambiente lleno de positivismo, apoyo, y humano.`,
    authorName: "Majo Zambrano",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image7.png",
    avatarAlt: "Foto de perfil de Majo Zambrano",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.SANDRA_SEMINARIO]: {
    quote: `Desde que entré he sentido el apoyo y confianza por poder intentar y ver nuevas tareas a parte de mi puesto. Poder interactuar con herramientas que están usando, aprovechando las oportunidades que comentan. Me siento bastante bien por el ambiente y la oportunidad de permitirte aprender haciendo`,
    authorName: "Sandra Seminario",
    role: "Te entrevisté en un proceso de selección, parte del equipo de ti",
    avatarSrc: "/images/image6.png",
    avatarAlt: "Foto de perfil de Sandra Seminario",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.DAN_RODRIGUEZ]: {
    quote: `Con Hugo aprendí lo que significa tener un líder comprensivo y genuino, que no solo confía en las capacidades de su equipo, sino que también brinda oportunidades para crecer tanto en lo personal como en lo laboral. Su liderazgo es un ejemplo de inspiración y apoyo constante.`,
    authorName: "Dan Rodriguez",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image5.png",
    avatarAlt: "Foto de perfil de Dan Rodriguez",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ANDREWS_POSTILLOS]: {
    quote: `Mi testimonio no es sobre mí, sino sobre mi hermano. Recuerdo que unos días antes de que ingresara a Onroad, tuvimos una discusión con mi abuela y mi madre. Yo lo apoyé en todo momento en su decisión de dejar temporalmente la universidad para buscar trabajo, pero mi mayor miedo era que no lo aceptaran. Por eso mismo, hice todo lo que pude para ayudarlo.

Cuando postuló a Onroad, ya estábamos casi por rendirnos. Lo acompañé a la entrevista, y cuando salió, me dijo: "Ya pasé, Andrews, respondí todo bien". Fue un momento de alegría indescriptible. No lo había visto tan convencido ni tan seguro como ese día.

Con el tiempo, al empezar en su nuevo trabajo, noté cómo poco a poco iba cambiando para bien. Me contaba sobre sus nuevos amigos, lo escuchaba reír mientras hablaba con ellos por Discord, y me alegraba saber que ahora salía en grupo y tenía compañeros que lo integraban y valoraban.

Doy testimonio de que el proyecto que lideraste, Hugo, le dio un nuevo rumbo a la vida de mi hermano, y por eso estoy profundamente agradecido.

Sin más que agregar, me despido con un fuerte abrazo.`,
    authorName: "Andrews postillos",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image4.png",
    avatarAlt: "Foto de perfil de Andrews postillos",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.STHEFANNY_CISNEROS]: {
    quote: `Al trabajar con hugo aprendi mucho sobre como debo tratar a mis clientes, es alguien a quien le gusta que las cosas se hagan bien, pero a la vez te acompaña en el proceso con sus ideas. La comunicación siempre siempre fue positiva y es algo dificil de encontrar que hace que uno pueda trabajar feliz.`,
    authorName: "Sthefanny Cisneros",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image3.png",
    avatarAlt: "Foto de perfil de Sthefanny Cisneros",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.HANS_ALFARO]: {
    quote: `Me gusta que seas metódico , y rápido en resolver lo que se presenta`,
    authorName: "Hans Alfaro",
    role: "Socio",
    avatarSrc: "/images/image2.png",
    avatarAlt: "Foto de perfil de Hans Alfaro",
    linkedInUrl: "https://www.linkedin.com",
  },
  [TestimonioId.ANTONIO_CABRERA]: {
    quote: `Una persona bastante proactiva que cada problema lo ve como un reto y una oportunidad, el trato con los demás siempre con manejo profesional y amable, en lo personal, tenía mis dudas al principio, pero como fue transcurriendo el tiempo se fueron disipando y generando confianza.`,
    authorName: "Antonio Cabrera",
    role: "Fui parte de tu equipo.",
    avatarSrc: "/images/image1.png",
    avatarAlt: "Foto de perfil de Antonio Cabrera",
    linkedInUrl: "https://www.linkedin.com",
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
];