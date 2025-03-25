
import { Language } from "../contexts/LanguageContext";

type TranslationKeys = {
  // Navbar
  about: string;
  services: string;
  contact: string;
  
  // Hero section
  aiEngineeringConsultant: string;
  transformingBusinesses: string;
  exploreServices: string;
  getInTouch: string;
  
  // About section
  aboutMe: string;
  engineeringSolutions: string;
  forComplexAIChallenges: string;
  aboutDescription1: string;
  aboutDescription2: string;
  softwareEngineering: string;
  aiDevelopment: string;
  machineLearning: string;
  conversationalAI: string;
  
  // Services section
  servicesHeading: string;
  aiConsultingServices: string;
  servicesDescription: string;
  aiStrategyConsulting: string;
  aiStrategyDescription: string;
  customAISolutions: string;
  customAIDescription: string;
  predictiveAnalytics: string;
  predictiveAnalyticsDescription: string;
  naturalLanguageProcessing: string;
  nlpDescription: string;
  aiIntegration: string;
  aiIntegrationDescription: string;
  dataEngineering: string;
  dataEngineeringDescription: string;
  
  // Contact section
  contactHeading: string;
  letsWork: string;
  together: string;
  contactDescription: string;
  name: string;
  email: string;
  message: string;
  yourName: string;
  yourEmail: string;
  tellAboutProject: string;
  sendMessage: string;
  sending: string;
  messageSent: string;
  thankYou: string;
  errorSending: string;
  tryAgain: string;
  
  // Footer
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
};

type Translations = {
  [key in Language]: TranslationKeys;
};

