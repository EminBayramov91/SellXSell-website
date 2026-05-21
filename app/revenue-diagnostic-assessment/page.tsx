import type { Metadata } from "next";
import Script from "next/script";
import { ButtonLink } from "@/components/button-link";
import { VideoFeature } from "@/components/video-feature";
import { diagnosticAppEmbedHref } from "@/lib/public-site-config";
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
    title: "Deal Truth Engine\u2122",
    description:
        "Expose the real reason your deals stall. Deal Truth Engine\u2122 surfaces MEDDIC gaps, forecast risk, and next steps in under 5 minutes.",
    openGraph: {
        title: "Deal Truth Engine\u2122 | SellXSell",
        description:
            "Run Deal Truth Engine\u2122 \u2014 identify pipeline gaps, MEDDIC breakdowns, and forecast risk in minutes.",
        url: "/revenue-diagnostic-assessment",
        siteName: "SellXSell",
        images: [
            {
                url: "/og-sellxsell.png",
                width: 1200,
                height: 630,
                alt: "SellXSell",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Deal Truth Engine\u2122 | SellXSell",
        description:
            "Run Deal Truth Engine\u2122 \u2014 identify pipeline gaps, MEDDIC breakdowns, and forecast risk in minutes.",
        images: ["/og-sellxsell.png"],
    },
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
                            Find Out Why Your Deals Aren&apos;t Closing
                        </h1>
                        <p className="section-subtitle">
                            In 3-5 minutes, get deal-level truth &mdash; not pipeline theater.
                        </p>
                        <div className="section-actions section-actions--center">
                            <ButtonLink href="#diagnostic-app">
                                RUN THE DEAL TRUTH ENGINE
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
                            What Deal Truth Engine Does
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
                            title="Deal Truth Engine"
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
                        <ButtonLink href="#diagnostic-app">RUN THE DEAL TRUTH ENGINE</ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
