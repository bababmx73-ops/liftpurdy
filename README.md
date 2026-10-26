# LIFTPURDY

Site vitrine one-page pour LIFTPURDY, coach sportif à La Rochelle (présentiel et en ligne).

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS 4** — configuration CSS-first via `@theme` dans `app/globals.css`
- **Framer Motion** — apparitions au scroll, désactivées si `prefers-reduced-motion`
- **Lucide React** — icônes
- **GitHub Pages** — hébergement statique (export `out/`), domaine `liftpurdy.com`
- **Calendly** (réservation) et **Typeform** (questionnaire de qualification) — liens externes, aucune intégration formulaire côté site

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

Pour tester le build final en local : `npm run build`, puis `npx serve out`.

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production : génère le site statique dans `out/` |
| `npm run typecheck` | Vérification TypeScript |

## Modifier le contenu

**Tout le contenu éditable est dans [`lib/constants.ts`](lib/constants.ts)** : coordonnées,
liens Calendly/Typeform, réseaux sociaux, statistiques, services, étapes de la méthode,
témoignages, transformations.
C'est le seul fichier à toucher pour une mise à jour de texte ou de lien.

### À vérifier avant la mise en ligne

- `SITE.url` — `https://liftpurdy.com` (sert aux balises Open Graph, au sitemap et à Schema.org)
- `SITE.calendlyUrl` et `SITE.typeformUrl` — les liens définitifs
- [`app/mentions-legales/page.tsx`](app/mentions-legales/page.tsx) — les informations
  légales de l'éditeur sont renseignées ; l'hébergeur est GitHub, Inc.
- Les images fournies par le client (`public/images/coach.jpg` et
  `public/images/transformations/transformation-1.jpg` … `-7.jpg`, `-8.webp`, `-9.webp`) sont déjà
  en place ; les remplacer en conservant les mêmes noms de fichiers suffit

## Design system

Les tokens (couleurs, polices, rayons) sont déclarés dans le bloc `@theme` de
`app/globals.css` et génèrent directement les utilitaires Tailwind
(`bg-ink`, `text-accent`, `rounded-card`…).

| Token | Valeur |
|---|---|
| `--color-ink` | `#0A0A0A` |
| `--color-offwhite` | `#F4F6F7` |
| `--color-accent` | `#5E7A8A` |
| `--color-accent-light` | `#7A9AAD` |
| `--color-accent-dark` | `#3D5A6A` |
| `--color-muted` | `#8A9099` |
| `--color-line` | `#C8CDD2` |

Polices : Space Grotesk (titres) et DM Sans (texte), chargées via `next/font/google`.

## Prise de rendez-vous

Le site ne collecte aucune donnée lui-même : le CTA final et la navbar renvoient
vers **Calendly** (`SITE.calendlyUrl`, appel découverte de 30 min) et **Typeform**
(`SITE.typeformUrl`, questionnaire de qualification). Les deux s'ouvrent dans un
nouvel onglet. Aucun formulaire, aucune donnée personnelle ne transite par le site
ou par l'hébergeur.

## Déploiement GitHub Pages

Le site est exporté en statique (`output: "export"` dans `next.config.js`) et
publié par GitHub Actions à chaque push sur `main` :
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) exécute `npm ci`,
`npm run build`, puis déploie le dossier `out/`.

- `trailingSlash: true` : chaque page devient `dossier/index.html`, ce que GitHub Pages sert nativement.
- `images.unoptimized: true` : pas d'optimiseur d'images sur un hébergement statique.
- [`public/CNAME`](public/CNAME) contient `liftpurdy.com` ; il est copié dans `out/` et conserve le domaine personnalisé à chaque déploiement.
- Aucune variable d'environnement n'est requise.

### Mise en route (une seule fois)

1. **GitHub** — dépôt → *Settings* → *Pages* → *Source* : **GitHub Actions**.
2. **GitHub** — même page, *Custom domain* : `liftpurdy.com`, puis cocher *Enforce HTTPS* quand la case devient disponible (le certificat est émis après la propagation DNS).
3. **Registrar** — enregistrements DNS du domaine :

   | Type | Nom | Valeur |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<compte-github>.github.io` |

4. Pousser sur `main` : le workflow publie le site.

## SEO & accessibilité

- Metadata complètes (title, description, Open Graph, Twitter Card) dans `app/layout.tsx`
- Schema.org `LocalBusiness` pour le référencement local (dans `app/page.tsx`)
- `sitemap.xml` et `robots.txt` générés par `app/sitemap.ts` et `app/robots.ts`
- Lien d'évitement, focus visible, balises sémantiques, `aria-label` sur la navigation
- `prefers-reduced-motion` respecté côté CSS et côté Framer Motion
