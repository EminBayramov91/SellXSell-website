const calendlyBookingUrl = "https://calendly.com/sellxsellrev";

const readPublicEnv = (name: string) => {
    const value = process.env[name]?.trim();

    return value ? value : undefined;
};

export const advisoryCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_ADVISORY_URL") ?? calendlyBookingUrl;

export const speakingCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_SPEAKING_URL") ?? "/speaking";

export const bookDiagnosticCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_BOOK_DIAGNOSTIC_URL") ??
    calendlyBookingUrl;

export const paidDiagnosticCtaHref =
    readPublicEnv("NEXT_PUBLIC_SELLXSELL_PAID_DIAGNOSTIC_URL") ?? "/diagnostic";
