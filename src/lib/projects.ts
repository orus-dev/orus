import {
  LucideIcon,
  MessageSquare,
  NetworkIcon,
  ServerIcon,
} from "lucide-react";

type OrusProject = {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  stars: number;
  forks: number;
  tech: string[];
  status: "Active" | "Beta" | "Alpha" | "Planning";
  github: string;
  demo?: string;
};

const orusProjects: OrusProject[] = [
  {
    title: "sentryx",
    description:
      "Multi-server management panel with high security — helps to host apps or media securely.",
    category: "infrastructure",
    icon: ServerIcon,
    stars: 1,
    forks: 3,
    tech: ["TypeScript", "Docker"],
    status: "Active",
    github: "https://github.com/orus-dev/sentryx",
  },
  {
    title: "ghostnet",
    description:
      "Privacy-focused protocol / spec designed to resist censorship and surveillance. ",
    category: "security",
    icon: NetworkIcon,
    stars: 1,
    forks: 0,
    tech: ["Specs", "P2P"],
    status: "Active",
    github: "https://github.com/orus-dev/ghostnet",
  },
  {
    title: "voxa",
    description:
      "A chat application (client side) — part of ORUS’s communication tools.",
    category: "communication",
    icon: MessageSquare,
    stars: 1,
    forks: 3,
    tech: ["TypeScript"],
    status: "Active",
    github: "https://github.com/orus-dev/voxa",
  },
  {
    title: "ghostnet-rs",
    description: "Rust implementation / library for the GhostNet protocol.",
    category: "security",
    icon: MessageSquare,
    stars: 0,
    forks: 2,
    tech: ["Rust", "P2P"],
    status: "Active",
    github: "https://github.com/orus-dev/ghostnet-rs",
  },
  {
    title: "orus",
    description: "The official ORUS website / landing page repository.",
    category: "infrastructure",
    icon: MessageSquare,
    stars: 0,
    forks: 0,
    tech: ["TypeScript"],
    status: "Active",
    github: "https://github.com/orus-dev/orus",
  },
  {
    title: "drift",
    description:
      "Productivity / organization app aiming to help users get rid of distractions.",
    category: "devtools",
    icon: MessageSquare,
    stars: 0,
    forks: 2,
    tech: ["TypeScript"],
    status: "Active",
    github: "https://github://github.com/orus-dev/drift",
  },
];

export default orusProjects;
