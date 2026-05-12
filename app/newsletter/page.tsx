import type { Metadata } from "next";
import styles from "./page.module.css";

const issueFormats = [
    {
        label: "The lie",
        title: "One thing that isn't true",
        text: "A metric, assumption, or process your revenue org treats as fact — that isn't. Named directly, no softening.",
    },
    {
        label: "The signal",
        title: "How to see it before it's too late",
        text: "The 2–3 specific indicators that reveal the problem before it costs you the quarter. Evidence, not intuition.",
    },
    {
        label: "The fix",
        title: "One action you can take this week",
        text: "Not a framework to implement over six months. One concrete move a revenue leader can make Monday morning.",
    },
    {
        label: "The diagnostic",
        title: "A question that exposes your pipeline",
        text: "A closing provocation that makes you run one deal through the system — and see what breaks.",
    },
];

const audience = [
    "CROs who are tired of being surprised at the end of the quarter",
    "VPs of Sales whose forecast calls feel more like therapy than inspection",
    "Revenue leaders who know pipeline ≠ coverage but can't prove it yet",
    "Executives who want one definition of reality across Sales, Finance, and Product",
    "Anyone whose Q4 has ever closed at 60% of what the pipeline said in September",
];

const beehiivEmbedUrl = process.env.NEXT_PUBLIC_BEEHIIV_EMBED_URL?.trim();

export const metadata: Metadata = {
    title: {
        absolute: "The 91% — For the 9% who want the truth",
    },
    description:
        "91% of deals in your pipeline aren't real. The 91% is a weekly newsletter for revenue leaders who want the truth.",
    alternates: {
        canonical: "/newsletter",
    },
    openGraph: {
        title: "The 91% — For the 9% who want the truth",
        description:
            "91% of deals in your pipeline aren't real. The 91% is a weekly newsletter for revenue leaders who want the truth.",
        url: "/newsletter",
        images: ["/og-sellxsell.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "The 91% — For the 9% who want the truth",
        description:
            "91% of deals in your pipeline aren't real. The 91% is a weekly newsletter for revenue leaders who want the truth.",
        images: ["/og-sellxsell.png"],
    },
};

function NewsletterSignup() {
    if (beehiivEmbedUrl) {
        return (
            <iframe
                src={beehiivEmbedUrl}
                title="Subscribe to The 91% newsletter"
                className={styles.embed}
                loading="lazy"
            />
        );
    }

    return (
        <div className={styles.fallbackSignup}>
            <a href="mailto:shelley@sellxsell.com?subject=Subscribe%20me%20to%20The%2091%25">
                your@email.com
            </a>
            <span>Join the 9%</span>
        </div>
    );
}

export default function NewsletterPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className="shell">
                    <div className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <p className={styles.kicker}>
                                A weekly newsletter by Shelley Dunagan
                            </p>
                            <h1 className={styles.title}>
                                <span>YOUR</span>
                                <span>PIPELINE</span>
                                <span>IS LYING.</span>
                            </h1>
                            <p className={styles.subtitle}>
                                <strong>91% of deals in your pipeline aren&apos;t real.</strong>{" "}
                                They just haven&apos;t been inspected yet. Every week, one
                                lie your forecast is telling you — and what to do before
                                it costs you the quarter.
                            </p>
                            <NewsletterSignup />
                            <p className={styles.note}>
                                Free. Weekly. No fluff. Unsubscribe anytime.
                            </p>
                        </div>
                        <div className={styles.heroNumber} aria-hidden="true">
                            91%
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.statsBand} aria-label="SellXSell proof points">
                <div className="shell">
                    <div className={styles.statsGrid}>
                        <div>
                            <strong>$100M+</strong>
                            <span>ARR scaled across enterprise</span>
                        </div>
                        <div>
                            <strong>315%</strong>
                            <span>Increase in qualified pipeline</span>
                        </div>
                        <div>
                            <strong>77%</strong>
                            <span>Reduction in wasted revenue motion</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy">
                        <p className={styles.kicker}>What&apos;s inside</p>
                    </div>

                    <article className={styles.issuePreview}>
                        <p>Issue 01 — launching soon</p>
                        <h2>Your pipeline is lying to you</h2>
                        <span>
                            91% of deals in your pipeline are fiction. Here&apos;s how to
                            tell which ones before they cost you Q4.
                        </span>
                    </article>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <p className={styles.kicker}>Every issue</p>
                    </div>

                    <div className={styles.formatGrid}>
                        {issueFormats.map((item) => (
                            <article key={item.label} className={styles.formatItem}>
                                <span>{item.label}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className={styles.audienceGrid}>
                        <div className="section-copy">
                            <h2 className="section-title section-title--secondary">
                                FOR THE 9% WHO WANT THE TRUTH.
                            </h2>
                            <p className="section-subtitle">
                                Most revenue content tells you what you want to hear.
                                The 91% is for the leaders who already know something is
                                wrong — and want the system to fix it.
                            </p>
                        </div>
                        <ul className={styles.audienceList}>
                            {audience.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.close}>
                <div className="shell shell--narrow">
                    <h2>
                        Stop guessing.
                        <br />
                        Start inspecting.
                    </h2>
                    <p>Free. Weekly. For the 9% who want the truth.</p>
                    <div className={styles.closeActions}>
                        <NewsletterSignup />
                    </div>
                </div>
            </section>
        </>
    );
}
