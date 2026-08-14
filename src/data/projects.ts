export type ProjectLink = {
  url: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
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
    title: "Eduardo P. Afonso",
    description:
      "Software Engineer focado no desenvolvimento de aplicações Web e Mobile de elevada performance. Apaixonado por resolver problemas complexos e otimizar a experiência do utilizador.",
    tech: ["React", "React Native", "Next.js", "Node.js", "TypeScript"],
    links: [
      { url: "https://www.linkedin.com/in/eduardo-pembele-afonso-b789441a7/", label: "LinkedIn →" }
    ],
    position: [0, 0, 0],
    shape: "icosahedron",
  },
  {
    id: "mirantes-io",
    title: "Mirantes IO",
    description:
      "Solução SaaS para gestão integrada de RH e carreira. Contribuí para a evolução da plataforma web, desenvolvendo integrações com APIs REST/GraphQL e otimizando a performance.",
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
    links: [{ url: "https://mirantes.io/", label: "Ver Plataforma →" }],
    position: [-3, -0.5, -6],
    shape: "torusKnot",
  },
  {
    id: "mirantes-app",
    title: "Mirantes App",
    description:
      "Aplicação mobile complementar para gerenciar a conexão com empregadores, recrutamento e perfil profissional de forma prática. Foco na qualidade, escalabilidade e estabilidade.",
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      { url: "https://apps.apple.com/ao/app/mirantes/id6670403188", label: "App Store →" },
      { url: "https://play.google.com/store/apps/details?id=com.desenvolvimentomirantes.mirantes&hl=pt-BR", label: "Google Play →" }
    ],
    position: [3, 0.5, -12],
    shape: "octahedron",
  },
  {
    id: "sempapp",
    title: "SempApp",
    description:
      "Aplicação móvel simples e segura para ajudar utilizadores a gerir e visualizar os seus recibos digitais sem esforço, digitalizando processos e reduzindo a dependência de papel.",
    tech: ["React Native", "Expo", "TypeScript"],
    links: [
      { url: "https://apps.apple.com/tr/app/sempapp/id6742887974", label: "App Store →" },
      { url: "https://play.google.com/store/apps/details?id=com.sempapp.app&hl=pt-BR", label: "Google Play →" }
    ],
    position: [-2, -0.3, -18],
    shape: "dodecahedron",
  },
  {
    id: "flixhome",
    title: "Flix Home",
    description:
      "Plataforma web de manutenção preventiva estruturada, ajudando operadores imobiliários a reduzir avarias inesperadas, melhorar a gestão de ativos e obter previsibilidade de custos.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    links: [{ url: "https://flixhome.app/", label: "Ver Plataforma →" }],
    position: [0, 0, -24],
    shape: "icosahedron",
  },
];
