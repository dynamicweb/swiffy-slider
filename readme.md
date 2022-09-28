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
![version](https://img.shields.io/badge/Version-1.6.0-green.svg)
[![npm version](https://img.shields.io/npm/v/swiffy-slider)](https://www.npmjs.com/package/swiffy-slider)
[![CSS gzip size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/css/swiffy-slider.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/css/swiffy-slider.min.css)
[![CSS Brotli size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/css/swiffy-slider.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/css/swiffy-slider.min.css)
[![JS gzip size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/js/swiffy-slider.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/js/swiffy-slider.min.js)
[![JS Brotli size](https://img.badgesize.io/dynamicweb/swiffy-slider/main/dist/js/swiffy-slider.min.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/dynamicweb/swiffy-slider/blob/main/dist/js/swiffy-slider.min.js)

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
- Vanilla javascript, less than 1.3kb ~110 lines
- Very low overall footprint ~3.5kb in total (css+js gzip'ed)

<h2> Table of contents</h2>

- [Quick start](#quick-start)
    - [1. Add CSS and JS to website head section](#1-add-css-and-js-to-website-head-section)
    - [2. Add markup](#2-add-markup)
- [Additional installation options](#additional-installation-options)
- [Features](#features)
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
  - [Javascript](#javascript)
  - [Javascript loading and binding](#javascript-loading-and-binding)
    - [Optimized loading](#optimized-loading)
  - [CSS variables](#css-variables)
  - [Safari smooth scrolling polyfill](#safari-smooth-scrolling-polyfill)
- [Limitations](#limitations)
- [Contributing](#contributing)
- [Star gazers](#star-gazers)
- [Examples of sites using Swiffy Slider](#examples-of-sites-using-swiffy-slider)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)


## Quick start

#### 1. Add CSS and JS to website head section
```html
<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" defer>
<link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet">
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
Swiffy Slider script automatically binds to all `.swiffy-slider` instances

## Additional installation options
- [Download the latest release](https://github.com/dynamicweb/swiffy-slider/releases/latest)
- Clone the repo: `git clone https://github.com/dynamicweb/swiffy-slider.git`
- Install with [npm](https://www.npmjs.com/): `npm install swiffy-slider`
- Install with [yarn](https://yarnpkg.com/): `yarn add swiffy-slider`

Loading (ESM)

```javascript
// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"

```

Read the [Getting started page](https://www.swiffyslider.com/docs/) for examples, configuration options and a visual configurator.

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

## What's included

Within the download you'll find the following directories and files. You'll see something like this:

```text
swiffy-slider/
├── dist/
│   ├── css/
│   │   ├── swiffy-slider.css
│   │   ├── swiffy-slider.min.css.map
│   │   ├── swiffy-slider.min.css.map
│   ├── js/
│   │   ├── swiffy-slider-extensions.js
│   │   ├── swiffy-slider-extensions.min.js
│   │   ├── swiffy-slider-extensions.min.js.map
│   │   ├── swiffy-slider.esm.js
│   │   ├── swiffy-slider.esm.min.js
│   │   ├── swiffy-slider.esm.min.js.map
│   │   ├── swiffy-slider.js
│   │   ├── swiffy-slider.min.js
│   │   ├── swiffy-slider.min.js.map
├── src/
│   ├── swiffy-slider.extensions.js
│   ├── swiffy-slider.css
│   ├── swiffy-slider.esm.js
│   ├── swiffy-slider.js
```

The download contains compiled and minified CSS and JS (`swiffy-slider.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`swiffy-slider.*.map`) are available for use with certain browsers' developer tools. 

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
      <td><code>data-slider-nav-animation-threshold</code> attribute</td>
      <td>Changes the default animation threshold - value is between 0-1. <code>data-slider-nav-animation-threshold="0.3"</code>. Default value is 0.3. This setting defines how many percent of a slide should be visible before the animation starts</td>
    </tr>
  </tbody>
</table>

### Javascript
The Swiffy Slider script can be accessed using `window.swiffyslider` or simply `swiffyslider`

All options and behavior is handled by the css classes, so using the scripts directly is only for more advanced scenarios. 
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
      <td><code>swiffyslider.slideToByIndicator();</code></td>
      <td>This method is called when an indicator button is clicked. Should not be called directly. Instead call <code>slideTo</code></td>
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
```html
<script>
window.addEventListener(&#39;load&#39;, () =&gt; {
    const sliderElement = document.getElementById(&#39;myslider&#39;);
    swiffyslider.onSlideEnd(sliderElement, function() {
        const visibleSlideElements = getVisibleSlides(sliderElement);
        const visible = [];
        for (const slide of visibleSlideElements) {
            visible.push(slide.innerText);
        }
        console.log(visible);
        console.log(visibleSlideElements);
    });
});

function getVisibleSlides(sliderElement) {
    const container = sliderElement.querySelector('.slider-container');
    //returns an array of slide elements that are fully or partially visible
    const visibleSlides = [];
    //We are using a grid layout and the slides left and right properties include the width of the gap, so when comparing with container width add a gap for each side of the slide gap.
    const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
    for (const slide of container.children) {
        var slideScrollLeftPosition = slide.getBoundingClientRect().left - container.getBoundingClientRect().left;
        var slideScrollRightPosition = slideScrollLeftPosition + slide.offsetWidth - gapWidth;
        if (slideScrollLeftPosition &gt;= 0 &amp;&amp; slideScrollRightPosition &lt;= container.offsetWidth) {
            visibleSlides.push(slide);
        }
    }
    return visibleSlides;
}
</script>
```

### Javascript loading and binding

Load Swiffy slider using webpack, ESBuild and other build tools. In your index.js (or whatever you call it).
NOTE: Swiffy slider is an ES Module and you need a supported processing ECMAScript compiler - i.e. webpack 5+ etc.

```javascript
// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"

```
```css
// import Swiffy Slider src CSS unminified
import "swiffy-slider/src/swiffy-slider.css"
```

Avoid autobinding by adding `data-noinit` attribute on the script tag and then attach the slider manually
```html
<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" data-noinit defer>
<script>
    window.addEventListener('load', () => {
        //Use only one of the loading options below!
        //loads all sliders
        swiffyslider.init();
        //loads specific slider
        swiffyslider.initSlider(document.getElementById('myslider'));
    });
</script>
<div class="swiffy-slider" id="myslider">
  <div class="slider-container">
    <div></div>
  </div>
  ...
</div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" data-noinit defer>
<script>
    window.addEventListener('load', () => {
        //loads all sliders in main and skip header and footer search for increased init performance.
        swiffyslider.init(document.getElementById('content'));
    });
</script>
<header>...</header>
<main id="content">
  <div class="swiffy-slider" id="myslider">
    <div class="slider-container">
      <div></div>
    </div>
    ...
  </div>
</main>
<footer>...</footer>
```

Load as module using ES version of the script
```html
<script type="module">
    import {swiffyslider} from 'https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.esm.min.js'; 
    window.swiffyslider = swiffyslider; 
    window.swiffyslider.init(); 
</script>
```

Load as ES module on demand, here using load - could be when slider scrolls into view or navigation arrow is clicked the first time. Load module and initialize sliders. 
```html
<script>
window.addEventListener("load", () => {
    import ('https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.esm.min.js').then((swiffysliderModule) => {
        swiffysliderModule.swiffyslider.init();
    });
});
</script>
```

Load as ES module on demand. Load module and assign to window for later script manipulation of slides
```html
<script>
window.addEventListener("load", () => {
    import ('https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.esm.min.js').then((swiffysliderModule) => {
        window.swiffyslider = swiffysliderModule.swiffyslider;
        window.swiffyslider.init();
    });
});
</script>
```

#### Optimized loading
When loading the script with `defer` attribute, the initialization will happen as soon as the script is downloaded. 
Deferred scripts are requested and run as soon as the document is parsed by the browser. This is the recommended approach.

```
<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" defer>
```

If the script is loaded without `defer` attribute, the initialization will happen when `document.readyState === 'interactive'` using a `document.onreadystatechange` event listener.
The script will load and run before the Dom is loaded, but has been parsed.

```
<script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js">
```

The above approach ensures the sliders are initialized as soon as possible and earlier in the page life cycle compared to using `load` or `DOMContentLoaded` events.
This might not always be optimal depending on what else is running on the page. Since the content of Swiffy Slider is always markup and is rendered when the markup is parsed and does not 
change when initialized, a later loading of the script and initialization of the sliders could be a benefit to leave more power for more important scripts. 
See "Load as ES module on demand".

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


### Safari smooth scrolling polyfill
UPDATE: Safari 15.4 introduces smooth scrolling: [See release notes](https://developer.apple.com/documentation/safari-release-notes/safari-15_4-release-notes)
Sliding the carousel on touch devices **using fingers are not affected** by this issue.

When sliding using buttons, indicators and javascript, the new slides are shown instantly with no smoothing when using Safari.

In Safari based browsers, smooth scrolling is not supported because it is still lacking browser support. [See Can I use](https://caniuse.com/css-scroll-behavior)

If you want to support smoooth scrolling on Safari based browsers, add this polyfill to your head section
```html
<script src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"></script>
```

## Limitations
These limitations are known and intentionally there to keep this library small, fast and smooth.
- Scroll speed comes in 2 flavors - instant or 'smooth'. This is because that is what browsers support out of the box using CSS scroll-behavior. [See MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- Does not support slides of uneven widths. The width is controlled by the width of the wrapper and can have 1-6 slides per page depending on configuration. 
- Smooth scrolling is not supported out of the box in Safari (Before v 15.4) (iOS + Mac) but can be fixed using a polyfill. [See polyfill](#safari-smooth-scrolling-polyfill)
- RTL is untested but as the entire slider is just markup, it should be supported very well
- Works in 'modern' browsers from the last ~3 years only. No IE support or anything funny.

Use other sliders and carousels if these limitations is important in your project.

## Contributing

You are more than welcome to contribute by opening issues and create pull requests.
Keep in mind that this project is meant to be very simple in nature and support recent browsers only.

This project is not going into a race of adding as many features as possible - but quite the opposite.
Performance and filesize has high priority.

The general rule is, that Swiffy Slider is covering the most common usages, and that more exotic usages are made in examples.
If not at least 50% of all installations need a feature, the feature probably belong somewhere else.

Examples of more exotic use cases are more than welcome as part of the examples, so please create pulls for that.

Open tasks that you could help with:
- Svelte component
- Vue component
- React component

Thank you for your understanding.

## Star gazers

Feel free to star this project and help spread the word.

[![Stargazers repo roster for @dynamicweb/swiffy-slider](https://reporoster.com/stars/dynamicweb/swiffy-slider)](https://github.com/dynamicweb/swiffy-slider/stargazers)


## Examples of sites using Swiffy Slider

Send an email to https://github.com/nicped if you would like your site on this list.

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