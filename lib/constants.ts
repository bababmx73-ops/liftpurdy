import {
  Dumbbell,
  Flame,
  Globe,
  Leaf,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------------------------------------
   Toutes les données éditables du site sont centralisées ici.
   Pour modifier un texte, une stat ou un témoignage : c'est le
   seul fichier à toucher.
--------------------------------------------------------------- */

/** Informations générales — à personnaliser avant mise en ligne. */
export const SITE = {
  name: "LIFTPURDY",
  /** Utilisée pour les URLs absolues (Open Graph, sitemap). */
  url: "https://liftpurdy.com",
  description:
    "Coach sportif diplômé, en présentiel à La Rochelle et en ligne. Un accompagnement 100 % personnalisé pour atteindre ton objectif.",
  email: "coachliftpurdy@gmail.com",
  city: "La Rochelle",
  region: "Nouvelle-Aquitaine",
  postalCode: "17000",
  country: "FR",
  /** Coordonnées approximatives de La Rochelle (Schema.org LocalBusiness). */
  geo: { latitude: 46.1591, longitude: -1.1520 },
  /** Lien direct de réservation Calendly (30 min, appel découverte). */
  calendlyUrl: "https://calendly.com/liftpurdy/30min",
  /** Questionnaire de qualification Typeform. */
  typeformUrl: "https://form.typeform.com/to/GcLthGQB",
} as const;

/**
 * Logo affiché dans la navbar et le hero.
 * Variantes disponibles dans public/images/ :
 *   logo-trait-blanc.png (gravure blanche), logo-trait-bleu.png (accent bleu-gris),
 *   logo-sticker.png (corps noir, contour blanc), logo.png (original).
 */
export const LOGO = {
  src: "/images/logo-trait-blanc.png",
  ratio: 480 / 341,
} as const;

/** Réseaux sociaux. */
export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/whopurdy" },
  { label: "TikTok", href: "https://www.tiktok.com/@whopurdy" },
  { label: "YouTube", href: "https://www.youtube.com/@whopurdy" },
] as const;

/** Liens de la navigation principale.
 *  Ancres préfixées par `/` pour rester fonctionnelles depuis
 *  les pages secondaires (/mentions-legales). */
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Méthode", href: "/#methode" },
  { label: "Témoignages", href: "/#temoignages" },
] as const;

/** Ancre du CTA principal — pointe directement vers Calendly. */
export const BOOKING_ANCHOR = SITE.calendlyUrl;

/** Barre de statistiques — chiffres validés par le client. */
export const STATS = [
  { value: "20+", label: "clients accompagnés" },
  { value: "3 ans", label: "d'expérience" },
  { value: "97%", label: "atteignent leur objectif" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Grille de services (section #services). */
export const SERVICES: Service[] = [
  {
    icon: Flame,
    title: "Perte de gras",
    description:
      "Entraînement structuré et déficit calorique maîtrisé, pour maximiser la perte de gras tout en préservant un maximum de muscle.",
  },
  {
    icon: Dumbbell,
    title: "Prise de masse",
    description:
      "Entraînement structuré et surplus calorique maîtrisé, pour maximiser la prise de muscle sans prise de gras superflue.",
  },
  {
    icon: Leaf,
    title: "Remise en forme & bien-être",
    description:
      "Mobilité, cardio, renforcement, sommeil, stress — une remise en forme complète, à ton rythme.",
  },
  {
    icon: Trophy,
    title: "Préparation sportive",
    description:
      "Force, explosivité, prévention des blessures. Calé sur tes échéances.",
  },
  {
    icon: Users,
    title: "Coaching en présentiel",
    description:
      "Séances 1:1, en salle ou à domicile. Un accompagnement personnalisé, où que tu t'entraînes.",
  },
  {
    icon: Globe,
    title: "Coaching en ligne",
    description:
      "Même exigence qu'en présentiel, où que tu sois dans le monde.",
  },
];

/** Étapes de la méthode (section #methode). */
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Appel découverte",
    description:
      "Un premier échange gratuit pour cerner ton objectif et voir si on est faits pour travailler ensemble.",
  },
  {
    number: "02",
    title: "Bilan",
    description:
      "Je te pose toutes les questions utiles : pathologies, mensurations, alimentation, entraînement actuel.",
  },
  {
    number: "03",
    title: "Accompagnement",
    description:
      "Un programme 100 % personnalisé, avec bilan hebdomadaire, messages, appels et vidéos de correction.",
  },
] as const;

export type Testimonial = {
  quote: string;
  /** Initiales du client — retours anonymisés, sans nom ni ville. */
  initials: string;
  context: string;
};

/** Retours clients — anonymes, mots exacts (orthographe seule corrigée). */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Enfin reprendre le squat ! Un régal de retrouver un début de mon ancien dos avec la force en prime.",
    initials: "AM",
    context: "Reprise du squat, dos retrouvé",
  },
  {
    quote:
      "Mon dos, c'est transformé, c'est fou. Je vois même mon arrière d'épaule.",
    initials: "IB",
    context: "Transformation du dos",
  },
  {
    quote:
      "Sans lui, je ne serais pas arrivé à ce que je suis aujourd'hui. J'ai repris confiance en moi.",
    initials: "BR",
    context: "Confiance en soi",
  },
  {
    quote: "Amélioration grâce à tes conseils très pertinents !",
    initials: "KK",
    context: "Conseils",
  },
  {
    quote:
      "J'ai vraiment pris du muscle, je vois la différence par rapport au début.",
    initials: "LL",
    context: "Prise de muscle",
  },
  {
    quote:
      "Avant, j'étais perdu, sans structure, je voulais arrêter. Baptiste m'a remotivé, et maintenant j'ai le corps que j'ai toujours voulu.",
    initials: "LF",
    context: "Remotivation",
  },
];

export type Transformation = {
  src: string;
  alt: string;
  /** Dimensions réelles, si l'image n'est pas en 4:5 (ratio par défaut). */
  width?: number;
  height?: number;
};

/** Transformations physiques de clients — avant/après, visages masqués. */
export const TRANSFORMATIONS: Transformation[] = [
  { src: "/images/transformations/transformation-1.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-2.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-3.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-4.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-5.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-6.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-7.jpg", alt: "Transformation physique avant et après, coaching LIFTPURDY" },
  { src: "/images/transformations/transformation-8.webp", alt: "Transformation physique avant et après, coaching LIFTPURDY", width: 1080, height: 1080 },
  { src: "/images/transformations/transformation-9.webp", alt: "Transformation physique avant et après, coaching LIFTPURDY", width: 1080, height: 1080 },
];
