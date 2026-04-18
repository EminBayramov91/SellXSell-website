# SellXSell

SellXSell is a static Next.js marketing site built from the locked client copy docs. The site covers the core marketing pages, a downloads hub, and a gated download flow that is ready to connect to Mailchimp and external conversion URLs once those client values are available.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- ESLint 9

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` route files and page metadata
- `components/` reusable layout and section components
- `lib/site-content.ts` locked page copy and page-section data
- `lib/public-site-config.ts` public CTA links that can be swapped by env vars
- `lib/server-config.ts` server-only Mailchimp and delivery configuration
- `app/api/downloads/submit/route.ts` POST handler for the gated downloads form

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run verify
```

`npm run verify` is the fastest pre-handoff smoke check because it runs lint and production build back to back.

## Environment Setup

Copy `.env.example` to `.env.local` and fill in the client values when they arrive.

### Public conversion links

- `NEXT_PUBLIC_SELLXSELL_ADVISORY_URL`
- `NEXT_PUBLIC_SELLXSELL_SPEAKING_URL`
- `NEXT_PUBLIC_SELLXSELL_BOOK_DIAGNOSTIC_URL`
- `NEXT_PUBLIC_SELLXSELL_PAID_DIAGNOSTIC_URL`

These values control the live CTA destinations for advisory, speaking, the thank-you page, and the header/footer diagnostic CTA.
Right now advisory + book-diagnostic CTAs fall back to `https://calendly.com/sellxsellrev` until more specific URLs are provided.

### Mailchimp download gate

- `SELLXSELL_MAILCHIMP_FORM_ACTION`
- `SELLXSELL_MAILCHIMP_EMAIL_FIELD`
- `SELLXSELL_MAILCHIMP_FIRST_NAME_FIELD`
- `SELLXSELL_MAILCHIMP_LAST_NAME_FIELD`
- `SELLXSELL_MAILCHIMP_COMPANY_FIELD`
- `SELLXSELL_MAILCHIMP_ROLE_FIELD`
- `SELLXSELL_MAILCHIMP_ASSET_FIELD`
- `SELLXSELL_MAILCHIMP_ASSET_LABEL_FIELD`
- `SELLXSELL_MAILCHIMP_SOURCE_FIELD`
- `SELLXSELL_MAILCHIMP_SOURCE_VALUE`
- `SELLXSELL_MAILCHIMP_TAG_FIELD`
- `SELLXSELL_MAILCHIMP_PLAYBOOK_TAG`
- `SELLXSELL_MAILCHIMP_CHECKLIST_TAG`
- `SELLXSELL_MAILCHIMP_SYSTEM_TAG`

The gate form now posts to `/api/downloads/submit`, which is ready to forward submissions to Mailchimp once the final form action URL and field names are provided.

### Delivery reference values

- `SELLXSELL_DOWNLOAD_SENDER`
- `SELLXSELL_DOWNLOAD_SUBJECT`
- `SELLXSELL_PLAYBOOK_FILE_URL`
- `SELLXSELL_CHECKLIST_FILE_URL`
- `SELLXSELL_SYSTEM_FILE_URL`

These are not surfaced in the UI yet, but they document the remaining handoff values needed to complete the email delivery workflow.

## Current Download Flow

1. The user opens `/downloads`.
2. A card routes to `/downloads/[asset]`.
3. The gate form submits with `POST` to `/api/downloads/submit`.
4. The submit route is ready to forward the lead to Mailchimp when configured.
5. The user is redirected to `/downloads/thank-you`.

## Remaining Manual Setup

- Final Mailchimp action URL and merge/tag field names
- Final file delivery URLs for each asset
- Calendly booking URL
- Stripe paid diagnostic URL
- Confirmation of any CTA destinations that should go straight to external booking instead of internal pages
