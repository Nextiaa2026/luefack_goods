"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageHero({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-16 md:py-20">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          aria-hidden
        />
      )}
      <div className="container-px relative mx-auto max-w-6xl">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-secondary sm:text-sm">{label}</span>
          <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight text-primary-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm text-primary-foreground/85 sm:text-base">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
