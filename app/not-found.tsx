import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";

export default function NotFound() {
  return (
    <Layout>
      <div className="container-px mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center py-16 text-center sm:min-h-[60vh] sm:py-20">
        <Reveal>
          <h1 className="text-6xl font-black text-primary sm:text-7xl">404</h1>
          <h2 className="mt-4 text-lg font-semibold sm:text-xl">Page introuvable</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Retour à l&apos;accueil
          </Link>
        </Reveal>
      </div>
    </Layout>
  );
}
