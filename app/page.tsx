import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Ship,
  Plane,
  Truck,
  Globe2,
  ShieldCheck,
  Clock,
  Boxes,
  PackageCheck,
  FileSearch,
  Send,
  Quote,
  Star,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/images";
import { teamMembers } from "@/lib/team";
import { TeamCard } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "LEUFACK GOODS SARL | Logistique, Import-Export & Commerce Général",
  description:
    "LEUFACK GOODS SARL connecte les marchés africains au monde : logistique, import-export et commerce général. Connecter les marchés, rapprocher les mondes.",
  openGraph: {
    title: "LEUFACK GOODS SARL | Logistique & Import-Export",
    description:
      "Connecter les marchés, rapprocher les mondes. Solutions logistiques et commerciales en Afrique.",
    images: [images.heroPort],
  },
};

const services = [
  {
    icon: Ship,
    img: images.heroPort,
    title: "Logistique",
    desc: "Transport maritime et gestion complète de la chaîne d'approvisionnement.",
  },
  {
    icon: Plane,
    img: images.serviceAir,
    title: "Import - Export",
    desc: "Dédouanement, fret aérien et acheminement de vos marchandises.",
  },
  {
    icon: Boxes,
    img: images.serviceTrade,
    title: "Commerce Général",
    desc: "Approvisionnement, distribution et négoce de biens variés.",
  },
];

