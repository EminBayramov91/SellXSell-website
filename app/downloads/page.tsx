import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import {
    downloadsCards,
    downloadsFinalSection,
    downloadsHero,
} from "@/lib/site-content";

export const metadata: Metadata = {
    title: "Downloads",
    description: "These are not resources. These are system entry points.",
};

export default function DownloadsPage() {
    return (
        <>
            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className="downloads-copy">
                        <h1 className="section-title">{downloadsHero.title}</h1>

                        {downloadsHero.subtitle ? (
                            <p className="section-subtitle">{downloadsHero.subtitle}</p>
                        ) : null}

                        <div className="section-body">
                            {downloadsHero.body.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>

                        <div className="section-actions section-actions--center">
                            {downloadsHero.ctas?.map((cta) => (
                                <ButtonLink
                                    key={cta.label}
                                    href={cta.href}
                                    variant={cta.variant}
                                >
                                    {cta.label}
                                </ButtonLink>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className="downloads-stack downloads-stack--uniform">
                        {downloadsCards.map((card) => (
                            <article key={card.id} className="download-card">
                                <h2 className="download-card__title">{card.title}</h2>

                                {card.subtitle ? (
                                    <p className="download-card__subtitle">{card.subtitle}</p>
                                ) : null}

                                <div className="download-card__body">
                                    {card.body.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>

                                <div className="download-card__actions">
                                    {card.ctas?.map((cta) => (
                                        <ButtonLink
                                            key={cta.label}
                                            href={cta.href}
                                            variant={cta.variant}
                                        >
                                            {cta.label}
                                        </ButtonLink>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-section">
                <div className="shell shell--downloads">
                    <div className="downloads-copy">
                        <h2 className="section-title section-title--secondary">
                            {downloadsFinalSection.title}
                        </h2>

                        {downloadsFinalSection.subtitle ? (
                            <p className="section-subtitle">{downloadsFinalSection.subtitle}</p>
                        ) : null}

                        <div className="section-body">
                            {downloadsFinalSection.body.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </div>

                        <div className="section-actions section-actions--stack downloads-final-actions">
                            {downloadsFinalSection.ctas?.map((cta) => (
                                <ButtonLink
                                    key={cta.label}
                                    href={cta.href}
                                    variant={cta.variant}
                                >
                                    {cta.label}
                                </ButtonLink>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
