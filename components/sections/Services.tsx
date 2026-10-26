import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services"
          title="Des programmes adaptés à chaque objectif"
          subtitle="Quel que soit ton point de départ, la structure reste la même : un objectif clair, un plan progressif, et quelqu'un pour t'y tenir."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={(index % 3) * 0.08}>
                <article className="group h-full rounded-card border border-line/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-20px_rgba(10,10,10,0.35)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-btn bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} aria-hidden />
                  </span>

                  <h3 className="mt-6 text-[1.15rem] font-semibold text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
