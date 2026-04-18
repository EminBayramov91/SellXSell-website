import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { homeSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Your Pipeline Isn’t Real",
    description: "Inspection-driven revenue operating system.",
};

export default function HomePage() {
    return <PageSections sections={homeSections} />;
}
