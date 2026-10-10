# Common Form

Original fictional homeware storefront, redesigned from reference research documented in DESIGN.md. Buildless HTML, CSS and JavaScript. Local original generated images; no third-party design assets copied.

Working flows: visible size radios, category filters, starting-price sorting, product quick view, a browser-local persistent bag, quantities/removal, free-delivery threshold, one-click table setting, checkout review/back/completion and an honest downloadable demo receipt. Prices and product descriptions are illustrative. No real Shopify/payment/order/inventory integration. No personal information collected.

Accessibility: semantic controls and native radio keyboard behavior, native modal dialogs plus explicit Tab containment, Escape and focus restoration, visible focus, status announcements, reduced motion, 320px reflow and light/dark contrast. Fifteen browser flow/check groups passed; axe-core WCAG A/AA rules returned zero violations across light/dark and mobile cart/detail. This is not a full screen-reader audit.

Bag and theme are saved only in localStorage when available. Invalid stored entries are discarded; prices always derive from the fixed local catalogue. Users can clear the bag.

Evidence: nightshift/reports/store-rebuild/checks.json and screenshots. Preview from the portfolio root with a static server. Imagery provenance: ASSETS.md.
