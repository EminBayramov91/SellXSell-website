import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const heroLines = [
    "Pipeline gets filled.",
    "Deals move forward.",
    "Forecast gets built.",
    "None of it is inspected the same way.",
];

const inspectionLines = [
    "A deal either meets the criteria or it does not.",
    "Movement either qualifies or it does not.",
    "Evidence either exists or it does not.",
    "This is what removes noise and restores signal.",
];

const bucketItems = [
    {
        title: "ICP Match",
        text: "Does the opportunity belong in the pipeline at all?",
    },
    {
        title: "MEDDIC",
        text: "Is there real evidence behind the deal, not just narrative?",
    },
    {
        title: "Internal Alignment",
        text: "Do Sales, Finance, and leadership mean the same thing when they inspect the number?",
    },
];

export const metadata: Metadata = {
    title: "Revenue Operating System Method",
    description: "MEDDIC Implementation for Executive Revenue Teams.",
};

export default function RevenueOperatingSystemMethodPage() {
    return (
        <>
            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={`section-copy section-copy--hero ${styles.center}`}>
                        <h1 className="section-title">
                            MEDDIC Implementation for Executive Revenue Teams.
                        </h1>
                        <p className="section-subtitle">Your pipeline is lying to you.</p>
                        <div className="section-body">
                            <p>Pipeline ≠ coverage. Feels close ≠ will close.</p>
                            {heroLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <div className="section-actions section-actions--center">
                            <ButtonLink href={runDiagnosticCtaHref}>
                                Run the Revenue Diagnostic
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="media-band">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--standard">
                        <Image
                            src={siteMedia.approach.boardroom.src}
                            alt={siteMedia.approach.boardroom.alt}
                            fill
                            priority
                            sizes="100vw"
                            className="media-band__image"
                        />
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className={`section-copy ${styles.center}`}>
                        <p className={styles.note}>This is where most companies break.</p>
                        <h2 className="section-title section-title--secondary">
                            Every deal runs through the same inspection system.
                        </h2>
                        <div className="section-body">
                            {inspectionLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
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

                    <div className={`section-copy ${styles.spaced}`}>
                        <h2 className="section-title section-title--secondary">
                            ICP Match. MEDDIC. Internal Alignment.
                        </h2>
                        <p className="section-subtitle">
                            Three buckets. One inspection language.
                        </p>
                        <div className="section-body">
                            <p>
                                This is how the system keeps every function looking at the same
                                deal the same way.
                            </p>
                        </div>
                    </div>

                    <div className="bucket-grid">
                        {bucketItems.map((item) => (
                            <article key={item.title} className="bucket-card">
                                <h3 className="bucket-card__title">{item.title}</h3>
                                <p className="bucket-card__text">{item.text}</p>
                            </article>
                        ))}
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
                <div className="shell shell--narrow">
                    <div className={`section-copy ${styles.center}`}>
                        <h2 className="section-title section-title--secondary">
                            No shared language = no predictable revenue.
                        </h2>
                        <div className="section-body">
                            <p>
                                That is where the system either holds up under inspection or
                                breaks.
                            </p>
                        </div>
                        <div className="section-actions section-actions--center">
                            <ButtonLink href={runDiagnosticCtaHref}>
                                Run the Revenue Diagnostic
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
