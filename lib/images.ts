export const images = {
  cargoPlane: "/images/cargo-plane.jpg",
  cargoPlane2: "/images/cargo-plane-2.jpg",
  ship1: "/images/ship-1.jpg",
  ship2: "/images/ship-2.jpg",
  ship3: "/images/ship-3.jpg",
  avatar1: "/images/avatar-1.jpg",
  avatar2: "/images/avatar-2.jpg",
  avatar3: "/images/avatar-3.jpg",
  aboutTeam: "/images/about-team.jpg",
  processScan: "/images/process-scan.jpg",
} as const;

export const logos = {
  full: "/LEUFACK (1).png",
  light: "/LEUFACK (2).png",
  mark: "/LEUFACK (3).png",
} as const;

export const heroSlides = [
  { src: images.ship1, alt: "Port maritime avec navires cargo et remorqueurs" },
  { src: images.cargoPlane, alt: "Avion cargo KLM en vol" },
  { src: images.ship2, alt: "Porte-conteneurs vu du ciel sur l'océan" },
  { src: images.cargoPlane2, alt: "Chargement de fret aérien sur le tarmac" },
  { src: images.ship3, alt: "Navire porte-conteneurs en mer" },
] as const;
