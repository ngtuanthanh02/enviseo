"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type NavItem = { href: string; label: string };

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-2 items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:px-10">
        <Link
          href="#"
          className="w-fit justify-self-start text-xl font-bold tracking-tight lowercase text-white/90 transition-colors duration-200 hover:text-white"
          aria-label="Enviseo home"
        >
          enviseo
        </Link>

        <nav
          className="hidden items-center justify-center gap-2 justify-self-center lg:flex"
          aria-label="Primary section navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-[11px] font-extralight uppercase tracking-[0.28em] text-white/72 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end justify-self-end">
          <Button
            variant="outline"
            className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/5 px-3 sm:px-4"
            asChild
          >
            <Link href="/login">
              Partner Login <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

