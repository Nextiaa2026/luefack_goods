import Image from "next/image";
import Link from "next/link";
import { logos } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? logos.light : logos.full;

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0", className)}
      aria-label="LEUFACK GOODS - accueil"
    >
      <Image
        src={src}
        alt="LEUFACK GOODS"
        width={200}
        height={52}
        className="h-8 w-auto sm:h-10 md:h-11"
        priority
      />
    </Link>
  );
}
