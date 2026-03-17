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
  { src: "/images/FrontScreen.png", title: "Smart Bus", subtitle: "Power & data" },
  { src: "/images/BackChairScreen.png", title: "In-seat", subtitle: "Silicon-locked" },
  { src: "/images/image.png", title: "Interface", subtitle: "Transit & hospitality" },
  { src: "/images/image copy.png", title: "Operations", subtitle: "Real-time" },
] as const

export function SlideSection() {
  return (
    <section id="slide" className="border-t border-foreground/6 px-4 py-24 sm:px-6 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-light uppercase tracking-[0.28em] text-foreground/60">
            Platform
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for the field.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-foreground/70">
            One environment for hardware, access, and service — see it in action.
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
