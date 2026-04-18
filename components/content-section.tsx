import { ButtonLink } from "./button-link";
import type { PageSection } from "@/lib/site-content";

type ContentSectionProps = PageSection & {
    headingLevel?: 1 | 2;
    altBackground?: boolean;
};

export function ContentSection({
                                   id,
                                   title,
                                   subtitle,
                                   body,
                                   ctas,
                                   headingLevel = 2,
                                   altBackground = false,
                               }: ContentSectionProps) {
    const HeadingTag = headingLevel === 1 ? "h1" : "h2";

    return (
        <section
            id={id}
            className={`content-section${altBackground ? " content-section--alt" : ""}`}
        >
            <div className="shell">
                <div
                    className={`section-copy${headingLevel === 1 ? " section-copy--hero" : ""}`}
                >
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
                                    key={`${id}-${cta.label}`}
                                    href={cta.href}
                                    variant={cta.variant}
                                >
                                    {cta.label}
                                </ButtonLink>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
