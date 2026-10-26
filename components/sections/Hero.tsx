"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_ANCHOR, TRANSFORMATIONS } from "@/lib/constants";

/**
 * Carrousel plein cadre, inspiré du hero ORIR-Shop mais fidèle au thème
 * sombre de LIFTPURDY : photo coach + transformations en fond, voile sombre
 * pour la lisibilité, titre/CTA peints en bas à gauche.
 *
 * Le slide 0 (photo coach) est rendu en priority + CSS pur (.animate-rise),
 * identique au rendu serveur, donc visible immédiatement sans flash —
 * seule la rotation automatique et les contrôles sont de l'amélioration
 * progressive côté client.
 */
const SLIDES = [
  { src: "/images/coach.jpg", alt: "Baptiste, coach sportif à La Rochelle" },
  ...TRANSFORMATIONS,
];

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || paused) return;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [shouldReduceMotion, paused]);

  const goTo = (index: number) =>
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative flex min-h-svh items-center overflow-hidden bg-ink"
    >
      {/* Carrousel plein cadre */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}

        {/* Voiles sombres : lisibilité en haut (nav) et en bas (titre) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/25 to-ink/90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_15%_100%,rgba(10,10,10,0.75),transparent_70%)]"
        />
      </div>

      {/* Contenu, calé en bas à gauche */}
      <div className="container-page relative z-10 flex min-h-svh flex-col justify-end pt-32 pb-24">
        <div className="max-w-4xl animate-rise">
          <h1 className="font-brand text-[clamp(1.85rem,4.8vw,3.4rem)] leading-[1.12] font-extrabold tracking-normal text-white uppercase">
            If you work hard,
            <br />
            <span className="text-accent-light">the answer will come.</span>
          </h1>
        </div>

        <div className="max-w-xl animate-rise [animation-delay:80ms]">
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/75 sm:text-lg">
            Coaching personnalisé en présentiel à La Rochelle ou à distance.
            Perte de gras, prise de masse, remise en forme, préparation
            sportive — un programme conçu pour toi, pas pour tout le monde.
          </p>
        </div>

        <div className="animate-rise mt-9 flex flex-wrap items-center gap-6 [animation-delay:160ms]">
          <Button href={BOOKING_ANCHOR} size="lg">
            Réserver mon appel gratuit
            <ArrowRight size={17} aria-hidden />
          </Button>

          {/* Pagination à points */}
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Flèches de navigation (desktop) */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Image précédente"
        className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronLeft size={20} aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Image suivante"
        className="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronRight size={20} aria-hidden />
      </button>
    </section>
  );
}
