import type { MetadataRoute } from "next";
import { siteRoutes } from "@/lib/site-routes";

const baseUrl = "https://sellxsell.com";

const publicRoutes = [
    siteRoutes.home,
    siteRoutes.about,
    siteRoutes.meddic,
    siteRoutes.services,
    siteRoutes.speaking,
    siteRoutes.newsletter,
    siteRoutes.pricing,
    siteRoutes.diagnostic,
    siteRoutes.forecastFailure,
];

const appRoutes = ["https://app.sellxsell.com/", "https://app.sellxsell.com/diagnostic"];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return [
        ...publicRoutes.map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: now,
            changeFrequency:
                route === siteRoutes.home ? ("weekly" as const) : ("monthly" as const),
            priority: route === siteRoutes.home ? 1 : 0.8,
        })),
        ...appRoutes.map((url) => ({
            url,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
