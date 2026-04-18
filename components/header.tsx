"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { bookDiagnosticCtaHref } from "@/lib/public-site-config";
import { ButtonLink } from "./button-link";

const navItems = [
    { label: "About", href: "/about" },
    { label: "Approach", href: "/approach" },
    { label: "Advisory", href: "/advisory" },
    { label: "Speaking", href: "/speaking" },
    { label: "Downloads", href: "/downloads" },
];

function isActive(pathname: string, href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
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
        <header className="header">
            <div className="shell header__inner">
                <Link href="/" className="header__brand" onClick={closeMenu}>
                    <span className="header__badge">SX</span>
                    <span>SellXSell</span>
                </Link>

                <nav className="header__nav" aria-label="Primary">
                    {navItems.map((item) => {
                        const active = isActive(pathname, item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`header__nav-link${active ? " is-active" : ""}`}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="header__actions">
                    <div className="header__desktop-cta">
                        <ButtonLink href={bookDiagnosticCtaHref}>Run Diagnostic</ButtonLink>
                    </div>

                    <button
                        type="button"
                        className={`header__toggle${isOpen ? " is-open" : ""}`}
                        aria-label={isOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="header__toggle-bar" />
                        <span className="header__toggle-bar" />
                        <span className="header__toggle-bar" />
                    </button>
                </div>
            </div>

            <div
                className={`header__mobile${isOpen ? " is-open" : ""}`}
                aria-hidden={!isOpen}
            >
                <div className="shell header__mobile-inner">
                    <nav className="header__mobile-nav" aria-label="Mobile Primary">
                        {navItems.map((item) => {
                            const active = isActive(pathname, item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`header__mobile-link${active ? " is-active" : ""}`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="header__mobile-actions">
                        <ButtonLink href={bookDiagnosticCtaHref} fullWidth onClick={closeMenu}>
                            Run Diagnostic
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </header>
    );
}
