import {
    advisoryCtaHref,
    runDiagnosticCtaHref,
    speakingCtaHref,
} from "@/lib/public-site-config";

export type ButtonVariant = "primary" | "secondary";

export type SectionCTA = {
    label: string;
    href: string;
    variant?: ButtonVariant;
};

export type PageSection = {
    id: string;
    title: string;
    subtitle?: string;
    body: string[];
    ctas?: SectionCTA[];
};

export const homeSections: PageSection[] = [
    {
        id: "hero",
        title: "Your Pipeline Isn’t Real.",
        subtitle: "It just hasn’t been inspected yet.",
        body: [
            "Most companies don’t miss their number because of effort.",
            "They miss because the pipeline was never real to begin with.",
            "Deals move forward without validation.",
            "Forecasts get built on assumption.",
            "Leadership gets a number they can’t defend.",
            "This installs the system that forces reality into every deal.",
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
        id: "problem-strip",
        title: "Feels close ≠ will close.",
        subtitle: "Pipeline ≠ coverage. Forecast ≠ reality.",
        body: [
            "Sales sees opportunity.",
            "Finance sees risk.",
            "Leadership sees a number.",
            "None of them are looking at the same thing.",
        ],
    },
    {
        id: "why-forecasts-fail",
        title: "Forecasts break when no one is inspecting the deal the same way.",
        subtitle: "A pipeline without one definition of reality becomes narrative.",
        body: [
            "Deals stay “active” because no one challenges them.",
            "Movement gets mistaken for progress.",
            "Anecdotes get mistaken for evidence.",
            "Forecast calls become explanation instead of inspection.",
            "That is why the number slips.",
        ],
        ctas: [
            {
                label: "See the System Work",
                href: "/approach",
                variant: "secondary",
            },
        ],
    },
    {
        id: "fragments",
        title: "Most teams think they have a system. They have fragments.",
        subtitle:
            "Checklists, frameworks, and training don’t fail. They just never get enforced the same way twice.",
        body: [
            "MEDDIC gets trained, but not inspected.",
            "Checklists exist, but disappear under pressure.",
            "Leadership thinks alignment exists because the language sounds right.",
            "Until the number gets challenged.",
            "That’s when everything breaks.",
            "This is why SellXSell exists.",
        ],
    },
    {
        id: "authority-proof",
        title: "Built from scaling $100M+ in ARR.",
        subtitle: "Installed where the number must hold up under scrutiny.",
        body: [
            "315% increase in qualified pipeline.",
            "77% reduction in wasted revenue.",
            "Forecast conversations moved from opinion to evidence.",
            "Leadership got one defensible number instead of multiple competing stories.",
        ],
    },
    {
        id: "system-explanation",
        title: "ICP. IBC. MEDDIC.",
        subtitle: "Three layers. One operating system. Zero interpretation.",
        body: [
            "ICP defines what belongs in the pipeline.",
            "IBC defines when a deal is actually moving.",
            "MEDDIC validates whether the deal is real.",
            "If all three do not hold, the opportunity does not count.",
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
        id: "see-the-system",
        title: "Run one deal through the system.",
        subtitle: "See what survives real inspection.",
        body: [
            "This is where optimism gets exposed.",
            "This is where false movement gets stripped out.",
            "This is where leadership finds out whether the number is real.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "final-close",
        title: "Bring one deal. Watch what breaks.",
        subtitle:
            "Most pipelines don’t fail at the top. They fail under inspection.",
        body: [
            "You do not need another motivational talk.",
            "You need a system that makes the number defensible.",
            "Run one deal.",
            "See what holds.",
            "Most won’t.",
        ],
        ctas: [
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "primary",
            },
        ],
    },
];

export const aboutSections: PageSection[] = [
    {
        id: "hero",
        title: "This isn’t experience. This is pattern recognition.",
        subtitle:
            "Across teams, industries, and leadership structures, the breakdown is always the same.",
        body: [
            "Deals move without validation.",
            "Functions use different definitions of qualified.",
            "Forecasts get defended instead of inspected.",
            "That is why revenue breaks.",
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
        id: "background",
        title: "The pattern does not change.",
        subtitle: "Only the language around it does.",
        body: [
            "Pipeline looks full.",
            "Forecast sounds confident.",
            "Leadership wants to believe the number.",
            "Then reality shows up at quarter end.",
            "This work exists because the same failure repeats unless the operating system changes.",
        ],
    },
    {
        id: "authority",
        title: "If your forecast requires explanation, it’s already broken.",
        subtitle:
            "The job is not to sound persuasive. The job is to make the number real.",
        body: [
            "This system was built in live revenue environments, not on slides.",
            "It was shaped inside executive rooms where the number gets challenged.",
            "It was designed to remove narrative and replace it with evidence.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "what-this-work-is-not",
        title: "Not sales training. Not coaching. Not another layer of complexity.",
        subtitle: "This is a Revenue Operating System.",
        body: [
            "It creates one language across Sales, Finance, Marketing, and Product.",
            "It defines what belongs, what moves, and what is real.",
            "It gives leadership one number that can be defended.",
        ],
    },
    {
        id: "why-you-why-now",
        title: "Most teams do not need more effort.",
        subtitle: "They need the truth faster.",
        body: [
            "The longer a bad deal stays active, the more it poisons the forecast.",
            "The longer teams use different definitions, the weaker the number becomes.",
            "The cost of waiting is not theoretical. It shows up in missed revenue.",
        ],
        ctas: [
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "primary",
            },
        ],
    },
];

export const approachSections: PageSection[] = [
    {
        id: "hero",
        title: "This is not a framework. This is the system.",
        subtitle:
            "Most teams fail because there is no single definition of reality.",
        body: [
            "Pipeline gets filled.",
            "Deals move forward.",
            "Forecast gets built.",
            "None of it is inspected the same way.",
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
        title: "Your pipeline isn’t wrong. It’s inconsistent.",
        subtitle: "Everyone is working from a different definition of qualified.",
        body: [
            "Sales sees momentum.",
            "Finance sees exposure.",
            "Leadership sees a number.",
            "The disconnect starts there and compounds from there.",
        ],
    },
    {
        id: "system",
        title: "ICP. IBC. MEDDIC.",
        subtitle: "Three checkpoints. One system. No interpretation.",
        body: [
            "ICP determines what belongs in the pipeline.",
            "IBC determines whether a deal is actually moving.",
            "MEDDIC determines whether the deal is real.",
            "If all three do not hold, the opportunity does not count.",
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
        id: "how-it-works",
        title: "Every deal is inspected the same way.",
        subtitle: "No exceptions. No “close enough.”",
        body: [
            "A deal either meets the criteria or it does not.",
            "Movement either qualifies or it does not.",
            "Evidence either exists or it does not.",
            "This is what removes noise and restores signal.",
        ],
    },
    {
        id: "what-changes",
        title: "Before: opinion. After: evidence.",
        subtitle: "Before: optimism. After: predictability.",
        body: [
            "Pipeline reflects reality instead of wishful thinking.",
            "Forecast becomes inspectable instead of debatable.",
            "Risk shows up early instead of late.",
            "Leadership gets confidence because the number finally has integrity.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "final-close",
        title: "Run one deal. See what breaks.",
        subtitle: "Most pipelines do not survive inspection.",
        body: [
            "That is not a branding problem.",
            "That is a systems problem.",
            "The point of this approach is to expose it before the quarter does.",
        ],
        ctas: [
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "primary",
            },
        ],
    },
];

export const advisorySections: PageSection[] = [
    {
        id: "hero",
        title: "This isn’t advisory. This is inspection.",
        subtitle:
            "Most revenue teams do not have a pipeline problem. They have a reality problem.",
        body: [
            "Deals move without being validated.",
            "Forecasts get built on assumptions.",
            "Leadership gets a number they cannot defend.",
            "This fixes that.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "primary",
            },
            {
                label: "Start with the Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "problem",
        title: "Your pipeline is not the problem. Your definition of real is.",
        subtitle: "Everyone is working. No one is aligned.",
        body: [
            "Sales thinks deals are qualified.",
            "Finance questions the number.",
            "Marketing defends volume.",
            "Leadership is left to choose what to believe.",
        ],
    },
    {
        id: "what-this-is",
        title: "Not coaching. Not training. Not another framework.",
        subtitle:
            "This is a Revenue Operating System installed across leadership.",
        body: [
            "It defines what belongs in the pipeline.",
            "It defines when a deal actually moves.",
            "It defines whether the opportunity is real.",
            "And it forces every function to operate from the same definition.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "primary",
            },
        ],
    },
    {
        id: "how-it-works",
        title: "Every deal runs through the same system.",
        subtitle: "No opinions. No “feels close.” No unvalidated pipeline.",
        body: [
            "ICP asks whether the deal belongs.",
            "IBC asks whether it is actually moving.",
            "MEDDIC asks whether it is real.",
            "If it passes, it stays.",
            "If it does not, it comes out.",
        ],
    },
    {
        id: "what-changes",
        title: "Before: inflated pipeline. After: inspectable pipeline.",
        subtitle: "Before: optimistic forecast. After: defensible forecast.",
        body: [
            "Leadership sees what is real sooner.",
            "Risk gets identified before it hits the quarter.",
            "Teams operate from one language instead of four competing narratives.",
            "Confidence returns because the number finally has integrity.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "primary",
            },
            {
                label: "Start with the Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "final-close",
        title: "Bring one deal. Run it through the system.",
        subtitle: "See what holds up. Most pipelines break under inspection.",
        body: [
            "This is not about motivation.",
            "This is about exposure.",
            "You will know exactly where the system is weak in one session.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "primary",
            },
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "secondary",
            },
        ],
    },
];

export const speakingSections: PageSection[] = [
    {
        id: "hero",
        title: "This is not motivation. This is exposure.",
        subtitle:
            "Your audience does not need more energy. They need clarity.",
        body: [
            "Every room already knows something is off in the forecast.",
            "What most rooms do not have is language for the problem.",
            "This work gives them that language and shows them exactly where the system breaks.",
        ],
        ctas: [
            {
                label: "Inquire About Speaking",
                href: speakingCtaHref,
                variant: "primary",
            },
        ],
    },
    {
        id: "what-the-room-learns",
        title: "Why pipeline lies.",
        subtitle:
            "Why “qualified” means something different in every function.",
        body: [
            "Why forecasts get defended instead of inspected.",
            "Why false movement survives too long.",
            "Why leadership ends up negotiating with the number instead of trusting it.",
        ],
    },
    {
        id: "why-it-lands",
        title: "Because it exposes what they already know is broken.",
        subtitle: "Not theory. Not slogans. Not generic sales advice.",
        body: [
            "This language hits because it mirrors what leaders are already living.",
            "It surfaces the exact tension they have been trying to explain.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "final-close",
        title:
            "Expose the gap in the room before the quarter exposes it in the number.",
        subtitle: "That is what the talk is for.",
        body: [
            "Clarity is more useful than motivation.",
            "Recognition is more useful than entertainment.",
        ],
        ctas: [
            {
                label: "Inquire About Speaking",
                href: speakingCtaHref,
                variant: "primary",
            },
        ],
    },
];

export const diagnosticSections: PageSection[] = [
    {
        id: "hero",
        title: "Your Pipeline Isn’t Real.",
        subtitle: "It just hasn’t been inspected yet.",
        body: [
            "Most forecasts aren’t wrong because of effort.",
            "They’re wrong because no one is forcing reality through the system.",
            "This diagnostic exposes what is real, what is at risk, and what will never close.",
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
        id: "what-this-does",
        title: "This is not a survey. This is inspection.",
        subtitle:
            "Run one deal through the same system used to scale $100M+ in ARR.",
        body: [
            "See which deals actually belong in the pipeline.",
            "Expose which deals are already lost but still marked active.",
            "Find where qualification is breaking down.",
            "See whether your forecast survives real inspection.",
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
        id: "what-it-reveals",
        title: "The number is not wrong. The system is.",
        subtitle: "Here is what the diagnostic pulls into the light.",
        body: [
            "Unqualified deals hiding inside active pipeline.",
            "Forecast assumptions dressed up as confidence.",
            "No shared inspection framework across teams.",
            "Revenue risk hidden inside momentum language.",
        ],
    },
    {
        id: "objection-handling",
        title: "You do not need more data. You need better inspection.",
        subtitle: "The issue is not whether your team is working hard.",
        body: [
            "The issue is whether the deals in the forecast are real.",
            "The issue is whether your stages mean the same thing to every function.",
            "The issue is whether the number survives scrutiny.",
        ],
    },
    {
        id: "why-it-matters",
        title: "If pipeline isn’t inspected, it becomes narrative.",
        subtitle: "If teams aren’t aligned, forecast becomes negotiation.",
        body: [
            "That is why deals slip.",
            "That is why forecasts miss.",
            "That is why leadership keeps getting surprised by a number that looked fine two weeks earlier.",
        ],
        ctas: [
            {
                label: "Book Executive Advisory",
                href: advisoryCtaHref,
                variant: "secondary",
            },
        ],
    },
    {
        id: "how-it-connects",
        title: "ICP. IBC. MEDDIC.",
        subtitle: "One system. One number. No debate.",
        body: [
            "ICP determines what belongs in the pipeline.",
            "IBC determines when a deal is actually moving.",
            "MEDDIC determines whether the deal is real.",
            "Together they produce one inspectable, defensible number.",
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
        id: "final-close",
        title: "Run one deal. Watch what breaks.",
        subtitle: "Most pipelines fail under inspection.",
        body: [
            "You will know in three minutes which one you have.",
            "If the number holds, good.",
            "If it does not, that is better to learn here than at quarter close.",
        ],
        ctas: [
            {
                label: "Run the Revenue Diagnostic",
                href: runDiagnosticCtaHref,
                variant: "primary",
            },
            {
                label: "Download the Playbook",
                href: "/downloads/playbook",
                variant: "secondary",
            },
        ],
    },
];

export const downloadsHero: PageSection = {
    id: "downloads-hero",
    title: "These are not resources. These are system entry points.",
    subtitle: "Every asset exists to remove guesswork and force alignment.",
    body: [
        "No theory for theory’s sake.",
        "No generic templates.",
        "Only tools that push the system into real operating behavior.",
    ],
    ctas: [
        {
            label: "Download the Playbook",
            href: "/downloads/playbook",
            variant: "primary",
        },
    ],
};

export const downloadsCards: PageSection[] = [
    {
        id: "playbook",
        title: "The Playbook turns language into operating behavior.",
        subtitle:
            "This is where the system stops being conceptual and becomes executable.",
        body: [
            "Use it to align inspection language across teams.",
            "Use it to remove false movement from the pipeline.",
            "Use it to stop forecast conversations from turning into explanation.",
        ],
        ctas: [
            {
                label: "Download the Playbook",
                href: "/downloads/playbook",
                variant: "primary",
            },
        ],
    },
    {
        id: "checklist",
        title: "This is where optimism meets evidence.",
        subtitle:
            "The checklist exists to expose where the pipeline breaks first.",
        body: [
            "Use it before forecast calls.",
            "Use it before board prep.",
            "Use it before a bad number becomes a public problem.",
        ],
        ctas: [
            {
                label: "Run the Checklist",
                href: "/downloads/checklist",
                variant: "secondary",
            },
        ],
    },
    {
        id: "system",
        title: "ICP. IBC. MEDDIC.",
        subtitle: "Three layers. One operating system. Zero interpretation.",
        body: [
            "ICP defines what belongs in the pipeline.",
            "IBC defines when a deal is actually moving.",
            "MEDDIC validates whether the deal is real.",
            "If all three do not hold, the opportunity does not count.",
        ],
        ctas: [
            {
                label: "See the System",
                href: "/downloads/system",
                variant: "primary",
            },
        ],
    },
];

export const downloadsFinalSection: PageSection = {
    id: "downloads-final-close",
    title: "Download it. Apply it. See what holds.",
    subtitle: "Most systems sound good until they meet a real deal.",
    body: [
        "That is why these assets exist.",
        "Not to decorate the process.",
        "To expose whether the process works.",
    ],
    ctas: [
        {
            label: "Download the Playbook",
            href: "/downloads/playbook",
            variant: "primary",
        },
        {
            label: "Book Executive Advisory",
            href: advisoryCtaHref,
            variant: "secondary",
        },
    ],
};

export type DownloadAsset = {
    slug: "playbook" | "checklist" | "system";
    label: string;
};

export const downloadAssets: DownloadAsset[] = [
    {
        slug: "playbook",
        label: "Playbook",
    },
    {
        slug: "checklist",
        label: "Checklist",
    },
    {
        slug: "system",
        label: "System",
    },
];

export function getDownloadAsset(asset: string) {
    return downloadAssets.find((item) => item.slug === asset);
}
