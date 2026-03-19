"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Always reset to hidden state before entering,
      // so every open cycle gets a visible animation.
      setVisible(false);
      const enterId = window.setTimeout(() => {
        setVisible(true);
      }, 40);
      return () => window.clearTimeout(enterId);
    }

    setVisible(false);
    if (!mounted) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setMounted(false);
    }, 420);

    return () => window.clearTimeout(timeoutId);
  }, [open, mounted]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Button
        variant="outline"
        className="mt-6 cursor-pointer rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/5"
        onClick={openModal}
      >
        Contact us <ArrowRight className="ml-1.5 size-4" />
      </Button>

      {mounted && (
        <div
          className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/92 px-3 transition-all duration-400 sm:px-4 ${
            visible ? "opacity-100 backdrop-blur-lg" : "opacity-0 backdrop-blur-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Contact form"
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-xl rounded-2xl border border-white/15 bg-[#070707]/95 shadow-[0_24px_80px_rgba(0,0,0,0.7)] transition-all duration-500 will-change-transform sm:max-w-2xl px-4 py-8 sm:px-8 sm:py-10 ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-8 scale-90 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close contact form"
              onClick={closeModal}
              className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" />
            </button>

            <h3 className="mt-2 text-center text-2xl font-extrabold tracking-tight sm:mt-3 sm:text-4xl">
              Let&apos;s build together.
            </h3>
            <p className="mt-3 text-center text-xs font-extralight leading-relaxed text-white/70 sm:mt-4 sm:text-sm">
              Share your details and our team will reach out shortly.
            </p>

            <form className="mt-6 grid gap-3 text-left sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <label className="grid gap-2">
                <span className="block text-left text-[11px] font-extralight uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                  First name
                </span>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="h-10 rounded-lg border border-white/15 bg-white/3 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 sm:h-11 sm:rounded-xl"
                  placeholder="Alex"
                />
              </label>

              <label className="grid gap-2">
                <span className="block text-left text-[11px] font-extralight uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                  Last name
                </span>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="h-10 rounded-lg border border-white/15 bg-white/3 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 sm:h-11 sm:rounded-xl"
                  placeholder="Morgan"
                />
              </label>

              <label className="grid gap-2">
                <span className="block text-left text-[11px] font-extralight uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="h-10 rounded-lg border border-white/15 bg-white/3 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 sm:h-11 sm:rounded-xl"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="block text-left text-[11px] font-extralight uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                  Phone
                </span>
                <input
                  name="phone"
                  type="tel"
                  className="h-10 rounded-lg border border-white/15 bg-white/3 px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 sm:h-11 sm:rounded-xl"
                  placeholder="+1 555 0123"
                />
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="block text-left text-[11px] font-extralight uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="resize-none rounded-lg border border-white/15 bg-white/3 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/35 sm:rounded-xl"
                  placeholder="Tell us about your project, timeline, and needs."
                />
              </label>

              <div className="mt-1 flex w-full justify-center sm:col-span-2 sm:mt-2">
                <Button
                  type="submit"
                  className="h-10 w-full cursor-pointer justify-center rounded-full bg-white px-6 text-center text-black hover:bg-white/90 sm:h-11 sm:w-32 sm:px-8"
                >
                  Submit inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
