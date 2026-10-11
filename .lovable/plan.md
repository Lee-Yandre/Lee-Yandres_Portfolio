# Bold, Vibrant Portfolio Redesign

Keep all of the content, links, the section order and the single scrolling page. Rebuild the look and add more interaction.

## Visual direction
- Palette: deep navy #142A52, burgundy #9B2348, plum #773C91, cherry #D63B55, lavender #B78CFF. No cream, beige or white backgrounds.
- Each section gets its own deep colour: navy, plum, burgundy and navy again. Curved or diagonal edges join one section to the next.
- Typography: Fraunces, a dramatic serif, for large headings, with Manrope for body text. Headings reveal word by word.
- Details: small cherry illustrations made as drawn shapes, a few subtle leopard-spot accents, animated gradient lines under headings and grain over the colour.

## Sections
- **Navigation:** a floating pill-shaped bar. A lavender marker slides to the section you are viewing. On phones it opens as a full-screen plum menu with staggered links. The Resume button follows your cursor slightly.
- **Home:** a slowly flowing gradient background and an oversized headline. The headline reads "IT Professional · Business Systems". Floating shapes move at different speeds as you scroll. The avatar sits in a cherry-shaped frame.
- **About:** an off-balance layout with the photo overlapping a colour block. A short block lists the areas you are exploring: low-code development, business application development and workflow automation.
- **Experience:** an interactive vertical timeline. A line fills in as you scroll, and each entry expands when you click it. The Workday entry says UT, SIT, PIT and UAT were functional configuration testing.
- **Skills:** groups of skills in different shapes instead of identical cards.
- **Projects:** cards in staggered sizes that tilt in 3D and have animated borders. All existing links stay the same.
- **Certifications:** the Lean Six Sigma Yellow Belt (completed October 2026) is the featured certificate, with the others in a flowing list.
- **Contact:** a bold burgundy-to-plum gradient band with buttons that follow the cursor slightly.

## Performance and access
- Effects use lightweight animation only, and the 3D tilt is turned off on touch screens.
- Motion turns off for visitors whose device is set to reduce motion.
- Text meets accessibility contrast standards on every background.

## Technical details
- Rewrite the colour tokens in index.css and add new font families to the Tailwind config.
- Add small reusable effects: useReveal (IntersectionObserver), useMagnetic, useTilt (only when hover is available) and useParallax (rAF scroll).
- Add the new decorative parts: CherryDecor, LeopardAccent and SectionDivider.
- Rebuild Home.tsx, Navbar.tsx and Footer.tsx, and update the page title and description in index.html.
- Update project memory with the new palette, replacing the old purple, pink and orange rule.
