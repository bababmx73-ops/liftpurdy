import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="a-propos" className="bg-white py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-4/5 overflow-hidden rounded-[20px] sm:aspect-3/4 lg:aspect-4/5">
            <Image
              src="/images/coach.jpg"
              alt="Baptiste, coach sportif à La Rochelle"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="À propos"
            title="Baptiste, coach sportif diplômé"
          />

          <Reveal delay={0.08}>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-muted">
              <p>
                Diplômé du BPJEPS Activités de la Forme (option musculation)
                et coach indépendant depuis novembre 2025, je t&apos;emmène à
                ton prime physique en 6 mois.
              </p>
              <p>
                Ancien athlète (BMX Race, surf, rugby, champion de France
                UNSS de surf en 2018), j&apos;ai construit ma discipline dans
                la compétition avant de la mettre au service de mes clients.
                Aujourd&apos;hui, +20 clients transformés, en salle, à
                domicile et en ligne.
              </p>
              <p>
                Ce que je te propose&nbsp;: une stratégie claire et un suivi
                100&nbsp;% personnalisé. Programme d&apos;entraînement, plan
                nutrition, corrections techniques et ajustements réguliers
                selon tes progrès.
              </p>
              <p>
                Pour moi, il n&apos;y a rien de plus motivant que d&apos;aider
                quelqu&apos;un à atteindre son objectif.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
