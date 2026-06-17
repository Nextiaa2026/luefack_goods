import { images } from "./images";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  img: string;
  location: string;
  bio: string;
  expertise: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "samuel-nkeng",
    name: "Samuel Nkeng",
    role: "Directeur général",
    img: images.avatar1,
    location: "Douala, Cameroun",
    bio: "Fondateur et pilier stratégique de LEUFACK GOODS, Samuel coordonne les opérations commerciales et le développement du réseau panafricain. Avec plus de dix ans d'expérience en logistique internationale, il accompagne les entreprises dans leurs projets d'import-export les plus ambitieux.",
    expertise: ["Stratégie commerciale", "Réseau panafricain", "Partenariats internationaux"],
  },
  {
    slug: "aicha-diallo",
    name: "Aïcha Diallo",
    role: "Responsable Import-Export",
    img: images.avatar2,
    location: "Dakar, Sénégal",
    bio: "Aïcha supervise l'ensemble des flux import-export et veille à la conformité réglementaire de chaque opération. Son expertise en dédouanement et fret aérien garantit des échanges fluides entre l'Afrique et les marchés internationaux.",
    expertise: ["Import-Export", "Dédouanement", "Fret aérien", "Conformité"],
  },
  {
    slug: "patrick-mbeki",
    name: "Patrick Mbeki",
    role: "Chef logistique",
    img: images.avatar3,
    location: "Yaoundé, Cameroun",
    bio: "Patrick orchestre les opérations de transport maritime, routier et multimodal. Il optimise les itinéraires et assure un suivi en temps réel pour que chaque marchandise arrive à destination dans les délais convenus.",
    expertise: ["Transport multimodal", "Fret maritime", "Suivi en temps réel", "Optimisation des routes"],
  },
  {
    slug: "fatou-ndiaye",
    name: "Fatou Ndiaye",
    role: "Responsable entrepôt",
    img: images.processScan,
    location: "Douala, Cameroun",
    bio: "Fatou manage les entrepôts et la préparation des expéditions. De la réception au conditionnement, elle garantit que chaque colis est traité avec rigueur et prêt pour un acheminement sécurisé.",
    expertise: ["Gestion d'entrepôt", "Préparation de commandes", "Contrôle qualité", "Stockage sécurisé"],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
