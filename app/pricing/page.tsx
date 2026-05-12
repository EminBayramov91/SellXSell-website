import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import {
    advisoryCtaHref,
    runDiagnosticCtaHref,
} from "@/lib/public-site-config";
import { PricingFaq } from "./pricing-faq";
import styles from "./page.module.css";

const plans = [
    {
        name: "Free Diagnostic",
        price: "$0",
        cadence: "one deal",
        description:
            "A fast public entry point for inspecting one deal before the paid product launches.",
        features: [
            "13-question diagnostic",
            "Executive recommendations",
            "No credit card required",
        ],
        cta: "Run your first deal free",
        href: "https://app.sellxsell.com/diagnostic",
    },
    {
        name: "Growth",
        price: "$150/mo",
        cadence: "$1,800/yr",
        description:
            "For teams ready to inspect deals repeatedly and build a more defensible forecast.",
        features: [
            "24-question paid diagnostic",
            "Multi-deal dashboard",
            "Deal reports and re-scoring",
        ],
        cta: "Start Pipeline Intelligence",
        href: "#stripe-growth-pending",
        featured: true,
    },
    {
        name: "Scale",
        price: "$400/mo",
        cadence: "$4,800/yr",
        description:
            "For leadership teams that need multi-user inspection across managers and reps.",
        features: [
            "Team pipeline visibility",
            "Role-based access",
            "Pipeline export and score history",
        ],
        cta: "Start Scale",
        href: "#stripe-scale-pending",
    },
    {
        name: "Enterprise",
        price: "From $9,600/yr",
        cadence: "custom rollout",
        description:
            "For organizations that need deeper rollout support and CRM integration planning.",
        features: [
            "Executive implementation support",
            "Salesforce integration phase",
            "Custom rollout planning",
        ],
        cta: "Talk to us about Enterprise",
        href: advisoryCtaHref,
    },
    {
        name: "Full Advisory",
        price: "From $25,000",
        cadence: "90-day engagement",
        description:
            "For executive teams that need cross-functional execution across sales, finance, product, and leadership.",
        features: [
            "90-day advisory engagement",
            "Cross-functional pipeline execution",
            "Leadership operating cadence",
        ],
        cta: "Let's talk",
        href: advisoryCtaHref,
    },
];

const comparisonRows = [
    {
        feature: "Free diagnostic",
        free: "One deal",
        growth: "Included",
        scale: "Included",
        enterprise: "Included",
        advisory: "Used in review",
    },
    {
        feature: "24-question diagnostic",
        free: "-",
        growth: "Included",
        scale: "Included",
        enterprise: "Included",
        advisory: "Used in review",
    },
    {
        feature: "Multi-deal dashboard",
        free: "-",
        growth: "Included",
        scale: "Included",
        enterprise: "Included",
        advisory: "Optional",
    },
    {
        feature: "Team visibility",
        free: "-",
        growth: "-",
        scale: "Included",
        enterprise: "Included",
        advisory: "Leadership focus",
    },
    {
        feature: "Salesforce planning",
        free: "-",
        growth: "-",
        scale: "-",
        enterprise: "Available",
        advisory: "Available",
    },
    {
        feature: "Executive advisory",
        free: "-",
        growth: "-",
        scale: "-",
        enterprise: "Custom",
        advisory: "Included",
    },
];

