/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export 100 % statique (dossier `out/`) pour GitHub Pages.
  output: "export",
  // Pas d'optimiseur d'images côté serveur sur un hébergement statique.
  images: { unoptimized: true },
  // /mentions-legales -> /mentions-legales/index.html (nécessaire sur GitHub Pages).
  trailingSlash: true,
};

module.exports = nextConfig;
