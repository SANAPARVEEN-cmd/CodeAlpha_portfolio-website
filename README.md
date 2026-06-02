# Sana Parveen — Portfolio Website

A modern, animated, single-page portfolio built with plain HTML/CSS/JavaScript.

## Features
- Responsive layout (mobile navbar toggle)
- Smooth scrolling + active section highlighting
- Loading screen
- Custom animated cursor
- Particle background (tsParticles)
- Hero animations (GSAP)
- Scroll reveal animations (GSAP ScrollTrigger)
- AOS (Animate On Scroll)
- Typed text effect (Typed.js)
- 3D tilt effect (VanillaTilt)
- Project details drawer modal
- Theme toggle (dark/light) with `localStorage`
- Keyboard accessibility for interactive cards

## Project Structure
```
.
├── index.html
├── README.md
├── css/
│   ├── animation.css
│   ├── style.css
│   └── variable.css
└── js/
    ├── animations.js
    ├── cursor.js
    ├── main.js
    ├── particles.js
    └── tilt.js
```

## Live Demo
Open `index.html` in a browser.

## Getting Started
### Option 1: No build needed (recommended)
1. Open `index.html` directly in your browser.
2. All scripts/styles are loaded via CDN except local JS/CSS.

### Option 2: Run with a local server (recommended for best results)
If you want to avoid any browser restrictions related to local files, use any static server, for example:
- VS Code: **Live Server** extension
- Or run a simple local server from your preferred tooling

## External Libraries Used (CDN)
- [Google Fonts](https://fonts.googleapis.com/) (Outfit)
- [Font Awesome](https://cdnjs.cloudflare.com/) (icons)
- [AOS](https://unpkg.com/aos@2.3.1/) 
- [Typed.js](https://cdn.jsdelivr.net/npm/typed.js/)
- [GSAP](https://cdnjs.cloudflare.com/) + `ScrollTrigger`
- [tsParticles](https://github.com/matteobruni/tsparticles)
- [VanillaTilt](https://github.com/gijsroge/vanilla-tilt)

## How It Works (Key Files)
- `index.html`
  - Page layout: header, hero, sections (About/Skills/Projects/Contact), footer
  - Loads CSS from `css/*` and JS from `js/*`
  - Loads CDN dependencies (GSAP, AOS, Typed.js, tsParticles, VanillaTilt)
- `js/main.js`
  - Loader fade-out
  - Active navbar link on scroll
  - Mobile menu toggle
  - Theme toggle (stores theme in `localStorage`)
  - Skills interaction (keyboard + click)
  - Project drawer modal (open/close + Escape/overlay click)
- `js/animations.js`
  - Typed text initialization
  - AOS initialization
  - GSAP hero entrance animations
  - GSAP scroll reveal animations
- `js/cursor.js`
  - Smooth custom cursor following mouse
  - Hover/click states
  - Respects `prefers-reduced-motion`
- `js/particles.js`
  - tsParticles background setup
- `js/tilt.js`
  - VanillaTilt initialization on `.tilt` elements
  - Disables tilt on smaller screens

## Notes / Customization
- **Update profile images**: replace `profile 2.jpeg` and `profile picture.jpeg`
- **Change skills**: edit the skill cards inside the `#skills` section in `index.html`
- **Change projects**: edit the project cards inside the `#projects` section in `index.html`
- **Typed phrases**: edit `phrases` in `js/animations.js`
- **Particles theme**: edit particle colors in `js/particles.js`

## Browser Support
Modern browsers (Chrome, Edge, Firefox, Safari) are recommended.

## License
Free to use as a personal/portfolio template. Add your preferred license text if you publish it publicly.

