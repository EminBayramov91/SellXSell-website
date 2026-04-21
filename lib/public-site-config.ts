import { siteRoutes } from "@/lib/site-routes";

const calendlyBookingUrl = "https://calendly.com/sellxsellrev";
const pressureTestBookingUrl = "https://calendly.com/sellxsellrev/30min";
const diagnosticAppUrl = "https://sell-x-sell.vercel.app/";

const readPublicEnv = (name: string) => {
    const value = process.env[name]?.trim();

    return value ? value : undefined;
};

export const advisoryCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_ADVISORY_URL") ?? calendlyBookingUrl;

export const speakingCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_SPEAKING_URL") ?? calendlyBookingUrl;

export const runDiagnosticCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_RUN_DIAGNOSTIC_URL") ?? siteRoutes.diagnostic;

export const bookDiagnosticCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_BOOK_DIAGNOSTIC_URL") ??
    pressureTestBookingUrl;

export const paidDiagnosticCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_PAID_DIAGNOSTIC_URL") ??
    siteRoutes.diagnostic;

export const diagnosticAppEmbedHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_DIAGNOSTIC_APP_URL") ?? diagnosticAppUrl;
