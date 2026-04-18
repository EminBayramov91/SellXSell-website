import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { diagnosticSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Fix Your Sales Pipeline | Free Diagnostic for B2B Teams",
    description: "Free diagnostic for B2B teams.",
};

export default function SalesPipelineAuditPage() {
    const sections = [
        {
            ...diagnosticSections[0],
            title: "Fix Your Sales Pipeline",
            subtitle: "Free diagnostic for B2B teams.",
        },
        ...diagnosticSections.slice(1),
    ];

    return <PageSections sections={sections} />;
}
