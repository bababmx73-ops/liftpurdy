import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="bg-ink pb-24 md:pb-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-accent/35 bg-linear-160 from-accent/15 via-ink to-ink p-8 text-center sm:p-12 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(94,122,138,0.22),transparent_70%)]"
            />

            <div className="relative mx-auto max-w-xl">
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.12] font-bold text-white">
                Prêt à passer à l&apos;action&nbsp;?
              </h2>

              <p className="mx-auto mt-5 max-w-md text-[1.0625rem] leading-relaxed text-white/65">
                Le premier appel est gratuit et sans engagement. On fait le
                point sur ton objectif, ton niveau et ce qu&apos;il est
                réaliste d&apos;atteindre — ensuite, tu décides.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={SITE.calendlyUrl} size="lg">
                  Réserver mon appel gratuit
                  <ArrowRight size={17} aria-hidden />
                </Button>
                <Button href={SITE.typeformUrl} size="lg" variant="outline">
                  Remplir le questionnaire
                </Button>
              </div>

              <p className="mt-8 text-[0.9375rem] text-muted">
                Tu préfères écrire directement&nbsp;?{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-accent-light underline underline-offset-4 transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
