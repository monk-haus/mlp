import type { Metadata, Viewport } from "next";
import { Noto_Serif, Open_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
const TITLE = "Maya Law Practice | Ottawa Civil Law Firm";
const DESCRIPTION =
  "Boutique civil law firm in Ottawa, Ontario. Real estate, business, commercial, immigration, and employment law — with direct access to the lawyer on your case.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Maya Law Practice",
  },
  description: DESCRIPTION,
  applicationName: "Maya Law Practice",
  authors: [{ name: "Maya Hussein" }],
  creator: "Maya Law Practice",
  publisher: "Maya Law Practice",
  keywords: [
    "Ottawa lawyer",
    "Ottawa law firm",
    "Ontario civil law",
    "real estate lawyer Ottawa",
    "business lawyer",
    "commercial law",
    "immigration lawyer Ottawa",
    "employment lawyer",
    "boutique law firm",
    "Maya Hussein",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Maya Law Practice",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maya Law Practice — Ottawa civil law firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/og-image.png"],
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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#21314b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#legalservice`,
  name: "Maya Law Practice",
  alternateName: "MLP",
  description: DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  image: `${SITE_URL}/img/og-image.png`,
  telephone: "+1-613-862-3449",
  email: "mlp@mlawpractice.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1742 Silver Bark Ave",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K1C 7A8",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Ontario, Canada",
  },
  founder: {
    "@type": "Person",
    name: "Maya Hussein",
    jobTitle: "Principal Lawyer",
  },
  knowsAbout: [
    "Real Estate Law",
    "Business Law",
    "Commercial Law",
    "Transactional Law",
    "Immigration Law",
    "Employment Law",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${notoSerif.variable} ${openSans.variable} ${sourceSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
