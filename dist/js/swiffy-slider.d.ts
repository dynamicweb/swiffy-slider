export declare const swiffyslider: {
    /** Library version */
    readonly version: string;

    /**
     * Initializes all `.swiffy-slider` elements found within `rootElement`.
     * @param rootElement - The root element to search within. Defaults to `document.body`.
     */
    init(rootElement?: Element): void;

    /**
     * Initializes a single slider element — attaches nav, indicator and autoplay listeners.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     */
    initSlider(sliderElement: Element): void;

    /**
     * Sets up an IntersectionObserver to toggle `.slide-visible` on slides as they enter/leave view.
     * Also toggles `.slider-item-first-visible` and `.slider-item-last-visible` on the slider.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     * @param threshold - Intersection ratio at which a slide is considered visible. Defaults to `0.3`.
     */
    setVisibleSlides(sliderElement: Element, threshold?: number): void;

    /**
     * Scrolls the slider one step forward or backward.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     * @param next - `true` to go forward, `false` to go backward. Defaults to `true`.
     */
    slide(sliderElement: Element, next?: boolean): void;

    /**
     * Scrolls the slider to the slide corresponding to the clicked indicator.
     * Pass the click `Event` from a `.slider-indicators` click handler.
     * @param event - The click event fired on or within `.slider-indicators`.
     */
    slideToByIndicator(event: Event): void;

    /**
     * Scrolls the slider to a specific slide index (zero-based).
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     * @param slideIndex - Zero-based index of the slide to scroll to.
     */
    slideTo(sliderElement: Element, slideIndex: number): void;

    /**
     * Registers a debounced callback that fires after scrolling stops.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     * @param delegate - Callback to invoke when scrolling ends.
     * @param timeout - Debounce delay in milliseconds. Defaults to `125`.
     */
    onSlideEnd(sliderElement: Element, delegate: () => void, timeout?: number): void;

    /**
     * Starts auto-playing the slider at a given interval.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     * @param timeout - Interval between slides in milliseconds.
     * @param autopause - When `true`, pauses on hover/touch and resumes on leave.
     * @returns The interval timer ID (from `setInterval`).
     */
    autoPlay(sliderElement: Element, timeout: number, autopause: boolean): ReturnType<typeof setInterval>;

    /**
     * Updates the active indicator dot to reflect the current scroll position.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     */
    handleIndicators(sliderElement: Element): void;
};
