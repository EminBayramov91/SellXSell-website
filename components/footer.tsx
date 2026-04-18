import { ButtonLink } from "./button-link";
import { bookDiagnosticCtaHref } from "@/lib/public-site-config";

export function Footer() {
    return (
        <footer className="footer" id="footer-cta">
            <div className="shell footer__inner">
                <div className="footer__brand">SellXSell</div>
                <ButtonLink href={bookDiagnosticCtaHref}>Run Diagnostic</ButtonLink>
            </div>
        </footer>
    );
}
