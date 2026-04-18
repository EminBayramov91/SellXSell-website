import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { diagnosticSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Revenue Diagnostic",
    description: "Run one deal through the system and see what breaks.",
};

export default function DiagnosticPage() {
    return <PageSections sections={diagnosticSections} />;
}
