import Image from "next/image";
import { siteMedia } from "@/lib/site-media";
import styles from "./trust-strip.module.css";

export function TrustStrip() {
    return (
        <section className={styles.root} aria-label="Trusted by leading revenue teams">
            <div className="shell">
                <div className={styles.frame}>
                    <Image
                        src={siteMedia.home.trustStrip.src}
                        alt={siteMedia.home.trustStrip.alt}
                        width={siteMedia.home.trustStrip.width}
                        height={siteMedia.home.trustStrip.height}
                        className={styles.image}
                        sizes="(max-width: 767px) 100vw, 1160px"
                    />
                </div>
            </div>
        </section>
    );
}
