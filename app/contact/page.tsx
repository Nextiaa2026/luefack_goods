import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez LEUFACK GOODS SARL pour un devis logistique, import-export ou commerce général. Notre équipe vous répond rapidement.",
  openGraph: {
    title: "Contact | LEUFACK GOODS SARL",
    description: "Demandez votre devis logistique. Douala, Cameroun.",
  },
};

const infos = [
  { icon: Phone, label: "Téléphone", value: "+237 6 00 00 00 00" },
  { icon: Mail, label: "Email", value: "contact@leufackgoods.com" },
  { icon: MapPin, label: "Adresse", value: "Douala, Cameroun" },
  { icon: Clock, label: "Horaires", value: "Lun – Sam : 8h – 18h" },
];

export default function ContactPage() {
  return (
    <Layout>
      <PageHero
        label="Contact"
        title="Parlons de votre projet"
        description="Une question, un envoi, un devis ? Notre équipe est à votre écoute."
        image={images.ship1}
      />

      <section className="container-px mx-auto grid max-w-6xl gap-10 section-py lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div>
          <Reveal>
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl shadow-[var(--shadow-brand)] sm:rounded-2xl">
              <Image
                src={images.cargoPlane2}
                alt="Chargement de fret aérien"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <h2 className="text-xl font-black sm:text-2xl">Coordonnées</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Contactez-nous directement ou remplissez le formulaire, nous revenons vers vous sous 24h.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {infos.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 60}>
                <div className="h-full rounded-xl border border-border bg-card p-4 sm:p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-secondary">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="mt-1 break-words text-sm font-semibold sm:text-base">{i.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="mt-6 rounded-xl bg-secondary p-5 sm:p-6">
              <p className="text-base font-bold text-secondary-foreground sm:text-lg">
                « Connecter les marchés, rapprocher les mondes. »
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-brand)] sm:rounded-2xl sm:p-7">
            <h2 className="text-xl font-black sm:text-2xl">Demander un devis</h2>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
