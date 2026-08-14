import { Language } from "@/context/LanguageContext";

export type ProjectLink = {
  url: string;
  label: Record<Language, string>;
};

export type Project = {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tech: string[];
  links?: ProjectLink[];
  // Posição do "nó" 3D deste projeto no espaço. Ajuste livremente.
  position: [number, number, number];
  // Geometria usada para representar o projeto (troque à vontade)
  shape: "icosahedron" | "torusKnot" | "octahedron" | "dodecahedron";
};

export const projects: Project[] = [
  {
    id: "intro",
    title: {
      pt: "Eduardo P. Afonso",
      en: "Eduardo P. Afonso",
      es: "Eduardo P. Afonso",
    },
    description: {
      pt: "Software Engineer focado no desenvolvimento de aplicações Web e Mobile de elevada performance. Apaixonado por resolver problemas complexos e otimizar a experiência do utilizador.",
      en: "Software Engineer focused on the development of high-performance Web and Mobile applications. Passionate about solving complex problems and optimizing the user experience.",
      es: "Software Engineer enfocado en el desarrollo de aplicaciones Web y Móviles de alto rendimiento. Apasionado por resolver problemas complejos y optimizar la experiencia del usuario.",
    },
    tech: ["React", "React Native", "Next.js", "Node.js", "TypeScript"],
    links: [
      {
        url: "https://www.linkedin.com/in/eduardo-pembele-afonso-b789441a7/",
        label: { pt: "LinkedIn →", en: "LinkedIn →", es: "LinkedIn →" },
      },
    ],
    position: [0, 0, 0],
    shape: "icosahedron",
  },
  {
    id: "mirantes-io",
    title: {
      pt: "Mirantes IO",
      en: "Mirantes IO",
      es: "Mirantes IO",
    },
    description: {
      pt: "Solução SaaS para gestão integrada de RH e carreira. Contribuí para a evolução da plataforma web, desenvolvendo integrações com APIs REST/GraphQL e otimizando a performance.",
      en: "SaaS solution for integrated HR and career management. Contributed to the evolution of the web platform, developing integrations with REST/GraphQL APIs and optimizing performance.",
      es: "Solución SaaS para la gestión integrada de RRHH y carrera. Contribuí a la evolución de la plataforma web, desarrollando integraciones con APIs REST/GraphQL y optimizando el rendimiento.",
    },
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
    links: [
      {
        url: "https://mirantes.io/",
        label: { pt: "Ver Plataforma →", en: "View Platform →", es: "Ver Plataforma →" },
      },
    ],
    position: [-3, -0.5, -6],
    shape: "torusKnot",
  },
  {
    id: "mirantes-app",
    title: {
      pt: "Mirantes App",
      en: "Mirantes App",
      es: "Mirantes App",
    },
    description: {
      pt: "Aplicação mobile complementar para gerenciar a conexão com empregadores, recrutamento e perfil profissional de forma prática. Foco na qualidade, escalabilidade e estabilidade.",
      en: "Complementary mobile app to manage connections with employers, recruitment, and professional profile in a practical way. Focused on quality, scalability, and stability.",
      es: "Aplicación móvil complementaria para gestionar la conexión con empleadores, reclutamiento y perfil profesional de forma práctica. Enfoque en calidad, escalabilidad y estabilidad.",
    },
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      {
        url: "https://apps.apple.com/ao/app/mirantes/id6670403188",
        label: { pt: "App Store →", en: "App Store →", es: "App Store →" },
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.desenvolvimentomirantes.mirantes&hl=pt-BR",
        label: { pt: "Google Play →", en: "Google Play →", es: "Google Play →" },
      },
    ],
    position: [3, 0.5, -12],
    shape: "octahedron",
  },
  {
    id: "sempapp",
    title: {
      pt: "SempApp",
      en: "SempApp",
      es: "SempApp",
    },
    description: {
      pt: "Aplicação móvel simples e segura para ajudar utilizadores a gerir e visualizar os seus recibos digitais sem esforço, digitalizando processos e reduzindo a dependência de papel.",
      en: "Simple and secure mobile app to help users manage and view their digital receipts effortlessly, digitizing processes and reducing reliance on paper.",
      es: "Aplicación móvil simple y segura para ayudar a los usuarios a gestionar y ver sus recibos digitales sin esfuerzo, digitalizando procesos y reduciendo la dependencia del papel.",
    },
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      {
        url: "https://apps.apple.com/tr/app/sempapp/id6742887974",
        label: { pt: "App Store →", en: "App Store →", es: "App Store →" },
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.sempapp.app&hl=pt-BR",
        label: { pt: "Google Play →", en: "Google Play →", es: "Google Play →" },
      },
    ],
    position: [-2, -0.3, -18],
    shape: "dodecahedron",
  },
  {
    id: "flixhome",
    title: {
      pt: "Flix Home",
      en: "Flix Home",
      es: "Flix Home",
    },
    description: {
      pt: "Plataforma web de manutenção preventiva estruturada, ajudando operadores imobiliários a reduzir avarias inesperadas, melhorar a gestão de ativos e obter previsibilidade de custos.",
      en: "Structured preventive maintenance web platform, helping real estate operators reduce unexpected breakdowns, improve asset management, and achieve cost predictability.",
      es: "Plataforma web de mantenimiento preventivo estructurado, ayudando a los operadores inmobiliarios a reducir averías inesperadas, mejorar la gestión de activos y lograr previsibilidad de costos.",
    },
    tech: ["React", "Next.js", "Tailwind CSS"],
    links: [
      {
        url: "https://flixhome.app/",
        label: { pt: "Ver Plataforma →", en: "View Platform →", es: "Ver Plataforma →" },
      },
    ],
    position: [0, 0, -24],
    shape: "icosahedron",
  },
];
