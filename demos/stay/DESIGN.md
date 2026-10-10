# Stillwater House — complete redesign, 11 October 2026

Design read: an editorial coastal hotel identity for slow-travel guests. Native HTML/CSS/JS; variance 8, motion 3, density 3. Marine blue, cool porcelain and quiet serif typography (Georgia suits the literary, heritage hospitality identity); Manrope for controls. Sharp geometry throughout, circular guest steppers only as an interaction-specific rule.

## References examined before implementation
- Dribbble, SELISE TXLab, [Luxury Hospitality & Boutique Resort Web Design](https://dribbble.com/shots/27663529-Luxury-Hospitality-Boutique-Resort-Web-Design): viewed in Chrome. Large hotel typography anchored to immersive photography, restrained navigation and clearly priced accommodation informed hierarchy, not asset copying.
- Behance, Natalia Tugova and Elias Tugov, [LEKTOV Boutique Hotel](https://www.behance.net/gallery/218155971/LEKTOV-Boutique-Hotel): viewed in Chrome after web text fetch returned403. Strong typographic identity, generous asymmetrical image/text composition and a sense of place informed the editorial room layouts. No copied artwork or typefaces.
- Pinterest, [7 great examples of typography in web design](https://uk.pinterest.com/pin/387661480415810251/): actual pin visible in Chrome, depicting the Lincoln hotel; login overlay subsequently appeared. Used only the visible pairing of restrained navigation and scenic type hierarchy; did not log in or save images.

## Audit and change
The earlier design used a conventional photograph-overlay hero, small brand label, floating native form, equal room cards and repeated photo block. The new layout has a full-width wordmark, photographic architectural split, a dedicated pale-blue trip-planning ribbon, editorial accommodation spreads, a local calendar picker, guest stepper and a detailed estimate sheet. Existing generated images remain original fictional concept imagery. No fake reviews, location coordinates, awards or real availability.

## Functional contract
The date planner is local: today-or-later, minimum1night, maximum30nights. Guest count1–6 filters rooms (capacity2/4), with a useful empty state. Custom calendar has month controls, weekday labels, native keyboard-operable day buttons and a dialog; typed date fields remain available. Estimate and simulated confirmation never send data or collect payment. Native dialog Escape/focus restoration; visible focus; reduced-motion support; local light/dark preference.

Visual review corrected intrinsic image-height stretching on mobile; removed decorative photo overlays and numbering, simplified section heading hierarchy, and kept the planner within the page theme.
