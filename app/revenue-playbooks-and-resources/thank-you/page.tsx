import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DownloadButton } from "@/components/download-button";
import {
    bookDiagnosticCtaHref,
    paidDiagnosticCtaHref,
} from "@/lib/public-site-config";
import { ButtonLink } from "@/components/button-link";
import { getDownloadAsset } from "@/lib/site-content";
import { getDownloadAssetFileHref } from "@/lib/server-config";

export const metadata: Metadata = {
    title: "Your Download Is On The Way",
    description: "Check your email.",
};

type DownloadsThankYouPageProps = {
    searchParams: Promise<{
        asset?: string;
    }>;
};

export default async function DownloadsThankYouPage({
    searchParams,
}: DownloadsThankYouPageProps) {
    const { asset } = await searchParams;
    const currentAsset = asset ? getDownloadAsset(asset) : undefined;

    if (currentAsset?.slug === "playbook") {
        redirect("/thank-you-playbook");
    }

    const downloadHref = currentAsset
        ? getDownloadAssetFileHref(currentAsset.slug)
        : undefined;
    const canAutoStartDownload = Boolean(downloadHref?.startsWith("/"));

    return (
        <section className="content-section">
            <div className="gate-wrap">
                <div className="gate-card">
                    <p className="gate-kicker">SellXSell</p>
                    <h1 className="gate-title">
                        {downloadHref ? "Your Download Is Ready" : "Your Download Is On The Way"}
                    </h1>
                    <p className="gate-text">
                        {downloadHref && currentAsset
                            ? `Your ${currentAsset.label} is ready below.`
                            : "Check your email"}
                    </p>

                    <div className="thankyou-actions">
                        {downloadHref ? (
                            <DownloadButton
                                href={downloadHref}
                                autoStart={canAutoStartDownload}
                            >
                                DOWNLOAD PLAYBOOK
                            </DownloadButton>
                        ) : null}

                        <ButtonLink href={bookDiagnosticCtaHref}>
                            BOOK A PRESSURE TEST
                        </ButtonLink>
                        <ButtonLink href={paidDiagnosticCtaHref} variant="secondary">
                            TAKE THE REVENUE DIAGNOSTIC
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
