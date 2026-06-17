"use client";

import { useInView } from "react-intersection-observer";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
    rootMargin: "0px 0px -32px 0px",
  });

  const Comp = Tag as ElementType;

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 sm:translate-y-8",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
