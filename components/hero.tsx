"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function usePrefersReducedMotion() {
  const reduceRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      reduceRef.current = media.matches;
    };
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduceRef;
}

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (reducedMotion.current) return;

    let raf = 0;
    const state = { x: 0, y: 0, tx: 0, ty: 0 };

    const tick = () => {
      state.x += (state.tx - state.x) * 0.08;
      state.y += (state.ty - state.y) * 0.08;
      el.style.setProperty("--px", state.x.toFixed(4));
      el.style.setProperty("--py", state.y.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      state.tx = Math.max(-1, Math.min(1, dx));
      state.ty = Math.max(-1, Math.min(1, dy));
    };

    const onLeave = () => {
      state.tx = 0;
      state.ty = 0;
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={(node) => {
        rootRef.current = node;
      }}
      className="relative -mt-16 overflow-hidden pt-16 [--px:0] [--py:0]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Background image layer (right side, lightly dimmed, no hard edge) */}
        <div
          className="absolute inset-y-0 right-[-20%] w-[120%] overflow-hidden opacity-95 mask-[linear-gradient(to_left,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_82%,transparent_100%)] sm:right-[-8%] sm:w-[82%] sm:translate-x-[2%]"
        >
          <Image
            src="/images/tablet/BackChairScreen.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-right opacity-90 sm:object-contain sm:object-[92%_50%]"
          />
          {/* Top/bottom feather to hide image edges */}
          <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/90 via-black/35 to-transparent sm:h-44" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/80 to-transparent sm:h-40 sm:from-black/75" />
        </div>

        {/* Left-to-right fade to keep copy readable */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent" />

        {/* Background (blue/purple gradient + grid) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(1000px 520px at 20% 0%, rgba(34,211,238,0.18) 0%, transparent 62%), radial-gradient(900px 520px at 80% 40%, rgba(99,102,241,0.16) 0%, transparent 60%), linear-gradient(to bottom, rgba(5,8,22,0.45), rgba(0,0,0,0.72))",
          }}
        />
        <div className="absolute inset-0 enviseo-grid" />
        <div className="absolute -inset-x-10 -top-24 h-[560px] enviseo-spotlight opacity-90" />
        <div className="absolute -left-24 top-10 h-[560px] w-[560px] enviseo-orbit" />
        <div className="absolute -right-28 bottom-0 h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10)_0%,transparent_68%)] blur-3xl opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_40%_35%,rgba(56,189,248,0.10)_0%,transparent_62%)]" />
        <div className="absolute -inset-10 enviseo-grain" />
      </div>

      <div className="relative z-10 mx-auto grid lg:min-h-[74vh] max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-10 pt-10 sm:min-h-[86vh] sm:items-end sm:gap-12 sm:px-6 sm:pb-18 sm:pt-16 md:pt-20 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-20 lg:px-10 lg:pb-22">
        <div className="max-w-2xl">
          <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
            ENVISEO.COM | 2026
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block pb-[0.06em] bg-linear-to-r from-cyan-200 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_18px_40px_rgba(34,211,238,0.18)]">
              Everything
            </span>
            <span className="block bg-linear-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              follows your
            </span>
            <span className="block">lead.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base font-extralight leading-relaxed text-white/70 sm:mt-7 sm:text-xl">
            The operating environment for the modern estate.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="w-full justify-center rounded-full bg-white px-8 text-black shadow-[0_20px_60px_-34px_rgba(255,255,255,0.65)] ring-1 ring-white/25 hover:bg-white/92 hover:shadow-[0_24px_70px_-34px_rgba(255,255,255,0.75)] sm:w-auto"
              asChild
            >
              <Link href="#inquire">
                Inquire <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full justify-center rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/5 sm:w-auto"
              asChild
            >
              <Link href="#smart-shell">Explore</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden min-h-[460px] w-full overflow-hidden lg:block">
          {/* Right visual card (image + professional overlays) */}
          <div className="relative mx-auto h-full w-full max-w-xl">
            {/* Glow border */}
            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.35)_0%,rgba(99,102,241,0.18)_40%,rgba(56,189,248,0.22)_100%)] blur-xl opacity-60" />
            <div className="absolute inset-0 rounded-[2rem]  bg-white/5" />

            <div className="relative h-full overflow-hidden rounded-[2rem]  bg-black/25">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_480px_at_20%_0%,rgba(56,189,248,0.22)_0%,transparent_60%),radial-gradient(700px_420px_at_90%_40%,rgba(99,102,241,0.18)_0%,transparent_60%)]" />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.60)_35%,rgba(0,0,0,0.85)_100%)]" />

              <div
                className="absolute inset-0"
                style={{
                  transform: `translate3d(calc(var(--px) * 4px), calc(var(--py) * 2px), 0) scale(1.04)`,
                  transition: reducedMotion.current ? "none" : "transform 320ms ease-out",
                }}
              >
                <Image
                  src="/images/tablet/BackChairScreen.png"
                  alt="Enviseo hero visual"
                  fill
                  priority
                  sizes="(min-width: 1280px) 48vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Subtle top shimmer */}
              <div className="absolute -top-24 left-0 h-44 w-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_100%)] opacity-70 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

