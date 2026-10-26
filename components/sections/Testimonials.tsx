import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS, TRANSFORMATIONS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="temoignages" className="bg-offwhite py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ce qu'ils en disent"
          subtitle="Des parcours différents, une même constante : de la régularité et des résultats qui tiennent."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.quote} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-card border border-line/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,10,10,0.35)]">
                <Quote size={22} aria-hidden className="text-accent/50" />

                <blockquote className="mt-5 grow text-[1.0625rem] leading-relaxed text-ink/80 italic">
                  « {testimonial.quote} »
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line/70 pt-6">
                  <span
                    aria-hidden
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent-dark"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="block text-sm text-muted">
                    {testimonial.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Transformations — avant/après, sans légende ni nom, en défilement horizontal */}
        <div className="mt-20">
          <h3 className="font-display text-[1.15rem] font-semibold text-ink">
            Transformations
          </h3>

          <div
            className="mt-6 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:-mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TRANSFORMATIONS.map((item, index) => (
              <div
                key={item.src}
                // Hauteur commune, largeur déduite du ratio réel : aucune image n'est recadrée.
                style={{ aspectRatio: `${item.width ?? 4} / ${item.height ?? 5}` }}
                className="relative h-[22rem] shrink-0 snap-start overflow-hidden rounded-card sm:h-[26rem]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={index === 0 ? undefined : "lazy"}
                  sizes="(min-width: 640px) 420px, 352px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
