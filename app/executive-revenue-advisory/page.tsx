import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { advisoryCtaHref, runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const serviceCards = [
    {
        title: "Revenue Diagnostic",
        text: "One live deal inspected end to end.",
    },
    {
        title: "Executive Advisory",
        text: "Leadership-level forecast and pipeline inspection.",
    },
    {
        title: "Operating System Installation",
        text: "ICP / IBC / MEDDIC installed as one inspection language.",
    },
];

const executionSteps = [
    {
        title: "Diagnose",
        text: "Expose where the number breaks before the quarter does.",
    },
    {
        title: "Align",
        text: "Create one operating definition across leadership functions.",
    },
    {
        title: "Install",
        text: "Operationalize ICP, IBC, and MEDDIC as one system.",
    },
    {
        title: "Inspect",
        text: "Run every live deal through the same inspection language.",
    },
];

const heroLines = [
    "Deals move without being validated.",
    "Forecasts get built on assumptions.",
    "Leadership gets a number they cannot defend.",
    "This fixes that.",
];

const operatingSystemLines = [
    "It defines what belongs in the pipeline.",
    "It defines when a deal actually moves.",
    "It defines whether the opportunity is real.",
    "And it forces every function to operate from the same definition.",
];

const installationLines = [
    "ICP asks whether the deal belongs.",
    "IBC asks whether it is actually moving.",
    "MEDDIC asks whether it is real.",
    "If it passes, it stays. If it does not, it comes out.",
];

const outcomeLines = [
    "Leadership sees what is real sooner.",
    "Risk gets identified before it hits the quarter.",
    "Teams operate from one language instead of four competing narratives.",
    "Confidence returns because the number finally has integrity.",
];

const closeLines = [
    "This is not about motivation.",
    "This is about exposure.",
    "You will know exactly where the system is weak in one session.",
];

const finalOutcomes = [
    "Cleaner pipeline",
    "Faster exposure",
    "Defensible forecast",
];

export const metadata: Metadata = {
    title: "Executive Revenue Advisory",
    description: "Executive Revenue Advisory Services.",
};

export default function ExecutiveRevenueAdvisoryPage() {
    return (
        <>
            <section className="media-band media-band--tight">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--standard">
                        <Image
                            src={siteMedia.advisory.executivePanel.src}
                            alt={siteMedia.advisory.executivePanel.alt}
                            fill
                            priority
                            sizes="100vw"
                            className="media-band__image"
                        />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy section-copy--hero">
                        <h1 className="section-title">Executive Revenue Advisory Services</h1>
                        <p className="section-subtitle">
                            Most revenue teams do not have a pipeline problem. They have a
                            reality problem.
                        </p>
                        <div className="section-body">
                            {heroLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <div className="section-actions">
                            <ButtonLink href={advisoryCtaHref}>
                                Book Executive Advisory
                            </ButtonLink>
                            <ButtonLink href={runDiagnosticCtaHref} variant="secondary">
                                Run the Revenue Diagnostic
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className={styles.servicesGrid}>
                        {serviceCards.map((card) => (
                            <article key={card.title} className={styles.serviceCard}>
                                <h2 className={styles.serviceCardTitle}>{card.title}</h2>
                                <p className={styles.serviceCardText}>{card.text}</p>
                            </article>
                        ))}
                    </div>

                    <div className={styles.stepGrid}>
                        {executionSteps.map((step) => (
                            <article key={step.title} className={styles.stepCard}>
                                <h3 className={styles.stepCardTitle}>{step.title}</h3>
                                <p className={styles.stepCardText}>{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Not coaching. Not training. Not another framework.
                        </h2>
                        <p className="section-subtitle">
                            This is a Revenue Operating System installed across leadership.
                        </p>
                        <div className="section-body">
                            {operatingSystemLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            What the advisory engagement installs.
                        </h2>
                        <div className="section-body">
                            {installationLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Before: inflated pipeline. After: inspectable pipeline:
                        </h2>
                        <p className="section-subtitle">
                            Before: optimistic forecast. After: defensible forecast.
                        </p>
                        <div className="section-body">
                            {outcomeLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Bring one deal. Run it through the system.
                        </h2>
                        <p className="section-subtitle">
                            See what holds up. Most pipelines break under inspection.
                        </p>
                        <div className="section-body">
                            {closeLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>

                    <div className={styles.outcomesStrip}>
                        {finalOutcomes.map((item) => (
                            <div key={item} className={styles.outcomeChip}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaRow}>
                        <ButtonLink href={advisoryCtaHref}>
                            Book Executive Advisory
                        </ButtonLink>
                        <ButtonLink href={runDiagnosticCtaHref} variant="secondary">
                            Run the Revenue Diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
