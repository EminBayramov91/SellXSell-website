import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { bookDiagnosticCtaHref } from "@/lib/public-site-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Thank You",
    description: "Check your email - your playbook is on the way.",
};

export default function ThankYouPlaybookPage() {
    return (
        <section className="content-section">
            <div className="shell shell--narrow">
                <div className={`section-copy section-copy--hero ${styles.copy}`}>
                    <h1 className="section-title">
                        Check your email {"\u2014"} your playbook is on the way.
                    </h1>
                    <p className="section-subtitle">
                        If you don&apos;t see it in 1{"\u2013"}2 minutes, check spam.
                    </p>
                    <p className={styles.prompt}>Want to pressure test your pipeline?</p>
                    <div className={styles.actions}>
                        <ButtonLink href={bookDiagnosticCtaHref}>
                            Book a 20-minute revenue diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
