import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    {
      name: "Man Water Service",
      short_name: "Man Water",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#2563eb", // Tailwind's blue-600
      description:
        "Kerala’s trusted cleaning pros – water tanks, cars, homes & more. 100% satisfaction. Locally owned. 500+ happy clients.",
      lang: "en-IN",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          type: "image/png",
          sizes: "192x192",
          purpose: "any maskable",
        },
        {
          src: "/android-chrome-512x512.png",
          type: "image/png",
          sizes: "512x512",
          purpose: "any maskable",
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/manifest+json",
      },
    }
  );
}
