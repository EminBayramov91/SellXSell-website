import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { DownloadButton } from "@/components/download-button";
import { bookDiagnosticCtaHref } from "@/lib/public-site-config";
import { getDownloadAssetFileHref } from "@/lib/server-config";
import styles from "./page.module.css";

const playbookHref = getDownloadAssetFileHref("playbook");
const canAutoStartDownload = Boolean(playbookHref?.startsWith("/"));

export const metadata: Metadata = {
    title: "Thank You",
    description: "Your playbook is ready to download.",
};

export default function ThankYouPlaybookPage() {
    return (
        <section className="content-section">
            <div className="shell shell--narrow">
                <div className={`section-copy section-copy--hero ${styles.copy}`}>
                    <h1 className="section-title">Your playbook is ready.</h1>
                    <p className="section-subtitle">
                        Your download should start automatically. If it doesn&apos;t, use the
                        button below.
                    </p>

                    {playbookHref ? (
                        <div className={styles.actions}>
                            <DownloadButton
                                href={playbookHref}
                                autoStart={canAutoStartDownload}
                            >
                                Download the Playbook
                            </DownloadButton>
                        </div>
                    ) : null}

                    <p className={styles.prompt}>Want to pressure test your pipeline?</p>
                    <div className={styles.secondaryActions}>
                        <ButtonLink href={bookDiagnosticCtaHref}>
                            Book a 20-minute revenue diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
