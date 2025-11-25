import type { TestimonioCardProps } from "@/components/cards/TestimonioCard";

// Enum of testimonial identifiers (based on the Excel list)
// Add an entry here for each row in Excel (unique name per person)
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

// Type-safe map of data for each testimonial
// Includes the photo (avatarSrc) as representative image of the testimonial
export const TESTIMONIOS: Record<TestimonioId, TestimonioCardProps> = {
  [TestimonioId.MELISSA_CALDERON]: {
    quote: `Hugooo, when I joined the company, I found a leader who went beyond expectations: someone agile, resilient, and deeply inspiring. You were a guide in my first steps, teaching me not only the path, but also the profound meaning of being a true leader.
    
    I deeply admire your ability to face setbacks—both personal and professional—with courage and humility, transforming them into valuable lessons. You learned to recognize your mistakes, something that not only made you stronger, but also strengthened those of us fortunate enough to work alongside you.
    
    Your dedication, commitment, and passion for inspiring your team are qualities that marked my trajectory and that today, looking back, I am immensely grateful for. You helped me understand that leading is not simply directing, but serving, motivating, and building with genuine empathy and conviction.
    
    I remember you with respect and admiration, because beyond professional achievements, you left a mark on me that transcends the workplace. Thank you for your time, for your teachings, and for demonstrating that a leader is not born, but is built with each decision, with each acknowledged mistake, and with each person you inspire.
    
    A warm hug from afar. Meli.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Human leader",
      "Authentic vulnerability",
      "Genuine empathy",
      "Profound transformation",
    ],
    highlight: "a mark that transcends the workplace",
  },
  [TestimonioId.MAGALY_AYERBE]: {
    quote: `When I met you in that first interview, I felt an instant chemistry. Although people say I'm sociable, I tend to be distant with new people, but with you it was different from the start. There was something authentic in your way of being that made me feel at ease.
    
    Working together allowed me to discover that we share a similar character. You helped me recognize and enhance my skills as a strategist, that ability to provide effective solutions immediately. You strengthened my natural agility in a way no one else had done before.
    
    You are that "adult shark" I deeply admire, someone who over time—intentionally and unintentionally—has been leaving me life and professional lessons that I carry with me and put into practice every day.
    
    Thank you for everything, Hugo.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Authentic connection",
      "Strategic empowerment",
      "Natural agility",
      "Deep admiration",
    ],
    highlight: "something authentic that made me feel at ease",
  },
  [TestimonioId.LEONARDO_MANUEL]: {
    quote: `Working with you was a beautiful experience. Like all work, it has its ups and downs, challenging moments that make us grow. But what I truly value is the genuine way you supported and guided us, always believing in our potential to become better professionals. Your way of leading from closeness and respect made a real difference in my development.`,
    authorName: "Leonardo Manuel",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/leonardo-manuel.jpg",
    avatarAlt: "Profile photo of Leonardo Manuel",
    linkedInUrl: "https://www.linkedin.com/in/leonardo-manuel-alvarez-27bb43123/",
    tags: [
      "Genuine guidance",
      "Close leadership",
      "Respectful support",
      "Real difference",
    ],
    highlight: "the genuine way you supported and guided us",
  },
  [TestimonioId.MIGUEL_BUSTILLOS]: {
    quote: `You helped me profoundly in my professional career, but above all in something more valuable: feeling part of a true family in the work team. Your close and genuine accompaniment helped me have more confidence in my abilities and become better every day, both professionally and as a person. That sense of belonging and authentic trust transformed my way of working.`,
    authorName: "Miguel Bustillos",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/miguel-bustillos.jpg",
    avatarAlt: "Profile photo of Miguel Bustillos",
    linkedInUrl: "https://www.linkedin.com/in/miguel-angel-bustillos-alayo/",
    tags: ["True family", "Genuine trust", "Belonging", "Close accompaniment"],
    highlight: "feeling part of a true family",
  },
  [TestimonioId.KATHERINE_CRUZ]: {
    quote: `Well, I'll talk about when I joined the company, because it really changed my work mentality in a profound way. Seeing and feeling part of the family we were building together was very encouraging and meaningful to me.
    
    It was a space where I learned to adapt with openness, to grow from authenticity, and to genuinely trust the process. I know there have been many changes along the way, and I've tried to adapt to what comes with resilience and hope.
    
    Because I firmly feel that with you as a leader, something better will always come. Your way of guiding from genuine empathy and clear vision has given me that deep security to face the new with confidence 😌💪🏽`,
    authorName: "Katherine Cruz",
    role: "I interviewed you in a selection process.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Katherine Cruz",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Profound transformation",
      "Authentic family",
      "Resilience",
      "Genuine trust",
    ],
    highlight: "feeling part of the family we were building",
  },
  [TestimonioId.ADELI_ZAMORA]: {
    quote: `Working at On Road has taught me to listen better, to connect authentically with each client. Throughout my experience at On Road, I've learned that it's not just about selling, but about genuinely helping people. This experience has helped me immensely in both my personal and professional growth. And I thank Hugo for giving me the opportunity to belong to this great team, for all his teachings, and for trusting me and the entire Peru team from the very beginning. That genuine trust made all the difference.`,
    authorName: "Adeli Zamora",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/adeli-zamora.jpg",
    avatarAlt: "Profile photo of Adeli Zamora",
    linkedInUrl:
      "https://www.linkedin.com/in/adeli-marcy-zamora-calderón-133a3318b/",
    tags: [
      "Authentic connection",
      "Genuine trust",
      "Integral growth",
      "Helping people",
    ],
    highlight: "that genuine trust made all the difference",
  },
  [TestimonioId.JONATHAN_ORA]: {
    quote: `Never stop sharing that spirit of encouragement that characterizes you. There will always be someone who needs to see that genuine light and feel motivated to be part of the change. Your authentic energy inspires others to dare, to believe that growth and transformation are possible. That ability to spread hope and action is a gift the world needs.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Authentic inspiration",
      "Transformative energy",
      "Genuine hope",
      "Motivational gift",
    ],
    highlight: "spread hope and action is a gift",
  },
  [TestimonioId.ESTEFANI_AYQUIPA]: {
    quote: `Personally, if I didn't agree with something, I had the genuine confidence to express my opinion to you because I knew, from deep within, that you would have that authentic openness to listen to me.
    
    I felt on many occasions that you deeply valued my commitment to my work and the support I could provide when requested. That sincere validation made an immense difference in how I delivered my effort.
    
    I believe that when one feels truly valued—as I felt with you—one supports wholeheartedly in what they may ask, because you feel that your work, commitment, dedication, and all your effort is recognized and reciprocated with humanity.`,
    authorName: "Estefani Ayquipa",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/estefani-ayquipa.jpg",
    avatarAlt: "Profile photo of Estefani Ayquipa",
    linkedInUrl: "https://www.linkedin.com/in/mary-estefani-ayquipa-maceda-8697ab1b7/",
    tags: [
      "Authentic psychological safety",
      "Genuine recognition",
      "Human openness",
      "Deep validation",
    ],
    highlight: "when one feels truly valued",
  },
  [TestimonioId.FRANCIS_MATEO]: {
    quote: `Thank you for your genuine guidance, always practical and oriented to real results. You helped me profoundly to focus on what truly matters and keep moving forward with purpose. Your way of accompanying from clarity and concrete action made every step have meaning and direction.`,
    authorName: "Francis Mateo",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/francis-mateo.jpg",
    avatarAlt: "Profile photo of Francis Mateo",
    linkedInUrl: "https://www.linkedin.com/in/francis-mateo-ayala/",
    tags: [
      "Authentic focus",
      "Results with purpose",
      "Practical accompaniment",
      "Clear direction",
    ],
    highlight: "every step have meaning and direction",
  },
  [TestimonioId.JOSE_URETA]: {
    quote: `From the very beginning, I felt profoundly supported in every way, in a genuine manner that made a difference. You encouraged me to face new challenges with confidence, and I also had the authentic security to propose and debate in an environment where I felt truly safe and heard. That mutual trust transformed my way of working and growing.`,
    authorName: "Jose Ureta",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/jose-ureta.jpg",
    avatarAlt: "Profile photo of Jose Ureta",
    linkedInUrl: "https://www.linkedin.com/in/josé-antonio-ureta-chipana/",
    tags: [
      "Authentic security",
      "Genuine support",
      "Mutual trust",
      "Transformative growth",
    ],
    highlight: "I felt truly safe and heard",
  },
  [TestimonioId.PAUL_CAM]: {
    quote: `The job opportunity you gave me was the professional step I genuinely needed to experience the fundamentals and advanced aspects of the field. It helped me profoundly find a path where I feel comfortable, with authentic enthusiasm to specialize further and obtain new opportunities for professional growth.
    
    That first sincere support and your constant human motivation will always be a source of deep gratitude from me. You made a real difference in my trajectory, and for that I will always be grateful.`,
    authorName: "Paul Cam",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/paul-cam.jpg",
    avatarAlt: "Profile photo of Paul Cam",
    linkedInUrl: "https://www.linkedin.com/in/paul-cam/",
    tags: [
      "Transformative opportunity",
      "Authentic growth",
      "Professional path",
      "Deep gratitude",
    ],
    highlight: "made a real difference in my trajectory",
  },
  [TestimonioId.ANDREA_DE_LAS_CASAS]: {
    quote: `The time I worked on your team, I felt profoundly that I was working for a genuine purpose, and I truly experienced what it means to be valued authentically in a company. There were challenging moments, but always under your human guidance I knew how to move forward, even when it wasn't in a direct way.
    
    I really liked how you organized everything with such care, so the team had all the necessary tools when working. It truly was a great experience that I haven't repeated to this day. That sense of purpose and belonging you built will always remain in my memory.`,
    authorName: "Andrea de las casas",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/andrea-de-las-casas.jpg",
    avatarAlt: "Profile photo of Andrea de las casas",
    linkedInUrl:
      "https://www.linkedin.com/in/andrea-de-las-casas-koo-9637499a/",
    tags: [
      "Genuine purpose",
      "Authentic recognition",
      "Belonging",
      "Unique experience",
    ],
    highlight: "sense of purpose and belonging you built",
  },
  [TestimonioId.CARLA_TAFUR]: {
    quote: `You do a great job genuinely involving yourself with the team, not as a boss but as an authentic leader. That profoundly helps us feel real trust and sincere desire to keep giving more at work. Your way of leading from closeness and humanity creates an environment where each person feels valued and motivated to grow.`,
    authorName: "Carla Tafur",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/carla-tafur.jpg",
    avatarAlt: "Profile photo of Carla Tafur",
    linkedInUrl: "https://www.linkedin.com/in/carla-cotrina-tafur-7178b11a9/",
    tags: [
      "Authentic leadership",
      "Genuine closeness",
      "Real trust",
      "Human motivation",
    ],
    highlight: "authentic leader who creates real trust",
  },
  [TestimonioId.ANGELO_MORENO]: {
    quote: `Working with Hugo was one of the best experiences of my career. Obviously not everything is perfect, but that's what's genuine: he always authentically strived to improve and grow with us. That humility to recognize that growth is a shared path, where we all learn together, made all the difference in my professional development.`,
    authorName: "Angelo Moreno",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Angelo Moreno",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Authentic improvement",
      "Genuine humility",
      "Shared growth",
      "Mutual learning",
    ],
    highlight: "always strived to improve and grow with us",
  },
  [TestimonioId.VERA_LUCIA_TOVAR]: {
    quote: `Working with Hugo was learning profoundly to trust myself and my capabilities, through his constant and genuine guidance to learn everything related to the project. He did it with much authentic patience, inspiring perseverance, sincere encouragement, and real empowerment, making the process of entering a completely new area much more human and achievable for me.
    
    I learned profoundly from his unwavering commitment to finish everything that is started, the humble perseverance to learn from scratch, the genuine humility with which one should lead, and that experience gives you solid confidence.
    
    Thanks to his transformative guidance and the opportunity he gave me to develop in the area, I was able to identify the direction I want to take my professional future. He showed me the path I should continue, and for that I will always be grateful.`,
    authorName: "Anonymous",
    role: "I was part of your team · You guided me as a mentor or coach · You interviewed me in a selection process · My area leader",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Deep trust",
      "Real empowerment",
      "Authentic patience",
      "Genuine humility",
      "Vital transformation",
    ],
    highlight: "learning profoundly to trust myself",
  },
  [TestimonioId.ERICK_PALOMINO]: {
    quote: `He inspired me profoundly to face new challenges, many of which I only postponed again and again out of fear. He made me see with clarity and empathy that genuine confidence in oneself is vital—not just useful, but essential—to develop these challenges and transform them into real opportunities for growth. That perspective changed my way of facing challenges.`,
    authorName: "Anonymous",
    role: "I was part of your team · You guided me as a mentor or coach · You interviewed me in a selection process",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Deep inspiration",
      "Overcoming fears",
      "Genuine confidence",
      "Personal transformation",
    ],
    highlight: "genuine confidence in oneself is vital",
  },
  [TestimonioId.ANONIMO]: {
    quote: `Thank you for the opportunity you gave me, you were a great leader, you always guided and encouraged me in every aspect 🤗`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/default-avatar.png",
    avatarAlt: "Anonymous profile",
    linkedInUrl: "",
    tags: ["Leadership", "Guidance", "Encouragement"],
    highlight: "great leader",
  },
  [TestimonioId.YAZMIN_OCAMPO]: {
    quote: `Well, I was part of your team, and it was definitely a profoundly pleasant experience to share with a professional like you. Your words were always of genuine motivation towards me, and that created an environment where I felt valued and eager to give my best. Your way of accompanying from sincere encouragement made a real difference in my development.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Genuine motivation",
      "Human professionalism",
      "Sincere appreciation",
      "Real impact",
    ],
    highlight: "genuine motivation that created a valuable environment",
  },
  [TestimonioId.LEENKIN]: {
    quote: `It has been great working with you, Hugo. You always have everything clear and explain it in a super simple and genuine way, which makes it super easy for everyone to understand. Especially because it profoundly shows that you have tremendous experience in the tech world, but you share it with humility and authentic closeness. That combination of knowledge and humanity is inspiring.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Genuine clarity",
      "Humble communication",
      "Shared experience",
      "Authentic closeness",
    ],
    highlight: "explain it with humility and authentic closeness",
  },
  [TestimonioId.MAJO_ZAMBRANO]: {
    quote: `You were always genuinely there to listen to the talents, with that authentic presence that makes you feel you truly matter. I felt profoundly valued in my work, and arriving each day was feeling I was entering a truly human environment, full of sincere positivity and real support. That atmosphere of trust and humanity transforms the work experience into something meaningful.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Genuine listening",
      "Human environment",
      "Deep appreciation",
      "Sincere positivity",
    ],
    highlight: "I felt profoundly valued",
  },
  [TestimonioId.SANDRA_SEMINARIO]: {
    quote: `Since I joined, I have felt profoundly the authentic support and genuine trust to be able to try and explore new tasks beyond my position. Being able to interact with the tools you are using, taking advantage of the opportunities you openly mention, made me feel valued.
    
    I feel quite good about the human environment that was created and, above all, about the sincere opportunity to allow me to learn by doing. That trust to experiment and grow has been transformative in my professional development.`,
    authorName: "Sandra Seminario",
    role: "I interviewed you in a selection process, part of your team",
    avatarSrc: "/images/testimonials/sandra-seminario.jpg",
    avatarAlt: "Profile photo of Sandra Seminario",
    linkedInUrl: "https://www.linkedin.com/in/sangaselu/",
    tags: [
      "Authentic support",
      "Learning by doing",
      "Real opportunities",
      "Transformative trust",
    ],
    highlight: "the sincere opportunity to learn by doing",
  },
  [TestimonioId.DAN_RODRIGUEZ]: {
    quote: `With Hugo I learned profoundly what it means to have an understanding and genuine leader, who not only authentically trusts in the capabilities of his team, but also provides real opportunities to grow both personally and professionally.
    
    His leadership is a living example of inspiration and constant support, where each person feels seen, valued, and accompanied on their development path. That way of leading from humanity transforms teams and lives.`,
    authorName: "Dan Rodriguez",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/dan-rodriguez.jpg",
    avatarAlt: "Profile photo of Dan Rodriguez",
    linkedInUrl:
      "https://www.linkedin.com/in/dan-azareel-rodriguez-hernandez-b09015135/",
    tags: [
      "Genuine leadership",
      "Deep understanding",
      "Integral growth",
      "Transformative humanity",
    ],
    highlight: "understanding leader who transforms teams and lives",
  },
  [TestimonioId.ANDREWS_POSTILLOS]: {
    quote: `My testimony is not about me, but about my brother and how your project transformed his life. I remember those difficult days before he joined Onroad, when we had family discussions about his decision to temporarily leave university to look for work. I supported him every moment, but my greatest fear was that he wouldn't be accepted.
    
    When he applied to Onroad, we were almost ready to give up. I accompanied him to the interview, and when he came out, he told me: "I passed, Andrews, I answered everything well." It was a moment of indescribable joy. I had never seen him so convinced or so confident as that day.
    
    Over time, I noticed how little by little he was changing for the better. He told me about his new friends, I heard him laughing while talking with them, and I was happy to know that now he had colleagues who integrated and valued him.
    
    I testify that the project you led, Hugo, gave my brother a new direction in life, and for that I am profoundly grateful. Your way of creating spaces where people can grow and belong transcends work—it transforms lives and entire families.`,
    authorName: "Andrews Postillos",
    role: "I'm your brother and close witness to your work.",
    avatarSrc: "/images/testimonials/andrews-postillos.jpg",
    avatarAlt: "Profile photo of Andrews Postillos",
    linkedInUrl:
      "https://www.linkedin.com/in/andrews-leonard-postillos-estrada-416537333/",
    tags: [
      "Deep family impact",
      "Vital transformation",
      "Genuine belonging",
      "Growth space",
      "Profound gratitude",
    ],
    highlight: "transformed my brother's life and our family",
  },
  [TestimonioId.STHEFANNY_CISNEROS]: {
    quote: `Working with Hugo I learned a lot about how I should genuinely treat my clients. He is someone who likes things done well, but at the same time accompanies you in the process with his ideas and constant support.
    
    Communication was always—always—positive and sincere, and that is something difficult to find that makes one able to work happy and with confidence. That combination of high standards and humanity creates an environment where you feel safe to grow.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Genuine positive communication",
      "Constant accompaniment",
      "Happy work",
      "Standards with humanity",
    ],
    highlight: "always positive communication that makes you work happy",
  },
  [TestimonioId.HANS_ALFARO]: {
    quote: `I profoundly like that you are methodical and fast in solving what comes up. That combination of clear methodology and genuine speed of response makes working with you efficient and reliable. Your way of addressing problems with structure and agility creates an environment where things flow and are resolved effectively.`,
    authorName: "Hans Alfaro",
    role: "I was part of your team.",
    avatarSrc: "/images/testimonials/hans-alfaro.jpg",
    avatarAlt: "Profile photo of Hans Alfaro",
    linkedInUrl: "https://www.linkedin.com/in/hans-alfaro-23a2b7135/",
    tags: [
      "Clear methodology",
      "Genuine speed",
      "Effective resolution",
      "Reliable efficiency",
    ],
    highlight: "methodical and fast in solving",
  },
  [TestimonioId.ANTONIO_CABRERA]: {
    quote: `A very proactive person who genuinely sees each problem as a challenge and an opportunity for growth. The treatment with others always with professional and kind management, creating an environment of respect and authentic closeness.
    
    Personally, I had my doubts at first, but as time went by they dissipated and a deep trust was generated. That ability to build genuine trust, both as a professional and as a person, is something I immensely value.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Anonymous",
    linkedInUrl: "https://www.linkedin.com",
    tags: [
      "Genuine proactivity",
      "Deep trust",
      "Professional and human treatment",
      "Opportunity in every challenge",
    ],
    highlight: "build genuine trust as professional and person",
  },
  [TestimonioId.MANUEL_BAZAES]: {
    quote: `We worked a lot these last months, we had multiple sessions and you were supporting me in each one of them. Also when there were setbacks, I felt the motivation and commitment. It was pleasant to work together honestly, and although there were stressful moments, I saw how you relied on me. I hope to continue improving aspects that I feel are normal details when we are just starting with our new Leader.`,
    authorName: "Manuel Bazaes",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Profile photo of Manuel Bazaes",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Collaboration", "Mutual support", "Growth together"],
    highlight: "I felt the motivation and commitment",
  },
  [TestimonioId.ALESSANDRA_PEREZ]: {
    quote: `At first it was neutral since I didn't see you much, but little by little we got to know each other better and good communication emerged. The work has been calm, especially knowing that there is someone who supports us with the biggest challenges.`,
    authorName: "Anonymous",
    role: "I am part of your team at OnRoad.",
    avatarSrc: "/images/avatar-female.svg",
    avatarAlt: "Anonymous profile photo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Communication", "Support", "Trust"],
    highlight: "good communication emerged",
  },
  [TestimonioId.GABRIEL_GRANADOS]: {
    quote: `At 23 years old I have had various mentors, and I feel that I have not been able to connect with many or work hand in hand in harmony. The opposite case working with Hugo as a mentor. Trust, motivation and teamwork is something that can always be rescued, not to mention the support and incentives to better employ our work. Without a doubt, the trust and closeness with the team makes me see work differently, and see my professional future in a positive way.`,
    authorName: "Anonymous",
    role: "I am part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Anonymous profile photo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Mentoring", "Connection", "Teamwork", "Professional future"],
    highlight: "trust and closeness with the team",
  },
  [TestimonioId.JOSE_LOSTAUNAU]: {
    quote: `As a boss you manage to motivate everyone who works around you and show your support so that others feel comfortable. That ability to create an environment where we all feel supported makes the difference.`,
    authorName: "Anonymous",
    role: "I was part of your team.",
    avatarSrc: "/images/avatar-male.svg",
    avatarAlt: "Anonymous profile photo",
    linkedInUrl: "https://www.linkedin.com",
    tags: ["Motivation", "Positive environment", "Close leadership"],
    highlight: "motivate everyone who works around you",
  },
};

// Exported list of testimonials in the desired display order
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
