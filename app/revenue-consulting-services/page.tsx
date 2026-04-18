import type { Metadata } from "next";
import Image from "next/image";
import { PageSections } from "@/components/page-sections";
import { advisorySections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = {
    title: "Sales and Revenue Consulting Services",
    description: "This isn't advisory. This is inspection.",
};

export default function RevenueConsultingServicesPage() {
    const sections = [
        {
            ...advisorySections[0],
            title: "Sales and Revenue Consulting Services",
        },
        ...advisorySections.slice(1),
    ];

    return (
        <>
            <section className="media-band">
                <div className="media-band__bleed">
                    <div className="media-band__frame media-band__frame--standard">
                        <Image
                            src={siteMedia.advisory.executivePanel.src}
                            alt={siteMedia.advisory.executivePanel.alt}
                            fill
                            priority
                            sizes="100vw"
                            className="media-band__image"
                        />
                    </div>
                </div>
            </section>

            <PageSections sections={sections} />
        </>
    );
}
