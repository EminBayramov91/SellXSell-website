import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import type { ButtonVariant } from "@/lib/site-content";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({
                               href,
                               children,
                               variant = "primary",
                               fullWidth = false,
                               onClick,
                           }: ButtonLinkProps) {
    const className = [
        "button",
        variant === "secondary" ? "button--secondary" : "",
        fullWidth ? "button--full" : "",
    ]
        .filter(Boolean)
        .join(" ");

    const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:");

    if (isExternal) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noreferrer noopener"
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className} onClick={onClick}>
            {children}
        </Link>
    );
}
