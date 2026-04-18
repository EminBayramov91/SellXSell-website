import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { aboutSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "About",
    description: "This isn’t experience. This is pattern recognition.",
};

export default function AboutPage() {
    return <PageSections sections={aboutSections} />;
}
