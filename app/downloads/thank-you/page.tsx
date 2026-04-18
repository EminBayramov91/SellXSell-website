import type { Metadata } from "next";
import {
    bookDiagnosticCtaHref,
    paidDiagnosticCtaHref,
} from "@/lib/public-site-config";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
    title: "Your Download Is On The Way",
    description: "Check your email.",
};

export default function DownloadsThankYouPage() {
    return (
        <section className="content-section">
            <div className="gate-wrap">
                <div className="gate-card">
                    <p className="gate-kicker">SellXSell</p>
                    <h1 className="gate-title">Your Download Is On The Way</h1>
                    <p className="gate-text">Check your email</p>

                    <div className="thankyou-actions">
                        <ButtonLink href={bookDiagnosticCtaHref}>Book Diagnostic</ButtonLink>
                        <ButtonLink href={paidDiagnosticCtaHref} variant="secondary">
                            Run Paid Diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
