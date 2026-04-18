import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { diagnosticSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Sales Pipeline Diagnostic Tool for B2B Teams",
    description: "Run one deal through the system and see what breaks.",
};

export default function SalesPipelineDiagnosticPage() {
    const sections = [
        {
            ...diagnosticSections[0],
            title: "Sales Pipeline Diagnostic Tool",
        },
        ...diagnosticSections.slice(1),
    ];

    return <PageSections sections={sections} />;
}
