import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="methode" className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Méthode"
          tone="dark"
          title="Comment ça se passe"
          subtitle="Trois étapes, aucune surprise."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.number}
              className="relative h-full overflow-hidden bg-ink"
            >
              {/* Numérotation décorative, volontairement très discrète */}
              <span
                aria-hidden
                className="absolute -top-5 -right-2 font-display text-[5.5rem] leading-none font-bold text-white/[0.035]"
              >
                {step.number}
              </span>

              <Reveal delay={index * 0.08} className="relative h-full p-8">
                <span className="font-display text-sm font-medium text-accent-light">
                  {step.number}
                </span>

                <h3 className="mt-4 text-[1.15rem] font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
