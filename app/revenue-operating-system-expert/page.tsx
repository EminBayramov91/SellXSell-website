import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import {
    bookDiagnosticCtaHref,
    runDiagnosticCtaHref,
} from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const heroLines = [
    "Deals move without validation.",
    "Functions use different definitions of qualified.",
    "Forecasts get defended instead of inspected.",
    "That is why revenue breaks.",
];

const proofItems = [
    "$100M+ ARR scaled",
    "315% increase in qualified pipeline",
    "77% reduction in wasted revenue",
    "One defensible number",
];

const patternLines = [
    "Pipeline looks full.",
    "Forecast sounds confident.",
    "Leadership wants to believe the number.",
    "Then reality shows up at quarter end.",
    "This work exists because the same failure repeats unless the operating system changes.",
];

const authorityLines = [
    "This system was built in live revenue environments, not on slides.",
    "It was shaped inside executive rooms where the number gets challenged.",
    "It was designed to remove narrative and replace it with evidence.",
];

const operatingSystemLines = [
    "It creates one language across Sales, Finance, Marketing, and Product.",
    "It defines what belongs, what moves, and what is real.",
    "It gives leadership one number that can be defended.",
];

const truthLines = [
    "The longer a bad deal stays active, the more it poisons the forecast.",
    "The longer teams use different definitions, the weaker the number becomes.",
    "The cost of waiting is not theoretical. It shows up in missed revenue.",
];

export const metadata: Metadata = {
    title: "Revenue Operating System Expert",
    description:
        "Most revenue teams do not have a pipeline problem. They have a system problem.",
};

export default function RevenueOperatingSystemExpertPage() {
    return (
        <>
            <section className="media-band media-band--tight">
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

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy section-copy--hero">
                        <h1 className="section-title">
                            Most revenue teams do not have a pipeline problem. They have a
                            system problem.
                        </h1>
                        <div className="section-body">
                            <p>{heroLines[0]}</p>
                        </div>

                        <div className={styles.heroInsert}>
                            <div className={styles.heroInsertBlock}>
                                <h3>Built, Not Theorized</h3>
                                <ul className={styles.heroInsertList}>
                                    <li>Built from scaling $0 to $100M+ revenue systems</li>
                                    <li>Used by CFOs, CROs, executive teams</li>
                                </ul>
                            </div>

                            <div className={styles.heroInsertBlock}>
                                <h3>Shelley Dunagan</h3>
                                <ul className={styles.heroInsertList}>
                                    <li>Operator</li>
                                    <li>Built revenue systems</li>
                                    <li>Focus: inspection</li>
                                </ul>
                            </div>
                        </div>

                        <div className="section-body">
                            {heroLines.slice(1).map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>

                        <div className={styles.proofSection}>
                            <div className={styles.accentRule} />
                            <div className={styles.proofStrip}>
                                {proofItems.map((item) => (
                                    <div key={item} className={styles.proofItem}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section-actions">
                            <ButtonLink href={runDiagnosticCtaHref}>
                                TAKE THE REVENUE DIAGNOSTIC
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <div className={styles.lockup}>
                            <span>The pattern does not change.</span>
                            <span>Only the language around it does.</span>
                        </div>
                        <div className="section-body">
                            {patternLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className={`shell media-split ${styles.authoritySplit}`}>
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            If your forecast requires explanation, it&apos;s already broken.
                        </h2>
                        <div className="section-body">
                            {authorityLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <div className="section-actions">
                            <ButtonLink href={bookDiagnosticCtaHref} variant="secondary">
                                BOOK A PRESSURE TEST
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="media-panel media-panel--portrait">
                        <Image
                            src={siteMedia.about.speakingAuthority.src}
                            alt={siteMedia.about.speakingAuthority.alt}
                            fill
                            sizes="(max-width: 900px) 100vw, 55vw"
                            className="media-panel__image media-panel__image--authority"
                        />
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Not sales training. Not coaching. Not another layer of complexity.
                        </h2>
                        <p className="section-subtitle">This is a Revenue Operating System.</p>
                        <div className="section-body">
                            {operatingSystemLines.map((line) => (
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
                            Most teams do not need more effort. They need the truth faster.
                        </h2>
                        <div className="section-body">
                            {truthLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <p className={styles.closeLine}>
                            Bad deals do not poison the forecast because of effort. They stay
                            active because no one removes them fast enough.
                        </p>
                        <div className={styles.footerAction}>
                            <ButtonLink href={runDiagnosticCtaHref}>
                                TAKE THE REVENUE DIAGNOSTIC
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
