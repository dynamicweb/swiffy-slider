# [v1.6.0] - 28-09-2022

## Added

- Added support for <code>.slider-item-show2-sm</code> to support showing 2 slides on mobile no matter how many slides are shown on desktop [#52](https://github.com/dynamicweb/swiffy-slider/issues/52).  

## Bugfixes

- Fixed the handleIndicators method to not execute if the indicators have been dismounted [[#50](https://github.com/dynamicweb/swiffy-slider/issues/50)]
- Fixed an issue in the extensions js handling dragging when first or last slide was dragged long distances [[#48](https://github.com/dynamicweb/swiffy-slider/issues/48)]
 
# [v1.5.3] - 08-043-2022

## Bugfixes

- Fixed the css exports in package.json for src files for use in scss imports [[#32](https://github.com/dynamicweb/swiffy-slider/issues/32)]
  
# [v1.5.2] - 25-03-2022

## Bugfixes

- Fixed the css exports in package.json [[#29](https://github.com/dynamicweb/swiffy-slider/issues/29)]

# [v1.5.1] - 21-03-2022

## Bugfixes

- Fixed an issue with round and square navigation arrows on mobile: [#27](https://github.com/dynamicweb/swiffy-slider/issues/27)
- Fixed an issue with autoplayer example on examples page [#26](https://github.com/dynamicweb/swiffy-slider/issues/26)
- Included the CSS in the exports in package.json [#24](https://github.com/dynamicweb/swiffy-slider/issues/24)

# [v1.5.0] - 16-03-2022

## Added

- Added support for <code>.slider-nav-animation-zoomout</code> to support zooming [#23](https://github.com/dynamicweb/swiffy-slider/issues/23). [See it action](https://swiffyslider.com/configuration/?slider-nav-autoplay=slider-nav-autoplay&data-slider-nav-autoplay-interval=6000&slider-nav-autopause=slider-nav-autopause&slider-nav-animation=slider-nav-animation&slider-nav-animation-style=slider-nav-animation-zoomout&--swiffy-slider-animation-duration=8s&--swiffy-slider-animation-timing=linear&preview-style=preview-images)] 
  
## Changed

- Changed the autopause feature to also stop auto sliding when the touch is stoppen using touchend event

# [v1.4.1] - 23-02-2022

## Bugfixes

- Fixed and issue with touch sliding when mouse draggable is enabled [[#19](https://github.com/dynamicweb/swiffy-slider/issues/19)]
  
# [v1.4.0] - 02-02-2022

## Bugfixes

- None

## Changed

- CSS changed for nav arrows for better LTR support - specifically added <code>left</code> rules for <code>.slider-nav</code>
- Changed loop of slides to also include go to end when on first slide [[#16](https://github.com/dynamicweb/swiffy-slider/issues/16)]
- Update doc and configuration for noloop that it covers the new behavior above

# [v1.3.1] - 18-01-2022

## Changed

- renamed ´slide-visible-first´ to ´.slider-item-first-visible´ that was added in 1.3.0 due to naming error.

# [v1.3.0] - 18-01-2022

## Bugfixes

- Package does not contain source files breaking imports using PM's [#9](https://github.com/dynamicweb/swiffy-slider/issues/9)

## Changed
- Changed javascript to use <code>let</code> instead of <code>const</code> according to bp.
- Changed package to ESM type only and included source in package files
- Changed CSS to use rem based media queries
- Optimized CSS related to navigation buttons when placed outside the slider

## Added

- Added support for <code>.slider-nav-autohide</code> to support hiding previous and next navigation arrows when first or last slide is visible [#8](https://github.com/dynamicweb/swiffy-slider/issues/8)

# [v1.2.0] - 03-12-2021

## Bugfixes

- None

## Changed

- Changed the use of <code>zoom</code> in css to <code>transform: scale()</code>
- Changed javascript to use <code>"</code> instead <code>'</code> consistently
- Changed all event listeners to be passive to increase performance even further

## Added

- Support for mouse drag option using the new swiffy-slider-extensions object
- Added swiffy-slider-extensions for adding features not needed for core releases. Can be accessed on <code>swiffyslider.extensions.*</code>
- Configure animation threshold for the intersection observer that sets <code>.slide-visible</code> when sliding. New attribute <code>data-slider-nav-animation-threshold</code>
- <code>swiffyslider.setVisibleSlides</code> can now be called with a threshold overwriting the default 0.3

# [v1.1.0] - 16-11-2021

## Bugfixes

- Configurator did not start autuplay when enabled
- Navigation in docs fixed

## Added

- Slide animation
- Javascript can now set visible-slide class using intersection observer
- Different animation styles in css

## Removed

- BREAKING slider-item-shadow has been removed since it uses ::after which disables touch sliding on mobile devices

# [v1.0.2] - 08-11-2021

- Fix z-index issue with nav and indicators (#1)

# [v1.0.1] - 08-11-2021

Welcome to the first release of Swiffy Slider.

This project utilizes what is available in modern browsers resulting in a super lightweight and fast slider, greatly reducing the javascript footprint and increase performance to meet todays standards.

**Slide any content made in markup**

- Navigate with Touch, Keyboard, trackpad, pen and Mouse - because it is just browser scrolling
- Setup is done in pure markup and css classes, no scripting required
- No js loading of slides, configuration or initialization
- Vanilla javascript, less than 1.3kb ~110 lines
- Very low overall footprint ~4.5kb in total (css+js gzip'ed)

**Swiffy Slider benefits**

* **Mobile first** :iphone:, responsive, scaleable and content resilient sliding. Ensuring painless mobile experience.
* **Lighthouse 100 points** :100: Using native browser features a unrivaled performance is ensured
* **SEO** :pencil:  is great as the slides and their content is in pure SLURP-readable markup
*  **Build designed pages** :art: any kind of markup can be slided giving perfect design freedom
* **Web Accessibility Guidelines (WCAG)** :trophy: make your website as accessible as needed since this is just markup

Thank you, give it a spin!