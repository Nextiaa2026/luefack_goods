export const images = {
  heroPort: "/images/hero-port.jpg",
  ctaWarehouse: "/images/cta-warehouse.jpg",
  bandContainers: "/images/band-containers.jpg",
  bandNetwork: "/images/band-network.jpg",
  processScan: "/images/process-scan.jpg",
  avatar1: "/images/avatar-1.jpg",
  avatar2: "/images/avatar-2.jpg",
  avatar3: "/images/avatar-3.jpg",
  serviceAir: "/images/service-air.jpg",
  serviceRoad: "/images/service-road.jpg",
  serviceTrade: "/images/service-trade.jpg",
  aboutTeam: "/images/about-team.jpg",
} as const;

export const logos = {
  full: "/LEUFACK (1).png",
  light: "/LEUFACK (2).png",
  mark: "/LEUFACK (3).png",
} as const;

export const heroSlides = [
  { src: images.heroPort, alt: "Port maritime africain avec conteneurs et grues" },
  { src: images.bandContainers, alt: "Conteneurs dans un port logistique" },
  { src: images.serviceAir, alt: "Fret aérien et avion cargo" },
  { src: images.serviceRoad, alt: "Transport routier de marchandises" },
  { src: images.ctaWarehouse, alt: "Entrepôt logistique et gestion des stocks" },
  { src: images.processScan, alt: "Agent scannant un colis en entrepôt" },
  { src: images.bandNetwork, alt: "Réseau logistique international" },
  { src: images.serviceTrade, alt: "Commerce général et distribution" },
] as const;
