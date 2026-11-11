import type { Metadata, Viewport } from "next";
import { Inter, Josefin_Sans, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});
const josefin = Josefin_Sans({ variable: "--font-josefin", subsets: ["latin"], weight: ["600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "North Tampa Bay Chamber | Wesley Chapel, New Tampa, Lutz, Trinity & Odessa",
    template: "%s | North Tampa Bay Chamber",
  },
  description:
    "The North Tampa Bay Chamber is a connector, convener, and catalyst for business success, serving more than 620 member businesses throughout Wesley Chapel, New Tampa, Trinity, Odessa, and surrounding communities.",
  openGraph: {
    type: "website",
    siteName: "North Tampa Bay Chamber",
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "North Tampa Bay Chamber" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#f5f3ee" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://en.wikipedia.org/wiki/Chamber_of_commerce",
  name: site.name,
  description:
    "A connector, convener, and catalyst for business success serving Wesley Chapel, New Tampa, Lutz, Land O’ Lakes, Trinity and Odessa.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-vertical.png`,
  image: `${SITE_URL}/og.jpg`,
  telephone: "+1-813-994-8534",
  email: site.email,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  hasMap: site.directions,
  sameAs: site.socials.map((s) => s.href),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${josefin.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
