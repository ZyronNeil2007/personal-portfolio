# Pixel Portfolio — Design System

*A Minecraft-inspired visual language for Zyron Neil Bautista's developer portfolio.*

## Concept

The page reads as a clean, modern portfolio first and a pixel-art homage second. Layout, grid, and body copy stay conventional and easy to scan — the kind of thing a recruiter can skim in ten seconds. The Minecraft language lives in the details: chunky bevelled buttons, stepped pixel corners, an earthy grass/dirt/stone/gold palette, and one genuine signature move — **the projects grid is built like an inventory**, because "things I've built" and "items I've collected" are the same idea wearing different clothes.

Everything else stays quiet on purpose. One bold idea, executed well, beats five competing ones.

## Design Tokens at a Glance

| Token | Value |
|---|---|
| Primary | Grass `#5C8A3A` |
| Secondary | Dirt `#7A4F2B` |
| Ink | Stone Ink `#3D3B38` |
| Background | Parchment `#F7F3E8` |
| Section wash | Sky `#CFE8F5` |
| Accent | Gold `#E8B33D` |
| Display font | Pixelify Sans |
| Body font | Inter |
| Utility font | Space Mono |
| Spacing base | 8px |
| Signature | Projects section styled as an inventory grid |

## Color System

### Core palette

| Name | Hex | Use |
|---|---|---|
| Grass | `#5C8A3A` | Brand accent — links, active icons, small highlights |
| Dirt | `#7A4F2B` | Secondary accent — hover warmth, outlines |
| Stone Ink | `#3D3B38` | All body text, primary borders |
| Stone Muted | `#928E86` | Dividers, disabled states, secondary text |
| Sky | `#CFE8F5` | Alternate section background |
| Parchment | `#F7F3E8` | Base page background |
| Gold | `#E8B33D` | Highlights, focus rings, active-state ticks |

### Functional (derived) colors

| Name | Hex | Use |
|---|---|---|
| Grass Deep | `#3E6B27` | Primary button fill (text-safe darker grass) |
| Dirt Deep | `#52341B` | Hover state for dirt-toned elements |
| Redstone | `#A62F27` | Error / destructive states only — never decorative |
| Diamond | `#3EC6C0` | Success / confirmation states only — never decorative |

### Contrast reference

Approximate — verify with a contrast checker (e.g. WebAIM) before shipping.

| Pairing | Ratio | Passes |
|---|---|---|
| Stone Ink text on Parchment | ~10:1 | AA + AAA body text |
| Parchment text on Grass Deep (buttons) | ~6.3:1 | AA |
| Parchment text on Redstone (errors) | ~6.9:1 | AA |
| Stone Ink text on Diamond (success) | ~5.3:1 | AA |
| Grass on Parchment | ~3.7:1 | Large text / icons / UI only — **not** body copy |

Rule of thumb: paragraph text is always Stone Ink. Grass, Dirt, and Gold are for large text, icons, borders, and fills — never small text-on-background pairs.

## Typography

Three roles, used deliberately — the pixel face never carries a paragraph.

| Role | Font | Where |
|---|---|---|
| Display | **Pixelify Sans** | H1–H3, nav monogram, section labels, button text |
| Body | **Inter** | Paragraphs, descriptions, form labels |
| Utility | **Space Mono** | Tech-stack tags, dates, inventory tooltip stats |

### Type scale

| Style | Size | Font / weight | Line height |
|---|---|---|---|
| Display XL (hero name) | 3rem / 48px | Pixelify Sans SemiBold | 1.2 |
| Display L (section header) | 2rem / 32px | Pixelify Sans SemiBold | 1.25 |
| Display M (card title, nav) | 1.25rem / 20px | Pixelify Sans Medium | 1.3 |
| Body L (intro line) | 1.125rem / 18px | Inter Regular | 1.6 |
| Body (paragraph) | 1rem / 16px | Inter Regular | 1.6 |
| Body S (captions) | 0.875rem / 14px | Inter Regular | 1.5 |
| Mono (tags, stats) | 0.8125rem / 13px | Space Mono Regular/Bold | 1.4 |

