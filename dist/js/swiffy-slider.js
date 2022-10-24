///// Introduces/changes the following functionalities:
///// 1. Autoplay stops when the user interacts (clicks/taps prev or next buttons or slider indicators)
/////    Should the design feature a pause button shown onhover (to indicate the "pause on hover" functionality), the class "slider-nav-autopause" is removed
///// 2. Easier way to set the delay with which the indicators react

///// Autoplay is deactivated when using the prev/next buttons. (If [button], then [stopped])
let stopped = false;
///// Slide indicators may change immediately, not only after 60ms
let indicatorDelay = 0;

const swiffyslider = function() {
    return {
        version: "1.6.0",
        init(rootElement = document.body) {
            rootElement.querySelectorAll(".swiffy-slider").forEach(sliderElement => this.initSlider(sliderElement));
        },

        initSlider(sliderElement) {
            sliderElement.querySelectorAll(".slider-nav").forEach(navElement =>
///// Call "stop on click" function
                navElement.addEventListener("click", () => this.clickslide(sliderElement, navElement.classList.contains("slider-nav-next")), { passive: true })
            );
            sliderElement.querySelectorAll(".slider-indicators").forEach((indicatorElement) => {
                indicatorElement.addEventListener("click", () => this.slideToByIndicator());
                this.onSlideEnd(sliderElement, () => this.handleIndicators(sliderElement), indicatorDelay); 
            });
            if (sliderElement.classList.contains("slider-nav-autoplay")) {
                const timeout = sliderElement.getAttribute("data-slider-nav-autoplay-interval") ? sliderElement.getAttribute("data-slider-nav-autoplay-interval") : 2500;
                this.autoPlay(sliderElement, timeout, sliderElement.classList.contains("slider-nav-autopause"));
            }
            if (["slider-nav-autohide", "slider-nav-animation"].some(className => sliderElement.classList.contains(className))) {
                const threshold = sliderElement.getAttribute("data-slider-nav-animation-threshold") ? sliderElement.getAttribute("data-slider-nav-animation-threshold") : 0.3;
                this.setVisibleSlides(sliderElement, threshold);
            }
        },

        setVisibleSlides(sliderElement, threshold = 0.3) {
            let observer = new IntersectionObserver(slides => {
                slides.forEach(slide => {
                    slide.isIntersecting ? slide.target.classList.add("slide-visible") : slide.target.classList.remove("slide-visible");
                });
                sliderElement.querySelector(".slider-container>*:first-child").classList.contains("slide-visible") ? sliderElement.classList.add("slider-item-first-visible") : sliderElement.classList.remove("slider-item-first-visible");
                sliderElement.querySelector(".slider-container>*:last-child").classList.contains("slide-visible") ? sliderElement.classList.add("slider-item-last-visible") : sliderElement.classList.remove("slider-item-last-visible");
            }, {
                root: sliderElement.querySelector(".slider-container"),
                threshold: threshold
            });
            sliderElement.querySelectorAll(".slider-container>*").forEach(slide => observer.observe(slide));
        },

        slide(sliderElement, next = true) {
            const container = sliderElement.querySelector(".slider-container");
            const fullpage = sliderElement.classList.contains("slider-nav-page");
            const noloop = sliderElement.classList.contains("slider-nav-noloop");
            const nodelay = sliderElement.classList.contains("slider-nav-nodelay");
            const slides = container.children;
            const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
            const scrollStep = slides[0].offsetWidth + gapWidth;
            let scrollLeftPosition = next ?
                container.scrollLeft + scrollStep :
                container.scrollLeft - scrollStep;
            if (fullpage) {
                scrollLeftPosition = next ?
                    container.scrollLeft + container.offsetWidth :
                    container.scrollLeft - container.offsetWidth;
            }
            if (container.scrollLeft < 1 && !next && !noloop)
                scrollLeftPosition = (container.scrollWidth - container.offsetWidth);
            if (container.scrollLeft >= (container.scrollWidth - container.offsetWidth) && next && !noloop)
                scrollLeftPosition = 0;
            container.scroll({
                left: scrollLeftPosition,
                behavior: nodelay ? "auto" : "smooth"
            });
        },
///// If the slide event is fired by click, stop Autoplay
        clickslide(sliderElement, next = true) {
            stopped= true;
            this.slide(sliderElement, next);
        },

        slideToByIndicator() {
/////
            stopped= true;
            const indicator = window.event.target;
            const indicatorIndex = Array.from(indicator.parentElement.children).indexOf(indicator);
            const indicatorCount = indicator.parentElement.children.length;
            const sliderElement = indicator.closest(".swiffy-slider");
            const slideCount = sliderElement.querySelector(".slider-container").children.length;
            const relativeSlideIndex = (slideCount / indicatorCount) * indicatorIndex;
            this.slideTo(sliderElement, relativeSlideIndex);
        },

        slideTo(sliderElement, slideIndex) {
            const container = sliderElement.querySelector(".slider-container");
            const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
            const scrollStep = container.children[0].offsetWidth + gapWidth;
            const nodelay = sliderElement.classList.contains("slider-nav-nodelay");
            container.scroll({
                left: (scrollStep * slideIndex),
                behavior: nodelay ? "auto" : "smooth"
            });
        },

        onSlideEnd(sliderElement, delegate, timeout = 125) {
            let isScrolling;
            sliderElement.querySelector(".slider-container").addEventListener("scroll", () => {
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout(delegate, timeout);
///// If showing a "pause button" onhover, this behavior can be switched off by removing the class
                if(stopped) sliderElement.classList.remove("slider-nav-autopause");
            }, { capture: false, passive: true });
        },

        autoPlay(sliderElement, timeout, autopause) {
///// Autoplay only if not already stopped through a click
            if(!stopped) {
                timeout = timeout < 750 ? 750 : timeout;
                let autoplayTimer = setInterval(() => this.slide(sliderElement), timeout);
                const autoplayer = () => this.autoPlay(sliderElement, timeout, autopause);
                if (autopause) {
                    ["mouseover", "touchstart"].forEach((event) => {
                        sliderElement.addEventListener(event, () => {
                            window.clearTimeout(autoplayTimer);
                        }, { once: true, passive: true });
                    });
                    ["mouseout", "touchend"].forEach((event) => {
                        sliderElement.addEventListener(event, () => {
                            autoplayer();
                        }, { once: true, passive: true });
                    });
                }
                return autoplayTimer;
            }
        },

        handleIndicators(sliderElement) {
            if (!sliderElement) return;
            const container = sliderElement.querySelector(".slider-container");
            const slidingAreaWidth = container.scrollWidth - container.offsetWidth;
            const percentSlide = (container.scrollLeft / slidingAreaWidth);
            sliderElement.querySelectorAll(".slider-indicators").forEach((scrollIndicatorContainers) => {
                let scrollIndicators = scrollIndicatorContainers.children;
                let activeIndicator = Math.abs(Math.round((scrollIndicators.length - 1) * percentSlide));
                for (let element of scrollIndicators)
                    element.classList.remove("active");
                scrollIndicators[activeIndicator].classList.add("active");
            });
        }
    };
}();

window.swiffyslider = swiffyslider;
if (!document.currentScript.hasAttribute("data-noinit")) {
    if (document.currentScript.hasAttribute("defer")) {
        swiffyslider.init();
    } else {
        document.onreadystatechange = () => {
            if (document.readyState === 'interactive') {
                swiffyslider.init();
            }
        }
    }
}
