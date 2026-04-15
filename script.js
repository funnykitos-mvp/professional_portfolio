document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  en: {
    heroEyebrow: "Product Management Mentoring",
    heroTitle: "I help Product Managers make better decisions, communicate clearly, and grow faster",
    heroHeadline: "Become a stronger Product Manager with better judgment, clearer thinking, and more confidence in strategy, experimentation, and stakeholder management.",
    heroText: "I combine 12 years of product leadership experience with a formal background in Education to help PMs grow through structured mentoring, practical feedback, and real-world product thinking.",
    heroPrimaryCta: "Book a mentoring conversation",
    heroSecondaryCta: "Explore mentoring topics",
    heroPoint1: "1:1 mentoring for aspiring, junior, mid-level, and senior PMs",
    heroPoint2: "Practical coaching grounded in real product leadership",
    heroPoint3: "Strong focus on A/B testing, metrics creation, and decision-making",

    navAbout: "About",
    navCredibility: "Credibility",
    navWho: "Who I Help",
    navServices: "What I Help With",
    navProblems: "Common Problems",
    navTeaching: "Teaching Approach",
    navFaq: "FAQ",
    navContact: "Contact",

    aboutLabel: "About",
    aboutTitle: "Product leadership experience combined with a real teaching foundation",
    aboutP1: "I am a product leader, mentor, and educator with 12 years of experience working across payments, risk, platform strategy, and AI-driven decision systems.",
    aboutP2: "My mentoring is built for Product Managers who want to think more clearly, make better decisions, communicate with more confidence, and grow faster in their careers.",
    aboutP3: "What makes my approach different is that I bring both real-world product leadership and a formal academic background in Education. I hold bachelor’s degrees in History and Education, which gives me a strong foundation in how people learn, develop, and build practical skills over time.",

    credLabel: "Credibility",
    credTitle: "Built on real product leadership and formal teaching credentials",
    credCard1Title: "Product leadership in complex environments",
    credCard1Text: "Experience across Booking.com and PayPal, working on payments, risk, platform strategy, experimentation, and decision systems in high-scale environments.",
    credCard2Title: "Education background",
    credCard2Text: "Bachelor’s degrees in History and Education, giving me a formal and legal teaching foundation, in addition to industry experience.",
    credCard3Title: "Data-driven product expertise",
    credCard3Text: "Strong background in experimentation, A/B testing, KPI design, metrics creation, and product decision-making using real signals.",
    credCard4Title: "Global and cross-functional experience",
    credCard4Text: "Worked across engineering, analytics, business, operations, and compliance in global transaction ecosystems.",

    whoLabel: "Who I Help",
    whoTitle: "Mentoring for PMs at different stages",
    whoCard1Title: "Aspiring Product Managers",
    whoCard1Text: "For people preparing to move into product and build strong foundations early.",
    whoCard2Title: "Junior and Mid-Level PMs",
    whoCard2Text: "For PMs who want to improve prioritization, communication, product thinking, and day-to-day decision-making.",
    whoCard3Title: "Senior PMs",
    whoCard3Text: "For Product Managers who want to operate more strategically, influence better, and strengthen leadership presence.",
    whoCard4Title: "PMs in Transition",
    whoCard4Text: "For people preparing for interviews, promotions, role changes, or more complex product environments.",

    servicesLabel: "What I Help With",
    servicesTitle: "Practical mentoring built around real product challenges",
    svc1Title: "1:1 Product Mentoring",
    svc1Intro: "Personalized mentoring sessions tailored to your role, goals, and current challenges.",
    svc1Item1: "Product strategy and prioritization",
    svc1Item2: "Stakeholder communication and influence",
    svc1Item3: "Roadmap clarity and decision-making",
    svc1Item4: "Working with engineering, data, and design",
    svc1Item5: "Product thinking and structured problem solving",

    svc2Title: "Experimentation & Metrics Coaching",
    svc2Intro: "A focused area of mentoring for PMs who want to make stronger decisions with data.",
    svc2Item1: "Designing A/B experiments",
    svc2Item2: "Defining hypotheses and success criteria",
    svc2Item3: "Creating meaningful metrics and KPIs",
    svc2Item4: "Interpreting test results and trade-offs",
    svc2Item5: "Avoiding common experimentation mistakes",
    svc2Item6: "Using data to support product judgment",

    svc3Title: "Career & Interview Mentoring",
    svc3Intro: "Targeted support for PM interviews, career transitions, and stronger professional positioning.",
    svc3Item1: "Interview preparation",
    svc3Item2: "Storytelling using real product examples",
    svc3Item3: "Career growth conversations",
    svc3Item4: "Promotion readiness",
    svc3Item5: "Confidence and executive presence",

    problemsLabel: "Common Problems I Help Solve",
    problemsTitle: "What PMs usually come to me with",
    prob1Title: "“I’m not confident in my product decisions.”",
    prob1Text: "We work on structured thinking, prioritization, and decision quality so you can make choices more confidently.",
    prob2Title: "“I struggle to influence stakeholders.”",
    prob2Text: "We improve how you communicate priorities, trade-offs, and strategic reasoning.",
    prob3Title: "“I don’t know how to define the right metrics.”",
    prob3Text: "We build stronger KPI and metrics frameworks that actually support better product decisions.",
    prob4Title: "“I’m not sure how to structure experiments.”",
    prob4Text: "We work on A/B testing, hypotheses, success criteria, and interpretation so experimentation becomes useful, not confusing.",

    teachLabel: "Teaching Approach",
    teachTitle: "Structured, practical, and built for real growth",
    teachP1: "I believe strong Product Managers are not developed through generic advice. They grow through reflection, structured thinking, practical feedback, and repeated exposure to real product decisions.",
    teachP2: "My approach combines mentoring and teaching. I do not just share opinions. I help you understand principles, apply them to your context, and improve how you think over time.",
    teachP3: "I place special emphasis on experimentation, A/B testing, and metrics creation, because many PMs are exposed to them but few are taught how to use them well in practice.",

    faqLabel: "FAQ",
    faqTitle: "Frequently asked questions",
    faq1Q: "Who is this mentoring for?",
    faq1A: "It is for Product Managers at different stages, from aspiring PMs to experienced PMs who want to improve strategic thinking, communication, experimentation, and leadership.",
    faq2Q: "Do you only mentor PMs in payments or risk?",
    faq2A: "No. My experience comes from complex product environments, but the mentoring focuses on core PM skills that apply across industries.",
    faq3Q: "Can you help with A/B testing and metrics?",
    faq3A: "Yes. This is one of my strongest mentoring areas. I help PMs define hypotheses, choose the right metrics, interpret experiment results, and make better product decisions.",
    faq4Q: "Is your teaching backed by formal education?",
    faq4A: "Yes. In addition to my industry experience, I hold bachelor’s degrees in History and Education.",

    contactLabel: "Contact",
    contactTitle: "Let’s talk about your growth as a PM",
    contactText: "If you want more clarity, stronger judgment, better product communication, or more confidence in experimentation and metrics, I’d be glad to help.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactLocationLabel: "Location",
    contactLocationValue: "Haarlem, Netherlands",
    contactNextLabel: "Next Step",
    contactNextValue: "Book a mentoring conversation by email or LinkedIn",

    footerText: "PM Mentoring · Teaching · Product Leadership"
  },

  es: {
    heroEyebrow: "Mentoría en Product Management",
    heroTitle: "Ayudo a Product Managers a tomar mejores decisiones, comunicarse con claridad y crecer más rápido",
    heroHeadline: "Conviértete en un Product Manager más sólido, con mejor criterio, pensamiento más claro y más confianza en estrategia, experimentación y gestión de stakeholders.",
    heroText: "Combino más de 12 años de experiencia en liderazgo de producto con una formación académica en Educación para ayudar a PMs a crecer mediante mentoría estructurada, feedback práctico y pensamiento de producto aplicado.",
    heroPrimaryCta: "Reserva una conversación de mentoría",
    heroSecondaryCta: "Explora los temas de mentoría",
    heroPoint1: "Mentoría 1:1 para PMs aspirantes, junior, mid-level y senior",
    heroPoint2: "Acompañamiento práctico basado en liderazgo real de producto",
    heroPoint3: "Fuerte foco en A/B testing, creación de métricas y toma de decisiones",

    navAbout: "Sobre mí",
    navCredibility: "Credibilidad",
    navWho: "A quién ayudo",
    navServices: "En qué ayudo",
    navProblems: "Problemas comunes",
    navTeaching: "Enfoque de enseñanza",
    navFaq: "FAQ",
    navContact: "Contacto",

    aboutLabel: "Sobre mí",
    aboutTitle: "Experiencia en liderazgo de producto combinada con una base real de enseñanza",
    aboutP1: "Soy líder de producto, mentor y educador, con más de 12 años de experiencia en pagos, riesgo, estrategia de plataformas y sistemas de decisión impulsados por IA.",
    aboutP2: "Mi mentoría está diseñada para Product Managers que quieren pensar con más claridad, tomar mejores decisiones, comunicarse con más confianza y crecer más rápido en su carrera.",
    aboutP3: "Lo que diferencia mi enfoque es que combino liderazgo real de producto con una formación académica formal en Educación. Tengo licenciaturas en Historia y Educación, lo que me da una base sólida sobre cómo aprenden las personas, evolucionan y desarrollan habilidades prácticas con el tiempo.",

    credLabel: "Credibilidad",
    credTitle: "Basado en liderazgo real de producto y credenciales formales de enseñanza",
    credCard1Title: "Liderazgo de producto en entornos complejos",
    credCard1Text: "Experiencia en Booking.com y PayPal, trabajando en pagos, riesgo, estrategia de plataformas, experimentación y sistemas de decisión en entornos de gran escala.",
    credCard2Title: "Formación en educación",
    credCard2Text: "Licenciaturas en Historia y Educación, que me dan una base formal y legal para enseñar, además de mi experiencia en la industria.",
    credCard3Title: "Experiencia en producto orientado a datos",
    credCard3Text: "Sólida trayectoria en experimentación, A/B testing, diseño de KPIs, creación de métricas y toma de decisiones con señales reales.",
    credCard4Title: "Experiencia global y cross-functional",
    credCard4Text: "He trabajado con equipos de ingeniería, analítica, negocio, operaciones y compliance en ecosistemas globales de transacciones.",

    whoLabel: "A quién ayudo",
    whoTitle: "Mentoría para PMs en diferentes etapas",
    whoCard1Title: "Aspirantes a Product Manager",
    whoCard1Text: "Para personas que se preparan para entrar en producto y construir una base sólida desde el inicio.",
    whoCard2Title: "PMs Junior y Mid-Level",
    whoCard2Text: "Para PMs que quieren mejorar priorización, comunicación, pensamiento de producto y toma de decisiones en el día a día.",
    whoCard3Title: "PMs Senior",
    whoCard3Text: "Para Product Managers que quieren operar de forma más estratégica, influir mejor y fortalecer su presencia de liderazgo.",
    whoCard4Title: "PMs en transición",
    whoCard4Text: "Para personas que se preparan para entrevistas, promociones, cambios de rol o entornos de producto más complejos.",

    servicesLabel: "En qué ayudo",
    servicesTitle: "Mentoría práctica basada en retos reales de producto",
    svc1Title: "Mentoría 1:1 de Producto",
    svc1Intro: "Sesiones personalizadas según tu rol, objetivos y desafíos actuales.",
    svc1Item1: "Estrategia de producto y priorización",
    svc1Item2: "Comunicación e influencia con stakeholders",
    svc1Item3: "Claridad de roadmap y toma de decisiones",
    svc1Item4: "Trabajo con ingeniería, datos y diseño",
    svc1Item5: "Pensamiento de producto y resolución estructurada de problemas",

    svc2Title: "Coaching en Experimentación y Métricas",
    svc2Intro: "Un área enfocada para PMs que quieren tomar mejores decisiones con datos.",
    svc2Item1: "Diseño de experimentos A/B",
    svc2Item2: "Definición de hipótesis y criterios de éxito",
    svc2Item3: "Creación de métricas y KPIs relevantes",
    svc2Item4: "Interpretación de resultados y trade-offs",
    svc2Item5: "Evitar errores comunes en experimentación",
    svc2Item6: "Usar datos para reforzar el criterio de producto",

    svc3Title: "Mentoría de Carrera e Entrevistas",
    svc3Intro: "Apoyo específico para entrevistas de PM, transiciones profesionales y mejor posicionamiento.",
    svc3Item1: "Preparación de entrevistas",
    svc3Item2: "Storytelling con ejemplos reales de producto",
    svc3Item3: "Conversaciones de crecimiento profesional",
    svc3Item4: "Preparación para promociones",
    svc3Item5: "Confianza y presencia ejecutiva",

    problemsLabel: "Problemas comunes que ayudo a resolver",
    problemsTitle: "Con qué suelen venir los PMs",
    prob1Title: "“No confío en mis decisiones de producto.”",
    prob1Text: "Trabajamos pensamiento estructurado, priorización y calidad de decisión para que elijas con más confianza.",
    prob2Title: "“Me cuesta influir en stakeholders.”",
    prob2Text: "Mejoramos cómo comunicas prioridades, trade-offs y razonamiento estratégico.",
    prob3Title: "“No sé cómo definir las métricas correctas.”",
    prob3Text: "Construimos frameworks de KPIs y métricas que realmente apoyen mejores decisiones de producto.",
    prob4Title: "“No sé cómo estructurar experimentos.”",
    prob4Text: "Trabajamos A/B testing, hipótesis, criterios de éxito e interpretación para que la experimentación sea útil y no confusa.",

    teachLabel: "Enfoque de enseñanza",
    teachTitle: "Estructurado, práctico y orientado al crecimiento real",
    teachP1: "Creo que los buenos Product Managers no se desarrollan con consejos genéricos. Crecen mediante reflexión, pensamiento estructurado, feedback práctico y exposición repetida a decisiones reales de producto.",
    teachP2: "Mi enfoque combina mentoría y enseñanza. No solo comparto opiniones. Te ayudo a entender principios, aplicarlos a tu contexto y mejorar cómo piensas con el tiempo.",
    teachP3: "Pongo especial énfasis en experimentación, A/B testing y creación de métricas, porque muchos PMs tienen contacto con estos temas, pero pocos aprenden a utilizarlos bien en la práctica.",

    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Para quién es esta mentoría?",
    faq1A: "Es para Product Managers en distintas etapas, desde aspirantes hasta PMs con experiencia que quieren mejorar estrategia, comunicación, experimentación y liderazgo.",
    faq2Q: "¿Solo haces mentoría para PMs de pagos o riesgo?",
    faq2A: "No. Mi experiencia viene de entornos complejos de producto, pero la mentoría se centra en habilidades clave de PM aplicables a múltiples industrias.",
    faq3Q: "¿Puedes ayudar con A/B testing y métricas?",
    faq3A: "Sí. Es una de mis áreas más fuertes. Ayudo a definir hipótesis, elegir métricas, interpretar resultados y tomar mejores decisiones de producto.",
    faq4Q: "¿Tu enseñanza está respaldada por formación formal?",
    faq4A: "Sí. Además de mi experiencia en la industria, tengo licenciaturas en Historia y Educación.",

    contactLabel: "Contacto",
    contactTitle: "Hablemos de tu crecimiento como PM",
    contactText: "Si quieres más claridad, mejor criterio, mejor comunicación de producto o más confianza en experimentación y métricas, estaré encantado de ayudarte.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactLocationLabel: "Ubicación",
    contactLocationValue: "Haarlem, Países Bajos",
    contactNextLabel: "Siguiente paso",
    contactNextValue: "Reserva una conversación de mentoría por email o LinkedIn",

    footerText: "Mentoría PM · Enseñanza · Liderazgo de Producto"
  },

  pt: {
    heroEyebrow: "Mentoria em Product Management",
    heroTitle: "Eu ajudo Product Managers a tomar decisões melhores, se comunicar com clareza e crescer mais rápido",
    heroHeadline: "Torne-se um Product Manager mais forte, com melhor julgamento, pensamento mais claro e mais confiança em estratégia, experimentação e gestão de stakeholders.",
    heroText: "Eu combino mais de 12 anos de experiência em liderança de produto com uma formação acadêmica em Educação para ajudar PMs a crescer por meio de mentoria estruturada, feedback prático e pensamento de produto aplicado.",
    heroPrimaryCta: "Agende uma conversa de mentoria",
    heroSecondaryCta: "Explore os temas de mentoria",
    heroPoint1: "Mentoria 1:1 para PMs aspirantes, juniores, plenos e seniores",
    heroPoint2: "Acompanhamento prático baseado em liderança real de produto",
    heroPoint3: "Forte foco em testes A/B, criação de métricas e tomada de decisão",

    navAbout: "Sobre mim",
    navCredibility: "Credibilidade",
    navWho: "Quem eu ajudo",
    navServices: "No que eu ajudo",
    navProblems: "Problemas comuns",
    navTeaching: "Abordagem de ensino",
    navFaq: "FAQ",
    navContact: "Contato",

    aboutLabel: "Sobre mim",
    aboutTitle: "Experiência em liderança de produto combinada com uma base real de ensino",
    aboutP1: "Sou líder de produto, mentor e educador, com mais de 12 anos de experiência em pagamentos, risco, estratégia de plataformas e sistemas de decisão orientados por IA.",
    aboutP2: "Minha mentoria foi criada para Product Managers que querem pensar com mais clareza, tomar decisões melhores, se comunicar com mais confiança e crescer mais rápido na carreira.",
    aboutP3: "O que diferencia minha abordagem é que eu combino liderança real de produto com uma formação acadêmica formal em Educação. Tenho bacharelados em História e Educação, o que me dá uma base sólida sobre como as pessoas aprendem, evoluem e desenvolvem habilidades práticas ao longo do tempo.",

    credLabel: "Credibilidade",
    credTitle: "Baseado em liderança real de produto e credenciais formais de ensino",
    credCard1Title: "Liderança de produto em ambientes complexos",
    credCard1Text: "Experiência na Booking.com e no PayPal, atuando em pagamentos, risco, estratégia de plataforma, experimentação e sistemas de decisão em ambientes de grande escala.",
    credCard2Title: "Formação em educação",
    credCard2Text: "Bacharelados em História e Educação, que me dão uma base formal e legal para ensinar, além da experiência na indústria.",
    credCard3Title: "Experiência em produto orientado por dados",
    credCard3Text: "Forte atuação em experimentação, testes A/B, desenho de KPIs, criação de métricas e tomada de decisão com sinais reais.",
    credCard4Title: "Experiência global e cross-functional",
    credCard4Text: "Atuação com times de engenharia, analytics, negócio, operações e compliance em ecossistemas globais de transações.",

    whoLabel: "Quem eu ajudo",
    whoTitle: "Mentoria para PMs em diferentes estágios",
    whoCard1Title: "Aspirantes a Product Manager",
    whoCard1Text: "Para pessoas que estão se preparando para entrar em produto e construir bases sólidas desde cedo.",
    whoCard2Title: "PMs Juniores e Plenos",
    whoCard2Text: "Para PMs que querem melhorar priorização, comunicação, pensamento de produto e tomada de decisão no dia a dia.",
    whoCard3Title: "PMs Seniores",
    whoCard3Text: "Para Product Managers que querem atuar de forma mais estratégica, influenciar melhor e fortalecer presença de liderança.",
    whoCard4Title: "PMs em transição",
    whoCard4Text: "Para pessoas se preparando para entrevistas, promoções, mudanças de função ou ambientes de produto mais complexos.",

    servicesLabel: "No que eu ajudo",
    servicesTitle: "Mentoria prática construída em torno de desafios reais de produto",
    svc1Title: "Mentoria 1:1 em Produto",
    svc1Intro: "Sessões personalizadas de acordo com seu papel, objetivos e desafios atuais.",
    svc1Item1: "Estratégia de produto e priorização",
    svc1Item2: "Comunicação e influência com stakeholders",
    svc1Item3: "Clareza de roadmap e tomada de decisão",
    svc1Item4: "Trabalho com engenharia, dados e design",
    svc1Item5: "Pensamento de produto e resolução estruturada de problemas",

    svc2Title: "Coaching em Experimentação e Métricas",
    svc2Intro: "Uma frente focada para PMs que querem tomar decisões melhores com dados.",
    svc2Item1: "Desenho de experimentos A/B",
    svc2Item2: "Definição de hipóteses e critérios de sucesso",
    svc2Item3: "Criação de métricas e KPIs relevantes",
    svc2Item4: "Interpretação de resultados e trade-offs",
    svc2Item5: "Evitar erros comuns em experimentação",
    svc2Item6: "Usar dados para apoiar o julgamento de produto",

    svc3Title: "Mentoria de Carreira e Entrevistas",
    svc3Intro: "Apoio direcionado para entrevistas de PM, transições de carreira e melhor posicionamento profissional.",
    svc3Item1: "Preparação para entrevistas",
    svc3Item2: "Storytelling com exemplos reais de produto",
    svc3Item3: "Conversas sobre crescimento de carreira",
    svc3Item4: "Preparação para promoção",
    svc3Item5: "Confiança e presença executiva",

    problemsLabel: "Problemas comuns que eu ajudo a resolver",
    problemsTitle: "O que normalmente traz PMs até mim",
    prob1Title: "“Não tenho confiança nas minhas decisões de produto.”",
    prob1Text: "Trabalhamos pensamento estruturado, priorização e qualidade de decisão para que você escolha com mais confiança.",
    prob2Title: "“Tenho dificuldade para influenciar stakeholders.”",
    prob2Text: "Melhoramos como você comunica prioridades, trade-offs e raciocínio estratégico.",
    prob3Title: "“Não sei definir as métricas certas.”",
    prob3Text: "Construímos frameworks de KPIs e métricas que realmente apoiem melhores decisões de produto.",
    prob4Title: "“Não sei estruturar experimentos.”",
    prob4Text: "Trabalhamos testes A/B, hipóteses, critérios de sucesso e interpretação para que a experimentação seja útil, e não confusa.",

    teachLabel: "Abordagem de ensino",
    teachTitle: "Estruturada, prática e construída para crescimento real",
    teachP1: "Eu acredito que bons Product Managers não se desenvolvem com conselhos genéricos. Eles crescem por meio de reflexão, pensamento estruturado, feedback prático e exposição repetida a decisões reais de produto.",
    teachP2: "Minha abordagem combina mentoria e ensino. Eu não apenas compartilho opiniões. Eu ajudo você a entender princípios, aplicá-los ao seu contexto e melhorar a forma como pensa ao longo do tempo.",
    teachP3: "Dou ênfase especial a experimentação, testes A/B e criação de métricas, porque muitos PMs têm contato com esses temas, mas poucos aprendem a usá-los bem na prática.",

    faqLabel: "FAQ",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Para quem é essa mentoria?",
    faq1A: "É para Product Managers em diferentes estágios, desde aspirantes até PMs experientes que querem melhorar estratégia, comunicação, experimentação e liderança.",
    faq2Q: "Você só faz mentoria para PMs de pagamentos ou risco?",
    faq2A: "Não. Minha experiência vem de ambientes complexos de produto, mas a mentoria foca em habilidades centrais de PM aplicáveis a diferentes indústrias.",
    faq3Q: "Você pode ajudar com testes A/B e métricas?",
    faq3A: "Sim. Essa é uma das minhas áreas mais fortes. Eu ajudo PMs a definir hipóteses, escolher métricas, interpretar resultados e tomar decisões melhores de produto.",
    faq4Q: "Seu ensino é respaldado por formação formal?",
    faq4A: "Sim. Além da minha experiência na indústria, eu tenho bacharelados em História e Educação.",

    contactLabel: "Contato",
    contactTitle: "Vamos conversar sobre seu crescimento como PM",
    contactText: "Se você quer mais clareza, melhor julgamento, melhor comunicação de produto ou mais confiança em experimentação e métricas, ficarei feliz em ajudar.",
    contactEmailLabel: "Email",
    contactLinkedinLabel: "LinkedIn",
    contactLocationLabel: "Localização",
    contactLocationValue: "Haarlem, Holanda",
    contactNextLabel: "Próximo passo",
    contactNextValue: "Agende uma conversa de mentoria por email ou LinkedIn",

    footerText: "Mentoria PM · Ensino · Liderança de Produto"
  }
};

function applyLanguage(lang) {
  const selected = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (selected[key]) {
      element.textContent = selected[key];
    }
  });

  const titles = {
    en: "Marcos Portella | PM Mentor & Educator",
    es: "Marcos Portella | Mentor y Educador de PM",
    pt: "Marcos Portella | Mentor e Educador de PM"
  };

  document.title = titles[lang] || titles.en;
  localStorage.setItem("siteLanguage", lang);
}

const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("siteLanguage") || "en";
languageSelect.value = savedLanguage;
applyLanguage(savedLanguage);

languageSelect.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

console.log("Multilingual mentoring website loaded.");