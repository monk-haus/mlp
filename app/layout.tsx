import type { Metadata, Viewport } from "next";
import { Noto_Serif, Open_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "./sanity/queries";
import { imageUrl } from "./sanity/image";
import { internationalPhone } from "./lib/phone";
import type { SiteSettings } from "./sanity/types";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://mayalawpractice.com";
const FALLBACK_OG_IMAGE = { url: "/img/og-image.png", width: 1200, height: 630 };

function ogImageFor(settings: SiteSettings) {
  if (!settings.ogImage) return { ...FALLBACK_OG_IMAGE, alt: settings.firmName };
  return {
    url: imageUrl(settings.ogImage).width(1200).height(630).fit("crop").url(),
    width: 1200,
    height: 630,
    alt: settings.ogImage.alt ?? settings.firmName,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const ogImage = ogImageFor(settings);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: settings.title,
      template: `%s | ${settings.firmName}`,
    },
    description: settings.description,
    applicationName: settings.firmName,
    authors: [{ name: settings.principal.name }],
    creator: settings.firmName,
    publisher: settings.firmName,
    keywords: settings.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: SITE_URL,
      siteName: settings.firmName,
      title: settings.title,
      description: settings.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: settings.title,
      description: settings.description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "Legal services",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#21314b",
  width: "device-width",
  initialScale: 1,
};

function structuredData(settings: SiteSettings) {
  const { address, principal } = settings;
  const hasGeo = address.latitude !== undefined && address.longitude !== undefined;

  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney"],
    "@id": `${SITE_URL}/#legalservice`,
    name: settings.firmName,
    alternateName: "MLP",
    description: settings.description,
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.png`,
    image: new URL(ogImageFor(settings).url, SITE_URL).toString(),
    telephone: internationalPhone(settings.phone),
    ...(settings.fax && { faxNumber: internationalPhone(settings.fax) }),
    email: settings.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country === "Canada" ? "CA" : address.country,
    },
    ...(hasGeo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: address.latitude,
        longitude: address.longitude,
      },
    }),
    areaServed: [
      {
        "@type": "City",
        name: address.city,
      },
      {
        "@type": "AdministrativeArea",
        name: "Ontario, Canada",
      },
    ],
    founder: {
      "@type": "Person",
      name: principal.name,
      ...(principal.role && { jobTitle: principal.role }),
      ...(principal.profileUrl && { sameAs: [principal.profileUrl] }),
    },
    knowsAbout: settings.practiceAreas ?? [],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="en-CA"
      className={`${notoSerif.variable} ${openSans.variable} ${sourceSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(settings)) }}
        />
        {children}
      </body>
    </html>
  );
}
