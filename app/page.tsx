import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Cpu,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlideSection } from "@/components/slide-section";

/** Glow làm nền cho 1 section (Hero hoặc CTA). Absolute trong section, mask fade xuống dưới để không bị cắt cứng. */
function SectionGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-x-16 -inset-y-24 z-0"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
      }}
    >
      <div className="absolute -top-10 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_38%,transparent_72%)] blur-3xl" />
      <div className="absolute top-1/3 -right-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_68%)] blur-3xl" />
      <div className="absolute top-1/2 -left-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_68%)] blur-3xl" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-foreground/25" aria-hidden />
      <span className="text-xs font-light uppercase tracking-[0.28em] text-foreground/60">
        {children}
      </span>
      <span className="h-px w-10 bg-foreground/25" aria-hidden />
    </div>
  );
}

function FauxPortrait({
  title,
  subtitle,
  imageSrc,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
}) {
  return (
    <div className="group relative aspect-3/4 overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/70 opacity-90 transition duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_30%,transparent_0%,rgba(0,0,0,0.85)_90%)]" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="translate-y-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-light uppercase tracking-[0.24em] text-white/70">
            {subtitle}
          </p>
          <p className="mt-2 text-lg font-bold tracking-tight text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-foreground/8 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6 lg:px-10">
          <div className="flex justify-start">
            <Link href="#" className="flex items-center gap-2">
              <span className="inline-flex size-7 items-center justify-center rounded-full border border-foreground/12 bg-foreground/5">
                <Sparkles className="size-4" />
              </span>
              <span className="text-sm font-bold tracking-tight">Enviseo</span>
            </Link>
          </div>

          <nav className="hidden justify-center md:flex">
            <div className="flex items-center gap-8 text-sm font-light text-foreground/70">
              <a href="#slide" className="transition hover:text-foreground">
                Platform
              </a>
              <a href="#showcase" className="transition hover:text-foreground">
                Showcase
              </a>
              <a href="#how" className="transition hover:text-foreground">
                How it works
              </a>
              <a href="#enterprise" className="transition hover:text-foreground">
                Enterprise
              </a>
            </div>
          </nav>

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              className="hidden rounded-full border-foreground/20 bg-transparent hover:bg-foreground/5 md:inline-flex"
              asChild
            >
              <Link href="#enterprise">Enterprise</Link>
            </Button>
            <Button className="rounded-full" asChild>
              <Link href="#cta">
                Request a demo <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero — split layout: left text (stacked), right visual in frame */}
      <section className="relative overflow-visible">
        <SectionGlow />
        <div className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
          {/* Left: text block, left-aligned, stacked headline */}
          <div className="flex flex-col text-left">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-xs font-light text-foreground/70">
              <ShieldCheck className="size-4" />
              Built for high‑stakes operations
            </div>

            <h1 className="mt-10 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block bg-linear-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Authority,
              </span>
              <span className="block text-white">integrated.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-foreground/70 sm:text-xl">
              The operating environment for high‑stakes transit and hospitality —
              integrating onboard hardware, secure ports, and frictionless service
              into a single system.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="#cta">
                  Request a demo <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/20 bg-transparent px-8 hover:bg-foreground/5"
                asChild
              >
                <Link href="#showcase">View the system</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm font-light text-foreground/60">
              <div className="inline-flex items-center gap-2">
                <Check className="size-4" />
                Secure port authentication
              </div>
              <div className="inline-flex items-center gap-2">
                <Check className="size-4" />
                Real‑time verification & settlement
              </div>
              <div className="inline-flex items-center gap-2">
                <Check className="size-4" />
                Transit + hospitality ready
              </div>
            </div>
          </div>

          {/* Right: visual in a contained “screen” frame (glow inside frame like reference) */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-foreground/10 bg-black/60 shadow-2xl shadow-black/50 ring-1 ring-white/5">
              <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4">
                <FauxPortrait
                  imageSrc="/images/image.png"
                  subtitle="Royal"
                  title="Regal Studio Portrait"
                />
                <FauxPortrait
                  imageSrc="/images/image copy.png"
                  subtitle="Cinematic"
                  title="Neo‑Noir Close‑Up"
                />
                <FauxPortrait
                  imageSrc="/images/FrontScreen.png"
                  subtitle="Fantasy"
                  title="Arcane Light & Smoke"
                />
                <FauxPortrait
                  imageSrc="/images/BackChairScreen.png"
                  subtitle="Pets"
                  title="Classic Companion"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SlideSection />

      {/* Showcase */}
      <section id="showcase" className="px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Showcase</SectionLabel>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Visual‑first. Minimal noise.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              A premium interface language for in‑seat systems, staff tools, and
              operations — clean, spacious, and built to be trusted.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <FauxPortrait imageSrc="/images/image copy.png" subtitle="Cinematic" title="Cold City Glow" />
            <FauxPortrait imageSrc="/images/image.png" subtitle="Royal" title="Museum‑grade Detail" />
            <FauxPortrait imageSrc="/images/FrontScreen.png" subtitle="Fantasy" title="Mythic Portrait" />
            <FauxPortrait imageSrc="/images/BackChairScreen.png" subtitle="Pets" title="Warm Companion" />
            <FauxPortrait imageSrc="/images/image.png" subtitle="Fantasy" title="Ethereal Bloom" />
            <FauxPortrait imageSrc="/images/image copy.png" subtitle="Cinematic" title="Film Still" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-foreground/6 px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>How it works</SectionLabel>
          <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Three steps.{" "}
              <span className="bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Enterprise‑ready
              </span>
              .
          </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              Integrate hardware, secure the port, and enable frictionless service —
              with real‑time settlement and operational visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-2xl border border-foreground/10 bg-background">
                <Cpu className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Integrate hardware</h3>
              <p className="mt-3 font-light leading-relaxed text-foreground/70">
                Connect seatback displays, payment rails, and service modules with a
                unified environment and clear operational controls.
              </p>
            </div>

            <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-2xl border border-foreground/10 bg-background">
                <KeyRound className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Silicon‑locked access</h3>
              <p className="mt-3 font-light leading-relaxed text-foreground/70">
                Authenticate at the physical port. No biometrics required — just a
                secure, hardware‑rooted trust boundary.
              </p>
            </div>

            <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-2xl border border-foreground/10 bg-background">
                <Zap className="size-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Frictionless service</h3>
              <p className="mt-3 font-light leading-relaxed text-foreground/70">
                Order food, beverages, and retail with a single tap. Verified and
                settled in real‑time — designed for onboard and lounge workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Features</SectionLabel>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Premium operations.{" "}
              <span className="bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Real‑time control
              </span>
              .
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              A minimal interface that prioritizes what matters: trust, speed, and
              clarity under pressure.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <div className="group md:col-span-5 rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-md">
              <h3 className="text-xl font-bold tracking-tight">Hardware‑first integrity</h3>
              <p className="mt-3 font-light leading-relaxed text-foreground/70">
                A secure port boundary and consistent rules for devices, staff, and
                guest flows — designed for enterprise governance.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-foreground/10 bg-background p-5 transition duration-300 group-hover:border-foreground/20">
                  <p className="text-sm font-light text-foreground/60">Authentication</p>
                  <p className="mt-2 text-lg font-bold tracking-tight">Silicon‑locked</p>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background p-5 transition duration-300 group-hover:border-foreground/20">
                  <p className="text-sm font-light text-foreground/60">Settlement</p>
                  <p className="mt-2 text-lg font-bold tracking-tight">Real‑time</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 grid gap-6">
              <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
                <h3 className="text-xl font-bold tracking-tight">Integrated service</h3>
                <p className="mt-3 font-light leading-relaxed text-foreground/70">
                  Seatback ordering, lounge retail, and staff tooling — all in one
                  operating environment.
                </p>
              </div>
              <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
                <h3 className="text-xl font-bold tracking-tight">Operational velocity</h3>
                <p className="mt-3 font-light leading-relaxed text-foreground/70">
                  Real‑time verification, settlement, and telemetry — built for
                  high‑uptime fleets and service environments.
                </p>
              </div>
              <div className="group rounded-3xl border border-foreground/10 bg-foreground/5 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/7 hover:shadow-md">
                <h3 className="text-xl font-bold tracking-tight">Minimal, premium UX</h3>
                <p className="mt-3 font-light leading-relaxed text-foreground/70">
                  Spacious layout, subtle motion, and a focus on visuals — like a
                  modern product studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="border-t border-foreground/6 px-6 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Enterprise</SectionLabel>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Pilot‑to‑fleet deployments.
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
              For hardware integration, pilots, and enterprise rollout, contact our
              business development team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
              <p className="text-sm font-light uppercase tracking-[0.24em] text-foreground/60">
                Pilot
              </p>
              <p className="mt-4 text-3xl font-bold tracking-tight">Scoped</p>
              <p className="mt-2 font-light text-foreground/70">Single route / property</p>
              <ul className="mt-8 space-y-3 text-sm font-light text-foreground/70">
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Hardware integration support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Secure port enablement
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Operational dashboard
                </li>
              </ul>
              <Button className="mt-10 w-full rounded-full" variant="outline">
                Request pilot
              </Button>
            </div>

            <div className="relative rounded-3xl border border-foreground/14 bg-foreground/7 p-8 shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-foreground/12 bg-background px-4 py-1 text-xs font-light text-foreground/70">
                Most popular
              </div>
              <p className="text-sm font-light uppercase tracking-[0.24em] text-foreground/60">
                Fleet
              </p>
              <p className="mt-4 text-3xl font-bold tracking-tight">Scale</p>
              <p className="mt-2 font-light text-foreground/70">Multi‑route / multi‑site</p>
              <ul className="mt-8 space-y-3 text-sm font-light text-foreground/70">
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Real‑time settlement & telemetry
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Policy & access controls
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> SLA & deployment support
                </li>
              </ul>
              <Button className="mt-10 w-full rounded-full">
                Contact BD <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-8">
              <p className="text-sm font-light uppercase tracking-[0.24em] text-foreground/60">
                Enterprise
              </p>
              <p className="mt-4 text-3xl font-bold tracking-tight">Custom</p>
              <p className="mt-2 font-light text-foreground/70">Governance + integrations</p>
              <ul className="mt-8 space-y-3 text-sm font-light text-foreground/70">
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Dedicated rollout plan
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Custom hardware programs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4" /> Security review support
                </li>
              </ul>
              <Button className="mt-10 w-full rounded-full" variant="outline">
                Talk to us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-visible px-6 py-24 md:py-32 lg:px-10">
        <SectionGlow />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <SectionLabel>Get started</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready for a pilot.
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-foreground/70">
            Bring Enviseo into a route, lounge, or property. We’ll help integrate
            hardware, enable secure ports, and launch frictionless service.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-full px-10">
              Contact business development <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-foreground/20 bg-transparent px-10 hover:bg-foreground/5"
              asChild
            >
              <Link href="#enterprise">Explore enterprise</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/6 px-6 py-14 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-sm font-light text-foreground/60">
            <span className="inline-flex size-6 items-center justify-center rounded-full border border-foreground/12 bg-foreground/5">
              <Sparkles className="size-3.5" />
            </span>
            © {new Date().getFullYear()} Enviseo
          </div>
        </div>
      </footer>
    </div>
  );
}
