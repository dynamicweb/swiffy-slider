# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Swiffy Slider is a lightweight (~3.5KB gzipped), zero-dependency vanilla JavaScript carousel/slider library. It leverages native browser scroll behavior, CSS Grid, and scroll-snap for touch/mobile performance.

## Commands

```bash
npm install          # install dev deps (esbuild, lightningcss-cli, concurrently)
npm run build        # one-off build → dist/ and docs/assets/
npm run watch        # rebuild on source changes
npm run dev          # watch + serve docs/ on http://localhost:5501
```

## Build System

[build.js](build.js) orchestrates the entire pipeline — no webpack/rollup/vite:

- **esbuild** minifies `src/*.js` → `dist/js/` (ESM, sourcemaps)
- **lightningcss** minifies `src/swiffy-slider.css` → `dist/css/` (autoprefixes, sourcemaps)
- After each build, output files are copied to `docs/assets/` for the dev site
- `dist/js` and `dist/css` are deleted and recreated on every build

The `.d.ts` files are hand-written and live in `src/` — the build copies them to `dist/js/`. Update them manually when the JS API changes.

## Source Files

- [src/swiffy-slider.js](src/swiffy-slider.js) — Core library (ESM, named export `swiffyslider`)
- [src/swiffy-slider-extensions.js](src/swiffy-slider-extensions.js) — Optional mouse drag extension (ESM, named export `swiffysliderextensions`)
- [src/swiffy-slider.css](src/swiffy-slider.css) — Source CSS
- [src/swiffy-slider.d.ts](src/swiffy-slider.d.ts) — Hand-written TypeScript declarations (copied to `dist/js/` by the build)
- [src/swiffy-slider-extensions.d.ts](src/swiffy-slider-extensions.d.ts) — Hand-written TypeScript declarations (copied to `dist/js/` by the build)

## Architecture

### JavaScript

ESM only — no IIFE, no `window.swiffyslider` global, no auto-initialization. Always call `swiffyslider.init()` explicitly.

The library uses two private helpers to reduce repetition:
- `_c(el)` — returns `el.querySelector(".slider-container")`
- `_has(el, cls)` — returns `el.classList.contains(cls)`

Core public methods:
- `init(rootElement)` — scans for `.swiffy-slider` elements and calls `initSlider` on each
- `initSlider(sliderElement)` — attaches nav click listeners, indicator click + scroll listeners, starts autoplay and IntersectionObserver if configured via CSS classes
- `slide(el, next)` / `slideTo(el, index)` — programmatic navigation
- `autoPlay(el, timeout, autopause)` — auto-scroll; autopause stops on mouseover/touchstart, resumes on mouseout/touchend by re-calling `autoPlay` recursively
- `handleIndicators(el)` — updates active indicator dot based on scroll position percentage
- `onSlideEnd(el, delegate, timeout)` — debounced scroll-end handler
- `setVisibleSlides(el, threshold)` — IntersectionObserver that toggles `.slide-visible` and `.slider-item-first-visible` / `.slider-item-last-visible`

### CSS

All visual configuration is done via CSS classes on the `.swiffy-slider` wrapper — no JS config objects. Key CSS variables:
- `--swiffy-slider-item-width`, `--swiffy-slider-item-gap`, `--swiffy-slider-item-reveal`
- `--swiffy-slider-item-ratio` (presets: `32x9`, `21x9`, `16x9`, `4x3`, `2x1`, `1x1`, `3x4`, `contain`)
- `--swiffy-slider-snap-align`, `--swiffy-slider-nav-*`, `--swiffy-slider-animation-*`

Media queries use modern range syntax (`width >= 62rem`, `width < 62rem`). Breakpoints: 62rem (tablet) and 48rem (mobile).

The slider markup pattern:
```html
<div class="swiffy-slider [modifier-classes]">
  <ul class="slider-container">
    <li><!-- slide content --></li>
  </ul>
  <button class="slider-nav"></button>              <!-- prev -->
  <button class="slider-nav slider-nav-next"></button>  <!-- next -->
  <div class="slider-indicators">
    <button></button><!-- one per slide -->
  </div>
</div>
```

### Distribution and Publishing

The npm package exports (all ESM, from `dist/`):
- `.` → `dist/js/swiffy-slider.js` + `dist/js/swiffy-slider.d.ts`
- `./extensions` → `dist/js/swiffy-slider-extensions.js` + `dist/js/swiffy-slider-extensions.d.ts`
- `./css` → `dist/css/swiffy-slider.css`

Published files: `dist/{css,js}/*.{css,js,map,d.ts}` and `src/*.{css,js}`.

Publishing is automated via GitHub Actions ([.github/workflows/publish.yml](.github/workflows/publish.yml)) — pushing a version tag triggers `npm publish` using the `NPM_TOKEN` secret. **Do not run `npm publish` manually.**

To publish a new version:
1. Bump `version` in `package.json` and update `Changelog.md`
2. Commit and push to `main`
3. Tag the commit: `git tag v2.x.x && git push origin v2.x.x`

A separate CI workflow ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs `npm run build` on every PR to `main`.

### Docs Site

The `docs/` folder is the documentation website, served at `http://localhost:5501` during development. It uses the built assets from `docs/assets/` (copied there by the build). All HTML files in `docs/` load the slider via `<script type="module">` with a dynamic `import()`.

When updating the JS API or CSS classes, update all of:
1. `src/` source files
2. `dist/js/*.d.ts` declaration files
3. `docs/docs/index.html` — JS API reference and loading examples
4. `README.md` — relevant sections
5. `Changelog.md`
