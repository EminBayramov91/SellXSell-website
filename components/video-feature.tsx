"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./video-feature.module.css";

type VideoFeatureProps = {
    src: string;
    poster: string;
    title: string;
    caption?: string;
    bleed?: boolean;
};

export function VideoFeature({
    src,
    poster,
    title,
    caption,
    bleed = false,
}: VideoFeatureProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasLoadedVideo, setHasLoadedVideo] = useState(false);
    const [shouldAutoplayOnReady, setShouldAutoplayOnReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = async () => {
        if (!hasLoadedVideo) {
            setHasLoadedVideo(true);
            setShouldAutoplayOnReady(true);
            return;
        }

        if (!videoRef.current) {
            return;
        }

        videoRef.current.muted = false;

        try {
            await videoRef.current.play();
            setIsPlaying(true);
        } catch {
            setIsPlaying(false);
        }
    };

    const handleVideoReady = async () => {
        if (!shouldAutoplayOnReady || !videoRef.current) {
            return;
        }

        videoRef.current.muted = false;

        try {
            await videoRef.current.play();
            setIsPlaying(true);
            setShouldAutoplayOnReady(false);
        } catch {
            setIsPlaying(false);
        }
    };

    return (
        <div className={`${styles.root}${bleed ? ` ${styles.bleed}` : ""}`}>
            <div className={styles.frame}>
                {hasLoadedVideo ? (
                    <video
                        ref={videoRef}
                        className={styles.media}
                        poster={poster}
                        preload="metadata"
                        playsInline
                        controls
                        onCanPlay={handleVideoReady}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={poster}
                        alt=""
                        fill
                        loading={bleed ? "eager" : undefined}
                        sizes="100vw"
                        className={styles.media}
                    />
                )}

                {!isPlaying ? (
                    <button
                        type="button"
                        className={styles.play}
                        aria-label={`Play ${title}`}
                        onClick={handlePlay}
                    >
                        <span className={styles.icon} aria-hidden="true" />
                    </button>
                ) : null}
            </div>

            {caption ? <p className={styles.caption}>{caption}</p> : null}
        </div>
    );
}