const stats = [
  { value: "15+", label: "Pays desservis" },
  { value: "5 000+", label: "Colis livrés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "24/7", label: "Suivi disponible" },
];

const reasons = [
  { icon: Globe2, title: "Réseau panafricain", desc: "Une présence solide qui relie l'Afrique aux marchés internationaux." },
  { icon: ShieldCheck, title: "Fiabilité totale", desc: "Vos marchandises sécurisées de l'origine à la destination finale." },
  { icon: Clock, title: "Délais maîtrisés", desc: "Des livraisons ponctuelles grâce à une logistique optimisée." },
];

const steps = [
  { icon: FileSearch, title: "1. Étude & devis", desc: "Nous analysons votre besoin et proposons la solution la plus adaptée." },
  { icon: PackageCheck, title: "2. Prise en charge", desc: "Collecte, emballage et préparation de vos marchandises en toute sécurité." },
  { icon: Truck, title: "3. Transport", desc: "Acheminement maritime, aérien ou routier avec suivi en temps réel." },
  { icon: Send, title: "4. Livraison", desc: "Dédouanement et remise à destination, partout en Afrique et au-delà." },
];

const testimonials = [
  { img: images.avatar1, name: "Samuel Nkeng", role: "Importateur, Douala", text: "LEUFACK GOODS a transformé notre chaîne d'approvisionnement. Des délais respectés et une équipe réactive." },
  { img: images.avatar2, name: "Aïcha Diallo", role: "Commerçante, Dakar", text: "Un partenaire de confiance pour mes importations. Tout est suivi de près, je recommande vivement." },
  { img: images.avatar3, name: "Patrick Mbeki", role: "Distributeur, Yaoundé", text: "Professionnalisme et transparence à chaque étape. Mes marchandises arrivent toujours en bon état." },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero — 100vh image carousel */}
      <section className="relative -mt-16 min-h-screen overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/50" />
        <div className="container-px relative mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center gap-5 py-24 sm:gap-6 sm:py-28 md:py-32">
          <Reveal>
            <span className="inline-flex max-w-full items-center rounded-full bg-secondary px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-secondary-foreground sm:px-4 sm:text-xs">
              Logistics • Import-Export • Commerce
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.05] text-primary-foreground sm:text-4xl md:text-6xl">
              Connecter les marchés,
              <span className="block text-secondary">rapprocher les mondes.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base md:text-lg">
              LEUFACK GOODS SARL accompagne les entreprises africaines dans le transport,
              l&apos;import-export et le commerce général. Une logistique fiable, du continent vers le monde.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Nos services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto"
              >
                Demander un devis
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate min-h-[50vh] overflow-hidden">
        <Image
          src={images.bandContainers}
          alt="Conteneurs soulevés par une grue dans un port africain au crépuscule"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container-px relative mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center py-20 text-center">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-secondary" />
            <p className="mt-6 text-xl font-black leading-snug text-primary-foreground sm:text-2xl md:text-3xl">
              Chaque colis raconte une histoire : celle d&apos;un marché qui s&apos;ouvre,
              d&apos;une opportunité qui se concrétise.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-secondary">
              LEUFACK GOODS SARL
            </p>
          </Reveal>
        </div>
      </section>

      <section id="header-solid-trigger" className="border-b border-border bg-background">
        <div className="container-px mx-auto grid max-w-6xl grid-cols-2 gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-2xl font-black text-primary sm:text-3xl md:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">Nos services</span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Des solutions de bout en bout</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            De l&apos;expédition à la distribution, nous gérons chaque étape avec rigueur.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-brand)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5 pt-4 sm:p-7 sm:pt-5">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[var(--shadow-brand)]">
              <Image
                src={images.processScan}
                alt="Agent logistique africain scannant un colis en entrepôt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">Notre méthode</span>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Comment ça marche</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Un processus simple et transparent, de la première prise de contact à la livraison finale.
              </p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 section-py">
        <div className="container-px mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-brand)]">
              <Image
                src={images.ctaWarehouse}
                alt="Responsable d'entrepôt africaine gérant les stocks"
                width={1280}
                height={720}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl bg-secondary px-6 py-4 shadow-[var(--shadow-lime)] sm:block">
              <div className="text-2xl font-black text-secondary-foreground">+10 ans</div>
              <div className="text-xs font-semibold text-secondary-foreground/80">d&apos;expertise terrain</div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">Pourquoi nous</span>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Un partenaire logistique de confiance</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Nous combinons expertise locale et standards internationaux pour faire circuler
                vos marchandises en toute sérénité.
              </p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-secondary">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold">{r.title}</h3>
                      <p className="text-sm text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[360px] overflow-hidden py-16 sm:min-h-[420px] sm:py-24 md:py-32">
        <Image
          src={images.bandNetwork}
          alt="L'Afrique connectée au monde par un réseau logistique"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="container-px relative mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">Notre portée</span>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-5xl">L&apos;Afrique, reliée au reste du monde</h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base md:text-lg">
              Depuis le cœur du continent, nous tissons des routes commerciales vers l&apos;Europe,
              l&apos;Asie et les Amériques. Un maillage qui rapproche les producteurs des marchés.
            </p>
            <Link
              href="/a-propos"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:mt-7 sm:w-auto"
            >
              Découvrir notre histoire <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Team section */}
      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">Notre équipe</span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Des experts passionnés du terrain</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Une équipe dédiée qui connaît les réalités du commerce africain et les exigences internationales.
          </p>
          <Link
            href="/equipe"
            className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Voir toute l&apos;équipe <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid items-center gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[var(--shadow-brand)] sm:rounded-2xl">
              <Image
                src={images.aboutTeam}
                alt="Équipe LEUFACK GOODS en entrepôt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.slug} delay={i * 80}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl section-py">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">Témoignages</span>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Ils nous font confiance</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">La satisfaction de nos clients est notre meilleure référence.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-xl border border-border bg-card p-5 sm:p-7">
                <div className="flex gap-0.5 text-secondary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-secondary" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/90">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 100vh full-bleed image — above final CTA */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src={images.serviceRoad}
          alt="Camion de transport sur route logistique"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container-px relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-2 py-16 text-center sm:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary sm:text-sm">Notre engagement</p>
            <h2 className="mt-4 text-2xl font-black text-primary-foreground sm:text-3xl md:text-5xl">
              Vos marchandises, notre priorité absolue
            </h2>
            <p className="mt-4 text-base text-primary-foreground/85 sm:mt-5 sm:text-lg">
              Du port de Douala aux marchés du monde entier, nous garantissons un acheminement
              sûr, rapide et traçable à chaque étape.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:mt-8 sm:w-auto"
            >
              Explorer nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-6xl pb-12 sm:pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-primary px-5 py-10 text-center shadow-[var(--shadow-brand)] sm:rounded-3xl sm:px-8 sm:py-14 md:px-16">
            <Truck className="mx-auto h-10 w-10 text-secondary" />
            <h2 className="mt-4 text-2xl font-black text-primary-foreground sm:text-3xl md:text-4xl">
              Prêt à expédier vos marchandises ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              Obtenez un devis personnalisé en quelques minutes. Notre équipe vous répond rapidement.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-7 py-3 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:mt-7 sm:w-auto"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
