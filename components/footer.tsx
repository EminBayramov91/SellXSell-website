import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./button-link";
import { runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import { siteRoutes } from "@/lib/site-routes";
import styles from "./footer.module.css";

const footerLinks = [
    { label: "Pricing", href: siteRoutes.pricing },
    { label: "Newsletter", href: siteRoutes.newsletter },
    { label: "Advisory", href: siteRoutes.services },
    { label: "App", href: "https://app.sellxsell.com" },
];

export function Footer() {
    return (
        <footer className={styles.footer} id="footer-cta">
            <div className={`shell ${styles.inner}`}>
                <div className={styles.brand}>
                    <Image
                        src={siteMedia.branding.wordmark.src}
                        alt={siteMedia.branding.wordmark.alt}
                        width={siteMedia.branding.wordmark.width}
                        height={siteMedia.branding.wordmark.height}
                        className={styles.brandMark}
                    />
                </div>

                <div className={styles.contactBlock} aria-label="Contact information">
                    <span className={styles.contactLabel}>Contact</span>
                    <nav className={styles.footerNav} aria-label="Footer">
                        {footerLinks.map((item) => (
                            <Link key={item.href} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className={styles.contactRows}>
                        <div className={styles.contactRow}>
                            <span className={styles.contactKey}>Phone:</span>
                            <a href="tel:+19784347008" className={styles.contactLink}>
                                (978) 434-7008
                            </a>
                        </div>
                        <div className={styles.contactRow}>
                            <span className={styles.contactKey}>Email:</span>
                            <a
                                href="mailto:shelley@sellxsell.com"
                                className={styles.contactLink}
                            >
                                shelley@sellxsell.com
                            </a>
                        </div>
                    </div>
                </div>

                <ButtonLink href={runDiagnosticCtaHref}>
                    TAKE THE REVENUE DIAGNOSTIC
                </ButtonLink>
            </div>
        </footer>
    );
}
