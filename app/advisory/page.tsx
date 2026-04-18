import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { advisorySections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Advisory",
    description: "This isn’t advisory. This is inspection.",
};

export default function AdvisoryPage() {
    return <PageSections sections={advisorySections} />;
}
