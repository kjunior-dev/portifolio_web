import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import {
  LuBadgeCheck as BadgeCheck,
  LuBraces as Braces,
  LuCarFront as CarFront,
  LuCode as Code2,
  LuDatabase as Database,
  LuGraduationCap as GraduationCap,
  LuLayoutDashboard as LayoutDashboard,
  LuLockKeyhole as LockKeyhole,
  LuMail as Mail,
  LuMonitorSmartphone as MonitorSmartphone,
  LuRocket as Rocket,
  LuServer as Server,
  LuSettings as Settings,
  LuShieldCheck as ShieldCheck,
  LuSquareTerminal as TerminalSquare,
  LuWrench as Wrench,
} from "react-icons/lu";

export const profile = {
  name: "Kevin Sousa",
  role: "Desenvolvedor de Software Full Stack",
  email: "kevinjunior.dev@gmail.com",
  location: "Disponível para projetos remotos",
  github: "https://github.com/kjunior-dev",
  linkedin: "https://www.linkedin.com/in/kevin-sousa-778293210/",
  resumeHref: "#contact",
  avatar:
    "https://media.licdn.com/dms/image/v2/D4E03AQEOmtW6ntKzSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719310170802?e=1762992000&v=beta&t=xZTujuHFJ4ON5WDxSz6G-CESenKL790P3rdYYmyI-Lw",
};

