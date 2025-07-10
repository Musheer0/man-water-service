import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Host_Grotesk({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Man Water Service | Kerala’s Trusted Cleaning Pros",
  description:
    "Professional cleaning for water tanks, cars, homes & more. Locally owned in Kerala. 500+ happy customers. 100% satisfaction. Book now!",
  other: {
    keywords:
      "water tank cleaning Kerala, car wash Kerala, home cleaning service, Man Water Service, cleaning service Kerala, tank wash professionals, local cleaning team",
  },
  authors: [{ name: "Man Water Service" }],
  robots: "index, follow",
  openGraph: {
    title: "Man Water Service | Kerala’s Trusted Cleaning Pros",
    description:
      "Get spotless results from Kerala's local cleaning experts. Book water tank, home, or car cleaning with confidence.",
    url: "https://man-water-serivce.netlify.app",
    siteName: "Man Water Service",
    images: [
      {
        url: "./og.png",
        width: 1200,
        height: 630,
        alt: "Man Water Service - Kerala’s Top Cleaning Team",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Man Water Service",
    description:
      "Expert water tank, car, and house cleaning services in Kerala.",
    creator: "@man_water_service",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e3a8a" />

<meta property="og:title" content="Man Water Service" />
<meta property="og:description" content="Get spotless results from Kerala's local cleaning experts. Book water tank, home, or car cleaning with confidence.." />
<meta property="og:image" content="https://man-water-serivce.netlify.app/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://man-water-serivce.netlify.app/" />


        {/* Preload critical images */}
        <link rel="preload" as="image" href="/before.png" />
        <link rel="preload" as="image" href="/after.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Man Water Service",
              image: "https://man-water-serivce.netlify.app/og.png",
              "@id": "https://man-water-serivce.netlify.app",
              url: "https://man-water-serivce.netlify.app",
              telephone: "+91 9746408824",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Kerala",
              },
              description:
                "Expert cleaning services in Kerala, including water tank sanitization, car detailing, and home deep cleaning.",
            }),
          }}
        />
      </head>
      <body
        className={`${font.className} antialiased max-w-[1600px] mx-auto`}
      >
        <main>
          <Navbar />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
