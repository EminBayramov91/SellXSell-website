import type { Metadata } from "next";
import Image from "next/image";
import { ContentSection } from "@/components/content-section";
import { SectionCopyBlock } from "@/components/section-copy-block";
import { aboutSections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = {
    title: "B2B Revenue Consulting Firm for CFOs & CROs",
    description: "This isn’t experience. This is pattern recognition.",
};

export default function AboutPage() {
    const [heroSection, backgroundSection, authoritySection, ...remainingSections] =
        aboutSections;
    const seoHeroSection = {
        ...heroSection,
        title: "B2B Revenue Consulting Firm",
    };

    return (
        <>
            <section className="media-band">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--desk">
                        <Image
                            src={siteMedia.about.deskHero.src}
                            alt={siteMedia.about.deskHero.alt}
                            fill
                            priority
                            sizes="100vw"
                            className="media-band__image media-band__image--desk"
                        />
                    </div>
                </div>
            </section>

            <ContentSection {...seoHeroSection} headingLevel={1} />

            <section className="content-section content-section--alt">
                <div className="shell media-split">
                    <SectionCopyBlock
                        title={authoritySection.title}
                        subtitle={authoritySection.subtitle}
                        body={authoritySection.body}
                        ctas={authoritySection.ctas}
                    />

                    <div className="media-panel media-panel--portrait">
                        <Image
                            src={siteMedia.about.speakingAuthority.src}
                            alt={siteMedia.about.speakingAuthority.alt}
                            fill
                            sizes="(max-width: 900px) 100vw, 42vw"
                            className="media-panel__image media-panel__image--authority"
                        />
                    </div>
                </div>
            </section>

            <ContentSection {...backgroundSection} />

            {remainingSections.map((section, index) => (
                <ContentSection
                    key={section.id}
                    {...section}
                    altBackground={index % 2 === 0}
                />
            ))}
        </>
    );
}
