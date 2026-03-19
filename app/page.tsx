import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabletGallery } from "@/components/tablet-gallery";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

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
    { href: "#foundry", label: "Foundry" },
    { href: "#inquire", label: "Inquire" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-black text-white">
      <SiteHeader nav={headerNav} />

      <main className="pt-16">
        <Hero />

        {/* Section 1 — Smart Shell */}
        <section id="smart-shell" className="scroll-mt-24 py-16 sm:py-22 md:py-28">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:gap-10 sm:px-6 lg:flex-row lg:items-center lg:px-10">
            <div className="relative z-10 max-w-xl text-center sm:text-left">
              <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                The Smart Shell™
              </p>
              <h2 className="mt-5 text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
                The backseat,
                <span className="block">evolved.</span>
              </h2>
              <p className="mt-7 text-lg font-extralight leading-relaxed text-white/70">
                A tailored mounting architecture for the family.
              </p>
              <p className="mt-3 text-lg font-extralight leading-relaxed text-white/70">
                Power and data, woven into the surface.
              </p>
              <p className="mt-8 text-sm font-extralight leading-relaxed text-white/55">
                The Vibe: It’s not a &quot;bracket.&quot; It’s an evolution of the car.
              </p>
            </div>

            <div className="relative flex-1">
              <div className="relative aspect-video">
                <Image
                  src="/images/tablet/tabletOnCar.png"
                  alt="Smart Shell mounted in-car, tailored mounting architecture"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/88 via-black/20 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_55%_25%,rgba(255,255,255,0.18)_0%,transparent_70%)] opacity-70" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55 sm:px-6 sm:pb-4">
                  <span>Power and data</span>
                  <span>Woven into the surface</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — The Hub */}
        <section id="hub" className="scroll-mt-24 py-16 sm:py-22 md:py-28">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="text-center sm:text-left lg:order-2 lg:col-span-4">
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Hub
                </p>
                <h2 className="mt-5 text-5xl font-extrabold leading-[0.96] tracking-tight sm:text-6xl">
                  Command
                  <span className="block">the home.</span>
                </h2>
                <div className="mt-8 space-y-4 text-base font-extralight leading-relaxed text-white/72 sm:text-lg">
                  <p>A weighted, sculptural center for your daily flow.</p>
                  <p>From family logistics to financial finality, authority is now built-in.</p>
                </div>
                <p className="mt-7 text-sm font-extralight leading-relaxed text-white/55">
                  The Vibe: It’s not an &quot;appliance.&quot; It’s a sculpture that runs your life.
                </p>
              </div>

              <div className="lg:order-1 lg:col-span-8">
                <div className="relative aspect-16/11 sm:aspect-video">
                  <Image
                    src="/images/tablet/tabletsOnShelf.png"
                    alt="The Hub displayed as a sculptural centerpiece on a bright surface"
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/78 via-black/34 to-black/8" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_25%_20%,rgba(255,255,255,0.16)_0%,transparent_68%)] opacity-75" />
                  <div className="pointer-events-none absolute -left-10 top-6 hidden text-[88px] font-extrabold leading-none tracking-tight text-white/10 sm:block sm:text-[128px]">
                    HUB
                  </div>
                  <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
                    <p className="max-w-xs text-[11px] font-extralight uppercase tracking-[0.34em] text-white/62">
                      Sculptural center
                    </p>
                    <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/45">
                      Daily authority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — The Logic */}
        <section id="logic" className="scroll-mt-24 py-18 sm:py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="text-center sm:text-left lg:col-span-5">
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Logic
                </p>
                <h2 className="mt-6 text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl">
                  Locked
                  <span className="block text-white/70">by silicon.</span>
                </h2>
                <p className="mt-8 text-lg font-extralight leading-relaxed text-white/70">
                  Hardware-verified intent.
                </p>
                <p className="mt-4 text-lg font-extralight leading-relaxed text-white/70">
                  No passwords. No biometrics. Just the truth.
                </p>
                <p className="mt-10 text-sm font-extralight leading-relaxed text-white/55">
                  The Vibe: It’s not &quot;security.&quot; It’s a physical law of the device.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-video">
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
        <section id="experience" className="scroll-mt-24 py-16 sm:py-22 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:gap-14">
              <div className="max-w-3xl text-center sm:text-left">
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Experience
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:mt-6 sm:text-6xl sm:leading-[0.96]">
                  Effortless in every sense.
                </h2>
              </div>

              <div className="relative aspect-video">
                <Image
                  src="/images/tablet/screen1.jpeg"
                  alt="Tablet interface representing a single-tap experience"
                  fill
                  sizes="(min-width: 1024px) 80vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/92 via-black/45 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_70%_20%,rgba(255,255,255,0.16)_0%,transparent_70%)] opacity-80" />

                {/* Desktop/tablet overlay copy */}
                <div className="hidden sm:absolute sm:inset-x-0 sm:bottom-0 sm:block sm:p-8">
                  <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/62">
                    Order, verify, and settle
                  </p>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2">
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
              </div>

              {/* Mobile: move copy below image (avoid clipping inside aspect-video) */}
              <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur sm:hidden">
                <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/62">
                  Order, verify, and settle
                </p>
                <div className="mt-5 grid gap-6">
                  <div>
                    <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55">
                      Tap
                    </p>
                    <p className="mt-2 text-base font-extralight leading-relaxed text-white/78">
                      Order, verify, and settle with a single tap.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55">
                      Real-time
                    </p>
                    <p className="mt-2 text-base font-extralight leading-relaxed text-white/78">
                      Authenticated at the port. Finished in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <p className="max-w-2xl text-sm font-extralight leading-relaxed text-white/55">
                The Vibe: It’s not a &quot;transaction.&quot; It’s a tap that creates reality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Foundry (cinematic runway + minimal CTA) */}
        <section id="foundry" className="scroll-mt-24 py-18 sm:py-24 md:py-32 lg:px-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="text-center sm:text-left lg:col-span-5 lg:pt-2">
                <p className="text-xs font-extralight uppercase tracking-[0.34em] text-white/60">
                  The Foundry
                </p>
                <h2 className="mt-6 text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl">
                  Built
                  <span className="block text-white/70">to lead.</span>
                </h2>
                <div className="mt-9 space-y-5 text-lg font-extralight leading-relaxed text-white/70">
                  <p>Engineering the 2026 rollout.</p>
                  <p>For manufacturing partnerships or industrial licensing, contact the Principal.</p>
                </div>
                <p className="mt-10 text-sm font-extralight leading-relaxed text-white/55">
                  The Vibe: This is the high-status invitation for the CEO to get his factory involved.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative aspect-video">
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
                <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/55">
                    Engineering the 2026 rollout
                  </p>
                  <Button size="lg" className="rounded-full px-10" asChild>
                    <Link href="#inquire">
                      Contact the Principal <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Human-Premium Tone */}
        <section id="human-premium-tone" className="scroll-mt-24 py-18 sm:py-24 md:py-30 lg:px-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="text-center sm:text-left lg:col-span-4">
                <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/60">Tone Direction</p>
                <h3 className="mt-6 text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-5xl">
                  Why this
                  <span className="block text-white/70">&quot;Human-Premium&quot; tone works</span>
                </h3>
              </div>

              <div className="lg:col-span-8">
                <ol className="divide-y divide-white/10 border-y border-white/10">
                  <li className="grid gap-4 py-6 sm:grid-cols-[72px_1fr]">
                    <p className="text-[11px] font-extralight uppercase tracking-[0.28em] text-white/45">01</p>
                    <p className="text-base font-light leading-relaxed text-white/82 sm:text-lg">
                    It sounds like a Brand, not a Patent: Nick Pajic will look at "Everything follows your lead" and realize he's dealing with a Lifestyle Monopoly, not a "domain guy."
                    </p>
                  </li>
                  <li className="grid gap-4 py-6 sm:grid-cols-[72px_1fr]">
                    <p className="text-[11px] font-extralight uppercase tracking-[0.28em] text-white/45">02</p>
                    <p className="text-base font-light leading-relaxed text-white/82 sm:text-lg">
                      &quot;Woven into the surface&quot; is materially elegant and implies that technology and finish are one
                      unified object.
                    </p>
                  </li>
                  <li className="grid gap-4 py-6 sm:grid-cols-[72px_1fr]">
                    <p className="text-[11px] font-extralight uppercase tracking-[0.28em] text-white/45">03</p>
                    <p className="text-base font-light leading-relaxed text-white/82 sm:text-lg">
                      &quot;Sculptural center&quot; supports the white-ceramic Hub as interior design, not consumer appliance.
                    </p>
                  </li>
                  <li className="grid gap-4 py-6 sm:grid-cols-[72px_1fr]">
                    <p className="text-[11px] font-extralight uppercase tracking-[0.28em] text-white/45">04</p>
                    <p className="text-base font-light leading-relaxed text-white/82 sm:text-lg">
                      &quot;Just the truth&quot; satisfies legal clarity for security claims while keeping the voice precise and
                      composed.
                    </p>
                  </li>
                </ol>

                <p className="mt-8 text-2xl font-light leading-relaxed text-white/90 sm:text-3xl">
                  No passwords. No biometrics. <span className="text-white">Just the truth.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Updated Visual Strategy */}
        <section id="visual-strategy" className="scroll-mt-24 py-18 sm:py-24 md:py-30 lg:px-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-center text-[11px] font-extralight uppercase tracking-[0.34em] text-white/58 sm:text-left">
              Updated Visual Strategy
            </p>
            <h3 className="mt-6 max-w-5xl text-center text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-left sm:text-6xl">
              Ground Zero is the Deed.
              <span className="block text-white/72">The Tone is the Status.</span>
              <span className="block text-white/56">The Silicon is the Witness.</span>
            </h3>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="border-t border-white/10 pt-7 text-center sm:text-left lg:col-span-6">
                <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/50">Hero Direction</p>
                <p className="mt-4 text-2xl font-light leading-relaxed text-white/90 sm:text-3xl">
                  Do not show the port.
                </p>
                <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
                  Use a high-contrast silhouette of the Smart Shell catching a single, controlled ray of light.
                </p>
              </div>

              <div className="border-t border-white/10 pt-7 text-center sm:text-left lg:col-span-6">
                <p className="text-[11px] font-extralight uppercase tracking-[0.34em] text-white/50">Hub Direction</p>
                <p className="mt-4 text-2xl font-light leading-relaxed text-white/90 sm:text-3xl">
                  Stage it as a design object.
                </p>
                <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
                  Place the Hub on white marble and light it like gallery sculpture to reinforce category and status.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <p className="max-w-3xl text-xl font-light leading-relaxed text-white/88 sm:text-2xl">
                Is this &quot;Ferrari&quot; tone the right one to present to the world?
              </p>
              <Button size="lg" className="rounded-full px-9" asChild>
                <Link href="#inquire">
                  Continue to Inquiry <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

<section className="relative z-10 mx-auto text-center">
<SectionGlow />
        <TabletGallery />
        <section id="inquire" className="relative scroll-mt-24 overflow-visible px-4 py-18 sm:px-6 sm:py-24 md:py-30 lg:px-10">
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
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-transparent px-10 text-white hover:bg-white/5"
                asChild
              >
                <Link href="#foundry">Contact the Principal</Link>
              </Button>
            </div>
          </div>
        </section>
</section>


        <footer className="w-full flex justify-center border-t border-white/10 px-6 py-14 lg:px-10">
          <div className="mx-auto flex flex-col justify-center items-center max-w-7xl gap-3">
            <p className="text-sm font-extralight text-white/60">© 2011–2026 Enviseo.</p>
            <p className="text-sm font-extralight text-white/60 opacity-50">Nashville | Phoenix | Zug</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
