import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { VideoFeature } from "@/components/video-feature";
import { speakingSections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = {
    title: "Sales Keynote Speaker for B2B Revenue Teams",
    description: "This is not motivation. This is exposure.",
};

export default function SalesKeynoteSpeakerPage() {
    const sections = [
        {
            ...speakingSections[0],
            title: "Sales Keynote Speaker for B2B Revenue Teams",
        },
        ...speakingSections.slice(1),
    ];

    return (
        <>
            <section className="media-band">
                <div className="shell">
                    <VideoFeature
                        src={siteMedia.speaking.reel.src}
                        poster={siteMedia.speaking.reel.poster}
                        title={siteMedia.speaking.reel.title}
                        caption="Speaker reel"
                    />
                </div>
            </section>

            <PageSections sections={sections} />
        </>
    );
}
