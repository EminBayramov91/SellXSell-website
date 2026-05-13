"use client";

import { useEffect, useRef } from "react";

const beehiivFormId = "a2e247b7-898a-4ac8-9bea-86d90ebfddb6";

type BeehiivSignupProps = {
    className?: string;
};

export function BeehiivSignup({ className }: BeehiivSignupProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        let observer: MutationObserver | undefined;

        if (!container) {
            return;
        }

        const markLoaded = () => {
            container.dataset.loaded = "true";
        };

        container.dataset.loaded = "false";

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
        script.dataset.beehiivForm = beehiivFormId;
        script.addEventListener("error", markLoaded);
        container.appendChild(script);

        observer = new MutationObserver(() => {
            const iframe = container.querySelector("iframe");

            if (iframe) {
                iframe.addEventListener("load", markLoaded, { once: true });
                markLoaded();
            }
        });

        observer.observe(container, { childList: true, subtree: true });

        return () => {
            observer?.disconnect();
            container.innerHTML = "";
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            aria-label="Subscribe to The 91% newsletter"
        >
            <div className="beehiiv-loading" aria-hidden="true">
                <span />
                <p>Loading signup form</p>
            </div>
        </div>
    );
}
