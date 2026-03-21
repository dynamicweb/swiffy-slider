export const swiffyslider = {
    /** @type {string} */
    version: "2.0.0",

    /** @param {Element} el @returns {Element} */
    _c(el) { return el.querySelector(".slider-container"); },
    /** @param {Element} el @param {string} cls @returns {boolean} */
    _has(el, cls) { return el.classList.contains(cls); },

    /**
     * Initializes all `.swiffy-slider` elements found within `rootElement`.
     * @param {Element} [rootElement=document.body]
     */
    init(rootElement = document.body) {
        for (const sliderElement of rootElement.querySelectorAll(".swiffy-slider")) {
            this.initSlider(sliderElement);
        }
    },

    /**
     * Initializes a single slider element — attaches nav, indicator and autoplay listeners.
     * @param {Element} sliderElement
     */
    initSlider(sliderElement) {
        for (const navElement of sliderElement.querySelectorAll(".slider-nav")) {
            const next = this._has(navElement, "slider-nav-next");
            navElement.addEventListener("click", () => this.slide(sliderElement, next), { passive: true });
        }
        for (const indicatorElement of sliderElement.querySelectorAll(".slider-indicators")) {
            indicatorElement.addEventListener("click", (e) => this.slideToByIndicator(e));
            this.onSlideEnd(sliderElement, () => this.handleIndicators(sliderElement), 60);
        }
        if (this._has(sliderElement, "slider-nav-autoplay")) {
            const timeout = Math.max(Number(sliderElement.getAttribute("data-slider-nav-autoplay-interval")) || 2500, 750);
            this.autoPlay(sliderElement, timeout, this._has(sliderElement, "slider-nav-autopause"));
        }
        if (["slider-nav-autohide", "slider-nav-animation"].some(c => this._has(sliderElement, c))) {
            const threshold = Number(sliderElement.getAttribute("data-slider-nav-animation-threshold")) || 0.3;
            this.setVisibleSlides(sliderElement, threshold);
        }
    },

    /**
     * Sets up an IntersectionObserver to toggle `.slide-visible` on slides as they enter/leave view.
     * Also toggles `.slider-item-first-visible` and `.slider-item-last-visible` on the slider.
     * @param {Element} sliderElement
     * @param {number} [threshold=0.3]
     */
    setVisibleSlides(sliderElement, threshold = 0.3) {
        const observer = new IntersectionObserver(slides => {
            for (const slide of slides) {
                slide.target.classList.toggle("slide-visible", slide.isIntersecting);
            }
            sliderElement.classList.toggle("slider-item-first-visible",
                this._c(sliderElement).querySelector(":first-child").classList.contains("slide-visible"));
            sliderElement.classList.toggle("slider-item-last-visible",
                this._c(sliderElement).querySelector(":last-child").classList.contains("slide-visible"));
        }, {
            root: this._c(sliderElement),
            threshold
        });
        for (const slide of this._c(sliderElement).querySelectorAll("*")) {
            observer.observe(slide);
        }
    },

    /**
     * Scrolls the slider one step forward or backward.
     * @param {Element} sliderElement
     * @param {boolean} [next=true]
     */
    slide(sliderElement, next = true) {
        const container = this._c(sliderElement);
        if (!container.children.length) return;
        const fullpage = this._has(sliderElement, "slider-nav-page");
        const noloop = this._has(sliderElement, "slider-nav-noloop");
        const nodelay = this._has(sliderElement, "slider-nav-nodelay");
        const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
        const scrollStep = container.children[0].offsetWidth + gapWidth;
        let scrollLeftPosition = next
            ? container.scrollLeft + (fullpage ? container.offsetWidth : scrollStep)
            : container.scrollLeft - (fullpage ? container.offsetWidth : scrollStep);
        if (container.scrollLeft < 1 && !next && !noloop)
            scrollLeftPosition = container.scrollWidth - container.offsetWidth;
        if (container.scrollLeft >= (container.scrollWidth - container.offsetWidth) && next && !noloop)
            scrollLeftPosition = 0;
        container.scroll({ left: scrollLeftPosition, behavior: nodelay ? "auto" : "smooth" });
    },

    /**
     * Scrolls the slider to the slide corresponding to the clicked indicator.
     * @param {Event} event
     */
    slideToByIndicator(event) {
        const indicator = event.target.closest(".slider-indicators > *");
        if (!indicator) return;
        const indicatorIndex = [...indicator.parentElement.children].indexOf(indicator);
        const indicatorCount = indicator.parentElement.children.length;
        const sliderElement = indicator.closest(".swiffy-slider");
        const slideCount = this._c(sliderElement).children.length;
        this.slideTo(sliderElement, (slideCount / indicatorCount) * indicatorIndex);
    },

    /**
     * Scrolls the slider to a specific slide index (zero-based).
     * @param {Element} sliderElement
     * @param {number} slideIndex
     */
    slideTo(sliderElement, slideIndex) {
        const container = this._c(sliderElement);
        if (!container.children.length) return;
        const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
        const scrollStep = container.children[0].offsetWidth + gapWidth;
        const nodelay = this._has(sliderElement, "slider-nav-nodelay");
        container.scroll({ left: scrollStep * slideIndex, behavior: nodelay ? "auto" : "smooth" });
    },

    /**
     * Registers a debounced callback that fires after scrolling stops.
     * @param {Element} sliderElement
     * @param {() => void} delegate
     * @param {number} [timeout=125]
     */
    onSlideEnd(sliderElement, delegate, timeout = 125) {
        let isScrolling;
        this._c(sliderElement).addEventListener("scroll", () => {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(delegate, timeout);
        }, { passive: true });
    },

    /**
     * Starts auto-playing the slider at a given interval.
     * @param {Element} sliderElement
     * @param {number} timeout - Interval in milliseconds.
     * @param {boolean} autopause - Pause on hover/touch, resume on leave.
     * @returns {ReturnType<typeof setInterval>}
     */
    autoPlay(sliderElement, timeout, autopause) {
        const autoplayTimer = setInterval(() => this.slide(sliderElement), timeout);
        const resume = () => {
            for (const event of ["mouseout", "touchend"])
                sliderElement.removeEventListener(event, resume);
            this.autoPlay(sliderElement, timeout, autopause);
        };
        if (autopause) {
            for (const event of ["mouseover", "touchstart"])
                sliderElement.addEventListener(event, () => clearInterval(autoplayTimer), { once: true, passive: true });
            for (const event of ["mouseout", "touchend"])
                sliderElement.addEventListener(event, resume, { once: true, passive: true });
        }
        return autoplayTimer;
    },

    /**
     * Updates the active indicator dot to reflect the current scroll position.
     * @param {Element} sliderElement
     */
    handleIndicators(sliderElement) {
        if (!sliderElement) return;
        const container = this._c(sliderElement);
        const scrollableWidth = container.scrollWidth - container.offsetWidth;
        if (scrollableWidth === 0) return;
        const percentSlide = container.scrollLeft / scrollableWidth;
        for (const indicatorContainer of sliderElement.querySelectorAll(".slider-indicators")) {
            const indicators = indicatorContainer.children;
            const activeIndex = Math.abs(Math.round((indicators.length - 1) * percentSlide));
            for (const el of indicators) el.classList.remove("active");
            indicators[activeIndex].classList.add("active");
        }
    }
};
