import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { VideoFeature } from "@/components/video-feature";
import { speakingSections } from "@/lib/site-content";
import { siteMedia } from "@/lib/site-media";

export const metadata: Metadata = {
    title: "Speaking",
    description: "This is not motivation. This is exposure.",
};

export default function SpeakingPage() {
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

            <PageSections sections={speakingSections} />
        </>
    );
}