Notes:
- Give Pixelify Sans a touch of positive letter-spacing (+0.02em to +0.04em) below 24px — pixel faces get muddy without it.
- If you want to push further, **Press Start 2P** is a true 8-bit face you could use for a tiny badge (2–4 characters, 14px+) — optional, and only ever for a couple of characters. It's too aggressive for anything longer.
- Pixelify Sans never appears below 18px, and never in a paragraph.

## Spacing & Grid

8px base unit — it also happens to be the natural rhythm for anything "pixel," so the theming and the a11y spacing guidance point the same direction.

`4 · 8 · 16 · 24 · 32 · 48 · 64 · 96` (px)

- Container max-width: 1120px
- Gutter: 24px mobile → 48px desktop
- Breakpoints: 375 / 768 / 1024 / 1440

## Layout

```
┌──────────────────────────────────────────────┐
│  [ZN]          About  Projects  Skills  ✉     │  quiet nav, gold tick on active
├──────────────────────────────────────────────┤
│                                                │
│   Hi, I'm Zyron Neil Bautista                 │  Pixelify Sans headline
│   ▄▄▄▄▄▄  (pixel underline: grass → dirt)     │
│   CS student & creative developer.            │  Inter body
│                                                │
│   [ View Projects ]   [ Contact ]             │  chunky bevel buttons
│                                                │
├──────────────────────────────────────────────┤
│  PROJECTS                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │ item │ │ item │ │ item │ │ item │          │  inventory slots —
│  │ slot │ │ slot │ │ slot │ │ slot │          │  see Signature below
│  └──────┘ └──────┘ └──────┘ └──────┘          │
├──────────────────────────────────────────────┤
│  SKILLS                                       │
│  [ ][ ][ ][ ][ ][ ][ ][ ]                     │  hotbar-style slot row
├──────────────────────────────────────────────┤
│  CONTACT                                      │
│  chunky-bordered form, primary-style submit   │
└──────────────────────────────────────────────┘
```

The section order (hero → projects → skills → contact) is the standard scanning path recruiters actually use — the distinctiveness lives in execution, not in reinventing that order.

## Signature: Projects as Inventory

This is the one place to spend real design effort. Each project is an item slot, not a generic card:

- **Border color signals category**, and is always paired with a small mono label so meaning isn't color-only:
  - Stone Muted border + "PROJECT" — standard work
  - Gold border + "FEATURED" — flagship pieces
  - Diamond border + "EXPERIMENTAL" — technical showcases
- **Thumbnail** loads slightly soft and sharpens in over ~200ms (skip straight to sharp under reduced-motion).
- **Hover / focus** lifts the slot 4px, drops a hard pixel shadow, and slides up a tooltip panel: one-line description, Space Mono tech tags, a "View →" link — the same beat as inspecting an item.
- Keep the mechanic here. Don't also turn the nav into a hotbar or add a custom cursor — the inventory grid is the moment people remember; the rest of the page should stay quiet so it lands.

## Component Patterns

### Buttons (primary)
- Fill `--color-grass-deep`, text Parchment, Inter SemiBold
- Border 3px solid Stone Ink, hard shadow `4px 4px 0 Stone Ink` (no blur)
- Hover: lift 2px, shadow grows to 6px
- Press: translate to match shadow offset so it visually "pushes in," 100ms ease-out
- Min 44×44px touch target; focus-visible = 3px Gold outline, 2px offset

### Buttons (secondary)
- Transparent fill, Stone Ink border and text, same press mechanics

### Cards & pixel corners
Stepped corners instead of border-radius:
```css
.pixel-corners {
  clip-path: polygon(
    8px 0, calc(100% - 8px) 0, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 0 calc(100% - 8px), 0 8px
  );
}
```
2px Stone Muted border, Parchment fill, same hard-shadow hover as buttons.

