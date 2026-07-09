import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maya Law Practice",
    short_name: "Maya Law",
    description: "Boutique civil law firm in Ottawa, Ontario.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#21314b",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
