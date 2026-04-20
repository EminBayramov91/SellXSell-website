import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { VideoFeature } from "@/components/video-feature";
import { speakingCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import styles from "./page.module.css";

const heroLines = [
    "Every room already knows something is off in the forecast.",
    "What most rooms do not have is language for the problem.",
    "This work gives them that language and shows them exactly where the system breaks.",
];

const audienceOutcomes = [
    "Give the room one language for pipeline reality.",
    "Expose where the forecast breaks.",
    "Make the tension legible across functions.",
];

const speakingTopics = [
    "Why forecasts get defended instead of inspected.",
    "Why false movement survives too long.",
    "Why leadership ends up negotiating with the number instead of trusting it.",
];

const formats = [
    "Keynote",
    "Executive offsite",
    "Leadership kickoff",
    "Revenue team event",
];

const insertedTopics = [
    "Fix Your Forecast",
    "Why Your Pipeline Is Lying",
    "MEDDIC as an Operating System",
];

const insertedFormats = ["Keynote", "Workshop", "Executive Session"];

export const metadata: Metadata = {
    title: "Revenue Keynote Speaker",
    description: "Keynote Speaker for Executive Revenue Teams.",
};

export default function RevenueKeynoteSpeakerPage() {
    return (
        <>
            <section className="media-band">
                <div className="shell">
                    <VideoFeature
                        src={siteMedia.speaking.reel.src}
                        poster={siteMedia.speaking.reel.poster}
                        title={siteMedia.speaking.reel.title}
                        caption="Speaker reel"
                    />
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy section-copy--hero">
                        <h1 className="section-title">
                            Keynote Speaker for Executive Revenue Teams
                        </h1>
                        <p className="section-subtitle">
                            Your audience does not need more energy. They need clarity.
                        </p>
                        <div className="section-body">
                            {heroLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>
                        <div className="section-actions">
                            <ButtonLink href={speakingCtaHref}>
                                BOOK A PRESSURE TEST
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className={styles.insertBlock}>
                        <h3>Topics</h3>
                        <ul className={styles.insertList}>
                            {insertedTopics.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className={styles.insertBlock}>
                        <h3>Formats</h3>
                        <ul className={styles.insertList}>
                            {insertedFormats.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Audience outcomes
                        </h2>
                        <ul className={styles.detailList}>
                            {audienceOutcomes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell">
                    <div className="section-copy">
                        <h2 className="section-title section-title--secondary">
                            Why pipeline lies.
                        </h2>
                        <p className="section-subtitle">
                            Because it exposes what they already know is broken.
                        </p>
                        <div className="section-body">
                            <p>
                                Your audience does not need generic sales advice. They need the
                                tension named clearly enough to act on it.
                            </p>
                        </div>
                        <ul className={styles.detailList}>
                            {speakingTopics.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={`content-section content-section--alt ${styles.formatsSection}`}>
                <div className="shell">
                    <div className={`section-copy ${styles.centered}`}>
                        <h2 className="section-title section-title--secondary">
                            Speaking formats
                        </h2>
                    </div>

                    <div className={styles.formatsGrid}>
                        {formats.map((item) => (
                            <div key={item} className={styles.formatCard}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--narrow">
                    <div className={`section-copy ${styles.centered}`}>
                        <h2 className="section-title section-title--secondary">
                            Expose the gap in the room before the quarter exposes it in the
                            number.
                        </h2>
                        <p className="section-subtitle">
                            For conference planners and leadership teams that want clarity, not
                            generic motivation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="content-section content-section--alt">
                <div className="shell shell--narrow">
                    <div className={styles.ctaRow}>
                        <ButtonLink href={speakingCtaHref}>BOOK A PRESSURE TEST</ButtonLink>
                    </div>
                </div>
            </section>
        </>
    );
}
