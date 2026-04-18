import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { speakingSections } from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Speaking",
    description: "This is not motivation. This is exposure.",
};

export default function SpeakingPage() {
    return <PageSections sections={speakingSections} />;
}
