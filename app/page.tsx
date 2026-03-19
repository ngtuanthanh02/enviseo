import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabletGallery } from "@/components/tablet-gallery";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { ContactModal } from "@/components/contact-modal";

function SectionGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-[640px] -translate-y-1/2 mask-[linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)] sm:h-[820px]"
    >
      <div className="absolute -top-10 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_38%,transparent_72%)] blur-3xl" />
      <div className="absolute top-1/3 -right-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute top-1/2 -left-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_68%)] blur-3xl" />
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-white/20" aria-hidden />
      <span className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/60">
        {children}
      </span>
      <span className="h-px w-10 bg-white/20" aria-hidden />
    </div>
  );
}

export default function Home() {
  const headerNav = [
    { href: "#smart-shell", label: "Smart Shell" },
    { href: "#hub", label: "Hub" },
    { href: "#logic", label: "Logic" },
    { href: "#experience", label: "Experience" },
    { href: "#foundry", label: "Foundry" },
    { href: "#inquire", label: "Inquire" },
  ];

  const sectionClass = "scroll-mt-24 py-18 sm:py-24 md:py-32";
  const containerClass = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10";
  const sectionTextClass =
    "relative z-10 w-full max-w-xl text-center sm:text-left lg:max-w-[28rem]";
  const sectionMediaClass =
    "relative aspect-video overflow-hidden rounded-2xl";

  return (
    <div className="min-h-screen overflow-x-clip bg-black text-white">
      <SiteHeader nav={headerNav} />

      <main className="pt-16">
        <Hero />

        {/* Section 1 — Smart Shell */}
        <section id="smart-shell" className={sectionClass}>
          <div
            className={`relative flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center ${containerClass}`}
          >
            <div className={sectionTextClass}>
              <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                The Smart Shell™
              </p>
              <h2 className="mt-5 text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
                The backseat,
                <span className="block">evolved.</span>
              </h2>
              <p className="mt-7 text-lg font-extralight leading-relaxed text-white/70">
                A tailored mounting architecture for the family.
              </p>
              <p className="mt-3 text-lg font-extralight leading-relaxed text-white/70">
                Power and data, woven into the surface.
              </p>
            </div>

            <div className="relative flex-1">
              <div className={sectionMediaClass}>
                <Image
                  src="/images/tablet/tabletOnCar.png"
                  alt="Smart Shell mounted in-car, tailored mounting architecture"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/88 via-black/20 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_55%_25%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — The Hub */}
        <section id="hub" className={sectionClass}>
          <div className={`relative ${containerClass}`}>
            <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row-reverse lg:items-center">
              <div className={sectionTextClass}>
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Hub
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[0.96] tracking-tight sm:text-6xl">
                  Command
                  <span className="block">the home.</span>
                </h2>
                <div className="mt-8 space-y-4 text-base font-extralight leading-relaxed text-white/72 sm:text-lg">
                  <p>A weighted, sculptural center for your daily flow.</p>
                  <p>
                   From family organizing to financial finality, authority is now built-in.
                  </p>
                </div>
              </div>

              <div className="relative flex-1">
                <div className={sectionMediaClass}>
                  <Image
                    src="/images/tablet/tabletsOnShelf.png"
                    alt="The Hub displayed as a sculptural centerpiece on a bright surface"
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/78 via-black/34 to-black/8" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_25%_20%,rgba(255,255,255,0.16)_0%,transparent_68%)] opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — The Logic */}
        <section id="logic" className={sectionClass}>
          <div className={containerClass}>
            <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center">
              <div className={sectionTextClass}>
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Logic
                </p>
                <h2 className="mt-6 text-4xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl">
                  Locked
                  <span className="block text-white/70">by silicon.</span>
                </h2>
                <p className="mt-8 text-lg font-extralight leading-relaxed text-white/70">
                  Hardware-verified intent.
                </p>
                <p className="mt-4 text-lg font-extralight leading-relaxed text-white/70">
                  No passwords. No biometrics. Just the truth.
                </p>
              </div>

              <div className="relative flex-1">
                <div className={sectionMediaClass}>
                  <Image
                    src="/images/tablet/layerofphone.jpeg"
                    alt="Close-up hardware silhouette representing silicon-locked intent"
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/28 to-black/10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Experience */}
        <section id="experience" className={sectionClass}>
          <div className={containerClass}>
            <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row-reverse lg:items-center">
              <div className={sectionTextClass}>
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Experience
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:mt-6 sm:text-6xl sm:leading-[0.96]">
                  Effortless in every sense.
                </h2>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
                  <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/62 sm:col-span-2">
                    Order, verify, and settle
                  </p>
                  <div>
                    <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55">
                      Tap
                    </p>
                    <p className="mt-2 text-base font-extralight leading-relaxed text-white/78 sm:text-lg">
                      Order, verify, and settle with a single tap.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55">
                      Real-time
                    </p>
                    <p className="mt-2 text-base font-extralight leading-relaxed text-white/78 sm:text-lg">
                      Authenticated at the port. Finished in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex-1">
                <div className={sectionMediaClass}>
                  <Image
                    src="/images/tablet/screen1.png"
                    alt="Tablet interface representing a single-tap experience"
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/92 via-black/45 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Foundry (cinematic runway + minimal CTA) */}
        <section id="foundry" className={sectionClass}>
          <div className={containerClass}>
            <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center">
              <div className={`${sectionTextClass} lg:pt-2`}>
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Foundry
                </p>
                <h2 className="mt-6 text-4xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl">
                  Built
                  <span className="block text-white/70">to lead.</span>
                </h2>
                <div className="mt-9 space-y-5 text-lg font-extralight leading-relaxed text-white/70">
                  <p>Engineering the 2026 rollout.</p>
                  <p>
                  For manufacturing partnerships or licensing for our patent pending technology please contact us below
                  </p>
                </div>
                <ContactModal />
              </div>

              <div className="relative flex-1">
                <div className={sectionMediaClass}>
                  <Image
                    src="/images/tablet/screen2.jpeg"
                    alt="Manufacturing rollout concept displayed on a tablet screen"
                    fill
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/92 via-black/40 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_25%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="inquire"
          className={`${sectionClass} relative overflow-visible`}
        >
          <div className={containerClass}>
            <div className="relative mx-auto max-w-4xl text-center">
              <SectionKicker>Inquire</SectionKicker>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Everything follows your lead.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-extralight leading-relaxed text-white/70">
                The operating environment for the modern estate.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full px-10">
                  Inquire <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex w-full justify-center border-t border-white/10 px-6 py-14 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3">
            <p className="text-sm font-extralight text-white/60">
              © 2011–2026 Enviseo.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