export const translations: Translations = {
  en: {
    // Navbar
    about: "About",
    services: "Services",
    contact: "Contact",
    
    // Hero section
    aiEngineeringConsultant: "AI Engineering Consultant",
    transformingBusinesses: "Transforming businesses through cutting-edge AI solutions and engineering expertise",
    exploreServices: "Explore Services",
    getInTouch: "Get in Touch",
    
    // About section
    aboutMe: "About Me",
    engineeringSolutions: "Engineering Solutions",
    forComplexAIChallenges: "for Complex AI Challenges",
    aboutDescription1: "As a software engineer specializing in AI solutions, I bring technical expertise and innovative thinking to every project. My approach combines solid engineering foundations with cutting-edge AI technologies to solve real business challenges.",
    aboutDescription2: "I partner with businesses across industries to implement intelligent systems that automate processes, extract insights from data, and create new opportunities for growth and efficiency.",
    softwareEngineering: "Software Engineering",
    aiDevelopment: "AI Development",
    machineLearning: "Machine Learning",
    conversationalAI: "Conversational AI",
    
    // Services section
    servicesHeading: "Services",
    aiConsultingServices: "AI Consulting Services",
    servicesDescription: "Expert solutions to help businesses leverage artificial intelligence for innovation, efficiency, and growth.",
    aiStrategyConsulting: "AI Strategy Consulting",
    aiStrategyDescription: "Develop a comprehensive AI roadmap aligned with your business goals and technological capabilities.",
    customAISolutions: "Custom AI Solutions",
    customAIDescription: "Design and implement tailor-made AI systems that address your specific business challenges.",
    predictiveAnalytics: "Predictive Analytics",
    predictiveAnalyticsDescription: "Leverage machine learning to forecast trends and make data-driven business decisions.",
    naturalLanguageProcessing: "Natural Language Processing",
    nlpDescription: "Create intelligent systems that understand, interpret, and generate human language.",
    aiIntegration: "AI Integration",
    aiIntegrationDescription: "Seamlessly integrate AI capabilities into your existing software ecosystem and workflows.",
    dataEngineering: "Data Engineering",
    dataEngineeringDescription: "Build robust data pipelines and architectures to power your AI and analytics initiatives.",
    
    // Contact section
    contactHeading: "Contact",
    letsWork: "Let's Work",
    together: "Together",
    contactDescription: "Ready to elevate your business with advanced AI solutions? Get in touch to discuss your project or schedule a consultation.",
    name: "Name",
    email: "Email",
    message: "Message",
    yourName: "Your name",
    yourEmail: "your@email.com",
    tellAboutProject: "Tell me about your project...",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent",
    thankYou: "Thank you for your message! I'll get back to you soon.",
    errorSending: "Error",
    tryAgain: "Could not send message. Please try again later.",
    
    // Footer
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service"
  },
  
  es: {
    // Navbar
    about: "Acerca de",
    services: "Servicios",
    contact: "Contacto",
    
    // Hero section
    aiEngineeringConsultant: "Consultor de Ingeniería IA",
    transformingBusinesses: "Transformando empresas a través de soluciones de IA de vanguardia y experiencia en ingeniería",
    exploreServices: "Explorar Servicios",
    getInTouch: "Contactar",
    
    // About section
    aboutMe: "Sobre Mí",
    engineeringSolutions: "Soluciones de Ingeniería",
    forComplexAIChallenges: "para Desafíos Complejos de IA",
    aboutDescription1: "Como ingeniero de software especializado en soluciones de IA, aporto experiencia técnica y pensamiento innovador a cada proyecto. Mi enfoque combina bases sólidas de ingeniería con tecnologías de IA de vanguardia para resolver desafíos empresariales reales.",
    aboutDescription2: "Colaboro con empresas de diversas industrias para implementar sistemas inteligentes que automatizan procesos, extraen información valiosa de los datos y crean nuevas oportunidades de crecimiento y eficiencia.",
    softwareEngineering: "Ingeniería de Software",
    aiDevelopment: "Desarrollo de IA",
    machineLearning: "Aprendizaje Automático",
    conversationalAI: "IA Conversacional",
    
    // Services section
    servicesHeading: "Servicios",
    aiConsultingServices: "Servicios de Consultoría en IA",
    servicesDescription: "Soluciones expertas para ayudar a las empresas a aprovechar la inteligencia artificial para la innovación, eficiencia y crecimiento.",
    aiStrategyConsulting: "Consultoría Estratégica de IA",
    aiStrategyDescription: "Desarrollo de una hoja de ruta integral de IA alineada con los objetivos de su empresa y capacidades tecnológicas.",
    customAISolutions: "Soluciones de IA Personalizadas",
    customAIDescription: "Diseño e implementación de sistemas de IA a medida que abordan sus desafíos empresariales específicos.",
    predictiveAnalytics: "Análisis Predictivo",
    predictiveAnalyticsDescription: "Aproveche el aprendizaje automático para pronosticar tendencias y tomar decisiones empresariales basadas en datos.",
    naturalLanguageProcessing: "Procesamiento de Lenguaje Natural",
    nlpDescription: "Cree sistemas inteligentes que entiendan, interpreten y generen lenguaje humano.",
    aiIntegration: "Integración de IA",
    aiIntegrationDescription: "Integre perfectamente capacidades de IA en su ecosistema de software y flujos de trabajo existentes.",
    dataEngineering: "Ingeniería de Datos",
    dataEngineeringDescription: "Construya canalizaciones y arquitecturas de datos robustas para impulsar sus iniciativas de IA y análisis.",
    
    // Contact section
    contactHeading: "Contacto",
    letsWork: "Trabajemos",
    together: "Juntos",
    contactDescription: "¿Listo para elevar su negocio con soluciones avanzadas de IA? Póngase en contacto para discutir su proyecto o programar una consulta.",
    name: "Nombre",
    email: "Correo",
    message: "Mensaje",
    yourName: "Tu nombre",
    yourEmail: "tu@correo.com",
    tellAboutProject: "Cuéntame sobre tu proyecto...",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    messageSent: "Mensaje enviado",
    thankYou: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.",
    errorSending: "Error",
    tryAgain: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
    
    // Footer
    allRightsReserved: "Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio"
  },
  
  de: {
    // Navbar
    about: "Über mich",
    services: "Dienstleistungen",
    contact: "Kontakt",
    
    // Hero section
    aiEngineeringConsultant: "KI-Engineering-Berater",
    transformingBusinesses: "Transformation von Unternehmen durch modernste KI-Lösungen und Engineering-Expertise",
    exploreServices: "Dienstleistungen entdecken",
    getInTouch: "Kontakt aufnehmen",
    
    // About section
    aboutMe: "Über Mich",
    engineeringSolutions: "Engineering-Lösungen",
    forComplexAIChallenges: "für komplexe KI-Herausforderungen",
    aboutDescription1: "Als Softwareingenieur mit Spezialisierung auf KI-Lösungen bringe ich technisches Fachwissen und innovatives Denken in jedes Projekt ein. Mein Ansatz kombiniert solide Engineering-Grundlagen mit modernsten KI-Technologien, um reale Geschäftsprobleme zu lösen.",
    aboutDescription2: "Ich arbeite mit Unternehmen aus verschiedenen Branchen zusammen, um intelligente Systeme zu implementieren, die Prozesse automatisieren, Erkenntnisse aus Daten gewinnen und neue Möglichkeiten für Wachstum und Effizienz schaffen.",
    softwareEngineering: "Software-Engineering",
    aiDevelopment: "KI-Entwicklung",
    machineLearning: "Maschinelles Lernen",
    conversationalAI: "Konversations-KI",
    
    // Services section
    servicesHeading: "Dienstleistungen",
    aiConsultingServices: "KI-Beratungsdienstleistungen",
    servicesDescription: "Expertenlösungen, die Unternehmen dabei helfen, künstliche Intelligenz für Innovation, Effizienz und Wachstum zu nutzen.",
    aiStrategyConsulting: "KI-Strategieberatung",
    aiStrategyDescription: "Entwicklung einer umfassenden KI-Roadmap, die auf Ihre Geschäftsziele und technologischen Fähigkeiten abgestimmt ist.",
    customAISolutions: "Maßgeschneiderte KI-Lösungen",
    customAIDescription: "Design und Implementierung maßgeschneiderter KI-Systeme, die Ihre spezifischen Geschäftsherausforderungen adressieren.",
    predictiveAnalytics: "Prädiktive Analytik",
    predictiveAnalyticsDescription: "Nutzen Sie maschinelles Lernen, um Trends vorherzusagen und datengestützte Geschäftsentscheidungen zu treffen.",
    naturalLanguageProcessing: "Verarbeitung natürlicher Sprache",
    nlpDescription: "Erstellen Sie intelligente Systeme, die menschliche Sprache verstehen, interpretieren und generieren können.",
    aiIntegration: "KI-Integration",
    aiIntegrationDescription: "Nahtlose Integration von KI-Funktionen in Ihr bestehendes Software-Ökosystem und Arbeitsabläufe.",
    dataEngineering: "Daten-Engineering",
    dataEngineeringDescription: "Aufbau robuster Datenpipelines und -architekturen zur Unterstützung Ihrer KI- und Analyseinitiativen.",
    
    // Contact section
    contactHeading: "Kontakt",
    letsWork: "Lassen Sie uns",
    together: "zusammenarbeiten",
    contactDescription: "Bereit, Ihr Unternehmen mit fortschrittlichen KI-Lösungen zu verbessern? Nehmen Sie Kontakt auf, um Ihr Projekt zu besprechen oder eine Beratung zu vereinbaren.",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    yourName: "Ihr Name",
    yourEmail: "ihre@email.com",
    tellAboutProject: "Erzählen Sie mir von Ihrem Projekt...",
    sendMessage: "Nachricht senden",
    sending: "Wird gesendet...",
    messageSent: "Nachricht gesendet",
    thankYou: "Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.",
    errorSending: "Fehler",
    tryAgain: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal.",
    
    // Footer
    allRightsReserved: "Alle Rechte vorbehalten.",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen"
  }
};

export const getTranslation = (key: keyof TranslationKeys, language: Language): string => {
  return translations[language][key];
};
