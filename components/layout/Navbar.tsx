"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_ANCHOR, LOGO, NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fond transparent en haut de page, flou sombre dès le premier scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu mobile : fermeture à l'échap + blocage du scroll de fond.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="container-page flex h-20 items-center justify-between"
      >
        <Link
          href="/#top"
          className="flex items-center gap-2.5"
          aria-label={`${SITE.name} — retour en haut de page`}
        >
          <Image
            src={LOGO.src}
            alt=""
            width={44}
            height={31}
            priority
            className="h-8 w-auto"
          />
          <span className="font-brand text-lg font-extrabold tracking-[0.14em] text-white uppercase">
            {SITE.name}
          </span>
        </Link>

        {/* Navigation desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-display text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={BOOKING_ANCHOR}>Prendre rendez-vous</Button>
        </div>

        {/* Déclencheur mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 p-2 text-white md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {/* Panneau mobile */}
      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="border-y border-white/10 bg-ink/95 backdrop-blur-xl md:hidden"
      >
        <ul className="container-page flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3.5 font-display text-base font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Button
              href={BOOKING_ANCHOR}
              size="lg"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Prendre rendez-vous
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
