import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE.name}.`,
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const link =
    "text-accent-light underline underline-offset-4 transition-colors hover:text-white";

  return (
    <section className="bg-ink py-32 md:py-40">
      <div className="container-page max-w-2xl">
        <h1 className="text-[clamp(2rem,4vw,2.8rem)] leading-[1.1] font-bold text-white">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-10 text-[0.9375rem] leading-relaxed text-muted">
          <div>
            <h2 className="text-[1.15rem] font-semibold text-white">Éditeur</h2>
            <p className="mt-3">
              {SITE.name} — Baptiste Gomes
              <br />
              Micro-entrepreneur (auto-entrepreneur), activité depuis
              novembre 2025 · SIRET 992 661 686 00012
              <br />
              14 route de Landrais, 17290 Ardillières, France
              <br />
              <a href={`mailto:${SITE.email}`} className={link}>
                {SITE.email}
              </a>
            </p>
            <p className="mt-3">
              Directeur de la publication : Baptiste Gomes.
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-semibold text-white">
              Hébergement
            </h2>
            <p className="mt-3">
              GitHub, Inc. (GitHub Pages) — 88 Colin P. Kelly Jr. Street,
              San Francisco, CA 94107, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-semibold text-white">
              Données personnelles
            </h2>
            <p className="mt-3">
              Ce site ne collecte aucune donnée personnelle par lui-même :
              il n&apos;y a pas de formulaire de contact ni de compte
              utilisateur. La prise de rendez-vous et le questionnaire sont
              gérés par des services tiers, vers lesquels le site te redirige :{" "}
              <a
                href="https://calendly.com/legal/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Calendly
              </a>{" "}
              et{" "}
              <a
                href="https://www.typeform.com/help/a/data-privacy-at-typeform-360029514371/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Typeform
              </a>
              . Les informations que tu y renseignes sont utilisées uniquement
              pour répondre à ta demande et organiser l&apos;appel découverte.
              Elles ne sont ni cédées ni revendues.
            </p>
            <p className="mt-3">
              Si tu m&apos;écris par e-mail, ton adresse n&apos;est utilisée
              que pour te répondre. Conformément au RGPD, tu peux demander
              l&apos;accès, la rectification ou la suppression de tes données
              à l&apos;adresse e-mail ci-dessus.
            </p>
          </div>

          <div>
            <h2 className="text-[1.15rem] font-semibold text-white">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus de ce site (textes, visuels,
              logo, identité) est la propriété de {SITE.name}, sauf mention
              contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