const faqs = [
    {
        question: "Is the free diagnostic really free?",
        answer:
            "Yes. The free diagnostic is the public entry point for running one deal through the SellXSell inspection language.",
    },
    {
        question: "When do Growth and Scale billing links go live?",
        answer:
            "Growth and Scale connect to Stripe Checkout in the Stripe billing milestone. Until then, the pricing page shows the product path without activating payment.",
    },
    {
        question: "What is Pipeline Intelligence?",
        answer:
            "Pipeline Intelligence is the paid product path: the 24-question diagnostic, multi-deal scoring, deal reports, and dashboard views.",
    },
    {
        question: "Who is Scale for?",
        answer:
            "Scale is for teams that need managers and leaders inspecting pipeline across multiple reps, roles, and deal owners.",
    },
    {
        question: "Does Enterprise include Salesforce?",
        answer:
            "Salesforce is planned as a separate integration phase and should be scoped after the core product is stable.",
    },
    {
        question: "What is Full Advisory?",
        answer:
            "Full Advisory is a 90-day cross-functional engagement for teams that need execution support across sales, finance, product, and leadership.",
    },
    {
        question: "Can advisory start before the product is fully built?",
        answer:
            "Yes. Advisory can start from a pipeline review and use the diagnostic language before the full SaaS platform is complete.",
    },
];

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "SellXSell pricing for the revenue diagnostic, paid pipeline inspection, team dashboard, and executive advisory paths.",
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Pricing | SellXSell",
        description:
            "SellXSell pricing for the revenue diagnostic, paid pipeline inspection, team dashboard, and executive advisory paths.",
        url: "/pricing",
        images: ["/og-sellxsell.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing | SellXSell",
        description:
            "SellXSell pricing for the revenue diagnostic, paid pipeline inspection, team dashboard, and executive advisory paths.",
        images: ["/og-sellxsell.png"],
    },
};

export default function PricingPage() {
    return (
        <>
            <section className="content-section">
                <div className="shell">
                    <div className={`section-copy section-copy--hero ${styles.heroCopy}`}>
                        <p className={styles.kicker}>Pricing</p>
                        <h1 className="section-title">
                            Start with one deal. Scale to the whole pipeline.
                        </h1>
                        <p className="section-subtitle">
                            SellXSell is built in phases: free diagnostic, paid
                            diagnostic, dashboard, team access, billing, automation, and
                            CRM integration. The public launch foundation starts here.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className={styles.planGrid}>
                        {plans.map((plan) => (
                            <article
                                key={plan.name}
                                className={`${styles.planCard}${
                                    plan.featured ? ` ${styles.featured}` : ""
                                }`}
                            >
                                {plan.featured ? (
                                    <span className={styles.badge}>Core paid product</span>
                                ) : null}
                                <h2>{plan.name}</h2>
                                <div className={styles.priceRow}>
                                    <strong>{plan.price}</strong>
                                    <span>{plan.cadence}</span>
                                </div>
                                <p>{plan.description}</p>
                                <ul>
                                    {plan.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <ButtonLink
                                    href={plan.href}
                                    variant={plan.featured ? "primary" : "secondary"}
                                    fullWidth
                                >
                                    {plan.cta}
                                </ButtonLink>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className={styles.tableIntro}>
                        <p className={styles.kicker}>Compare</p>
                        <h2 className="section-title section-title--secondary">
                            Choose the level of inspection the pipeline needs.
                        </h2>
                    </div>
                    <div className={styles.tableWrap}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Free</th>
                                    <th>Growth</th>
                                    <th>Scale</th>
                                    <th>Enterprise</th>
                                    <th>Full Advisory</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.feature}>
                                        <th scope="row">{row.feature}</th>
                                        <td>{row.free}</td>
                                        <td>{row.growth}</td>
                                        <td>{row.scale}</td>
                                        <td>{row.enterprise}</td>
                                        <td>{row.advisory}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className={styles.faqGrid}>
                        <div className="section-copy">
                            <p className={styles.kicker}>FAQ</p>
                            <h2 className="section-title section-title--secondary">
                                The practical questions before billing goes live.
                            </h2>
                            <p className="section-subtitle">
                                The page is ready for public pricing. Stripe Checkout is
                                intentionally held for the later billing milestone.
                            </p>
                        </div>
                        <PricingFaq items={faqs} />
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={styles.bottomCta}>
                        <h2>Run one deal before the quarter does.</h2>
                        <p>
                            Start with the free diagnostic or book an advisory conversation
                            if the pipeline needs executive inspection now.
                        </p>
                        <div className={styles.bottomActions}>
                            <ButtonLink href={runDiagnosticCtaHref}>
                                Run the free diagnostic
                            </ButtonLink>
                            <ButtonLink href={advisoryCtaHref} variant="secondary">
                                Book an advisory conversation
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
