# Common Form

Fictional, browser-local portfolio concept by Neha Desai. Buildless HTML/CSS/JavaScript. Publish only as part of the existing portfolio repository, under demos/store/.

Commerce flow: category filters, sorting by selected-variant price, size variants, cart quantity/removal, sample shipping calculation and local checkout simulation. No Shopify integration, inventory backend, order creation or payment collection.

State is in memory and resets on reload. Only the light/dark preference is saved locally. No personal information is requested. No external network calls or analytics are used; the existing portfolio font is shared locally. All prices are explicitly sample USD values.

Accessibility: semantic controls, visible labels/focus, native modal dialogs with Escape and focus restoration, status announcements, keyboard interaction, 44px primary controls, reduced-motion support and automatic light/dark with manual toggle.

Imagery provenance and exact generation prompts: ASSETS.md.

Preview from portfolio root with a static HTTP server. See reports/demo-qa/report.json for manual browser test evidence. Parent agent owns deployment; this subagent did not push or publish.
