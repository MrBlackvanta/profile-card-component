import type { Metadata, Viewport } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const SITE_URL =
  "https://profile-card-component.abdelrhman-ahmed8881.workers.dev";

const name = "Abdelrhman Abdelaal";
const title = `${name} | Photos from Cairo`;
const description =
  "Abdelrhman Abdelaal, 26, shares photography from Cairo. 1.4K photos, 803K likes and 80K followers on the profile so far.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Abdelrhman Abdelaal's profile card, with 80K followers, 803K likes and 1.4K photos.",
};

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19A1AE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kumbhSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
