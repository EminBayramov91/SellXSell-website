import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { TrustStrip } from "@/components/trust-strip";
import { VideoFeature } from "@/components/video-feature";
import { advisoryCtaHref, runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const proofItems = [
    "315% increase in qualified pipeline.",
    "77% reduction in wasted revenue.",
    "One defensible number instead of competing stories.",
];

const forecastLines = [
    "Deals stay active because no one challenges them.",
    "Movement gets mistaken for progress.",
    "Anecdotes get mistaken for evidence.",
    "Forecast calls become explanation instead of inspection.",
    "That is why the number slips.",
];

const systemLines = [
    "ICP defines what belongs in the pipeline.",
    "IBC defines when a deal is actually moving.",
    "MEDDIC validates whether the deal is real.",
    "If all three do not hold, the opportunity does not count.",
];

const closeLines = [
    "You do not need another motivational talk.",
    "You need a system that makes the number defensible.",
    "Run one deal.",
    "See what holds.",
    "Most won't.",
];

export const metadata: Metadata = {
    title: "Revenue Operating System for Executive Revenue Leaders",
    description:
        "SellXSell installs the system that forces one definition of reality across Sales, Finance, Marketing, and Product.",
};

export default function HomePage() {
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

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={`section-copy section-copy--hero ${styles.center}`}>
                        <h1 className="section-title">
                            Revenue Operating System for Executive Revenue Leaders.
                        </h1>
                        <p className="section-subtitle">
                            Your pipeline isn&apos;t real. It just hasn&apos;t been inspected yet.
                        </p>
                        <div className="section-body">
                            <p>
                                SellXSell installs the system that forces one definition of
                                reality across Sales, Finance, Marketing, and Product.
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

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className={styles.bridgeCopy}>
                        <p className={styles.bridgeLine}>
                            Feels close {"\u2260"} will close.
                        </p>
                        <p className={styles.bridgeLine}>
                            Pipeline {"\u2260"} coverage. Forecast {"\u2260"} reality.
                        </p>
                    </div>
                </div>
            </section>

            <section className="media-band media-band--tight">
                <div className="media-band__bleed">
                    <VideoFeature
                        src={siteMedia.home.coreVideo.src}
                        poster={siteMedia.home.coreVideo.poster}
                        title={siteMedia.home.coreVideo.title}
                        bleed
                    />
                </div>
            </section>

            <TrustStrip />

            <section className="content-section">
                <div className="shell">
                    <div className={styles.accentRule} />
                    <div className={styles.proofKicker}>Built from scaling $100M+ in ARR.</div>
                    <div className={styles.proofStrip}>
                        <div className={styles.proofItem}>$100M+ ARR scaled</div>
                        {proofItems.map((item) => (
                            <div key={item} className={styles.proofItem}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Forecasts break when no one is inspecting the deal the same way.
                        </h2>
                        <p className="section-subtitle">
                            A pipeline without one definition of reality becomes narrative.
                        </p>
                        <div className="section-body">
                            {forecastLines.map((line) => (
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
                            ICP. IBC. MEDDIC.
                        </h2>
                        <p className="section-subtitle">
                            Three layers. One operating system. Zero interpretation.
                        </p>
                        <div className="section-body">
                            {systemLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bucket-grid">
                        <article className="bucket-card">
                            <h3 className="bucket-card__title">ICP</h3>
                            <p className="bucket-card__text">
                                Defines what belongs before optimism distorts the number.
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">IBC</h3>
                            <p className="bucket-card__text">
                                Separates actual deal movement from momentum language.
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">MEDDIC</h3>
                            <p className="bucket-card__text">
                                Forces evidence into the forecast before leadership trusts it.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className={`section-copy ${styles.center}`}>
                        <h2 className="section-title section-title--secondary">
                            Bring one deal. Watch what breaks.
                        </h2>
                        <p className="section-subtitle">
                            Most pipelines don&apos;t fail at the top. They fail under inspection.
                        </p>
                        <div className="section-body">
                            {closeLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={styles.ctaRow}>
                        <ButtonLink href={runDiagnosticCtaHref}>
                            Run the Revenue Diagnostic
                        </ButtonLink>
                        <ButtonLink href={advisoryCtaHref} variant="secondary">
                            Book Executive Advisory
                        </ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
