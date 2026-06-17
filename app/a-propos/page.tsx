import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, HeartHandshake, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { teamMembers } from "@/lib/team";
import { TeamCard } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "LEUFACK GOODS SARL, entreprise africaine spécialisée en logistique, import-export et commerce général. Notre mission : connecter les marchés et rapprocher les mondes.",
  openGraph: {
    title: "À propos | LEUFACK GOODS SARL",
    description: "Une entreprise africaine au service du commerce et de la logistique internationale.",
    images: [images.aboutTeam],
  },
};

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "Faciliter les échanges commerciaux en offrant des solutions logistiques fiables et accessibles à travers l'Afrique et le monde.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "Devenir le partenaire de référence reliant les marchés africains aux opportunités internationales.",
  },
  {
    icon: HeartHandshake,
    title: "Engagement",
    desc: "Plaçer la satisfaction client et l'intégrité au cœur de chaque opération.",
  },
];

export default function AProposPage() {
  return (
    <Layout>
      <PageHero
        label="À propos"
        title="Une entreprise africaine qui connecte les marchés"
        description="LEUFACK GOODS SARL est née d'une ambition simple : rapprocher les mondes en facilitant le mouvement des biens, des personnes et des opportunités."
        image={images.aboutTeam}
      />

      <section className="container-px mx-auto grid max-w-6xl items-center gap-10 section-py lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-brand)] sm:rounded-2xl">
            <Image
              src={images.aboutTeam}
              alt="Équipe LEUFACK GOODS en entrepôt"
              width={1280}
              height={960}
              className="w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">Notre histoire</span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Au service du commerce, partout</h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Implantée au cœur de l&apos;Afrique, LEUFACK GOODS SARL accompagne entreprises, commerçants
            et particuliers dans leurs opérations de logistique, d&apos;import-export et de commerce général.
          </p>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Forte d&apos;une équipe passionnée et d&apos;un réseau de partenaires solide, notre entreprise
            transforme les défis logistiques en opportunités de croissance pour ses clients.
          </p>
          <div className="mt-6 inline-flex w-full flex-col items-start gap-2 rounded-lg bg-secondary px-4 py-3 sm:w-auto sm:flex-row sm:items-center sm:px-5">
            <Sparkles className="h-5 w-5 shrink-0 text-secondary-foreground" />
            <span className="text-sm font-bold text-secondary-foreground sm:text-base">
              « Connecter les marchés, rapprocher les mondes. »
            </span>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/60 section-py">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">Nos valeurs</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Les principes qui guident chacune de nos actions.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6 sm:p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary sm:h-12 sm:w-12">
                    <v.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">Notre équipe</span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Des experts passionnés</h2>
          <Link
            href="/equipe"
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Voir toute l&apos;équipe <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.slug} delay={i * 70}>
              <TeamCard member={member} compact />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-12 sm:pb-20">
        <Reveal>
          <div className="rounded-2xl bg-primary px-5 py-10 text-center shadow-[var(--shadow-brand)] sm:rounded-3xl sm:px-8 sm:py-14 md:px-16">
            <h2 className="text-2xl font-black text-primary-foreground sm:text-3xl md:text-4xl">Travaillons ensemble</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              Rejoignez les entreprises qui nous font confiance pour leur logistique.
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
