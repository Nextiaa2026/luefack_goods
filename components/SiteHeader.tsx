"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { mainNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

function NavLink({
  item,
  pathname,
  overlay,
  onClick,
  className,
}: {
  item: (typeof mainNav)[number];
  pathname: string;
  overlay: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const active =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
        overlay
          ? "text-primary-foreground/90 hover:bg-white/10 hover:text-primary-foreground"
          : "text-foreground/80 hover:bg-muted hover:text-primary",
        active &&
          (overlay ? "bg-white/15 text-primary-foreground" : "bg-primary/10 text-primary"),
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(!isHome);
  const isContact = pathname === "/contact";

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }

    setSolid(false);

    const onScroll = () => {
      const trigger = document.getElementById("header-solid-trigger");
      if (!trigger) return;
      setSolid(trigger.getBoundingClientRect().top <= 64);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overlay = isHome && !solid;

  const contactButtonClass = cn(
    "rounded-md bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5",
    isContact && "ring-2 ring-secondary/50 ring-offset-2 ring-offset-transparent",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overlay ? "bg-transparent" : "bg-background/90 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="container-px mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="min-w-0">
          <Logo variant={overlay ? "light" : "dark"} />
        </div>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} overlay={overlay} />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Link href="/contact" className={cn(contactButtonClass, "hidden shrink-0 md:inline-flex")}>
            Contact
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2 md:hidden",
              overlay ? "text-primary-foreground" : "text-primary",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={cn(
            "container-px mx-auto flex max-w-6xl flex-col items-center gap-1 pb-4 md:hidden",
            overlay ? "bg-primary/95 backdrop-blur-md" : "bg-background/95 backdrop-blur-md",
          )}
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              pathname={pathname}
              overlay={overlay}
              onClick={() => setOpen(false)}
              className="w-full py-2.5 text-center"
            />
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={cn(contactButtonClass, "mt-2 w-full py-2.5 text-center")}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
