"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const OPEN_CONTACT_MODAL_EVENT = "enviseo:open-contact-modal";

type ContactModalTriggerProps = {
  triggerLabel?: string;
  triggerClassName?: string;
  triggerVariant?: "default" | "outline";
  triggerSize?: "default" | "lg";
  showArrow?: boolean;
};

function openContactModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_CONTACT_MODAL_EVENT));
}

export function ContactModalTrigger({
  triggerLabel = "Contact us",
  triggerClassName,
  triggerVariant = "outline",
  triggerSize = "default",
  showArrow = true,
}: ContactModalTriggerProps) {
  return (
    <Button
      variant={triggerVariant}
      size={triggerSize}
      className={[
        "cursor-pointer",
        triggerVariant === "outline"
          ? "mt-6 rounded-full bg-transparent px-6 text-white hover:bg-white/5"
          : "",
        triggerClassName ?? "",
      ].join(" ")}
      onClick={openContactModal}
    >
      {triggerLabel}
      {showArrow && <ArrowRight className="ml-1.5 size-4" />}
    </Button>
  );
}

export function ContactModalRoot() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [successMounted, setSuccessMounted] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const closeModal = () => setOpen(false);
  const closeSuccess = () => {
    setSuccessVisible(false);
    window.setTimeout(() => setSuccessMounted(false), 220);
  };
  const closeAll = () => {
    closeSuccess();
    closeModal();
  };

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, onOpen);
  }, []);

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
      if (event.key === "Escape") closeAll();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!successMounted) return;
    const showId = window.setTimeout(() => setSuccessVisible(true), 90);
    return () => window.clearTimeout(showId);
  }, [successMounted]);

  useEffect(() => {
    if (!successVisible) return;
    const autoCloseId = window.setTimeout(() => {
      closeAll();
    }, 8000);
    return () => window.clearTimeout(autoCloseId);
  }, [successVisible]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSuccessMounted(true);
  };

  return (
    mounted && (
      <div
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-black/92 px-3 transition-all duration-400 sm:px-4 ${
          visible ? "opacity-100 backdrop-blur-lg" : "opacity-0 backdrop-blur-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        onClick={closeAll}
      >
        <div
          className={`relative w-full max-w-xl rounded-2xl border border-white/15 bg-[#070707]/95 px-4 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.7)] transition-all duration-500 will-change-transform sm:max-w-2xl sm:px-8 sm:py-10 ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-8 scale-90 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close contact form"
            onClick={closeAll}
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

          <form
            className="mt-6 grid gap-3 text-left sm:mt-8 sm:grid-cols-2 sm:gap-4"
            onSubmit={handleSubmit}
          >
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
                className="h-8 w-full max-w-28 cursor-pointer justify-center rounded-full bg-white text-center text-black hover:bg-white/90"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        {successMounted && (
          <div
            className={`absolute inset-0 z-10000 flex items-center justify-center bg-black/55 p-4 transition-opacity duration-500 ${
              successVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeAll}
          >
            <div
              className={`relative w-full max-w-md rounded-2xl border border-white/20 bg-[#090909] p-7 text-center shadow-[0_24px_80px_rgba(0,0,0,0.75)] transition-all duration-500 sm:p-9 ${
                successVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-85 opacity-0"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close success modal"
                onClick={closeAll}
                className="absolute right-3 top-3 cursor-pointer rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X className="size-4" />
              </button>

              <div
                className={`relative mx-auto flex size-20 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500/10 transition-all duration-700 sm:size-22 ${
                  successVisible
                    ? "scale-100 opacity-100"
                    : "scale-40 opacity-0"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-0 rounded-full border border-emerald-300/50 transition-all duration-700 ${
                    successVisible
                      ? "scale-140 opacity-0"
                      : "scale-90 opacity-70"
                  }`}
                />
                <CheckCircle2
                  className={`size-10 text-emerald-400 transition-all duration-700 sm:size-11 ${
                    successVisible
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-0 -rotate-35 opacity-0"
                  }`}
                />
              </div>
              <h4 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Submit successful
              </h4>
              <p className="mx-auto mt-3 max-w-sm text-base font-extralight leading-relaxed text-white/70 sm:text-lg">
                Thank you. Your message has been received.
              </p>
            </div>
          </div>
        )}
      </div>
    )
  );
}
