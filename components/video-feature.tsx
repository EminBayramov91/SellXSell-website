"use client";

import { useRef, useState } from "react";

type VideoFeatureProps = {
    src: string;
    poster: string;
    title: string;
    caption?: string;
};

export function VideoFeature({
    src,
    poster,
    title,
    caption,
}: VideoFeatureProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = async () => {
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

    return (
        <div className="video-feature">
            <div className="video-feature__frame">
                <video
                    ref={videoRef}
                    className="video-feature__media"
                    poster={poster}
                    preload="metadata"
                    playsInline
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src={src} type="video/mp4" />
                </video>

                {!isPlaying ? (
                    <button
                        type="button"
                        className="video-feature__play"
                        aria-label={`Play ${title}`}
                        onClick={handlePlay}
                    >
                        <span className="video-feature__play-icon" aria-hidden="true" />
                    </button>
                ) : null}
            </div>

            {caption ? <p className="video-feature__caption">{caption}</p> : null}
        </div>
    );
}
