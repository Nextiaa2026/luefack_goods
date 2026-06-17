import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { images } from "@/lib/images";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Notre équipe",
  description:
    "Découvrez l'équipe LEUFACK GOODS SARL : experts en logistique, import-export et commerce général en Afrique.",
};

export default function EquipePage() {
  return (
    <Layout>
      <PageHero
        label="Notre équipe"
        title="Les visages derrière LEUFACK GOODS"
        description="Des professionnels passionnés qui connectent les marchés africains au reste du monde."
        image={images.aboutTeam}
      />

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-muted-foreground sm:text-base">
            Cliquez sur un profil pour en savoir plus sur le parcours et l&apos;expertise de chaque membre.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <Reveal key={member.slug} delay={i * 70}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-12 sm:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="relative aspect-[21/9] min-h-[200px]">
              <Image
                src={images.aboutTeam}
                alt="Équipe LEUFACK GOODS"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/70" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <h2 className="text-2xl font-black text-primary-foreground sm:text-3xl">
                Travaillons ensemble
              </h2>
              <p className="mt-3 max-w-md text-sm text-primary-foreground/85 sm:text-base">
                Notre équipe est prête à répondre à vos besoins logistiques.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Nous contacter <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
