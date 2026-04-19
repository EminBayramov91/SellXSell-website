import type { Metadata } from "next";
import { notFound } from "next/navigation";
import buttonStyles from "@/components/button.module.css";
import { downloadAssets, getDownloadAsset } from "@/lib/site-content";

type DownloadAssetPageProps = {
    params: Promise<{
        asset: string;
    }>;
};

export function generateStaticParams() {
    return downloadAssets.map((item) => ({
        asset: item.slug,
    }));
}

export async function generateMetadata({
    params,
}: DownloadAssetPageProps): Promise<Metadata> {
    const { asset } = await params;
    const currentAsset = getDownloadAsset(asset);

    if (!currentAsset) {
        return {
            title: "Download",
        };
    }

    return {
        title: `Get the ${currentAsset.label}`,
        description: `Access the ${currentAsset.label} through the download gate.`,
    };
}

export default async function DownloadAssetPage({
    params,
}: DownloadAssetPageProps) {
    const { asset } = await params;
    const currentAsset = getDownloadAsset(asset);

    if (!currentAsset) {
        notFound();
    }

    return (
        <section className="content-section">
            <div className="gate-wrap">
                <div className="gate-card">
                    <p className="gate-kicker">SellXSell</p>
                    <h1 className="gate-title">Get the {currentAsset.label}</h1>
                    <p className="gate-text">
                        Enter your details below to continue to the next step.
                    </p>

                    <form
                        className="gate-form"
                        action="/api/downloads/submit"
                        method="post"
                    >
                        <div className="input-grid">
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                required
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="role">Role</label>
                            <input
                                id="role"
                                name="role"
                                type="text"
                                autoComplete="organization-title"
                                required
                            />
                        </div>

                        <input type="hidden" name="asset" value={currentAsset.slug} />

                        <button
                            type="submit"
                            className={`${buttonStyles.button} ${buttonStyles.full}`}
                        >
                            Download Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
