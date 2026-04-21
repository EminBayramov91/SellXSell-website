import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { bookDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteRoutes } from "@/lib/site-routes";
import styles from "./page.module.css";

const resourceCards = [
    {
        id: "playbook",
        title: "Playbook",
        subtitle: "Turn language into operating behavior.",
        body: [
            "Run one deal. See what breaks.",
            "The playbook turns language into operating behavior.",
            "This is where the system stops being conceptual and becomes executable.",
            "Use it to align inspection language across teams.",
        ],
        button: "DOWNLOAD PLAYBOOK",
    },
    {
        id: "checklist",
        title: "Checklist",
        subtitle: "Expose where the pipeline breaks before the forecast call.",
        body: [
            "Run one deal. See what breaks.",
            "This is where optimism meets evidence.",
            "Use it before forecast calls.",
            "Use it before a bad number becomes a public problem.",
        ],
        button: "DOWNLOAD PLAYBOOK",
    },
    {
        id: "system",
        title: "System",
        subtitle: "See how ICP and MEDDIC work as one operating system.",
        body: [
            "Run one deal. See what breaks.",
            "ICP defines what belongs in the pipeline.",
            "MEDDIC validates whether the deal is real.",
        ],
        button: "DOWNLOAD PLAYBOOK",
    },
];

const systemLines = [
    "ICP defines what belongs in the pipeline.",
    "MEDDIC validates whether the deal is real.",
    "If all three do not hold, the opportunity does not count.",
];

export const metadata: Metadata = {
    title: "Revenue Playbooks and Resources",
    description: "Revenue Operating System Resources.",
};

export default function RevenuePlaybooksAndResourcesPage() {
    return (
        <>
            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className={styles.copy}>
                        <h1 className="section-title">Revenue Operating System Resources</h1>
                        <p className="section-subtitle">
                            Download it. Apply it. See what holds.
                        </p>
                        <div className="section-body">
                            <p>
                                Every asset exists to remove guesswork and force alignment.
                            </p>
                            <p>No theory for theory&apos;s sake.</p>
                            <p>Only tools that push the system into real operating behavior.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className={styles.stack}>
                        {resourceCards.map((card) => (
                            <article key={card.id} className={styles.card}>
                                <h2 className={styles.cardTitle}>{card.title}</h2>
                                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                                <div className={styles.cardBody}>
                                    {card.body.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                                <div className={styles.cardActions}>
                                    <ButtonLink href={`${siteRoutes.resources}/${card.id}`}>
                                        {card.button}
                                    </ButtonLink>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--downloads">
                    <div className={styles.copy}>
                        <h2 className="section-title section-title--secondary">
                            ICP. MEDDIC.
                        </h2>
                        <p className="section-subtitle">
                            Two layers. One operating system. Zero interpretation.
                        </p>
                        <div className="section-body">
                            {systemLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className={styles.band}>
                        <div className={styles.bandCopy}>
                            <h2 className="section-title section-title--secondary">
                                Need this installed across leadership, not just downloaded?
                            </h2>
                        </div>
                        <ButtonLink href={bookDiagnosticCtaHref} variant="secondary">
                            BOOK A PRESSURE TEST
                        </ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
