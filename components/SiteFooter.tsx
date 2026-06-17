import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-12 sm:py-14 md:grid-cols-4">
        <Reveal className="text-center md:col-span-2 md:text-left">
          <Logo variant="light" className="mx-auto md:mx-0" />
          <p className="mt-4 text-sm text-primary-foreground/80 md:max-w-sm">
            LEUFACK GOODS SARL — Logistique, Import-Export et Commerce Général.
          </p>
          <p className="mt-3 text-base font-bold text-secondary sm:text-lg">
            « Connecter les marchés, rapprocher les mondes. »
          </p>
        </Reveal>

        <Reveal delay={80} className="text-center md:text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <Link href="/" className="hover:text-secondary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-secondary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-secondary">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={160} className="text-center md:text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4 shrink-0 text-secondary" /> +237 6 00 00 00 00
            </li>
            <li className="flex items-center justify-center gap-2 break-all md:justify-start">
              <Mail className="h-4 w-4 shrink-0 text-secondary" /> contact@leufackgoods.com
            </li>
            <li className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 shrink-0 text-secondary" /> Douala, Cameroun
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 py-5 text-center text-xs text-primary-foreground/70 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} LEUFACK GOODS SARL. Tous droits réservés.</span>
          <span className="hidden sm:inline">Import • Export • Logistics • Commerce Général</span>
        </div>
      </div>
    </footer>
  );
}
