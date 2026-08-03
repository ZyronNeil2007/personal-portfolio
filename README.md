# ⚔️ Zyron Neil Bautista — Personal Portfolio v3.1.0 (Pixel Edition)

> A clean, modern portfolio first and pixel-art homage second. Built with React, Vite, Tailwind CSS, and custom pixel-corner architecture.

![Portfolio Preview](./Gemini_Generated_Image_fnpzccfnpzccfnpz_.png)

---

## 🔗 Live Site

**[Zyron Neil's Personal Portfolio](https://personalporfolioneil.netlify.app/)** — hosted on GitHub Pages & Netlify

---

## ✨ Features (v3.1.0 Pixel Overhaul)

- **🎨 Parchment & Earth Pixel Aesthetic** — Warm parchment canvas (`#F7F3E8`) with Minecraft-inspired grass (`#5C8A3A`), dirt (`#7A4F2B`), gold (`#E8B33D`), and stone ink (`#3D3B38`) color palette.
- **⚡ Multi-Color Chromatic Glitch Hero** — Dual-layer clip-rect glitch animation on the hero typewriter title with multi-hue text-shadow cycling (`Pixelify Sans`).
- **📦 Project Inventory Grid** — Signature 8-slot hotbar project view with rarity-based color borders:
  - 👑 **Gold Border & Badge**: Featured Core Projects
  - 🪨 **Stone Border & Badge**: Full-Stack / Standard Projects
  - 💎 **Emerald Border & Badge**: Experimental / Labs
- **🎯 Pixel Hotbar Skills Arsenal** — Stepped pixel slots displaying technical proficiency across HTML, CSS, JS, React, Python, Java, C++, MySQL, Git, and Figma.
- **👾 100% Pixel Art Icons** — Integrated `pixelarticons` font system alongside hand-crafted 16x16 pixel grid SVGs for social platforms (GitHub, Instagram, Facebook, TikTok).
- **🌿 Grass-to-Dirt Timeline Spine** — Vertical journey cards with stepped pixel corners and grass-to-dirt gradient connector path.
- **🌌 Sticky Sky-Scroll Experience** — Parallax scrolling transition into sky-blue project & journey environments (`#CFE8F5`).
- **🖼️ Case Study Modals & Lightbox** — Interactive pixel-corner popups with deep dive insights and full-screen image lightbox.
- **📱 Pixel Mobile Navigation** — Bottom floating pill navigation with active gold tick indicator and pixel FAB search button.
- **☄️ Matter.js Anti-Gravity Easter Egg** — Click logo 3 times to trigger interactive zero-gravity physics!

---

## 🛠️ Tech Stack & Typography

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://reactjs.org/) & [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) & Custom Pixel Tokens |
| **Icons** | [pixelarticons](https://pixelarticons.com/) & Custom 16x16 Pixel SVGs |
| **Headings Font** | [Pixelify Sans — Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans) |
| **Body Font** | [Inter — Google Fonts](https://fonts.google.com/specimen/Inter) |
| **Code / Tags Font** | [Space Mono — Google Fonts](https://fonts.google.com/specimen/Space+Mono) |
| **Physics / Motion** | [Matter.js](https://brm.io/matter-js/) & [GSAP](https://gsap.com/) |

---

## 🎨 Design System

```css
/* Color Tokens */
--color-parchment:   #F7F3E8;   /* Main canvas background */
--color-grass:       #5C8A3A;   /* Primary accent */
--color-grass-deep:  #3E6B27;   /* Deep accent */
--color-dirt:        #7A4F2B;   /* Secondary accent */
--color-gold:        #E8B33D;   /* Highlight / Rarity */
--color-stone-ink:   #3D3B38;   /* Primary text / Borders */
--color-stone-muted: #928E86;   /* Secondary text */
--color-sky:         #CFE8F5;   /* Secondary canvas bg */
```

### Pixel Corner Clip-Path Formula
```css
clip-path: polygon(
  6px 0, calc(100% - 6px) 0, 100% 6px,
  100% calc(100% - 6px), calc(100% - 6px) 100%,
  6px 100%, 0 calc(100% - 6px), 0 6px
);
```

---

## 📁 Project Structure

```
zyron-portfolio/
├── index.html          # Entry HTML + Google Fonts preconnect
├── src/                # React source code
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx        # Parchment top nav with ZN logo
│   │   ├── PremiumHero.jsx   # Multi-color glitch hero
│   │   ├── Journey.jsx       # Sky-blue timeline section
│   │   ├── MobileNavbar.jsx  # Floating bottom pixel pill
│   │   ├── PixelIcon.jsx     # Pixel icon manager & SVG renderer
│   │   └── StickyScroll.jsx  # Parallax hero scroll transition
│   ├── App.jsx         # Inventory grid, Hotbar skills, Bento About & Contact
│   ├── index.css       # Design tokens, pixel corner utilities & glitch keyframes
│   └── main.jsx        # Entry point + pixelarticons font import
├── package.json        # v3.1.0 dependencies
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

### 🚀 **v3.1.0** — *2026-08-04* (Pixel Edition Release)
- **Added**: Minecraft-inspired Parchment (`#F7F3E8`), Grass (`#5C8A3A`), Dirt (`#7A4F2B`), Gold (`#E8B33D`), and Stone Ink (`#3D3B38`) color token system.
- **Added**: Multi-color chromatic glitch hero headline animation featuring dual-layer clip-rect keyframes and animated hue-cycling text shadows.
- **Added**: Project Inventory Grid with Gold (Featured), Stone (Full-Stack), and Emerald (Labs) rarity tiering system.
- **Added**: Technical Hotbar skills section displaying proficiency across 10 key tools and languages.
- **Added**: `PixelIcon` unified icon component leveraging `pixelarticons` font and hand-drawn 16x16 pixel-grid SVGs for social platforms.
- **Added**: Universal CSS `clip-path` polygon bevel system for pixel-corner buttons, cards, and modal popups.
- **Fixed**: Hero glitch line-wrapping layout bug by applying `white-space: nowrap` across main text and pseudo-element ghost layers.
- **Updated**: Top navigation with ZN monogram, gold active tick indicator, and parchment sticky container.
- **Updated**: Mobile floating nav pill with pixel art icons and gold active tick.
- **Updated**: Production build optimization (`✓ built in 25.88s`).

### 📦 **v3.0.0** — *2026-06-01* (React & Vite Architecture Migration)
- **Added**: Complete migration from vanilla static HTML/CSS to React 18 & Vite 5 architecture.
- **Added**: Liquid Glass 2.0 Apple-inspired glassmorphism system with ambient radial glows.
- **Added**: Matter.js anti-gravity zero-gravity physics easter egg simulation.
- **Added**: Bento-grid About Me section and interactive case study project modals.

### 🛠️ **v2.0.0** — *2025-11-15* (Interactive Journey & Lightbox)
- **Added**: Vertical scrolling journey timeline component.
- **Added**: Full-screen image lightbox for visual design pubmats gallery.
- **Added**: Theme preference persistence via `localStorage`.

### 🌱 **v1.0.0** — *2025-04-10* (Initial Release)
- **Added**: First iteration of personal developer portfolio website.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<p align="center">Designed & Developed by <strong>Zyron Neil Bautista</strong> © 2026</p>
