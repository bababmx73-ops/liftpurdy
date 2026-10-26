import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { SITE, SOCIALS } from "@/lib/constants";

/**
 * Schema.org LocalBusiness — améliore le référencement local
 * (recherches type « coach sportif La Rochelle »).
 */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  image: `${SITE.url}/opengraph-image.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: SITE.city },
    { "@type": "Country", name: "France" },
  ],
  sameAs: SOCIALS.map((social) => social.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
