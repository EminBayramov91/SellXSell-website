import type { PageSection } from "@/lib/site-content";
import { SectionCopyBlock } from "./section-copy-block";

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
    return (
        <section
            id={id}
            className={`content-section${altBackground ? " content-section--alt" : ""}`}
        >
            <div className="shell">
                <SectionCopyBlock
                    title={title}
                    subtitle={subtitle}
                    body={body}
                    ctas={ctas}
                    headingLevel={headingLevel}
                    className={id ? `section-copy--${id}` : undefined}
                />
            </div>
        </section>
    );
}
