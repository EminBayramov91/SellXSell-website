import { NextResponse } from "next/server";
import { getDownloadAsset } from "@/lib/site-content";
import { getAssetMailchimpTag, mailchimpConfig } from "@/lib/server-config";
import { siteRoutes } from "@/lib/site-routes";

function getFormValue(formData: FormData, field: string) {
    const value = formData.get(field);

    return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
    const formData = await request.formData();
    const asset = getFormValue(formData, "asset");
    const currentAsset = getDownloadAsset(asset);

    if (!currentAsset) {
        return NextResponse.redirect(new URL(siteRoutes.resources, request.url), 303);
    }

    const redirectUrl = new URL("/downloads/thank-you", request.url);
    redirectUrl.searchParams.set("asset", currentAsset.slug);

    if (!mailchimpConfig.actionUrl) {
        return NextResponse.redirect(redirectUrl, 303);
    }

    const payload = new URLSearchParams();
    const fieldPairs = [
        [mailchimpConfig.firstNameField, getFormValue(formData, "firstName")],
        [mailchimpConfig.lastNameField, getFormValue(formData, "lastName")],
        [mailchimpConfig.emailField, getFormValue(formData, "email")],
        [mailchimpConfig.companyField, getFormValue(formData, "company")],
        [mailchimpConfig.roleField, getFormValue(formData, "role")],
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

    if (mailchimpConfig.honeypotField) {
        payload.set(mailchimpConfig.honeypotField, "");
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
        // Keep the user flow intact even before the final delivery credentials land.
    }

    return NextResponse.redirect(redirectUrl, 303);
}
