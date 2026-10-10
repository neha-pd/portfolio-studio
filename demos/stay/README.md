# Stillwater House

Fictional, browser-local portfolio concept by Neha Desai. Buildless HTML/CSS/JavaScript. Publish only as part of the existing portfolio repository, under demos/stay/.

Hotel flow: guest-capacity filtering, empty state, date validation (today or later, 1–30 nights), two sample room rates, quote dialog and demo confirmation. No live availability or reservations.

State is in memory and resets on reload. Only the light/dark preference is saved locally. No personal information is requested. No external network calls or analytics are used; the existing portfolio font is shared locally. All prices are explicitly sample USD values.

Accessibility: semantic controls, visible labels/focus, native modal dialogs with Escape and focus restoration, status announcements, keyboard interaction, 44px primary controls, reduced-motion support and automatic light/dark with manual toggle.

Imagery provenance and exact generation prompts: ASSETS.md.

Preview from portfolio root with a static HTTP server. See reports/demo-qa/report.json for manual browser test evidence. Parent agent owns deployment; this subagent did not push or publish.
