import type { Metadata } from "next";
import { ContentSection } from "@/components/content-section";
import { TrustStrip } from "@/components/trust-strip";
import { VideoFeature } from "@/components/video-feature";
import { homeSections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";
import { siteRoutes } from "@/lib/site-routes";

export const metadata: Metadata = {
    title: "Revenue Growth Consulting for B2B Sales Teams",
    description: "Inspection-driven revenue operating system.",
};

export default function HomePage() {
    const sections = homeSections.map((section, index) => {
        if (index === 0) {
            return {
                ...section,
                title: "Revenue Growth Consulting for B2B Sales Teams",
                subtitle: "Your pipeline isn't real. It just hasn't been inspected yet.",
            };
        }

        if (section.id === "why-forecasts-fail" && section.ctas?.length) {
            return {
                ...section,
                ctas: section.ctas.map((cta) =>
                    cta.label === "See the System Work"
                        ? { ...cta, href: siteRoutes.meddic }
                        : cta,
                ),
            };
        }

        return section;
    });

    return (
        <>
            <section className="media-band media-band--tight">
                <div className="media-band__bleed">
                    <VideoFeature
                        src={siteMedia.home.heroVideo.src}
                        poster={siteMedia.home.heroVideo.poster}
                        title={siteMedia.home.heroVideo.title}
                        bleed
                    />
                </div>
            </section>

            {sections.map((section, index) => (
                <div key={section.id}>
                    <ContentSection
                        {...section}
                        headingLevel={index === 0 ? 1 : 2}
                        altBackground={index !== 0 && index % 2 === 1}
                    />

                    {index === 0 ? <TrustStrip /> : null}
                </div>
            ))}
        </>
    );
}