### Tags / skill chips
Small stepped-corner rectangles (no pill shapes — circles fight the pixel language), Space Mono label, border color-coded by category.

### Skills hotbar
Row of 48–56px square slots, Stone Muted border. Hover: Gold border + scale(1.05). Wraps on mobile, stays square.

### Nav
Sticky, Parchment fill, 2px Stone Muted bottom border. Active link gets a 3px Gold underline "tick." You've already got a ZN monogram from your other portfolio work — worth reusing here, just reset in Pixelify Sans pixel-blocks so it matches this system.

### Forms
Visible labels above fields (never placeholder-only). 2px Stone Muted border, Parchment fill. Focus: border shifts to Grass Deep + 2px Gold glow. Submit reuses the primary button. Success state is a small achievement-toast slide-in (Stone Ink background, Gold border) — a real confirmation, not decoration, so the game reference earns its place.

## Motion

- Respect `prefers-reduced-motion` everywhere — see the CSS below
- Button press: 100–120ms ease-out
- Card/slot hover lift: 150ms ease-out
- Tooltip reveal: 150–200ms ease-out
- **No full-page load-in sequence, no scroll-triggered "world build" animation.** "Balanced" means motion serves specific interactions, not an ambient show — that restraint is what keeps this from reading as generic AI output.

## Accessibility

- Body copy is always Stone Ink — Grass/Dirt/Gold are for large text, icons, and fills only (see contrast table above)
- Pixelify Sans: 18px minimum, never body text; Press Start 2P (if used at all): 2–4 characters only
- Inventory rarity borders always pair with a text label, never color alone
- Focus-visible outline (3px Gold, 2px offset) on every interactive element — never remove it
- Touch targets ≥44×44px, ≥8px gap between adjacent tappable elements
- Form fields keep real `<label>` elements, errors appear next to the field they belong to

## Do / Don't

**Do**
- Treat Minecraft's color and material language (grass, dirt, stone, gold) as inspiration for palette and metaphor
- Keep the grid, spacing, and body copy modern and easy to scan
- Reuse your existing ZN monogram, reinterpreted in blocky pixel form

**Don't**
- Use Mojang's actual textures, sprites, the Minecraft logo/wordmark, or their proprietary font — this system is built from scratch in CSS/SVG; it's an homage, not a reproduction
- Let Pixelify Sans (or Press Start 2P) creep into paragraph text
- Stack more "bold" ideas on top of the inventory grid — hotbar-style skills and the achievement toast are already the supporting cast; adding a custom cursor or an intro animation on top would compete with the signature instead of serving it

## Implementation Starter

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

```css
:root {
  /* Color — core */
  --color-grass: #5C8A3A;
  --color-dirt: #7A4F2B;
  --color-stone-ink: #3D3B38;
  --color-stone-muted: #928E86;
  --color-sky: #CFE8F5;
  --color-parchment: #F7F3E8;
  --color-gold: #E8B33D;

  /* Color — functional */
  --color-grass-deep: #3E6B27;
  --color-dirt-deep: #52341B;
  --color-error: #A62F27;
  --color-success: #3EC6C0;

  /* Type */
  --font-display: 'Pixelify Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'Space Mono', ui-monospace, monospace;

  /* Spacing (8px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;

  /* Hard pixel shadows — offset, no blur */
  --shadow-pixel-sm: 3px 3px 0 var(--color-stone-ink);
  --shadow-pixel-md: 4px 4px 0 var(--color-stone-ink);
  --shadow-pixel-lg: 6px 6px 0 var(--color-stone-ink);

  --ease-pixel: cubic-bezier(0.2, 0.7, 0.3, 1);
  --duration-press: 100ms;
  --duration-hover: 150ms;
}

.pixel-corners {
  clip-path: polygon(
    8px 0, calc(100% - 8px) 0, 100% 8px,
    100% calc(100% - 8px), calc(100% - 8px) 100%,
    8px 100%, 0 calc(100% - 8px), 0 8px
  );
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
