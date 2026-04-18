import { ButtonLink } from "./button-link";
import type { PageSection } from "@/lib/site-content";

type SectionCopyBlockProps = Pick<PageSection, "title" | "subtitle" | "body" | "ctas"> & {
    headingLevel?: 1 | 2;
    className?: string;
};

export function SectionCopyBlock({
    title,
    subtitle,
    body,
    ctas,
    headingLevel = 2,
    className,
}: SectionCopyBlockProps) {
    const HeadingTag = headingLevel === 1 ? "h1" : "h2";

    const wrapperClassName = [
        "section-copy",
        headingLevel === 1 ? "section-copy--hero" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={wrapperClassName}>
            <HeadingTag
                className={`section-title${
                    headingLevel === 2 ? " section-title--secondary" : ""
                }`}
            >
                {title}
            </HeadingTag>

            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}

            <div className="section-body">
                {body.map((line) => (
                    <p key={line}>{line}</p>
                ))}
            </div>

            {ctas?.length ? (
                <div className="section-actions">
                    {ctas.map((cta) => (
                        <ButtonLink
                            key={`${title}-${cta.label}`}
                            href={cta.href}
                            variant={cta.variant}
                        >
                            {cta.label}
                        </ButtonLink>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
