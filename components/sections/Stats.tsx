import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section
      aria-label="Chiffres clés"
      className="border-t border-white/10 bg-ink"
    >
      <div className="container-page py-14">
        <dl className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="sm:text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-[2.5rem] leading-none font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="mt-3 block text-[0.9375rem] text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
