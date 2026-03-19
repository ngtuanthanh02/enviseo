"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const GALLERY_ITEMS = [
  {
    src: "/images/tablet/FrontScreen.png",
    title: "Smart Shell silhouette",
    subtitle: "A single ray of light",
  },
  {
    src: "/images/tablet/.png",
    title: "Rear seat architecture",
    subtitle: "Woven power and data",
  },
  {
    src: "/images/tablet/tabletOnCar.png",
    title: "The modern estate",
    subtitle: "Tailored mounting",
  },
  {
    src: "/images/tablet/tabletsOnShelf.png",
    title: "The Hub",
    subtitle: "Sculptural center",
  },
  {
    src: "/images/tablet/layerofphone.jpeg",
    title: "Hardware witness",
    subtitle: "Silicon truth",
  },
  {
    src: "/images/tablet/screen1.jpeg",
    title: "Effortless service",
    subtitle: "Single-tap reality",
  },
  {
    src: "/images/tablet/screen2.jpeg",
    title: "Built to lead",
    subtitle: "2026 rollout",
  },
] as const

export function TabletGallery() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-thin uppercase tracking-[0.28em] text-foreground/55">
            Massive imagery
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Minimalist scroll.
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {GALLERY_ITEMS.map((item) => (
              <CarouselItem
                key={item.src}
                className="basis-[88%] pl-3 sm:basis-[72%] sm:pl-4 md:basis-[58%] lg:basis-[44%]"
              >
                <article className="group relative aspect-16/10 overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-lg shadow-black/40 transition-all duration-200 hover:border-white/20 hover:shadow-black/60">
                  <Image
                    src={item.src}
                    alt={`${item.title} - ${item.subtitle}`}
                    fill
                    sizes="(min-width: 1024px) 44vw, (min-width: 768px) 58vw, 88vw"
                    className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-thin uppercase tracking-[0.2em] text-white/75">
                      {item.subtitle}
                    </p>
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-3" />
          <CarouselNext className="right-2 sm:right-3" />
        </Carousel>
      </div>
    </section>
  )
}
