# Design System — Julia Kocevas Portfolio

Stage 1 of the "rejuvenation": move the site off generic SaaS gray-900 toward
something that reads as a real fine-art gallery.

## Color palette — warm paper canvas + ink accent

Chosen direction: **warm off-white "paper" canvas with a dark ink accent**,
rather than a dark charcoal gallery wall.

- `--color-canvas: #FAF7F2` — warm paper background (not clinical white),
  evokes gallery walls, matting, and fine-art print paper.
- `--color-ink: #1C1A17` — near-black warm ink for headings/body, softer
  than pure `#000` so it doesn't fight the artwork for attention.
- `--color-ink-muted: #5C5750` — secondary text, captions, metadata.
- `--color-accent: #8A6D4A` — a muted gallery-label bronze/ochre, used
  sparingly for links, focus rings, and small accents.
- `--color-border: #E4DED3` — warm hairline border for dividers/cards.
- `--color-surface: #FFFFFF` — pure white reserved for cards/lightboxes
  holding the art itself, so artwork pops against both canvas and surface.

Justification: Julia's work is the subject; the UI should behave like a
gallery wall or a printed catalogue — quiet, warm, neutral — rather than a
tech product. A flat `gray-900`/`gray-50` SaaS palette reads cold and generic.
Warm paper tones are closer to linen mats, gallery walls, and art books, and
keep contrast high enough for text while staying out of the way of photos
and paintings. Dark mode / charcoal-wall was considered but rejected for
Stage 1 because it tends to compete with the color values in the artwork
itself; paper-canvas lets each piece's color read true.

## Typography — editorial serif + clean sans

- **Display/headings:** `Playfair Display` — elegant, high-contrast serif
  with the editorial/luxury character of art book covers and gallery
  signage.
- **Body/UI:** `Inter` — clean, highly legible sans-serif for captions,
  nav, and body copy so long-form text stays readable at small sizes.

This is the "Classic Elegant" serif+sans pairing: strong contrast between
an expressive display face and a neutral workhorse body face, commonly used
for editorial, luxury, and gallery-adjacent sites. Loaded via Google Fonts.

Tailwind tokens: `font-display` (Playfair Display) for headings/hero copy,
`font-sans` (Inter) for everything else. The old `font-lobster` token is
removed as part of this change.

## Spacing & layout principles

- **Generous negative space.** Let sections breathe; art-forward sites use
  more vertical rhythm than SaaS marketing pages — prefer `py-24`/`py-32`
  over cramped `py-12`.
- **Quiet chrome, loud art.** Chrome (nav, labels, buttons) stays small,
  muted-ink, and low-contrast relative to imagery; images and the artist's
  name/title are the only elements allowed strong contrast.
- **Restrained motion.** Reveal-on-scroll and hover states should be
  subtle (short duration, small translate/opacity deltas) — motion should
  feel like a page turning, not a product demo.
- **Hairline dividers over heavy borders/shadows.** Use `--color-border`
  hairlines instead of drop shadows to separate sections, consistent with
  printed gallery catalogues.
