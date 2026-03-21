# Contributing to Swiffy Slider

Contributions are welcome. Please open an issue before submitting a PR for anything beyond small fixes, so we can align on the approach first.

## Guiding principles

- **Performance and file size have the highest priority.** Every byte added to the core needs to justify itself.
- **The library covers the most common use cases.** If fewer than ~50% of users would need a feature, it probably belongs in an example or extension rather than the core.
- **Modern browsers only.** No polyfills or legacy workarounds.

## Getting started

```bash
git clone https://github.com/dynamicweb/swiffy-slider.git
cd swiffy-slider
npm install
npm run dev       # watch + local docs site at http://localhost:5501
```

Source files are in `src/`. Changes are automatically rebuilt and copied to `docs/assets/` so the local site reflects your edits immediately.

## Submitting a PR

1. Fork the repo and create a branch from `main`
2. Make your changes in `src/`
3. Test against the examples in `docs/` using `npm run dev`
4. If you changed the public JS API, update `dist/js/*.d.ts` and `docs/docs/index.html`
5. Update `Changelog.md`
6. Submit a PR with a clear description of what changed and why

## What we are looking for

- Bug fixes with a clear reproduction case
- Performance improvements with measurable impact
- Documentation improvements
- Framework wrappers (React, Vue, Svelte) as separate packages

## Reporting bugs

Use the [bug report template](https://github.com/dynamicweb/swiffy-slider/issues/new?template=bug_report.md). Include a minimal reproduction — a CodePen or JSFiddle is ideal.
