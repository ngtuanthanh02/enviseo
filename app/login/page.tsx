import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_20%,rgba(130,150,255,0.12)_0%,transparent_60%)]" /> */}
      <section className="relative grid min-h-screen lg:grid-cols-[1fr_1.05fr]">
            <div className="relative z-10 order-2 flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-12 lg:order-1 lg:px-16 xl:px-50">
              <div className="mb-10 flex items-center gap-3">
                <Link
                  href="/"
                  className="text-xl font-semibold lowercase tracking-tight text-white/92 transition hover:text-white"
                >
                  enviseo
                </Link>
              </div>

              <p className="text-[11px] font-extralight uppercase tracking-[0.3em] text-white/58">
                Start secure access
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Partner Login
              </h1>
              <p className="mt-3 max-w-sm text-sm font-extralight leading-relaxed text-white/68">
                Enter your credentials to continue to Enviseo portal.
              </p>

              <form className="mt-8 grid w-full max-w-sm gap-4">
                <label className="grid gap-2">
                  <span className="text-[11px] font-extralight uppercase tracking-[0.2em] text-white/58">
                    Username
                  </span>
                  <input
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="h-11 border border-white/18 bg-black/55 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/38"
                    placeholder="your.username"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[11px] font-extralight uppercase tracking-[0.2em] text-white/58">
                    Password
                  </span>
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-11 border border-white/18 bg-black/55 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/38"
                    placeholder="••••••••"
                  />
                </label>

                <div className="mt-4 flex items-center gap-3">
                  <Button className="h-11 w-full cursor-pointer rounded-none border border-white/20 bg-[#161922] px-7 text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:bg-[#1d212d]">
                    Login <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="order-1 relative min-h-[300px] lg:order-2 lg:min-h-full">
              <Image
                src="/images/tablet/BackChairScreen.png"
                alt="Enviseo tablet visual"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center mask-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_18%,rgba(0,0,0,0.45)_32%,black_52%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_4%,rgba(0,0,0,0.05)_18%,rgba(0,0,0,0.45)_32%,black_52%,black_100%)]"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/28" />
            </div>
      </section>
    </main>
  );
}
