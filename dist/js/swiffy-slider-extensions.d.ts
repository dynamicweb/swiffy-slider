export declare const swiffysliderextensions: {
    /** Library version */
    readonly version: string;

    /**
     * Initializes mouse drag on all `.swiffy-slider` elements found within `rootElement`.
     * @param rootElement - The root element to search within. Defaults to `document.body`.
     */
    init(rootElement?: Element): void;

    /**
     * Initializes mouse drag on a single slider element.
     * Only attaches if the element has the `.slider-nav-mousedrag` class.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     */
    initSlider(sliderElement: Element): void;

    /**
     * Handles a mousedown event to enable click-and-drag scrolling.
     * Intended for internal use — called automatically by `initSlider`.
     * @param e - The mousedown event.
     * @param sliderElement - The `.swiffy-slider` wrapper element.
     */
    handleMouseDrag(e: MouseEvent, sliderElement: Element): void;
};
