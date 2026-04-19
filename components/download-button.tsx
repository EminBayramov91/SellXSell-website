"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import styles from "./button.module.css";

type DownloadButtonProps = {
    href: string;
    children: ReactNode;
    autoStart?: boolean;
};

export function DownloadButton({
    href,
    children,
    autoStart = false,
}: DownloadButtonProps) {
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const hasStartedRef = useRef(false);
    const shouldUseDownloadAttr = href.startsWith("/");

    useEffect(() => {
        if (!autoStart || hasStartedRef.current || !anchorRef.current) {
            return;
        }

        hasStartedRef.current = true;
        anchorRef.current.click();
    }, [autoStart, href]);

    return (
        <a
            ref={anchorRef}
            href={href}
            className={styles.button}
            download={shouldUseDownloadAttr || undefined}
        >
            {children}
        </a>
    );
}
