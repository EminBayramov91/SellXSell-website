import Image from "next/image";
import { siteMedia } from "@/lib/site-media";

export function TrustStrip() {
    return (
        <section className="trust-strip" aria-label="Trusted by leading revenue teams">
            <div className="shell">
                <div className="trust-strip__frame">
                    <Image
                        src={siteMedia.home.trustStrip.src}
                        alt={siteMedia.home.trustStrip.alt}
                        width={siteMedia.home.trustStrip.width}
                        height={siteMedia.home.trustStrip.height}
                        className="trust-strip__image"
                        sizes="(max-width: 767px) 100vw, 1160px"
                    />
                </div>
            </div>
        </section>
    );
}
