import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TeamMember } from "@/lib/team";

export function TeamCard({
  member,
  compact = false,
}: {
  member: TeamMember;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/equipe/${member.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-brand)]"
    >
      <div className={`relative overflow-hidden ${compact ? "h-28 sm:h-36" : "h-32 sm:h-36"}`}>
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="200px"
        />
      </div>
      <div className={compact ? "p-3 sm:p-4" : "p-4"}>
        <div className={`font-bold ${compact ? "text-xs sm:text-sm" : "text-sm"}`}>{member.name}</div>
        <div className={`mt-0.5 text-muted-foreground ${compact ? "text-[11px] sm:text-xs" : "text-xs"}`}>
          {member.role}
        </div>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100 sm:opacity-100">
          Voir le profil <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}
