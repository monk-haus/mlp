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

const DESCRIPTION =
  "Maya Law Practice is a boutique civil law firm in Ottawa, Ontario, handling real estate, business, commercial, transactional, immigration, and employment matters — with direct access to the lawyer handling your case.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayalawpractice.com"),
  title: "Maya Law Practice",
  description: DESCRIPTION,
  keywords: [
    "Ottawa lawyer",
    "Ontario civil law",
    "real estate lawyer",
    "business law",
    "commercial law",
    "immigration lawyer",
    "employment lawyer",
    "boutique law firm",
  ],
  openGraph: {
    title: "Maya Law Practice",
    description: DESCRIPTION,
    type: "website",
    url: "https://mayalawpractice.com",
  },
  twitter: {
    card: "summary",
    title: "Maya Law Practice",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#21314b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${openSans.variable} ${sourceSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
