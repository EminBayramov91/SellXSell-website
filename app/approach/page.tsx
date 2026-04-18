import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { approachSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Approach",
    description: "This is not a framework. This is the system.",
};

export default function ApproachPage() {
    return <PageSections sections={approachSections} />;
}