export const navigation = [
  { label: "Sobre", href: "#about" },
  { label: "Competências", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#services" },
  { label: "Contacto", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export const highlights = [
  "Next.js, React e TypeScript",
  "APIs REST, Node.js e PostgreSQL",
  "Sistemas de gestão e autenticação",
  "Mecatrónica e diagnóstico automóvel",
];

export const aboutCards = [
  {
    title: "Produto e interface",
    description:
      "Transformo requisitos em interfaces claras, responsivas e preparadas para utilização real, com atenção a performance, acessibilidade e manutenção.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend e integração",
    description:
      "Desenvolvo APIs, modelos de dados e integrações entre serviços, mantendo o foco em regras de negócio, segurança e consistência.",
    icon: Server,
  },
  {
    title: "Resolução técnica",
    description:
      "Uno experiência em software, sistemas de gestão e mecatrónica para analisar problemas com método, testar hipóteses e entregar soluções práticas.",
    icon: Wrench,
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: Braces,
    skills: ["Node.js", "APIs REST", "Validação de dados", "Integração de APIs", "Arquitetura modular"],
  },
  {
    category: "Bases de dados",
    icon: Database,
    skills: ["PostgreSQL", "Modelagem relacional", "Consultas SQL", "Persistência de dados"],
  },
  {
    category: "Autenticação e segurança",
    icon: ShieldCheck,
    skills: ["Sistemas de login", "Controlo de acesso", "Validação", "Boas práticas de segurança"],
  },
  {
    category: "Ferramentas e deploy",
    icon: TerminalSquare,
    skills: ["Git", "npm", "Vite", "Vercel", "Debugging", "Lint e build"],
  },
  {
    category: "Mecatrónica automóvel",
    icon: CarFront,
    skills: ["Diagnóstico automóvel", "Leitura de falhas", "Sistemas eletrónicos", "Análise técnica"],
  },
];

export const experience = [
  {
    role: "Desenvolvedor de Software",
    company: "Projetos web e sistemas de gestão",
    period: "Experiência prática",
    description:
      "Criação de aplicações web com foco em frontend moderno, backend estruturado, autenticação, integrações e organização de dados.",
    responsibilities: [
      "Desenvolvimento de interfaces responsivas com React, Next.js e Tailwind CSS.",
      "Construção e consumo de APIs REST com regras de negócio bem definidas.",
      "Implementação de fluxos de autenticação, formulários e dashboards.",
      "Organização de componentes reutilizáveis e melhoria contínua da experiência do utilizador.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Técnico com base em mecatrónica automóvel",
    company: "Diagnóstico e análise de sistemas automóveis",
    period: "Conhecimento complementar",
    description:
      "Aplicação de raciocínio técnico em sistemas eletrónicos e mecânicos, com foco em diagnóstico, análise de sintomas e solução de problemas.",
    responsibilities: [
      "Interpretação de falhas e comportamento de sistemas automóveis.",
      "Análise metódica de causas prováveis antes de aplicar soluções.",
      "Transferência desta abordagem para debugging, integrações e arquitetura de software.",
    ],
    technologies: ["Diagnóstico", "Eletrónica automóvel", "Mecatrónica", "Resolução de problemas"],
  },
];

export const projectFilters = [
  "Todos",
  "Frontend",
  "Backend",
  "Full Stack",
  "Projetos pessoais",
  "Projetos profissionais",
  "GovTech",
  "Website institucional",
  "Integração GraphQL",
  "Formação profissional",
  "Portal governamental",
] as const;

export type ProjectCategory = (typeof projectFilters)[number];

export const projects = [
  {
    title: "Plataforma de gestão operacional",
    category: "Sistemas de gestão",
    summary:
      "Sistema web para organizar dados, utilizadores, processos e operações internas num fluxo centralizado.",
    problem:
      "Equipas com informação espalhada em folhas e mensagens perdiam contexto, controlo e velocidade de execução.",
    features: [
      "Dashboard com indicadores principais.",
      "Gestão de entidades, estados e histórico.",
      "Formulários validados e interfaces responsivas.",
      "Base preparada para autenticação e permissões.",
    ],
    role: "Planeamento da interface, implementação frontend, integração com dados e estruturação dos componentes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "APIs REST"],
    tags: ["Full Stack", "Sistemas de gestão", "Projetos profissionais"],
    accent: "from-cyan-500 to-emerald-500",
    demo: "#contact",
    code: profile.github,
  },
  {
    title: "Dashboard técnico e administrativo",
    category: "Full Stack",
    summary:
      "Interface analítica para consulta rápida de métricas, registos e estados de processos.",
    problem:
      "A tomada de decisão ficava lenta sem uma visão clara dos dados importantes e dos eventos recentes.",
    features: [
      "Cards de métricas e listas de atividade.",
      "Layout adaptado a desktop, tablet e mobile.",
      "Componentes reutilizáveis para filtros e estados.",
      "Estrutura preparada para integração com PostgreSQL.",
    ],
    role: "Desenho da experiência, criação da arquitetura visual e implementação dos componentes principais.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Recharts", "Tailwind CSS"],
    tags: ["Frontend", "Full Stack", "Projetos pessoais"],
    accent: "from-blue-500 to-violet-500",
    demo: "#contact",
    code: profile.github,
  },
  {
    title: "Integração de APIs e autenticação",
    category: "Backend",
    summary:
      "Base técnica para autenticação, validação de formulários e comunicação segura com serviços externos.",
    problem:
      "Aplicações precisam de fluxos previsíveis para login, dados protegidos e integrações sem perda de consistência.",
    features: [
      "Validação de payloads e mensagens de erro claras.",
      "Estrutura de endpoints REST.",
      "Separação entre interface, regras e integração.",
      "Preparação para controlo de acesso por perfil.",
    ],
    role: "Modelagem do fluxo, implementação dos contratos de dados e integração com frontend.",
    technologies: ["Node.js", "APIs REST", "TypeScript", "Zod", "Autenticação"],
    tags: ["Backend", "Full Stack", "Projetos profissionais"],
    accent: "from-slate-700 to-cyan-600",
    demo: "#contact",
    code: profile.github,
  },
  {
    title: "Apoio técnico em diagnóstico automóvel",
    category: "Projetos pessoais",
    summary:
      "Organização de conhecimento técnico para análise de sintomas, falhas e decisões de diagnóstico.",
    problem:
      "Problemas automóveis exigem leitura metódica de sinais, contexto e hipóteses antes de chegar a uma solução.",
    features: [
      "Estruturação de sintomas, causas prováveis e ações.",
      "Ligação entre raciocínio técnico e documentação clara.",
      "Preparação para dashboards ou bases de conhecimento.",
    ],
    role: "Análise técnica, organização de informação e definição de uma experiência orientada a diagnóstico.",
    technologies: ["Mecatrónica", "Diagnóstico", "Documentação técnica", "Sistemas de gestão"],
    tags: ["Projetos pessoais", "Sistemas de gestão"],
    accent: "from-amber-500 to-red-500",
    demo: "#contact",
    code: profile.github,
  },
];

export const services = [
  {
    title: "Aplicações web",
    description: "Desenvolvimento de produtos web rápidos, responsivos e preparados para crescer.",
    icon: Rocket,
  },
  {
    title: "Frontend profissional",
    description: "Interfaces modernas com React, Next.js, TypeScript, Tailwind CSS e foco real em UX.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend e APIs",
    description: "APIs REST, integração de serviços, validação de dados e estrutura para regras de negócio.",
    icon: Server,
  },
  {
    title: "Dashboards e gestão",
    description: "Painéis administrativos, sistemas internos, filtros, formulários e fluxos operacionais.",
    icon: Settings,
  },
  {
    title: "Correção e melhoria",
    description: "Revisão de interfaces, bugs, responsividade, performance e organização de código.",
    icon: BadgeCheck,
  },
  {
    title: "Consultoria técnica",
    description: "Apoio na definição de arquitetura, escolha de stack e planeamento de soluções.",
    icon: LockKeyhole,
  },
];

export const education = [
  {
    title: "Desenvolvimento de Software",
    details:
      "Aprendizagem e prática contínua em Next.js, React, TypeScript, JavaScript, Node.js, APIs, PostgreSQL e Tailwind CSS.",
    icon: GraduationCap,
  },
  {
    title: "Mecatrónica e diagnóstico automóvel",
    details:
      "Conhecimentos técnicos em sistemas automóveis, diagnóstico, análise de falhas e resolução metódica de problemas.",
    icon: CarFront,
  },
  {
    title: "Formação complementar",
    details:
      "Estudo contínuo de boas práticas de frontend, backend, acessibilidade, performance, SEO e arquitetura de sistemas.",
    icon: BadgeCheck,
  },
];
