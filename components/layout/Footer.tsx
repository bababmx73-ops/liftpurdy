import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <p className="font-brand text-lg font-extrabold tracking-[0.14em] text-white uppercase">
              {SITE.name}
            </p>
            <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
              Coach sportif diplômé, en présentiel à {SITE.city} et en ligne.
              Un accompagnement 100&nbsp;% personnalisé pour atteindre ton
              objectif.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation de pied de page">
            <h2 className="font-display text-[0.8125rem] font-medium tracking-[0.18em] text-white/50 uppercase">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-display text-[0.8125rem] font-medium tracking-[0.18em] text-white/50 uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-muted">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail size={16} aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={16} aria-hidden />
                {SITE.city} &amp; en ligne
              </li>
            </ul>

            <ul className="mt-6 flex gap-5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Tous droits réservés.
          </p>
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-white"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
