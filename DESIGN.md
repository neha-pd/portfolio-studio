# Neha portfolio redesign

Reference-first review, 11 October 2026. Original direction: a confident frontend engineer's studio portfolio, with generous typography, interactive project discovery and actual working-project screenshots. A cool porcelain/forest palette and mint highlights preserve the existing identity. Variance 8, motion 4, density 4; native CSS aesthetic. The portfolio is neither a fabricated agency nor a client-logo wall.

References inspected before implementation:

- Fabian, Modern/Brutalism Redesign of my Portfolio, Dribbble: https://dribbble.com/shots/19101344-Modern-Brutalism-Redesign-of-my-Portfolio. Downloaded and visually inspected its reference image. Useful principles: clear service positioning, meaningful case studies and structured editorial space.
- Aristide Benoist, Folio 2021 02, Dribbble: https://dribbble.com/shots/15987209-Folio-2021-02. Useful principle: let an actual project visual occupy the foreground instead of surrounding it with generic decoration.
- Personal Site Portfolio, Behance: https://www.behance.net/gallery/140677991/Personal-Site-Portfolio. Downloaded and visually inspected its published image. Useful principles: confident typographic scale, an obvious route to project work and a clear contact invitation. Do not copy neon/black styling or content.
- Additional Behance pages for Creative Website Developer's Portfolio and Immersive Website Portfolio were blocked by403. They are not claimed as inspected references.

Implementation: replace current page structure and CSS, preserve URL/anchors and factual case-study content, retain original résumé and external repo links. Lead with functional work discovery, clearly separate professional contributions from fictional industry demos and personal prototypes. Make all links and filters work with keyboard and touch. Actual screenshots replace decorative thumbnails. No copied reference screenshots appear on the public site. Progressive enhancement, theme support, mobile menu/Escape, reduced motion, contrast and reflow checks required.

## Person-first restoration, 11 October 2026

User correction: Neha’s introduction and experience must be prominent; demos belong on a dedicated landing page. Audit found the prior rebuild led with Common Form and placed six concepts plus five prototypes ahead of Neha’s professional history. This reversed the recruiter journey. The earlier `8d0305e` portrait hero provides the preferred hierarchy, restored within the existing jade/porcelain design language.

Design read: a person-first engineering portfolio for hiring managers, calm editorial native CSS. Dials: variance6, motion3, density4. Retain original reference direction above, existing verified portrait, actual project images, all six demo URLs, professional case details, résumé, theme/mobile navigation and client/employer distinction. Main journey: portrait/introduction → about → explicit career chronology → professional work → concise personal project links → demo invitation → contact. Dedicated `/demos/` houses the complete six-sector gallery and five personal prototype previews. Main-page old `#concepts`, `#building`, `#projects` links remain meaningful. No invented credentials or new metrics.
