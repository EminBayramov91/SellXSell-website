import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/dashboard", "/settings", "/api/", "/admin"],
        },
        sitemap: "https://sellxsell.com/sitemap.xml",
    };
}
