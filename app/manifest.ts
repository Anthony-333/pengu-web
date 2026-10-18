import type { MetadataRoute } from "next";
import { SITE } from "./_lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F2F2F5",
    theme_color: "#F2F2F5",
    icons: [{ src: SITE.logo, sizes: "1024x1024", type: "image/png" }],
  };
}
