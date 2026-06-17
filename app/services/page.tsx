import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Ship,
  Plane,
  Truck,
  Boxes,
  FileCheck,
  Warehouse,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Logistique, fret maritime et aérien, import-export, dédouanement et commerce général. Découvrez les services de LEUFACK GOODS SARL.",
  openGraph: {
    title: "Nos Services | LEUFACK GOODS SARL",
    description: "Logistique, import-export et commerce général en Afrique et à l'international.",
    images: [images.cargoPlane],
  },
};

const main = [
  {
    img: images.ship3,
    icon: Truck,
    title: "Logistique & Transport",
    desc: "Transport routier, maritime et multimodal. Nous orchestrons toute votre chaîne d'approvisionnement, du port à votre porte.",
    points: ["Fret maritime & terrestre", "Suivi en temps réel", "Optimisation des itinéraires"],
  },
  {
    img: images.cargoPlane,
    icon: Plane,
    title: "Import - Export",
    desc: "De la commande à la livraison, nous gérons le fret aérien, le dédouanement et la conformité réglementaire de vos échanges.",
    points: ["Fret aérien express", "Dédouanement complet", "Documentation & conformité"],
  },
  {
    img: images.cargoPlane2,
    icon: Boxes,
    title: "Commerce Général",
    desc: "Approvisionnement, négoce et distribution de biens variés pour connecter producteurs, grossistes et marchés locaux.",
    points: ["Sourcing de produits", "Distribution & négoce", "Mise en relation commerciale"],
  },
];

const extra = [
  { icon: Ship, title: "Fret maritime", desc: "Conteneurs complets (FCL) et groupage (LCL)." },
  { icon: Warehouse, title: "Entreposage", desc: "Stockage sécurisé et gestion des stocks." },
  { icon: FileCheck, title: "Douane", desc: "Formalités douanières et conformité." },
  { icon: Globe2, title: "International", desc: "Réseau de partenaires à travers le monde." },
];

export default function ServicesPage() {
  return (
    <Layout>
      <PageHero
        label="Nos services"
        title="Des services pensés pour faire circuler vos biens"
        description="Logistique, import-export et commerce général : une offre intégrée pour connecter vos marchandises aux marchés du monde entier."
        image={images.cargoPlane}
      />

      <section className="container-px mx-auto max-w-6xl space-y-12 section-py sm:space-y-16">
        {main.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div
              className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[var(--shadow-brand)] sm:rounded-2xl">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary sm:h-12 sm:w-12">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-black sm:mt-5 sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm font-medium">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-muted/60 section-py">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">Et bien plus encore</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Des prestations complémentaires pour une logistique sans faille.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {extra.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-card p-5 text-center transition-transform hover:-translate-y-1 sm:p-6">
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-secondary-foreground sm:h-12 sm:w-12">
                    <e.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-3 font-bold sm:mt-4">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal>
          <div className="rounded-2xl bg-primary px-5 py-10 text-center shadow-[var(--shadow-brand)] sm:rounded-3xl sm:px-8 sm:py-14 md:px-16">
            <h2 className="text-2xl font-black text-primary-foreground sm:text-3xl md:text-4xl">
              Un projet logistique en tête ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              Parlons-en. Nous construisons la solution adaptée à vos besoins.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:mt-7 sm:w-auto"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
