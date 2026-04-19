import { NextResponse } from "next/server";
import { getDownloadAsset } from "@/lib/site-content";
import { getAssetMailchimpTag, mailchimpConfig } from "@/lib/server-config";
import { siteRoutes } from "@/lib/site-routes";

type MailchimpHostedForm = {
    emailField?: string;
    firstNameField?: string;
    lastNameField?: string;
    companyField?: string;
    roleField?: string;
    hiddenFields: Record<string, string>;
    honeypotFields: string[];
    submitField?: {
        name: string;
        value: string;
    };
};

function getFormValue(formData: FormData, field: string) {
    const value = formData.get(field);

    return typeof value === "string" ? value.trim() : "";
}

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getAttribute(tag: string, name: string) {
    const match = tag.match(new RegExp(`${name}="([^"]*)"`, "i"));

    return match?.[1];
}

function getInputTags(html: string) {
    return html.match(/<(?:input|textarea)\b[^>]*>/gi) ?? [];
}

function findInputNameById(html: string, id: string) {
    for (const tag of getInputTags(html)) {
        if (getAttribute(tag, "id") === id) {
            return getAttribute(tag, "name");
        }
    }

    return undefined;
}

function findFieldNameByLabel(html: string, label: string) {
    const match = html.match(
        new RegExp(
            `<label[^>]*for="([^"]+)"[^>]*>[\\s\\S]*?${escapeRegExp(label)}[\\s\\S]*?<\\/label>`,
            "i",
        ),
    );

    if (!match?.[1]) {
        return undefined;
    }

    return findInputNameById(html, match[1]);
}

function extractHiddenFields(html: string) {
    const hiddenFields: Record<string, string> = {};

    for (const tag of getInputTags(html)) {
        if (getAttribute(tag, "type")?.toLowerCase() !== "hidden") {
            continue;
        }

        const name = getAttribute(tag, "name");

        if (name) {
            hiddenFields[name] = getAttribute(tag, "value") ?? "";
        }
    }

    return hiddenFields;
}

function extractHoneypotFields(html: string) {
    const honeypotFields = new Set<string>();

    for (const tag of getInputTags(html)) {
        const name = getAttribute(tag, "name");

        if (name?.startsWith("b_")) {
            honeypotFields.add(name);
        }
    }

    return [...honeypotFields];
}

function extractSubmitField(html: string) {
    for (const tag of getInputTags(html)) {
        if (getAttribute(tag, "type")?.toLowerCase() !== "submit") {
            continue;
        }

        const name = getAttribute(tag, "name");

        if (!name) {
            continue;
        }

        return {
            name,
            value: getAttribute(tag, "value") ?? "",
        };
    }

    return undefined;
}

async function getHostedMailchimpForm(actionUrl: string): Promise<MailchimpHostedForm | null> {
    try {
        const response = await fetch(actionUrl, { cache: "no-store" });

        if (!response.ok) {
            return null;
        }

        const html = await response.text();

        return {
            emailField:
                findFieldNameByLabel(html, "Email Address") ?? mailchimpConfig.emailField,
            firstNameField:
                findFieldNameByLabel(html, "First Name") ?? mailchimpConfig.firstNameField,
            lastNameField:
                findFieldNameByLabel(html, "Last Name") ?? mailchimpConfig.lastNameField,
            companyField:
                findFieldNameByLabel(html, "Company") ?? mailchimpConfig.companyField,
            roleField: findFieldNameByLabel(html, "Role") ?? mailchimpConfig.roleField,
            hiddenFields: extractHiddenFields(html),
            honeypotFields: extractHoneypotFields(html),
            submitField: extractSubmitField(html),
        };
    } catch {
        return null;
    }
}

function getSuccessRedirectUrl(asset: string, requestUrl: string) {
    const redirectUrl =
        asset === "playbook"
            ? new URL("/thank-you-playbook", requestUrl)
            : new URL(`${siteRoutes.resources}/thank-you`, requestUrl);

    if (asset !== "playbook") {
        redirectUrl.searchParams.set("asset", asset);
    }

    return redirectUrl;
}

function getErrorRedirectUrl(asset: string, requestUrl: string) {
    const redirectUrl = new URL(`${siteRoutes.resources}/${asset}`, requestUrl);
    redirectUrl.searchParams.set("status", "error");

    return redirectUrl;
}

export async function POST(request: Request) {
    const formData = await request.formData();
    const asset = getFormValue(formData, "asset");
    const currentAsset = getDownloadAsset(asset);

    if (!currentAsset) {
        return NextResponse.redirect(new URL(siteRoutes.resources, request.url), 303);
    }

    const successRedirectUrl = getSuccessRedirectUrl(currentAsset.slug, request.url);
    const errorRedirectUrl = getErrorRedirectUrl(currentAsset.slug, request.url);

    if (!mailchimpConfig.actionUrl) {
        return NextResponse.redirect(errorRedirectUrl, 303);
    }

    const hostedForm = await getHostedMailchimpForm(mailchimpConfig.actionUrl);

    if (!hostedForm?.emailField) {
        return NextResponse.redirect(errorRedirectUrl, 303);
    }

    const payload = new URLSearchParams();

    for (const [name, value] of Object.entries(hostedForm.hiddenFields)) {
        payload.set(name, value);
    }

    for (const name of hostedForm.honeypotFields) {
        payload.set(name, "");
    }

    if (hostedForm.submitField) {
        payload.set(hostedForm.submitField.name, hostedForm.submitField.value);
    }

    const fieldPairs = [
        [hostedForm.emailField, getFormValue(formData, "email")],
        [
            hostedForm.firstNameField ?? mailchimpConfig.firstNameField,
            getFormValue(formData, "firstName"),
        ],
        [
            hostedForm.lastNameField ?? mailchimpConfig.lastNameField,
            getFormValue(formData, "lastName"),
        ],
        [
            hostedForm.companyField ?? mailchimpConfig.companyField,
            getFormValue(formData, "company"),
        ],
        [hostedForm.roleField ?? mailchimpConfig.roleField, getFormValue(formData, "role")],
        [mailchimpConfig.assetField, currentAsset.slug],
    ] as const;

    for (const [field, value] of fieldPairs) {
        if (field && value) {
            payload.set(field, value);
        }
    }

    if (mailchimpConfig.assetLabelField) {
        payload.set(mailchimpConfig.assetLabelField, currentAsset.label);
    }

    if (mailchimpConfig.sourceField && mailchimpConfig.sourceValue) {
        payload.set(mailchimpConfig.sourceField, mailchimpConfig.sourceValue);
    }

    const assetTag = getAssetMailchimpTag(currentAsset.slug);

    if (mailchimpConfig.tagField && assetTag) {
        payload.set(mailchimpConfig.tagField, assetTag);
    }

    try {
        await fetch(mailchimpConfig.actionUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: payload.toString(),
            cache: "no-store",
        });
    } catch {
        return NextResponse.redirect(errorRedirectUrl, 303);
    }

    return NextResponse.redirect(successRedirectUrl, 303);
}
