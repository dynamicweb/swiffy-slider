export const swiffyslider = function() {
    "use strict";
    return {
        version: "1.2.0",
        init(rootElement = document.body) {
            for (const sliderElement of rootElement.querySelectorAll(".swiffy-slider")) {
                this.initSlider(sliderElement);
            }
        },

        initSlider(sliderElement) {
            for (const navElement of sliderElement.querySelectorAll(".slider-nav")) {
                const next = navElement.classList.contains("slider-nav-next");
                navElement.addEventListener("click", () => this.slide(sliderElement, next), { passive: true });
            }
            for (const indicatorElement of sliderElement.querySelectorAll(".slider-indicators")) {
                indicatorElement.addEventListener("click", () => this.slideToByIndicator());
                this.onSlideEnd(sliderElement, () => this.handleIndicators(sliderElement), 60);
            }
            if (sliderElement.classList.contains("slider-nav-autoplay")) {
                const timeout = sliderElement.getAttribute("data-slider-nav-autoplay-interval") ? sliderElement.getAttribute("data-slider-nav-autoplay-interval") : 2500;
                this.autoPlay(sliderElement, timeout, sliderElement.classList.contains("slider-nav-autopause"));
            }
            if (sliderElement.classList.contains("slider-nav-animation")) {
                const threshold = sliderElement.getAttribute("data-slider-nav-animation-threshold") ? sliderElement.getAttribute("data-slider-nav-animation-threshold") : 0.3;
                this.setVisibleSlides(sliderElement, threshold);
            }
        },

        setVisibleSlides(sliderElement, threshold = 0.3) {
            const observer = new IntersectionObserver(slides => {
                slides.forEach(slide => {
                    slide.isIntersecting ? slide.target.parentElement.classList.add("slide-visible") : slide.target.parentElement.classList.remove("slide-visible");
                });
            }, {
                root: sliderElement.querySelector(".slider-container"),
                threshold: threshold
            });
            for (const slide of sliderElement.querySelectorAll(".slider-container>*>*"))
                observer.observe(slide);
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
            if ((container.scrollLeft + container.offsetWidth) > (container.scrollWidth - ((gapWidth / 2) + 1)) && next) {
                if (noloop) return;
                scrollLeftPosition = 0;
            }
            container.scroll({
                left: scrollLeftPosition,
                behavior: nodelay ? "auto" : "smooth"
            });
        },

        slideToByIndicator() {
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
            sliderElement.querySelector(".slider-container").addEventListener("scroll", function() {
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout(delegate, timeout);
            }, { capture: false, passive: true });
        },

        autoPlay(sliderElement, timeout, autopause) {
            timeout = timeout < 750 ? 750 : timeout;
            let autoplayTimer = setInterval(() => this.slide(sliderElement), timeout);
            const autoplayer = () => this.autoPlay(sliderElement, timeout, autopause);
            if (autopause) {
                ["mouseover", "touchstart"].forEach(function(event) {
                    sliderElement.addEventListener(event, function() {
                        window.clearTimeout(autoplayTimer);
                    }, { once: true, passive: true });
                });
                sliderElement.addEventListener("mouseout", function() {
                    autoplayer();
                }, { once: true, passive: true });
            }
            return autoplayTimer;
        },

        handleIndicators(sliderElement) {
            const container = sliderElement.querySelector(".slider-container");
            const slidingAreaWidth = container.scrollWidth - container.offsetWidth;
            const percentSlide = (container.scrollLeft / slidingAreaWidth);
            for (const scrollIndicatorContainers of sliderElement.querySelectorAll(".slider-indicators")) {
                const scrollIndicators = scrollIndicatorContainers.children;
                const activeIndicator = Math.round((scrollIndicators.length - 1) * percentSlide);
                for (const element of scrollIndicators)
                    element.removeAttribute("class");
                scrollIndicators[activeIndicator].classList.add("active");
            }
        }
    };
}();