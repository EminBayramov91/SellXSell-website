import { ContentSection } from "./content-section";
import type { PageSection } from "../lib/site-content";

type PageSectionsProps = {
    sections: PageSection[];
};

export function PageSections({ sections }: PageSectionsProps) {
    return (
        <>
            {sections.map((section, index) => (
                <ContentSection
                    key={section.id}
                    {...section}
                    headingLevel={index === 0 ? 1 : 2}
                    altBackground={index !== 0 && index % 2 === 1}
                />
            ))}
        </>
    );
}
