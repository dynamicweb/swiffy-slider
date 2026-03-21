<p align="center">
  <a href="https://www.swiffyslider.com/">
    <img src="docs/assets/img/swiffysliderlogo/SwiffySliderLogoWhiteOnRed.svg" alt="Swiffy Slider Logo" width="300" height="100">
  </a>
</p>

<h3 align="center">Swiffy Slider</h3>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Super%20fast%20and%20lightweight%20slider%20and%20carousel%20in%20css%20and%20js&url=https://www.swiffyslider.com/&via=nicped&hashtags=javascript,carousel,slider,css,microfrontends,nodependencies,developers)

<p align="center">
  Super fast lightweight carousel and slider with touch for optimized websites running in modern browsers.
  <br>
  <a href="https://www.swiffyslider.com/docs/"><strong>Explore Swiffy Slider docs »</strong></a>
  <br>
  <br>
    <a href="https://www.swiffyslider.com/examples/">See examples</a>
  ·
  <a href="https://www.swiffyslider.com/configuration/">Visual carousel and slider configuration</a>
</p>

[![](https://data.jsdelivr.com/v1/package/npm/swiffy-slider/badge?style=rounded)](https://www.jsdelivr.com/package/npm/swiffy-slider)
![version](https://img.shields.io/badge/Version-2.0.0-green.svg)
[![npm version](https://img.shields.io/npm/v/swiffy-slider)](https://www.npmjs.com/package/swiffy-slider)
[![CSS gzip size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/css/swiffy-slider.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/css/swiffy-slider.css)
[![JS gzip size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/js/swiffy-slider.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/js/swiffy-slider.js)

<h2> Swiffy Slider</h2>

**Super fast carousel and slider with touch for optimized websites running in modern browsers.**

Modern browser offers really good options these days to create much better user experience for sliders and carousels than existing libraries offer. 

This project utilizes what is available in modern browsers resulting in a super lightweight and fast slider, greatly reducing the javascript footprint and increase performance to meet todays standards.

- Navigate with Touch, Keyboard, trackpad, pen and Mouse - because it is just browser scrolling
- Uses native browser scroll behavior, scroll-snap and CSS grid to provide the best mobile and touch experience
- Can run in CSS only mode - no js for even better performance
- SEO friendly - all content is in pure markup
- WCAG friendly - all content is in pure markup and can be annotated accordingly, supports tabbing, keyboard navigation, aria attributing and all what is needed.
- Setup is done in pure markup and css classes, no scripting required
- No js loading of slides, configuration or initialization
- Vanilla javascript, ESM only
- Very low overall footprint ~3.5kb in total (css+js gzip'ed)

<h2> Table of contents</h2>

- [Quick start](#quick-start)
    - [1. Add CSS and JS to website head section](#1-add-css-and-js-to-website-head-section)
    - [2. Add markup](#2-add-markup)
- [Additional installation options](#additional-installation-options)
- [Why Swiffy Slider](#why-swiffy-slider)
- [Features](#features)
- [Browser support](#browser-support)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
  - [Introduction](#introduction)
  - [Markup structure](#markup-structure)
  - [Slider options (CSS Classes)](#slider-options-css-classes)
    - [Slider wrapper](#slider-wrapper)
    - [Slider sections](#slider-sections)
    - [Slider options](#slider-options)
    - [Navigation options](#navigation-options)
    - [Indicator options](#indicator-options)
    - [Animation options](#animation-options)
    - [Extensions](#extensions)
  - [Javascript](#javascript)
  - [Javascript loading and binding](#javascript-loading-and-binding)
  - [TypeScript and IntelliSense](#typescript-and-intellisense)
  - [CSS variables](#css-variables)
  - [Safari smooth scrolling](#safari-smooth-scrolling)
- [Limitations](#limitations)
- [Migrating from v1](#migrating-from-v1)
- [Development](#development)
- [Contributing](#contributing)
- [Star gazers](#star-gazers)
- [Examples of sites using Swiffy Slider](#examples-of-sites-using-swiffy-slider)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)


## Quick start

#### 1. Add CSS and JS to website head section
```html
<script type="module">
    import { swiffyslider } from 'https://cdn.jsdelivr.net/npm/swiffy-slider@2.0.0/dist/js/swiffy-slider.js';
    window.addEventListener('load', () => swiffyslider.init());
</script>
<link href="https://cdn.jsdelivr.net/npm/swiffy-slider@2.0.0/dist/css/swiffy-slider.css" rel="stylesheet">
```

#### 2. Add markup
```html
<div class="swiffy-slider slider-item-helper">
    <ul class="slider-container">
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
    </div>
</div>
```
Call `swiffyslider.init()` after the DOM is ready to bind all `.swiffy-slider` instances.

## Additional installation options
- [Download the latest release](https://github.com/dynamicweb/swiffy-slider/releases/latest)
- Clone the repo: `git clone https://github.com/dynamicweb/swiffy-slider.git`
- Install with [npm](https://www.npmjs.com/): `npm install swiffy-slider`
- Install with [yarn](https://yarnpkg.com/): `yarn add swiffy-slider`

Loading via bundler (ESM)

```javascript
import { swiffyslider } from 'swiffy-slider';
import 'swiffy-slider/css';

window.addEventListener('load', () => swiffyslider.init());
```

Loading extensions (optional mouse drag support)

```javascript
import { swiffysliderextensions } from 'swiffy-slider/extensions';

window.addEventListener('load', () => swiffysliderextensions.init());
```

Read the [Getting started page](https://www.swiffyslider.com/docs/) for examples, configuration options and a visual configurator.

## Why Swiffy Slider

Most slider libraries ship a large JavaScript runtime that reimplements scrolling, snapping, and touch handling from scratch. Modern browsers already do all of this natively. Swiffy Slider is a thin layer of CSS and a small amount of JavaScript that wires up what the browser already provides.

| Library | JS size (gzip) |
|---|---|
| Swiper | ~40KB |
| Splide | ~11KB |
| Glide.js | ~7KB |
| **Swiffy Slider** | **~1.3KB** |

The result is better scroll performance (native momentum and snap), full accessibility via native focus/tab/keyboard, and no dependencies to maintain.

## Features

- Carousel - Slide any content. Images, cards, videos, text, banners, posters, anything markup
- Carousel - Slide using touch, keyboard, mouse or navigation buttons
- Carousel - 1, 2, 3, 4, 5 or 6 slides visible in the slider wrapper
- Carousel - snap to start or center slide items
- Carousel - Slide one item or entire page on navigate when showing more than one
- Carousel - Partially reveal next and previous (optional) slide to indicate touch scroll is available
- Carousel - Loop to start when slides end
- Navigation - 7 built in navigation styles for next and previous navigation in light or dark mode, 14 in total
- Navigation - Overlay or outside navigation options
- Navigation - Show navigation arrows on hover or always. Show on desktop, but not touch
- Indicators - 3 built in indicator styles; pin, dots or squares in light or dark mode
- Indicators - Overlay or outside location of indicators
- Indicators - Navigate to slide by clicking indicator
- Auto play - Automatically slide with specified interval
- Auto pause - Stop playing when mouse is hovering carousel or touch is used
- Animation - Add animations when slides slide into view
- Animation - Choose between 6 different animations
- Animation - Use normal, fast or slow animations
- Scripting - Automatic or manual initialization of slider instances using `swiffyslider.init` or `swiffyslider.initSlider`
- Scripting - Execute scripts when an item is done sliding using `swiffyslider.onSlideEnd`
- Scripting - Start and stop automatic sliding using script

## Browser support

Swiffy Slider requires CSS scroll-snap and CSS Grid, which are supported in all modern browsers. No IE support.

| Browser | Minimum version |
|---|---|
| Chrome | 69 |
| Firefox | 99 |
| Safari | 11 |
| Edge | 79 |

## What's included

Within the download you'll find the following directories and files. You'll see something like this:

```text
swiffy-slider/
├── dist/
│   ├── css/
│   │   ├── swiffy-slider.css
│   │   ├── swiffy-slider.css.map
│   ├── js/
│   │   ├── swiffy-slider.js
│   │   ├── swiffy-slider.js.map
│   │   ├── swiffy-slider.d.ts
│   │   ├── swiffy-slider-extensions.js
│   │   ├── swiffy-slider-extensions.js.map
│   │   ├── swiffy-slider-extensions.d.ts
├── src/
│   ├── swiffy-slider.js
│   ├── swiffy-slider-extensions.js
│   ├── swiffy-slider.css
```

All distributed files are ESM. [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) are included for use with browser developer tools.

## Bugs and feature requests

Have a bug or a feature request? [Check out the issues section](https://github.com/dynamicweb/swiffy-slider/issues) and see if your issue or idea is already created.
If your problem or idea is not addressed yet, [please open a new issue](https://github.com/dynamicweb/swiffy-slider/issues/new).

## Documentation

Swiffy slider documentation website is part of this repo and can be found in the docs folder. Visit the doc on our [github documentation page](http://www.swiffyslider.com)

### Introduction
Swiffy slider is a wrapper defined in html with slides, navigation and indicators as its children.

All options and behavior is controlled with css classes that is added to the wrapper. No js configuration.

The wrapper is the `.swiffy-slider` element - options to control layout and behavior of slides, navigation and indicators are added to this element.

### Markup structure
The slider markup is a `.swiffy-slider` wrapper that has 3 sections.
- One `.slider-container` that contains the slides
- Two `.slider-nav` buttons that is navigation buttons previous and next (optional)
- One `.slider-indicators` that contains the indicators (optional)
```html
<div class="swiffy-slider [slider options] [navigation options] [indicator options]" data-slider-nav-autoplay-interval="3000">
    <ul class="slider-container">
        <li>Slide 1</li>
        <li>Slide 2</li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>
    
    <div class="slider-indicators">
        <button class="active"></button>
        <button></button>                
    </div>    
</div>
```
This example uses ul>li for slides. Can also be i.e. div or other elements.
This example uses button for navigation. Could also be divs, but cannot be ul>li as that would be nested.
This example uses div>button for indicators but could be other elements, i.e. ul>li structure instead.
Wether to use buttons or div for the navigating elements, depends on how WCAG needs to be handled.

### Slider options (CSS Classes)

Options are the css classes that can be added to the `.swiffy-slider` element to control how the slider will look and behave. No config in JS or similar.

The example below use the `.slider-item-show2` option to show 2 slides and `.slider-item-reveal` to reveal part of the next and previous slide. By adding additional classes behavior and layout is controlled. 

[Head over to the configurator to try all options](https://swiffyslider.com/configuration/)

```html
<div class="swiffy-slider slider-item-show2 slider-item-reveal">
    <ul class="slider-container">
        <li>Slide 1</li>
        <li>Slide 2</li>
        <li>Slide 3</li>
    </ul>
</div>
```

#### Slider wrapper
Change behavior and styles on slides, navigation and indicators by adding option css classes to the `.swiffy-slider` wrapper.
<table class="table">
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>swiffy-slider</code></td>
      <td>The overall wrapper of the slider instance. Should be a block element. Can contain 3 different things as direct children; slider-container, slider-indicators and slider-nav</td>
    </tr>
  </tbody>
</table>

#### Slider sections
For possible child elements to the  <code>swiffy-slider</code> wrapper. These sections adds slides, navigation and indicators
<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slider-container</code></td>
      <td><ul>
      <li>Creates the scrollable container that holds the slides</li>
      <li>Can be any element and is a CSS grid</li>
      <li>Using a ul>li structure for the container and slides provides good semantics</li>
      <li>The direct descendants of this element are the slides them selves and can hold any markup</li>
      <li>The width of the slides are controlled by the slider options. Default is 100% width</li>
      <li>Can be styled using <code>slider-item-*</code> options</li>
      </td>
    </tr>
    <tr>
      <td><code>slider-nav</code><br>
      <code>slider-nav-next</code></td>
      <td><ul>
      <li>Creates a navigation button</li>
      <li>Should be button element and there should be exactly 2</li>
      <li>Default is a left button</li>
      <li>Add <code>slider-nav-next</code> to make the next button</li>
      <li>Can be styled using <code>slider-nav-*</code> options</li>
      </td>
    </tr>
    <tr>
      <td><code>slider-indicators</code></td>
      <td><ul>
      <li>Creates a container for indicator buttons</li>
      <li>The direct descendants of this element are the indicators. Add <code>active</code> for the active indicator for first load</li>
      <li>Descendants should be button elements and there should be one button per slide or per page when showing more than one slide</li>
      <li>Can be styled using <code>slider-indicators-*</code> options</li>
      </td>
    </tr>
   </tbody>
</table>

#### Slider options
For the <code>swiffy-slider</code> wrapper. The <code>slider-item-*</code> option classes affects the slides (The <code>slider-container</code> children)
<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><code>slider-item-show2</code><br>
            <code>slider-item-show3</code><br>
            <code>slider-item-show4</code><br>
            <code>slider-item-show5</code><br>
            <code>slider-item-show6</code></td>
        <td>Shows 2, 3, 4, 5 or 6 slides at a time in the slider wrapper. Each slide is either 1/2, 1/3, 1/4, 1/5 or 1/6 of the slider wrapper width.</td>
    </tr>
    <tr>
      <td><code>slider-item-show2-sm</code></td>
      <td>Shows 2 slides at a time in the slider wrapper when in small viewport. By default show2-5 will show only one slide when in viewports less than 62rem (992px in most cases). With this option it shows 2 in small viewports</td>
    </tr>
    <tr>
      <td><code>slider-item-reveal</code></td>
      <td>Reveals some of previous and next slide. Each slide is either 1/1, 1/2, 1/3, 1/4 or 1/6 of the slider wrapper width minus a little to reveal next and previous slides</td>
    </tr>
    <tr>
      <td><code>slider-item-ratio</code></td>
      <td>Enables ratio sizing of the slide elements. Default ratio is 2:1 or 50% meaning the slides have half the heigh of their width.
      This option sets <code>object-fit:cover;</code> on first element inside the slide element - to stretch images to fill out the slide box and keep aspect ratio.</td>
    </tr>
    <tr>
      <td><code>slider-item-ratio-32x9</code><br>
      <code>slider-item-ratio-21x9</code><br>
      <code>slider-item-ratio-2x1</code><br>
      <code>slider-item-ratio-16x9</code><br>
      <code>slider-item-ratio-4x3</code><br>
      <code>slider-item-ratio-1x1</code><br>
      <code>slider-item-ratio-3x4</code><br>
      </td>
      <td>Controls the slide ratio when ratio is enabled. Default ratio is 2:1 or 50% meaning the slides have half the heigh of their widt.</td>
    </tr>
    <tr>
      <td><code>slider-item-ratio-contain</code></td>
      <td>Sets the content of a ratio enabled slide to have <code>object-fit:contain;</code> instead of default <code>object-fit:cover;</code>. This ensures that if the content of the slide is an image or embedded video, it is scaled down so all is visible within the slide box.</td>
    </tr>
    <tr>
      <td><code>slider-item-nogap</code></td>
      <td>Removes the horisontal gap between slides</td>
    </tr>
    <tr>
      <td><code>slider-item-snapstart</code></td>
      <td>Snaps slides to start of the slider wrapper instead of center when using <code>.slider-item-reveal</code></td>
    </tr>
    <tr>
      <td><code>slider-item-nosnap</code></td>
      <td>Removes auto snapping for slides so they slide freely. Primarily have an affect on touch devices as navigating with arrows and indicators is per slide or per page</td>
    </tr>
    <tr>
      <td><code>slider-item-nosnap-touch</code></td>
      <td>Same effect as slider-item-nosnap but only on devices that has a primary input which is not a mouse, i.e. mobile <code>media (hover: none)</code></td>
    </tr>
    <tr>
      <td><code>slider-item-first-visible</code></td>
      <td>Use with <code>.slider-nav-autohide</code> to hide the previous navigation arrow when the slider loads. Will automatically be removed or added when first slide is not or is visible</td>
    </tr>
    <tr>
      <td><code>slider-item-last-visible</code></td>
      <td>Use with <code>.slider-nav-autohide</code> to hide the next navigation arrow when the slider loads. Will automatically be removed or added when last slide is not or is visible</td>
    </tr>
    <tr>
      <td><code>slider-item-helper</code></td>
      <td>For debugging: Adds a test layout to slide items; minimum height, background color, centers content and background. Meant for testing and should be removed in real code</td>
    </tr>
    </tbody>
</table>

#### Navigation options
For the <code>swiffy-slider</code> wrapper. The <code>slider-nav-*</code> option classes affects the <code>slider-nav</code> elements
<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slider-nav-page</code></td>
      <td>Slides entire page when showing more than one slide item on the slider wrapper. Default behavior moves just one slide to the left or right</td>
    </tr>
    <tr>
      <td><code>slider-nav-noloop</code></td>
      <td>Disables slider loop - so when on first/last slide navigate previous/next does not take the user to the last/first slide</td>
    </tr>
    <tr>
      <td><code>slider-nav-nodelay</code></td>
      <td>Disables smooth scrolling when sliding using navigation buttons, indicators and autoplay. Makes the new slide or page appear instantly with no scroll smoothing. Does not affect touch navigation</td>
    </tr>
    <tr>
      <td><code>slider-nav-autoplay</code></td>
      <td>Automatically slide to next slide or next page in intervals. Default is 2500 ms = 2.5s</td>
    </tr>
    <tr>
      <td><code>data-slider-nav-autoplay-interval</code> attribute</td>
      <td>Changes the default autoplay interval - value is in ms. <code>data-slider-nav-autoplay-interval="3000"</code>. Default value is 2500, minimum value is 750 ms</td>
    </tr>
    <tr>
      <td><code>slider-nav-autopause</code></td>
      <td>Stops and restarts the autoplay when mouse is hovering the slider wrapper or when it is touched on touch devices. Will restart on mouseout, but not when touch ends</td>
    </tr>
    <tr>
      <td><code>slider-nav-round</code></td>
      <td>Changes the default navigation arrows to a circle with arrow. Default color is white with black arrow</td>
    </tr>
    <tr>
      <td><code>slider-nav-touch</code></td>
      <td>Shows navigation buttons on touch devices. By default navigation buttons are hidden on touch devices using the <code>media (hover: none)</code> query. By adding this option, the navigation buttons are always visible on touch devices</td>
    </tr>
    <tr>
      <td><code>slider-nav-visible</code></td>
      <td>Makes the nav buttons visible always. By default navigation buttons are hidden until the slider wrapper is hovered</td>
    </tr>
    <tr>
      <td><code>slider-nav-outside</code></td>
      <td>Moves the navigation buttons outside the slider wrapper and shrinks the width of the slider wrapper accordingly (by 3 or 5 rem on each side depending on navigation style)</td>
    </tr>
    <tr>
      <td><code>slider-nav-outside-expand</code></td>
      <td>Moves the navigation buttons outside the slider wrapper by applying negative margins (-3 or -5 rem) so the slides and wrapper keeps their size. The navigation buttons overlays surrounding content.</td>
    </tr>
    <tr>
      <td><code>slider-nav-scrollbar</code></td>
      <td>Makes the scrollbar for the <code>.slider-container</code> visible. Acts as indicator and navigation if running in css only mode. On touch devices the scrollbar is not shown when not sliding because that is how the browser behaves</td>
    </tr>
    <tr>
      <td><code>slider-nav-dark</code></td>
      <td>Changes the navigation buttons to a dark version. Black arrows or black circle with white arrows</td>
    </tr>
     <tr>
      <td><code>slider-nav-autohide</code></td>
      <td>Will hide appropiate navigation arrow when the first or last slide is visible to indicate that sliding is at its start or end. On load the arrow will first disappear when the script is loaded. Also add `.slider-item-first-visible` class to the `.swiffy-slider` instance together with `.slider-nav-autohide` to hide the start arrow on load before js executes.</td>
    </tr>
    </tbody>
</table>

#### Indicator options
For the <code>swiffy-slider</code> wrapper. The <code>slider-indicators-*</code> option classes affects the <code>slider-indicators</code> child elements
<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slider-indicators-round</code></td>
      <td>Changes the default indicators to a circle</td>
    </tr>
    <tr>
      <td><code>slider-indicators-square</code></td>
      <td>Changes the default indicators to a square</td>
    </tr>
    <tr>
      <td><code>slider-indicators-outside</code></td>
      <td>Moves the indicator buttons under the slider wrapper and increases the height of the slider wrapper but not the slides them selves</td>
    </tr>
    <tr>
      <td><code>slider-indicators-dark</code></td>
      <td>Changes the indicator buttons to a dark version</td>
    </tr>
    <tr>
      <td><code>slider-indicators-highlight</code></td>
      <td>Hightlights the active indicator even more by increasing its size</td>
    </tr>
    <tr>
      <td><code>slider-indicators-sm</code></td>
      <td>Shows indicator buttons on small devices under 992px in width. By default indicator buttons are hidden on small devices. By adding this option, the indicators buttons are always visible. Since the number of indicators and number of slides does not match on small devices when showing more than one item per page, do not use this option in that case</td>
    </tr>
  </tbody>
</table>

#### Animation options
For the <code>swiffy-slider</code> wrapper. The <code>slider-nav-animation-*</code> option classes affects the animation of slides when they slide into view.
<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slider-nav-animation</code></td>
      <td>Enables animation on slides. An animation effect class is also required for animation to be enabled</td>
    </tr>
    <tr>
      <td><code>slider-nav-animation-appear</code></td>
      <td>Apear animation using opacity and scale - starting from 30% opacity and a 90% scale</td>
    </tr>
    <tr>
      <td><code>slider-nav-animation-fadein</code></td>
      <td>Fade in animation using opacity - starting from 50% opacity. Can be combined with <code>.slider-nav-animation-scale/scaleup</code></td>
    </tr>
    <tr>
      <td><code>slider-nav-animation-scale</code></td>
      <td>Scale up animation using scale - starts with 90% size. Can be combined with <code>.slider-nav-animation-fadein</code></td>
    </tr>
     <tr>
      <td><code>slider-nav-animation-scaleup</code></td>
      <td>Scale up animation using scale - starts with 25% size. Can be combined with <code>.slider-nav-animation-fadein</code></td>
    </tr>
    <tr>
      <td><code>slider-nav-animation-turn</code></td>
      <td>Turn animation using rotateY - starts with 70deg ratotation</td>
    </tr>
     <tr>
      <td><code>slider-nav-animation-slideup</code></td>
      <td>Slide up animation using translateY - starts at 60% of the height</td>
    </tr>
    <tr>
      <td><code>slider-nav-animation-zoomout</code></td>
      <td>Zoom out animation - slides start scaled up at 130% and scale down to normal size as they enter view</td>
    </tr>
    <tr>
      <td><code>data-slider-nav-animation-threshold</code> attribute</td>
      <td>Changes the default animation threshold - value is between 0-1. <code>data-slider-nav-animation-threshold="0.3"</code>. Default value is 0.3. This setting defines how many percent of a slide should be visible before the animation starts</td>
    </tr>
  </tbody>
</table>

#### Extensions

Mouse drag support is provided as an optional separate module to keep the core small.

Import and initialize alongside the main slider:

```javascript
import { swiffyslider } from 'swiffy-slider';
import { swiffysliderextensions } from 'swiffy-slider/extensions';

window.addEventListener('load', () => {
    swiffyslider.init();
    swiffysliderextensions.init();
});
```

Then add the class to any slider wrapper that should support mouse drag:

<table>
  <thead>
    <tr>
      <th>CSS class<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>slider-nav-mousedrag</code></td>
      <td>Enables click-and-drag navigation with the mouse. Requires the extensions module to be loaded and initialized.</td>
    </tr>
  </tbody>
</table>

### Javascript
Import `swiffyslider` from the package and call `init()` to set up all sliders. All options and behavior is handled by CSS classes — using the methods directly is only needed for advanced scenarios.
<table class="table">
  <thead>
    <tr>
      <th>Method<br>_______________________________</th>
      <th>Description<br>_______________________________</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>swiffyslider.version;</code></td>
      <td>Needs no explanation :-)</td>
    </tr>
    <tr>
      <td><code>swiffyslider.init(rootElement = document.body);</code></td>
      <td>Initializes all instances of <code>.swiffy-slider</code> elements and binds events to handle navigation, indicators and autoplay. By default document.body is searched for instances, but can be limited further to i.e. content area (and skip header, navigation, footer etc) to further improve init performance.</td>
    </tr>
    <tr>
      <td><code>swiffyslider.initSlider(sliderElement);</code></td>
      <td>Initializes one instance of swiffy slider wrapper. The passed element has to be a <code>.swiffy-slider</code> element</td>
    </tr>
    <tr>
      <td><code>swiffyslider.slide(sliderElement, next = true);</code></td>
      <td>Slides to the next slide or next page depending on the nav settings. The passed slider element has to be a <code>.swiffy-slider</code> element. By default this method slides next, but call it with <code>false</code> to slide to previous</td>
    </tr>
    <tr>
      <td><code>swiffyslider.slideToByIndicator(event);</code></td>
      <td>Called internally when an indicator button is clicked. Pass the click event. To navigate programmatically, use <code>slideTo</code> instead.</td>
    </tr>
    <tr>
      <td><code>swiffyslider.slideTo(sliderElement, slideIndex);</code></td>
      <td>Slides to the specified slide (index starts with 0 for first slide). The passed slider element has to be a <code>.swiffy-slider</code> element.</td>
    </tr>
    <tr>
      <td><code>swiffyslider.onSlideEnd(sliderElement, delegate, timeout = 125);</code></td>
      <td>Provide a callback/delegate function to get called when sliding ends. The default timeout is 125ms and should not be too low as it could cause the delegate to be called more than once on each scroll.
      The passed slider element has to be a <code>.swiffy-slider</code> element.
      </td>
    </tr>
    <tr>
      <td><code>swiffyslider.autoPlay(sliderElement, timeout, autopause);</code></td>
      <td>Manually starts autoplay for a container using the specified timeout. Autopause can be enabled. Usually auto play is handled using css option classes. This method can be used to start autoplay when the slider scrolls into view or similar. The passed slider element has to be a <code>.swiffy-slider</code> element.</td>
    </tr>
    <tr>
      <td><code>swiffyslider.handleIndicators(sliderElement);</code></td>
      <td>Manually updates the indicators active state to reflect the current position of the slider. The passed slider element has to be a <code>.swiffy-slider</code> element.</td>
    </tr>
 </tbody>
</table>

**Listening for sliding ends for a container**
```html
<script>
const sliderElement = document.getElementById('myslider');
swiffyslider.onSlideEnd(sliderElement, function() {
    console.log('Scrolling stopped');
});
</script>
```

**Listening for sliding ends for a container and find visible slides**
```javascript
window.addEventListener('load', () => {
    const sliderElement = document.getElementById('myslider');
    swiffyslider.onSlideEnd(sliderElement, () => {
        const visibleSlideElements = getVisibleSlides(sliderElement);
        console.log(visibleSlideElements.map(s => s.innerText));
    });
});

function getVisibleSlides(sliderElement) {
    const container = sliderElement.querySelector('.slider-container');
    const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
    return [...container.children].filter(slide => {
        const left = slide.getBoundingClientRect().left - container.getBoundingClientRect().left;
        const right = left + slide.offsetWidth - gapWidth;
        return left >= 0 && right <= container.offsetWidth;
    });
}
```

### Javascript loading and binding

Swiffy Slider v2 is ESM only. Import and initialize in your entry point:

```javascript
import { swiffyslider } from 'swiffy-slider';
import 'swiffy-slider/css';

window.addEventListener('load', () => swiffyslider.init());
```

To initialize only part of the page (e.g. skip header/footer for faster init):

```javascript
window.addEventListener('load', () => {
    swiffyslider.init(document.getElementById('content'));
});
```

To initialize a single slider:

```javascript
swiffyslider.initSlider(document.getElementById('myslider'));
```

Load on demand via dynamic import (e.g. when slider scrolls into view):

```html
<script type="module">
window.addEventListener('load', () => {
    import('https://cdn.jsdelivr.net/npm/swiffy-slider@2.0.0/dist/js/swiffy-slider.js').then(({ swiffyslider }) => {
        swiffyslider.init();
    });
});
</script>
```

### TypeScript and IntelliSense

The package ships TypeScript declaration files (`.d.ts`) for both the core and the extensions module. No `@types/` package is needed.

TypeScript users get full type checking automatically:

```typescript
import { swiffyslider } from 'swiffy-slider';
import { swiffysliderextensions } from 'swiffy-slider/extensions';

window.addEventListener('load', () => {
    swiffyslider.init();
    swiffysliderextensions.init();
});
```

JavaScript users with `// @ts-check` or VS Code's implicit type checking get full IntelliSense from the JSDoc annotations in the source without any extra setup.

### CSS variables
The Swiffy Slider CSS is making use of a number of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a> that can be overriden to control behavior and styling

Slide sizes, ratios, navigation etc. can be controlled by overruling the variable on the <code>.swiffy-slider</code> instance or in custom css.
<table>
    <thead>
        <tr>
            <th style="min-width: 17rem;">Variable</th>
            <th style="min-width: 20em;">Example</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--swiffy-slider-item-width</code></td>
            <td><code>--swiffy-slider-item-width:75%;</code></td>
            <td>Calculated based on the number of slides shown, the gap, reveal etc. Should not be overriden. <span class="badge bg-warning text-dark">INFO</span> If needed, it has to be overriden on the <code class="text-decoration-underline">.slider-container</code>                                                element.</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-item-gap</code></td>
            <td><code>--swiffy-slider-item-gap:25px;</code></td>
            <td>Changes the gap between slides when enabled. Default <code>--swiffy-slider-item-gap</code> is 1rem, but can be any valid CSS mesurement. The <code>--swiffy-slider-item-gap</code> is part of the calculation of
                <code>--swiffy-slider-item-width</code></td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-item-reveal</code></td>
            <td><code>--swiffy-slider-item-reveal:20%;</code></td>
            <td>Changes the width of the reveal of next and previous slides when enabled. Default <code>--swiffy-slider-item-reveal</code> is 8rem if previous and next is revealed and 4rem if only next is revealed (if <code>.slider-item-snapstart</code>                                                is in use). The <code>--swiffy-slider-item-reveal</code> is part of the calculation of <code>--swiffy-slider-item-width</code></td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-item-ratio</code></td>
            <td><code>--swiffy-slider-item-ratio:100/33.3</code></td>
            <td>Sets the ratio to a custom value. Use with <code>.slider-item-ratio</code> and omit use of any <code>.slider-item-ratio-*</code> classes</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-item-count</code></td>
            <td><code>--swiffy-slider-item-count:8;</code></td>
            <td>Sets the number of slides to show - same as using <code>.slider-item-show{n}</code> but can i.e. be set to a number higher than 6 if needed.</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-nav-light</code></td>
            <td><code>--swiffy-slider-nav-light:lightcyan;</code></td>
            <td>Sets the light color for navigation arrows. Default is <code>#fff</code>. Use to control the color of light navigation. Square and Round navigation use both colors - one for backgrond, the other for arrow color.</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-nav-dark</code></td>
            <td><code>--swiffy-slider-nav-dark:darkolivegreen;</code></td>
            <td>Sets the dark color for navigation arrows. Default is <code>#333</code>. Use to control the color of dark navigation. Square and Round navigation use both colors - one for backgrond, the other for arrow color.
                Can be any color variable.
            </td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-nav-zoom</code></td>
            <td><code>--swiffy-slider-nav-zoom:1.25;</code></td>
            <td>Use to overrule the navigation arrow sizes. Default is 1 for normal sizes and .75 for small sized navigation. Set to i.e. 1.25 to make navigation arrows larger.</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-track-opacity</code></td>
            <td><code>--swiffy-slider-track-opacity:0.25;</code></td>
            <td>Sets the scrollbar track opacity when scrollbar is displayed</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-track-height</code></td>
            <td><code>--swiffy-slider-track-height:1rem;</code></td>
            <td>Sets the scrollbar track height. Default is .5rem if scrollbar (<code>.slider-nav-scrollbar</code>) is enabled.</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-animation-duration</code></td>
            <td><code>--swiffy-slider-animation-duration:0.75s</code></td>
            <td>Sets the animation duration. Default is 0.75s. Using <code>.swiffy-slider-animation-fast</code> sets the duration to .25s. Using <code>.swiffy-slider-animation-slow</code> sets the duration to 1.25s</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-animation-delay</code></td>
            <td><code>--swiffy-slider-animation-delay:0.5s;</code></td>
            <td>Sets the delay before animation begins when a new slide scrolls into view. Default is 0s (no delay).</td>
        </tr>
        <tr>
            <td><code>--swiffy-slider-animation-timing</code></td>
            <td><code>--swiffy-slider-animation-timing:ease-in-out;</code></td>
            <td>Sets the animation timing method, default is ease-in-out.</td>
        </tr>
    </tbody>
</table>

Example
```html
<div class="swiffy-slider slider-item-reveal slider-item-ratio slider-nav-round slider-nav-visible" 
style="
--swiffy-slider-item-ratio:100/33.3;
--swiffy-slider-nav-light:lightcyan;
--swiffy-slider-nav-dark:darkolivegreen;
--swiffy-slider-nav-zoom:.85;
--swiffy-slider-item-reveal:25%;">

    <ul class="slider-container">
        <li>...</li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
    </div>
</div>
```



## Limitations
These limitations are known and intentionally there to keep this library small, fast and smooth.
- Scroll speed comes in 2 flavors - instant or 'smooth'. This is because that is what browsers support out of the box using CSS scroll-behavior. [See MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- Does not support slides of uneven widths. The width is controlled by the width of the wrapper and can have 1-6 slides per page depending on configuration. 
- Smooth scrolling is not supported out of the box in Safari (Before v 15.4) (iOS + Mac) but can be fixed using a polyfill. [See polyfill](#safari-smooth-scrolling-polyfill)
- RTL is untested but as the entire slider is just markup, it should be supported very well
- Works in 'modern' browsers from the last ~3 years only. No IE support or anything funny.

Use other sliders and carousels if these limitations is important in your project.

## Migrating from v1

v2 is ESM only and removes auto-initialization. Here is what changed:

**Script loading**

```html
<!-- v1 -->
<script src="swiffy-slider.min.js" defer></script>

<!-- v2 -->
<script type="module">
    import { swiffyslider } from 'swiffy-slider';
    window.addEventListener('load', () => swiffyslider.init());
</script>
```

**No more `window.swiffyslider`** — import the named export instead:

```javascript
// v1
window.swiffyslider.init();

// v2
import { swiffyslider } from 'swiffy-slider';
swiffyslider.init();
```

**`data-noinit` is removed** — v2 never auto-initializes. Always call `swiffyslider.init()` yourself.

**`slideToByIndicator()` now requires an event argument** — this is called internally and you should not need to call it directly. Use `slideTo()` instead.

**Dist file paths changed:**

| v1 | v2 |
|---|---|
| `dist/js/swiffy-slider.min.js` | `dist/js/swiffy-slider.js` |
| `dist/js/swiffy-slider.esm.min.js` | `dist/js/swiffy-slider.js` (same file) |
| `dist/css/swiffy-slider.min.css` | `dist/css/swiffy-slider.css` |

**npm package exports changed:**

```javascript
// v1
import { swiffyslider } from 'swiffy-slider'          // → src/swiffy-slider.esm.js
import 'swiffy-slider/css'

// v2
import { swiffyslider } from 'swiffy-slider'          // → dist/js/swiffy-slider.js
import { swiffysliderextensions } from 'swiffy-slider/extensions'
import 'swiffy-slider/css'
```

## Development

```bash
# Install dependencies
npm install

# Build once (outputs to dist/ and docs/assets/)
npm run build

# Watch mode — rebuilds on every save
npm run watch

# Watch + local dev server at http://localhost:5501
npm run dev
```

Source files are in `src/`. The build is handled by `build.js` using esbuild (JS) and lightningcss (CSS) — no bundler config files needed. After each build, output is automatically copied to `docs/assets/` so the local docs site reflects your changes immediately.

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for full details.

**Open tasks you could help with:**
- Svelte component wrapper
- Vue component wrapper
- React component wrapper

Thank you for your understanding.

## Star gazers

Feel free to star this project and help spread the word.

[![Stargazers repo roster for @dynamicweb/swiffy-slider](https://reporoster.com/stars/dynamicweb/swiffy-slider)](https://github.com/dynamicweb/swiffy-slider/stargazers)


## Examples of sites using Swiffy Slider

Open an issue or reach out via [@nicped on GitHub](https://github.com/nicped) to have your site added to this list.

- [Ärzte ohne Grenzen Österreich](https://msf.at)
- [Swiffy slider documentation](https://swiffyslider.com) 
- [Dynamicweb Swift Ecommerce Starter](http://swiftdemo.dynamicweb-cms.com/) 

## Versioning

See [the Releases section of our GitHub project](https://github.com/dynamicweb/swiffy-slider/releases) for changelogs for each release version of Swiffy Slider. 


## Creators

**Nicolai Høeg Pedersen**

- <https://github.com/nicped>

**Dynamicweb**

- <https://github.com/dynamicweb>


## Copyright and license

Code and documentation copyright 2022 the [Swiffy Slider Authors](https://github.com/dynamicweb/swiffy-slider/graphs/contributors) and [Dynamicweb A/S](https://dynamicweb.com) Code released under the [MIT License](https://opensource.org/licenses/MIT). Docs released under [Creative Commons](https://reativecommons.org/licenses/by/3.0/).