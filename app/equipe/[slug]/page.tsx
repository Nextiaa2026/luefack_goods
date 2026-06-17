import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { getTeamMember, teamMembers } from "@/lib/team";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Membre introuvable" };

  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio.slice(0, 160),
    openGraph: {
      title: `${member.name} | LEUFACK GOODS SARL`,
      description: member.bio.slice(0, 160),
      images: [member.img],
    },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const others = teamMembers.filter((m) => m.slug !== slug);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-primary py-12 sm:py-16 md:py-20">
        <div className="container-px relative mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/equipe"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Toute l&apos;équipe
            </Link>
          </Reveal>
          <div className="mt-8 grid items-center gap-8 sm:gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            <Reveal delay={60}>
              <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl shadow-[var(--shadow-brand)] sm:max-w-none">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary sm:text-sm">
                {member.role}
              </span>
              <h1 className="mt-2 text-3xl font-black text-primary-foreground sm:text-4xl md:text-5xl">
                {member.name}
              </h1>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-secondary" /> {member.location}
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
                {member.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Contacter l&apos;équipe <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            Autres membres
          </span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Découvrir l&apos;équipe</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {others.map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <TeamCard member={m} compact />
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
