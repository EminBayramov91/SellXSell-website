import Script from "next/script";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { TrustStrip } from "@/components/trust-strip";
import { VideoFeature } from "@/components/video-feature";
import { advisoryCtaHref, runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const heroBullets = [
    "Run one deal through the system",
    "See what’s real vs assumed",
    "Get a score + executive actions",
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
                                TAKE THE REVENUE DIAGNOSTIC
                            </ButtonLink>
                        </div>
                        <ul className={styles.heroList}>
                            {heroBullets.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
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
                <div className={styles.videoPrompt}>
                    <p>If this sounds familiar, don’t guess.</p>
                    <ButtonLink href={runDiagnosticCtaHref}>
                        TAKE THE REVENUE DIAGNOSTIC
                    </ButtonLink>
                </div>
            </section>

            <TrustStrip />

            <section className="content-section">
                <div className="shell">
                    <div className={styles.accentRule} />
                    <div className={styles.proofKicker}>Built from scaling $100M+ in ARR.</div>
                    <div className={styles.proofStrip}>
                        <div className={styles.proofItem}>
                            <span className={styles.metricNumber}>
                                <span className="counter">100</span>M+
                            </span>
                            <span className={styles.metricLabel}>ARR SCALED</span>
                        </div>
                        <div className={styles.proofItem}>
                            <span className={styles.metricNumber}>
                                <span className="counter">315</span>%
                            </span>
                            <span className={styles.metricLabel}>
                                INCREASE IN QUALIFIED PIPELINE
                            </span>
                        </div>
                        <div className={styles.proofItem}>
                            <span className={styles.metricNumber}>
                                <span className="counter">77</span>%
                            </span>
                            <span className={styles.metricLabel}>REDUCTION IN WASTED REVENUE</span>
                        </div>
                    </div>
                    <p className={styles.metricNote}>
                        One defensible number instead of competing stories.
                    </p>
                </div>
            </section>

            <div className={styles.hookBlock}>
                <h2>Bring One Deal. See What Breaks.</h2>
                <ButtonLink href={runDiagnosticCtaHref}>
                    TAKE THE REVENUE DIAGNOSTIC
                </ButtonLink>
            </div>

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

                    <div className="bucket-grid">
                        <article className="bucket-card">
                            <h3 className="bucket-card__title">ICP</h3>
                            <p className="bucket-card__text">
                                Defines what belongs before optimism distorts the number.
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">MEDDIC</h3>
                            <p className="bucket-card__text">
                                Forces evidence into the forecast before leadership trusts it.
                            </p>
                        </article>

                        <article className="bucket-card">
                            <h3 className="bucket-card__title">Alignment</h3>
                            <p className="bucket-card__text">
                                Keeps leadership inspecting the same deal the same way.
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
                            TAKE THE REVENUE DIAGNOSTIC
                        </ButtonLink>
                        <ButtonLink href={advisoryCtaHref} variant="secondary">
                            BOOK A PRESSURE TEST
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <Script id="homepage-counters" strategy="afterInteractive">
                {`const counters = document.querySelectorAll('.counter');
const cards = document.querySelectorAll('.${styles.proofItem}');
const counterObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const counter = entry.target;
const number = parseInt(counter.innerText, 10);
let count = 0;
const increment = number / 60;
function update() {
if (count < number) {
count += increment;
counter.innerText = Math.floor(count);
requestAnimationFrame(update);
} else {
counter.innerText = number;
}
}
update();
counterObserver.unobserve(counter);
}
});
}, { threshold: 0.5 });
const cardObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('${styles.proofItemVisible}');
cardObserver.unobserve(entry.target);
}
});
}, { threshold: 0.35 });
counters.forEach(counter => counterObserver.observe(counter));
cards.forEach(card => cardObserver.observe(card));`}
            </Script>
        </>
    );
}
