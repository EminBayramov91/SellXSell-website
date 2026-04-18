import type { Metadata } from "next";
import Image from "next/image";
import { ContentSection } from "@/components/content-section";
import { SectionCopyBlock } from "@/components/section-copy-block";
import { approachSections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = {
    title: "MEDDIC Implementation for Revenue Teams",
    description: "This is not a framework. This is the system.",
};

export default function MeddicImplementationPage() {
    const heroSection = {
        ...approachSections[0],
        title: "MEDDIC Implementation for Revenue Teams",
    };
    const systemSection = approachSections[2];
    const systemVideoSection = approachSections[3];

    return (
        <>
            <ContentSection {...heroSection} headingLevel={1} />

            <section className="content-section content-section--alt">
                <div className="shell">
                    <SectionCopyBlock
                        title="Your pipeline is lying to you."
                        body={["Pipeline != coverage. Feels close != will close."]}
                    />
                </div>
            </section>

            <section className="media-band">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--standard">
                        <Image
                            src={siteMedia.approach.boardroom.src}
                            alt={siteMedia.approach.boardroom.alt}
                            fill
                            sizes="100vw"
                            className="media-band__image"
                        />
                    </div>
                </div>
            </section>

            <ContentSection {...systemVideoSection} />

            <section className="content-section content-section--alt">
                <div className="shell media-cluster">
                    <SectionCopyBlock
                        title={systemSection.title}
                        subtitle={systemSection.subtitle}
                        body={systemSection.body}
                        ctas={systemSection.ctas}
                    />

                    <div className="system-visual">
                        <div className="system-layer">
                            <span className="system-layer__index">01</span>
                            <div>
                                <h3 className="system-layer__title">ICP Match</h3>
                                <p className="system-layer__text">
                                    Defines what belongs in the pipeline before optimism can
                                    distort it.
                                </p>
                            </div>
                        </div>

                        <div className="system-layer">
                            <span className="system-layer__index">02</span>
                            <div>
                                <h3 className="system-layer__title">IBC / Deal Movement</h3>
                                <p className="system-layer__text">
                                    Separates actual progress from the language of momentum.
                                </p>
                            </div>
                        </div>

                        <div className="system-layer">
                            <span className="system-layer__index">03</span>
                            <div>
                                <h3 className="system-layer__title">MEDDIC Validation</h3>
                                <p className="system-layer__text">
                                    Forces evidence into every deal before it can touch the
                                    forecast.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <SectionCopyBlock
                        title="ICP Match. MEDDIC. Internal Alignment."
                        subtitle="Three buckets. One inspection language."
                        body={[
                            "This is how the system keeps every function looking at the same deal the same way.",
                        ]}
                    />

                    <div className="bucket-grid">
                        <article className="bucket-card">
                            <h3 className="bucket-card__title">ICP Match</h3>
                            <p className="bucket-card__text">
                                Does the opportunity belong in the pipeline at all?
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">MEDDIC</h3>
                            <p className="bucket-card__text">
                                Is there real evidence behind the deal, not just narrative?
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">Internal Alignment</h3>
                            <p className="bucket-card__text">
                                Do Sales, Finance, and leadership mean the same thing when they
                                inspect the number?
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="media-band media-band--tight">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--standard">
                        <Image
                            src={siteMedia.approach.dinnerTable.src}
                            alt={siteMedia.approach.dinnerTable.alt}
                            fill
                            sizes="100vw"
                            className="media-band__image"
                        />
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <SectionCopyBlock
                        title="No shared language = no predictable revenue."
                        body={[
                            "That is where the system either holds up under inspection or breaks.",
                        ]}
                    />
                </div>
            </section>
        </>
    );
}
