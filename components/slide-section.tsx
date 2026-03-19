"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SLIDES = [
  {
    src: "/images/tablet/FrontScreen.png",
    title: "Everything follows your lead.",
    subtitle: "The operating environment",
  },
  {
    src: "/images/tablet/BackScreen.webp",
    title: "The backseat, evolved.",
    subtitle: "The Smart Shell™",
  },
  {
    src: "/images/tablet/tabletsOnShelf.png",
    title: "Command the home.",
    subtitle: "The Hub",
  },
  {
    src: "/images/tablet/layerofphone.jpeg",
    title: "Locked by silicon.",
    subtitle: "The Logic",
  },
] as const

export function SlideSection() {
  return (
    <section id="slide" className="px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-light uppercase tracking-[0.28em] text-foreground/60">
            Platform
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Minimalist scroll.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-foreground/70">
            Massive imagery. Minimal noise.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {SLIDES.map((slide, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-2 sm:basis-[85%] sm:pl-4 md:basis-[70%] lg:basis-[45%]"
              >
                <div className="group relative aspect-video overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 shadow-lg transition duration-300 hover:border-foreground/20 hover:shadow-xl">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, (min-width: 768px) 70vw, 85vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-light uppercase tracking-[0.2em] text-white/70">
                      {slide.subtitle}
                    </p>
                    <p className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
                      {slide.title}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 sm:left-2" />
          <CarouselNext className="right-1 sm:right-2" />
        </Carousel>
      </div>
    </section>
  )
}
