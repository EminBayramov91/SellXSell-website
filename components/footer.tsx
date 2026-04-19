"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ButtonLink } from "./button-link";
import { runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import { siteRoutes } from "@/lib/site-routes";
import styles from "./footer.module.css";

export function Footer() {
    const pathname = usePathname();
    const isDiagnosticPage =
        pathname === siteRoutes.diagnostic ||
        pathname.startsWith(`${siteRoutes.diagnostic}/`);

    if (isDiagnosticPage) {
        return null;
    }

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
                <ButtonLink href={runDiagnosticCtaHref}>
                    Run the Revenue Diagnostic
                </ButtonLink>
            </div>
        </footer>
    );
}
