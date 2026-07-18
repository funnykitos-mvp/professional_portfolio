const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const PAGE_TITLES = {
  en: "Marcos Portella | PM Mentor & Educator",
  es: "Marcos Portella | Mentoring y formación para Product Managers",
  pt: "Marcos Portella | Mentoria e formação para Product Managers"
};

const i18nElements = document.querySelectorAll("[data-i18n]");

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
    heroEyebrow: "Mentoring en Product Management",
    heroTitle: "Ayudo a Product Managers a decidir con más criterio, comunicar con impacto y acelerar su desarrollo profesional",
    heroHeadline: "Refuerza tu perfil como Product Manager: mejor juicio de producto, mayor claridad estratégica y más seguridad al gestionar stakeholders, experimentación y métricas.",
    heroText: "Aporto más de 12 años de liderazgo de producto y una formación académica en Educación para impulsar a PMs mediante mentoring estructurado, feedback accionable y pensamiento de producto aplicado al negocio.",
    heroPrimaryCta: "Reservar una sesión de mentoring",
    heroSecondaryCta: "Ver áreas de acompañamiento",
    heroPoint1: "Mentoring 1:1 para PMs aspirantes, júnior, intermedios y sénior",
    heroPoint2: "Acompañamiento práctico basado en liderazgo de producto real",
    heroPoint3: "Especial foco en A/B testing, diseño de métricas y toma de decisiones",

    navAbout: "Sobre mí",
    navCredibility: "Trayectoria",
    navWho: "A quién acompaño",
    navServices: "En qué te ayudo",
    navProblems: "Retos habituales",
    navTeaching: "Método",
    navFaq: "Preguntas frecuentes",
    navContact: "Contacto",

    aboutLabel: "Sobre mí",
    aboutTitle: "Liderazgo de producto con base formativa sólida",
    aboutP1: "Soy líder de producto, mentor y formador, con más de 12 años de experiencia en payments, risk, estrategia de plataforma y sistemas de decisión impulsados por IA.",
    aboutP2: "Mi mentoring está pensado para Product Managers que buscan mayor claridad, mejores decisiones, comunicación más sólida y un avance profesional más consistente.",
    aboutP3: "Mi diferencial es combinar liderazgo de producto en entornos reales con formación académica en Educación. Cuento con licenciaturas en Historia y Educación, lo que me permite diseñar un acompañamiento orientado a cómo las personas aprenden, consolidan criterio y desarrollan competencias aplicables.",

    credLabel: "Trayectoria",
    credTitle: "Avalado por liderazgo de producto y formación docente formal",
    credCard1Title: "Liderazgo de producto en contextos complejos",
    credCard1Text: "Experiencia en Booking.com y PayPal en payments, risk, estrategia de plataforma, experimentación y sistemas de decisión a gran escala.",
    credCard2Title: "Formación académica en Educación",
    credCard2Text: "Licenciaturas en Historia y Educación, con base académica formal para la docencia, además de experiencia en la industria.",
    credCard3Title: "Producto orientado a datos",
    credCard3Text: "Sólida trayectoria en experimentación, A/B testing, diseño de KPIs, definición de métricas y decisiones de producto basadas en señales reales.",
    credCard4Title: "Experiencia global e interdisciplinar",
    credCard4Text: "Colaboración con ingeniería, analítica, negocio, operaciones y cumplimiento normativo en ecosistemas globales de transacciones.",

    whoLabel: "A quién acompaño",
    whoTitle: "Mentoring para PMs en distintas etapas profesionales",
    whoCard1Title: "Aspirantes a Product Manager",
    whoCard1Text: "Para profesionales que quieren dar el salto a producto y construir una base sólida desde el principio.",
    whoCard2Title: "PMs júnior e intermedios",
    whoCard2Text: "Para PMs que necesitan mejorar priorización, comunicación, product thinking y la calidad de las decisiones del día a día.",
    whoCard3Title: "PMs sénior",
    whoCard3Text: "Para Product Managers que quieren operar con mayor visión estratégica, influir con más peso y reforzar su liderazgo.",
    whoCard4Title: "PMs en transición",
    whoCard4Text: "Para quienes se preparan para entrevistas, promociones, cambios de rol o entornos de producto más exigentes.",

    servicesLabel: "En qué te ayudo",
    servicesTitle: "Mentoring práctico orientado a retos reales de producto",
    svc1Title: "Mentoring 1:1 de producto",
    svc1Intro: "Sesiones personalizadas según tu rol, objetivos y prioridades actuales.",
    svc1Item1: "Estrategia de producto y priorización",
    svc1Item2: "Comunicación e influencia con stakeholders",
    svc1Item3: "Claridad de roadmap y toma de decisiones",
    svc1Item4: "Colaboración con ingeniería, datos y diseño",
    svc1Item5: "Product thinking y resolución estructurada de problemas",

    svc2Title: "Coaching en experimentación y métricas",
    svc2Intro: "Acompañamiento específico para PMs que quieren decidir con más solidez a partir de datos.",
    svc2Item1: "Diseño de experimentos A/B",
    svc2Item2: "Definición de hipótesis y criterios de éxito",
    svc2Item3: "Diseño de métricas y KPIs con sentido de negocio",
    svc2Item4: "Interpretación de resultados y trade-offs",
    svc2Item5: "Prevención de errores habituales en experimentación",
    svc2Item6: "Uso de datos para reforzar el criterio de producto",

    svc3Title: "Mentoring de carrera y entrevistas",
    svc3Intro: "Apoyo orientado a entrevistas de PM, transiciones profesionales y un posicionamiento más sólido.",
    svc3Item1: "Preparación de entrevistas",
    svc3Item2: "Narrativa profesional con casos reales de producto",
    svc3Item3: "Conversaciones de desarrollo de carrera",
    svc3Item4: "Preparación para promociones",
    svc3Item5: "Confianza y presencia ejecutiva",

    problemsLabel: "Retos habituales que trabajo con PMs",
    problemsTitle: "Situaciones con las que suelen llegar los PMs",
    prob1Title: "“No me siento seguro con mis decisiones de producto.”",
    prob1Text: "Trabajamos pensamiento estructurado, priorización y calidad de decisión para que elijas con más criterio y confianza.",
    prob2Title: "“Me cuesta influir en stakeholders.”",
    prob2Text: "Mejoramos cómo comunicas prioridades, trade-offs y el razonamiento estratégico detrás de cada propuesta.",
    prob3Title: "“No sé cómo definir las métricas adecuadas.”",
    prob3Text: "Diseñamos marcos de KPIs y métricas que aporten señal útil y mejoren las decisiones de producto.",
    prob4Title: "“No tengo claro cómo estructurar experimentos.”",
    prob4Text: "Trabajamos A/B testing, hipótesis, criterios de éxito e interpretación para que la experimentación aporte valor, no ruido.",

    teachLabel: "Método",
    teachTitle: "Estructurado, práctico y orientado a resultados",
    teachP1: "Los Product Managers sólidos no se forman con consejos genéricos. Evolucionan con reflexión, pensamiento estructurado, feedback práctico y práctica reiterada sobre decisiones reales de producto.",
    teachP2: "Mi método combina mentoring y formación. No me limito a dar opiniones: te ayudo a entender principios, aplicarlos a tu contexto y mejorar cómo piensas y decides con el tiempo.",
    teachP3: "Pongo especial énfasis en experimentación, A/B testing y diseño de métricas, porque muchos PMs los usan, pero pocos los dominan con rigor en el día a día.",

    faqLabel: "Preguntas frecuentes",
    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Para quién es este mentoring?",
    faq1A: "Para Product Managers en distintas etapas: desde perfiles aspirantes hasta PMs con experiencia que quieren reforzar pensamiento estratégico, comunicación, experimentación y liderazgo.",
    faq2Q: "¿Solo trabajas con PMs de payments o risk?",
    faq2A: "No. Mi trayectoria viene de entornos de producto complejos, pero el mentoring se centra en competencias nucleares de PM aplicables a distintos sectores.",
    faq3Q: "¿Puedes ayudarme con A/B testing y métricas?",
    faq3A: "Sí. Es una de mis áreas más sólidas. Ayudo a definir hipótesis, elegir métricas, interpretar resultados y tomar mejores decisiones de producto.",
    faq4Q: "¿Tu método tiene respaldo formativo formal?",
    faq4A: "Sí. Además de mi experiencia en la industria, tengo licenciaturas en Historia y Educación.",

    contactLabel: "Contacto",
    contactTitle: "Hablemos de tu desarrollo como Product Manager",
    contactText: "Si buscas más claridad, mejor criterio, una comunicación de producto más sólida o mayor seguridad en experimentación y métricas, estaré encantado de ayudarte.",
    contactEmailLabel: "Correo electrónico",
    contactLinkedinLabel: "LinkedIn",
    contactLocationLabel: "Ubicación",
    contactLocationValue: "Haarlem, Países Bajos",
    contactNextLabel: "Siguiente paso",
    contactNextValue: "Reserva una sesión de mentoring por correo o LinkedIn",

    footerText: "Mentoring PM · Formación · Liderazgo de producto"
  },

  pt: {
    heroEyebrow: "Mentoria em Product Management",
    heroTitle: "Ajudo Product Managers a decidir com mais critério, comunicar com impacto e acelerar a carreira",
    heroHeadline: "Evolua como Product Manager com melhor senso crítico, mais clareza estratégica e mais segurança em stakeholders, experimentação e métricas.",
    heroText: "Reúno mais de 12 anos de liderança de produto com formação acadêmica em Educação para apoiar PMs com mentoria estruturada, feedback aplicável e pensamento de produto orientado a negócio.",
    heroPrimaryCta: "Agendar uma conversa de mentoria",
    heroSecondaryCta: "Ver frentes de atuação",
    heroPoint1: "Mentoria 1:1 para PMs aspirantes, júnior, pleno e sênior",
    heroPoint2: "Acompanhamento prático com base em liderança real de produto",
    heroPoint3: "Foco forte em testes A/B, desenho de métricas e tomada de decisão",

    navAbout: "Sobre mim",
    navCredibility: "Trajetória",
    navWho: "Para quem é",
    navServices: "Como posso ajudar",
    navProblems: "Desafios comuns",
    navTeaching: "Método",
    navFaq: "Perguntas frequentes",
    navContact: "Contato",

    aboutLabel: "Sobre mim",
    aboutTitle: "Liderança de produto com base formativa consistente",
    aboutP1: "Sou líder de produto, mentor e educador, com mais de 12 anos de experiência em payments, risk, estratégia de plataforma e sistemas de decisão orientados por IA.",
    aboutP2: "Minha mentoria é voltada a Product Managers que querem mais clareza, decisões melhores, comunicação mais sólida e avanço de carreira com mais consistência.",
    aboutP3: "Meu diferencial é unir liderança de produto em contextos reais com formação acadêmica em Educação. Tenho bacharelado em História e em Educação, o que me permite estruturar um acompanhamento alinhado a como as pessoas aprendem, consolidam critério e desenvolvem competências práticas.",

    credLabel: "Trajetória",
    credTitle: "Sustentado por liderança de produto e formação docente formal",
    credCard1Title: "Liderança de produto em ambientes complexos",
    credCard1Text: "Experiência na Booking.com e no PayPal em payments, risk, estratégia de plataforma, experimentação e sistemas de decisão em escala.",
    credCard2Title: "Formação acadêmica em Educação",
    credCard2Text: "Bacharelado em História e em Educação, com base acadêmica formal para atuar em formação, além da experiência de mercado.",
    credCard3Title: "Produto orientado a dados",
    credCard3Text: "Sólida atuação em experimentação, testes A/B, desenho de KPIs, definição de métricas e decisões de produto com base em sinais reais.",
    credCard4Title: "Experiência global e multifuncional",
    credCard4Text: "Atuação com engenharia, analytics, negócio, operações e compliance em ecossistemas globais de transações.",

    whoLabel: "Para quem é",
    whoTitle: "Mentoria para PMs em diferentes momentos de carreira",
    whoCard1Title: "Aspirantes a Product Manager",
    whoCard1Text: "Para profissionais que querem migrar para produto e construir uma base sólida desde o início.",
    whoCard2Title: "PMs júnior e pleno",
    whoCard2Text: "Para PMs que querem evoluir em priorização, comunicação, product thinking e qualidade das decisões do dia a dia.",
    whoCard3Title: "PMs sênior",
    whoCard3Text: "Para Product Managers que querem atuar com mais visão estratégica, influenciar com mais peso e fortalecer a presença de liderança.",
    whoCard4Title: "PMs em transição",
    whoCard4Text: "Para quem se prepara para entrevistas, promoções, mudança de escopo ou ambientes de produto mais complexos.",

    servicesLabel: "Como posso ajudar",
    servicesTitle: "Mentoria prática conectada a desafios reais de produto",
    svc1Title: "Mentoria 1:1 de produto",
    svc1Intro: "Sessões personalizadas conforme seu papel, objetivos e prioridades atuais.",
    svc1Item1: "Estratégia de produto e priorização",
    svc1Item2: "Comunicação e influência com stakeholders",
    svc1Item3: "Clareza de roadmap e tomada de decisão",
    svc1Item4: "Parceria com engenharia, dados e design",
    svc1Item5: "Product thinking e resolução estruturada de problemas",

    svc2Title: "Coaching em experimentação e métricas",
    svc2Intro: "Acompanhamento focado para PMs que querem decidir com mais segurança a partir de dados.",
    svc2Item1: "Desenho de experimentos A/B",
    svc2Item2: "Definição de hipóteses e critérios de sucesso",
    svc2Item3: "Criação de métricas e KPIs com sentido de negócio",
    svc2Item4: "Interpretação de resultados e trade-offs",
    svc2Item5: "Prevenção de erros comuns em experimentação",
    svc2Item6: "Uso de dados para fortalecer o critério de produto",

    svc3Title: "Mentoria de carreira e entrevistas",
    svc3Intro: "Apoio direcionado a entrevistas de PM, transições de carreira e posicionamento profissional mais consistente.",
    svc3Item1: "Preparação para entrevistas",
    svc3Item2: "Narrativa profissional com cases reais de produto",
    svc3Item3: "Conversas de desenvolvimento de carreira",
    svc3Item4: "Preparação para promoção",
    svc3Item5: "Confiança e presença executiva",

    problemsLabel: "Desafios comuns que trabalho com PMs",
    problemsTitle: "Situações que normalmente trazem PMs até a mentoria",
    prob1Title: "“Não me sinto seguro nas minhas decisões de produto.”",
    prob1Text: "Trabalhamos pensamento estruturado, priorização e qualidade de decisão para que você escolha com mais critério e confiança.",
    prob2Title: "“Tenho dificuldade para influenciar stakeholders.”",
    prob2Text: "Evoluimos a forma como você comunica prioridades, trade-offs e o raciocínio estratégico por trás de cada proposta.",
    prob3Title: "“Não sei definir as métricas certas.”",
    prob3Text: "Construímos estruturas de KPIs e métricas que gerem sinal útil e sustentem melhores decisões de produto.",
    prob4Title: "“Não sei estruturar experimentos com clareza.”",
    prob4Text: "Trabalhamos testes A/B, hipóteses, critérios de sucesso e interpretação para que a experimentação gere valor, e não ruído.",

    teachLabel: "Método",
    teachTitle: "Estruturado, prático e orientado a resultado",
    teachP1: "Product Managers fortes não se formam com conselhos genéricos. Eles evoluem com reflexão, pensamento estruturado, feedback prático e exposição recorrente a decisões reais de produto.",
    teachP2: "Meu método combina mentoria e formação. Não me limito a opinar: ajudo você a entender princípios, aplicar ao seu contexto e melhorar a forma como pensa e decide ao longo do tempo.",
    teachP3: "Dou ênfase especial a experimentação, testes A/B e desenho de métricas, porque muitos PMs têm contato com esses temas, mas poucos os usam com rigor no dia a dia.",

    faqLabel: "Perguntas frequentes",
    faqTitle: "Perguntas frequentes",
    faq1Q: "Para quem é esta mentoria?",
    faq1A: "Para Product Managers em diferentes momentos de carreira: de aspirantes a PMs experientes que querem evoluir em pensamento estratégico, comunicação, experimentação e liderança.",
    faq2Q: "Você só atende PMs de payments ou risk?",
    faq2A: "Não. Minha experiência vem de ambientes complexos de produto, mas a mentoria foca em competências essenciais de PM aplicáveis a diferentes setores.",
    faq3Q: "Você pode ajudar com testes A/B e métricas?",
    faq3A: "Sim. Essa é uma das minhas frentes mais fortes. Ajudo a definir hipóteses, escolher métricas, interpretar resultados e tomar decisões de produto com mais qualidade.",
    faq4Q: "Seu método tem base em formação formal?",
    faq4A: "Sim. Além da experiência de mercado, tenho bacharelado em História e em Educação.",

    contactLabel: "Contato",
    contactTitle: "Vamos falar sobre sua evolução como Product Manager",
    contactText: "Se você busca mais clareza, melhor critério, comunicação de produto mais sólida ou mais segurança em experimentação e métricas, será um prazer ajudar.",
    contactEmailLabel: "E-mail",
    contactLinkedinLabel: "LinkedIn",
    contactLocationLabel: "Localização",
    contactLocationValue: "Haarlem, Países Baixos",
    contactNextLabel: "Próximo passo",
    contactNextValue: "Agende uma conversa de mentoria por e-mail ou LinkedIn",

    footerText: "Mentoria PM · Formação · Liderança de produto"
  }
};

function applyLanguage(lang) {
  const selected = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  for (const element of i18nElements) {
    const key = element.getAttribute("data-i18n");
    const value = selected[key];
    if (value) {
      element.textContent = value;
    }
  }

  document.title = PAGE_TITLES[lang] || PAGE_TITLES.en;
  localStorage.setItem("siteLanguage", lang);
}

const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("siteLanguage") || "en";

if (languageSelect) {
  languageSelect.value = savedLanguage;
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

applyLanguage(savedLanguage);