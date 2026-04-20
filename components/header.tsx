"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { runDiagnosticCtaHref } from "@/lib/public-site-config";
import { siteMedia } from "@/lib/site-media";
import { siteRoutes } from "@/lib/site-routes";
import { ButtonLink } from "./button-link";
import styles from "./header.module.css";

const navItems = [
    { label: "Home", href: siteRoutes.home, matchers: [siteRoutes.home] },
    { label: "About", href: siteRoutes.about, matchers: [siteRoutes.about] },
    {
        label: "Approach",
        href: siteRoutes.meddic,
        matchers: [siteRoutes.meddic, "/approach", "/meddic-implementation"],
    },
    {
        label: "Advisory",
        href: siteRoutes.services,
        matchers: [siteRoutes.services, "/advisory", "/revenue-consulting-services"],
    },
    {
        label: "Speaking",
        href: siteRoutes.speaking,
        matchers: [siteRoutes.speaking, "/speaking"],
    },
    {
        label: "Downloads",
        href: siteRoutes.resources,
        matchers: [siteRoutes.resources, "/downloads", "/sales-playbooks-resources"],
    },
];

function isActive(pathname: string, matchers: string[]) {
    return matchers.some(
        (matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`),
    );
}

export function Header() {
    const pathname = usePathname();
    const [openPathname, setOpenPathname] = useState<string | null>(null);
    const isOpen = openPathname === pathname;

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        if (isOpen) {
            root.style.overflow = "hidden";
            body.style.overflow = "hidden";
        } else {
            root.style.overflow = "";
            body.style.overflow = "";
        }

        return () => {
            root.style.overflow = "";
            body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => {
        setOpenPathname(null);
    };

    const toggleMenu = () => {
        setOpenPathname((currentPath) => (currentPath === pathname ? null : pathname));
    };

    return (
        <header className={styles.header}>
            <div className={`shell ${styles.inner}`}>
                <Link href="/" className={styles.brand} onClick={closeMenu}>
                    <Image
                        src={siteMedia.branding.wordmark.src}
                        alt={siteMedia.branding.wordmark.alt}
                        width={siteMedia.branding.wordmark.width}
                        height={siteMedia.branding.wordmark.height}
                        className={styles.brandMark}
                        loading="eager"
                    />
                    <span className="sr-only">SellXSell</span>
                </Link>

                <nav className={styles.nav} aria-label="Primary">
                    {navItems.map((item) => {
                        const active = isActive(pathname, item.matchers);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`${styles.navLink}${
                                    active ? ` ${styles.navLinkActive}` : ""
                                }`}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.actions}>
                    <div className={styles.desktopCta}>
                        <ButtonLink href={runDiagnosticCtaHref}>
                            Run the Revenue Diagnostic
                        </ButtonLink>
                    </div>

                    <button
                        type="button"
                        className={`${styles.toggle}${isOpen ? ` ${styles.toggleOpen}` : ""}`}
                        aria-label={isOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className={styles.toggleBar} />
                        <span className={styles.toggleBar} />
                        <span className={styles.toggleBar} />
                    </button>
                </div>
            </div>

            <div
                className={`${styles.mobile}${isOpen ? ` ${styles.mobileOpen}` : ""}`}
                aria-hidden={!isOpen}
            >
                <div className={`shell ${styles.mobileInner}`}>
                    <nav className={styles.mobileNav} aria-label="Mobile Primary">
                        {navItems.map((item) => {
                            const active = isActive(pathname, item.matchers);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${styles.mobileLink}${
                                        active ? ` ${styles.mobileLinkActive}` : ""
                                    }`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className={styles.mobileActions}>
                        <ButtonLink href={runDiagnosticCtaHref} fullWidth onClick={closeMenu}>
                            Run the Revenue Diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
