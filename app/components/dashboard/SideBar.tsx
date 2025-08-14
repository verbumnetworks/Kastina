"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Megaphone, CalendarDays } from "lucide-react";

const NAV = [
  { href: "/dashboard", label: "Overview", Icon: LayoutDashboard },
  { href: "/dashboard/announcements", label: "Announcements", Icon: Megaphone },
  { href: "/dashboard/events", label: "Events", Icon: CalendarDays },
  {href: "/dashboard/homily", label: "Reflections", Icon: Megaphone},
  {href: '/dashboard/clergy', label: 'Clergy', Icon: Megaphone},
  {href:  "/dashboard/blog", label: "Blogs", Icon: Megaphone},
];

export default function Sidebar({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav className={variant === "mobile" ? "space-y-1" : "sticky top-20 space-y-1 "}>
      {NAV.map(({ href, label, Icon }) => {
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={[
              "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
              active
                ? "bg-amber-50 text-amber-900 ring-1 ring-amber-200"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
            ].join(" ")}
          >
            <Icon className={["h-4 w-4", active ? "text-amber-600" : "text-slate-400"].join(" ")} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
