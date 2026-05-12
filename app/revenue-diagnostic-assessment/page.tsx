import type { Metadata } from "next";
import Script from "next/script";
import { ButtonLink } from "@/components/button-link";
import { VideoFeature } from "@/components/video-feature";
import {
    bookDiagnosticCtaHref,
    diagnosticAppEmbedHref,
} from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const whatThisDoes = [
    "Identifies pipeline gaps",
    "Surfaces MEDDIC breakdowns",
    "Highlights forecast risk",
];

const outputPromise = [
    "3-5 actionable deal insights",
    "Clear system gaps",
    "Immediate next steps",
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a MEDDIC deal assessment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A MEDDIC deal assessment scores a sales opportunity across six dimensions — Metrics, Economic Buyer, Decision Criteria, Decision Process, Identified Pain, and Champion — to determine whether a deal is forecastable or carries hidden risk.",
            },
        },
        {
            "@type": "Question",
            name: "Is the SellXSell diagnostic really free?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The free diagnostic covers one deal, 13 questions, and returns full executive recommendations. No credit card and no time limit.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need Salesforce to use this?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. SellXSell works with any CRM or no CRM at all — Salesforce, HubSpot, Excel, or manual input. No integration required.",
            },
        },
        {
            "@type": "Question",
            name: "How long does the diagnostic take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Under 5 minutes for the 13-question free diagnostic. The 24-question paid version takes 8–10 minutes.",
            },
        },
    ],
};

export const metadata: Metadata = {
    title: "Revenue Diagnostic Assessment",
    description: "Find Out Why Your Pipeline Isn't Converting.",
};

export default function RevenueDiagnosticAssessmentPage() {
    return (
        <>
            <Script
                id="diagnostic-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={`section-copy section-copy--hero ${styles.center}`}>
                        <h1 className="section-title">
                            Find Out Why Your Pipeline Isn&apos;t Converting
                        </h1>
                        <p className="section-subtitle">
                            In 3-5 minutes, identify the gaps in your revenue system.
                        </p>
                        <div className="section-actions section-actions--center">
                            <ButtonLink href="#diagnostic-app">
                                TAKE THE REVENUE DIAGNOSTIC
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="media-band media-band--tight">
                <div className="media-band__bleed">
                    <VideoFeature
                        src={siteMedia.diagnostic.landingVideo.src}
                        poster={siteMedia.diagnostic.landingVideo.poster}
                        title={siteMedia.diagnostic.landingVideo.title}
                        bleed
                    />
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            What this does
                        </h2>
                        <ul className={styles.detailList}>
                            {whatThisDoes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={`content-section ${styles.appSection}`} id="diagnostic-app">
                <div className="shell">
                    <div className={styles.app}>
                        <iframe
                            src={diagnosticAppEmbedHref}
                            title="SellXSell Revenue Diagnostic"
                            className={styles.frame}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className={`section-copy ${styles.center}`}>
                        <h2 className="section-title section-title--secondary">
                            You&apos;ll walk away with:
                        </h2>
                        <ul className={`${styles.detailList} ${styles.centeredList}`}>
                            {outputPromise.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={styles.ctaRow}>
                        <ButtonLink href={bookDiagnosticCtaHref}>BOOK A PRESSURE TEST</ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
