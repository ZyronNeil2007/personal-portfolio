# ⚔️ Zyron Neil Bautista — Personal Portfolio v3.2.0 (Minecraft.net Dark Edition)

> A high-performance personal portfolio built with React, Vite, Tailwind CSS, and custom Minecraft.net UI/UX design language. Features a 3D animated Minecraft chest portrait hero, glass-dark navigation, and custom pixel-corner design architecture.

![Portfolio Preview](./Gemini_Generated_Image_fnpzccfnpzccfnpz_.png)

---

## Live Site

**[Zyron Neil's Personal Portfolio](https://personalporfolioneil.netlify.app/)** — hosted on GitHub Pages & Netlify

---

## Features (v3.2.0 Minecraft.net UI/UX Overhaul)

- ** 3D Animated Minecraft Chest Hero** — Interactive 3D CSS chest scene in the hero section:
  - **Animated Open Lid**: Rotates back `-108deg` via 3D CSS `rotateX` on page load.
  - **Layered Emerge Effect**: Photo stands inside the chest with Z-index masking (`z:20` chest front > `z:10` photo > `z:1` interior back wall).
  - **Floating Particles**: 5 animated sparkle particles (Gold, Emerald, Diamond Blue) floating upward.
  - **GSAP Scene Float**: Smooth floating movement for the entire chest scene.
- ** Official Minecraft.net Palette** — Sleek dark theme featuring near-black canvas (`#0f0f0f` / `#141414`), dark card surfaces (`#1c1c1c`), vibrant MC Green (`#62B814`), MC Gold (`#FFC42B`), and MC Diamond Blue (`#70DFFF`).
- **🔮 Glass-Dark Sticky Header** — Translucent dark navigation bar with `backdrop-filter: blur(16px)`, pixel block ZN logo, MC Green active underline indicators, and responsive mobile overlay.
- **⚡ Chromatic Pixel Glitch Title** — Dual-layer clip-rect glitch animation on the hero headline with multi-hue text-shadow cycling in MC palette colors (`Pixelify Sans`).
- **🎮 Inventory Project Grid** — Signature slot hotbar view with rarity-based color borders & glow effects:
  - 👑 **Gold Border & Badge (`#FFC42B`)**: Featured Core Projects
  - 🪨 **Stone Border & Badge (`#878787`)**: Full-Stack / Standard Projects
  - 💎 **Diamond Blue Border & Badge (`#70DFFF`)**: Experimental / Labs
- **🎯 Hotbar Skills Arsenal** — Stepped pixel slots displaying technical proficiency across HTML, CSS, JS, React, Python, Java, C++, MySQL, Git, and Figma with green glow hover states.
- **🌿 Minecraft Timeline Spine** — Vertical journey cards with stepped pixel corners and green-to-blue gradient connector path.
- **🖼️ Case Study Modals & Dark Lightbox** — Dark-themed interactive pixel-corner popups with deep dive insights and full-screen image lightbox.
- **📱 Responsive Mobile Navigation** — Mobile drawer menu with pixel art icons, dark backdrop blur, and green action highlights.
- **☄️ Matter.js Anti-Gravity Easter Egg** — Click logo 3 times to trigger interactive zero-gravity physics!

---

## 🛠️ Tech Stack & Typography

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://reactjs.org/) & [Vite 5](https://vitejs.dev/) |
| **Design Language** | [Minecraft.net UI/UX](https://www.minecraft.net) Brand Identity |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) & Custom MC Dark Tokens |
| **Icons** | [pixelarticons](https://pixelarticons.com/) & Hand-crafted 16x16 Pixel SVGs |
| **Headings Font** | [Pixelify Sans — Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans) |
| **Body Font** | [Inter — Google Fonts](https://fonts.google.com/specimen/Inter) |
| **Code / Tags Font** | [Space Mono — Google Fonts](https://fonts.google.com/specimen/Space+Mono) |
| **Physics & Motion** | [GSAP 3](https://gsap.com/) & [Matter.js](https://brm.io/matter-js/) |

---

## 🎨 Design System & Color Tokens

```css
/* Minecraft.net Dark Theme Tokens */
--mc-bg:           #0f0f0f;        /* Main near-black background */
--mc-bg-mid:       #141414;        /* Alternate section background */
--mc-surface:      #1c1c1c;        /* Card surface */
--mc-surface-2:    #242424;        /* Elevated surface */
--mc-surface-3:    #2e2e2e;        /* Hover / active state surface */

--mc-green:        #62B814;        /* Primary CTA Green */
--mc-green-bright: #86D562;        /* Hover Green */
--mc-green-deep:   #4a8e0e;        /* Pressed Green */
--mc-gold:         #FFC42B;        /* Featured Rarity Gold */
--mc-blue:         #70DFFF;        /* Experimental Rarity Diamond Blue */

--mc-text:         #FFFFFF;        /* Primary text / Headings */
--mc-text-2:       #C8C8C8;        /* Body text */
--mc-text-muted:   #878787;        /* Secondary text / Captions */
```

### Pixel Corner Clip-Path Formula
```css
clip-path: polygon(
  8px 0, calc(100% - 8px) 0, 100% 8px,
  100% calc(100% - 8px), calc(100% - 8px) 100%,
  8px 100%, 0 calc(100% - 8px), 0 8px
);
```

---

## 📁 Project Structure

```
zyron-portfolio/
├── index.html          # Entry HTML + Google Fonts preconnect
├── src/                # React source code
├── components/         # Reusable React components
│   ├── Navbar.jsx        # Glass-dark sticky header with ZN block logo
│   ├── PremiumHero.jsx   # 3D Minecraft Chest Hero + Chromatic Glitch Title
│   ├── Journey.jsx       # Dark timeline section
│   ├── MobileNavbar.jsx  # Floating bottom pixel pill
│   ├── PixelIcon.jsx     # Pixel icon manager & SVG renderer
│   └── StickyScroll.jsx  # Parallax hero scroll transition
├── App.jsx         # Dark Inventory grid, Hotbar skills, Bento About & Contact
├── index.css       # MC.net design tokens, 3D chest styles, pixel corners & glitch animations
└── main.jsx        # Entry point + pixelarticons font import
├── package.json        # v3.2.0 dependencies
└── README.md           # Documentation
```

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

```bash
# Clone the repository
git clone https://github.com/ZyronNeil2007/personal-portfolio.git

# Navigate to project directory
cd personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Changelog

### 🚀 **v3.2.0** — *2026-08-04* (Minecraft.net UI/UX & 3D Chest Edition)
- **Added**: 3D Animated Minecraft Chest Hero section with CSS `rotateX` opening lid (-108deg), Z-indexed photo emerging effect, and floating sparkle particles (Gold, Emerald, Diamond Blue).
- **Added**: Full Minecraft.net dark theme token system (`#0f0f0f` background, `#1c1c1c` surfaces, `#62B814` green CTAs, `#FFC42B` gold badges, and `#70DFFF` diamond blue highlights).
- **Added**: Translucent glass-dark sticky header (`Navbar.jsx`) with pixel block ZN logo, green active link indicators, and dark mobile overlay.
- **Added**: MC Green glow shadow utility (`--shadow-green-glow`) and pulse animation keyframes for interactive elements.
- **Updated**: Chromatic glitch hero title animation updated to cycle through Minecraft color tokens.
- **Updated**: Bento About Me section, Technical Arsenal, Selected Work inventory grid, Contact section, and Footer upgraded to dark theme with high contrast text.
- **Updated**: Project detail modal and visual design lightbox overlays re-styled with dark backdrop blur (`rgba(0,0,0,0.88)`).

### 📦 **v3.1.0** — *2026-08-04* (Pixel Edition Release)
- **Added**: Minecraft-inspired Parchment (`#F7F3E8`), Grass (`#5C8A3A`), Dirt (`#7A4F2B`), Gold (`#E8B33D`), and Stone Ink (`#3D3B38`) color token system.
- **Added**: Multi-color chromatic glitch hero headline animation featuring dual-layer clip-rect keyframes and animated hue-cycling text shadows.
- **Added**: Project Inventory Grid with Gold (Featured), Stone (Full-Stack), and Emerald (Labs) rarity tiering system.
- **Added**: Technical Hotbar skills section displaying proficiency across 10 key tools and languages.
- **Added**: `PixelIcon` unified icon component leveraging `pixelarticons` font and hand-drawn 16x16 pixel-grid SVGs for social platforms.
- **Added**: Universal CSS `clip-path` polygon bevel system for pixel-corner buttons, cards, and modal popups.

### 📦 **v3.0.0** — *2026-06-01* (React & Vite Architecture Migration)
- **Added**: Complete migration from vanilla static HTML/CSS to React 18 & Vite 5 architecture.
- **Added**: Matter.js anti-gravity zero-gravity physics easter egg simulation.
- **Added**: Bento-grid About Me section and interactive case study project modals.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<p align="center">Designed & Developed by <strong>Zyron Neil Bautista</strong> © 2026</p>
