import "server-only";

const readServerEnv = (name: string) => {
    const value = process.env[name]?.trim();

    return value ? value : undefined;
};

export const mailchimpConfig = {
    actionUrl:
        readServerEnv("SELLXSELL_MAILCHIMP_FORM_ACTION") ??
        "https://sellxsell.us10.list-manage.com/subscribe/post?u=c3642a6a72a97239c0331b1ff&id=84a4455050&f_id=000e49e3f0",
    emailField: readServerEnv("SELLXSELL_MAILCHIMP_EMAIL_FIELD") ?? "EMAIL",
    firstNameField:
        readServerEnv("SELLXSELL_MAILCHIMP_FIRST_NAME_FIELD") ?? "FNAME",
    lastNameField:
        readServerEnv("SELLXSELL_MAILCHIMP_LAST_NAME_FIELD") ?? "LNAME",
    companyField: readServerEnv("SELLXSELL_MAILCHIMP_COMPANY_FIELD") ?? "COMPANY",
    roleField: readServerEnv("SELLXSELL_MAILCHIMP_ROLE_FIELD") ?? "ROLE",
    assetField: readServerEnv("SELLXSELL_MAILCHIMP_ASSET_FIELD") ?? "ASSET",
    assetLabelField: readServerEnv("SELLXSELL_MAILCHIMP_ASSET_LABEL_FIELD"),
    sourceField: readServerEnv("SELLXSELL_MAILCHIMP_SOURCE_FIELD"),
    sourceValue:
        readServerEnv("SELLXSELL_MAILCHIMP_SOURCE_VALUE") ??
        "website-download-gate",
    honeypotField:
        readServerEnv("SELLXSELL_MAILCHIMP_HONEYPOT_FIELD") ??
        "b_c3642a6a72a97239c0331b1ff_84a4455050",
    tagField: readServerEnv("SELLXSELL_MAILCHIMP_TAG_FIELD"),
    playbookTag: readServerEnv("SELLXSELL_MAILCHIMP_PLAYBOOK_TAG"),
    checklistTag: readServerEnv("SELLXSELL_MAILCHIMP_CHECKLIST_TAG"),
    systemTag: readServerEnv("SELLXSELL_MAILCHIMP_SYSTEM_TAG"),
};

export const downloadDeliveryConfig = {
    senderEmail:
        readServerEnv("SELLXSELL_DOWNLOAD_SENDER") ?? "noreply@sellxsell.com",
    subject:
        readServerEnv("SELLXSELL_DOWNLOAD_SUBJECT") ??
        "Run this on 3 deals before we talk",
    playbookFileUrl: readServerEnv("SELLXSELL_PLAYBOOK_FILE_URL"),
    checklistFileUrl: readServerEnv("SELLXSELL_CHECKLIST_FILE_URL"),
    systemFileUrl: readServerEnv("SELLXSELL_SYSTEM_FILE_URL"),
};

export function getDownloadAssetFileHref(asset: string) {
    switch (asset) {
        case "playbook":
            return downloadDeliveryConfig.playbookFileUrl ?? "/download-assets/playbook.pdf";
        case "checklist":
            return downloadDeliveryConfig.checklistFileUrl;
        case "system":
            return downloadDeliveryConfig.systemFileUrl;
        default:
            return undefined;
    }
}

export function getAssetMailchimpTag(asset: string) {
    switch (asset) {
        case "playbook":
            return mailchimpConfig.playbookTag;
        case "checklist":
            return mailchimpConfig.checklistTag;
        case "system":
            return mailchimpConfig.systemTag;
        default:
            return undefined;
    }
}
