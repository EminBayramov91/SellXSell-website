import Image from "next/image";
import { ButtonLink } from "./button-link";
import { runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";

export function Footer() {
    return (
        <footer className="footer" id="footer-cta">
            <div className="shell footer__inner">
                <div className="footer__brand">
                    <Image
                        src={siteMedia.branding.wordmark.src}
                        alt={siteMedia.branding.wordmark.alt}
                        width={siteMedia.branding.wordmark.width}
                        height={siteMedia.branding.wordmark.height}
                        className="footer__brand-mark"
                    />
                </div>
                <ButtonLink href={runDiagnosticCtaHref}>Run Diagnostic</ButtonLink>
            </div>
        </footer>
    );
}
