import type { Metadata } from "next";
import { PageSections } from "@/components/page-sections";
import { advisoryCtaHref, runDiagnosticCtaHref } from "@/lib/public-site-config";
import type { PageSection } from "@/lib/site-content";

const forecastSections: PageSection[] = [
    {
        id: "hero",
        title: "Why Sales Forecasts Fail",
        subtitle: "and how to fix them before the quarter does.",
        body: [
            "Forecasts fail when deals move forward without one shared definition of reality.",
            "Momentum gets mistaken for progress.",
            "Confidence gets mistaken for evidence.",
            "Leadership gets a number that sounds good but does not hold up under inspection.",
        ],
        ctas: [
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "primary",
            },
        ],
    },
    {
        id: "problem",
        title: "Pipeline isn't coverage. Feels close isn't closed.",
        subtitle: "That disconnect is where forecast failure begins.",
        body: [
            "Sales sees movement.",
            "Finance sees exposure.",
            "Leadership sees one number and assumes everyone means the same thing.",
            "They usually don't.",
        ],
    },
    {
        id: "fix",
        title: "The fix is one inspection system across every deal.",
        subtitle: "One number. One language. No debate.",
        body: [
            "ICP defines what belongs in the pipeline.",
            "IBC defines when a deal is actually moving.",
            "MEDDIC defines whether the deal is real.",
            "When all three align, the forecast stops being a story and starts being defensible.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
];

export const metadata: Metadata = {
    title: "Why Sales Forecasts Fail (and How to Fix Them)",
    description: "Why sales forecasts fail and how to fix them.",
};

export default function WhySalesForecastsFailPage() {
    return <PageSections sections={forecastSections} />;
}
