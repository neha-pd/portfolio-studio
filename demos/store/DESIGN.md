# Common Form redesign

Design read: a premium homeware storefront for prospective commerce clients; editorial photography, porcelain and cobalt, generous spacing, custom shopping controls. Native HTML/CSS aesthetic, not an implementation of a third-party design system. Variance 8, motion 4, density 3. Preserve the public URL and fictional-commerce disclosure; fully replace the current layout.

## Reference research before implementation

- Dribbble, Atterman, LumiClay: https://dribbble.com/shots/25323252-LumiClay-Website-for-Ceramics-Studio. Inspected the actual reference image. Take away: dominant object photography, confident scale, restrained navigation. Do not copy imagery, marks, or layout.
- Dribbble, Mariam Rurua, Ceramic Shop: https://dribbble.com/shots/17986638-Ceramic-Shop. Take away: strong editorial contrast and an uncluttered product story.
- Dribbble, Sima, mobile commerce: https://dribbble.com/shots/24149629-Ceramic-Store-Ecommerce-Mobile-Website. Take away: treat mobile product discovery as a primary flow.
- Behance, Soul Ceramics: https://www.behance.net/gallery/197249363/SOUL-CERAMICS-Web-Design-Concept-UXUI. Reference image inspected through image search: larger serif display, clear product groupings and intentional mobile hierarchy.
- Pinterest Uncommon Wares reference was discovered in indexed search, but its full pin could not be fetched. No claim to have inspected its full design: https://www.pinterest.com/pin/uncommon-wares-modern-minimalist-ceramics-shopify-website-design-from-lindsay-scholz-studio--514817801169393751/.

## Original direction

Replace the generic split hero with centered editorial typography and a panoramic still life. Build a gallery-like uneven product grid and a separate editorial table-setting section. Use Georgia for literal editorial homeware headlines and self-hosted Manrope for shopping UI. Retain cobalt as the single accent. Keep original generated imagery, never use reference screenshots as site assets.

Native radios receive completely custom visual treatment: visible options replace selects. Sorting uses a small disclosure with real radio choices. Product quick view, persistent local bag, quantity controls, shipping calculation, checkout review, receipt and download are all functional. Native modal semantics, focus restoration, Escape, visible focus, reduced motion, contrast and 320px reflow must be verified. No fabricated clients, customer reviews, material certifications or delivery promises. Fictional specs and sample prices remain explicit.
