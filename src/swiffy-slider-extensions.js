export const swiffysliderextensions = {
    /** @type {string} */
    version: "2.0.0",

    /**
     * Initializes mouse drag on all `.swiffy-slider` elements found within `rootElement`.
     * @param {Element} [rootElement=document.body]
     */
    init(rootElement = document.body) {
        for (const sliderElement of rootElement.querySelectorAll(".swiffy-slider")) {
            this.initSlider(sliderElement);
        }
    },

    /**
     * Initializes mouse drag on a single slider element.
     * Only attaches if the element has the `.slider-nav-mousedrag` class.
     * @param {Element} sliderElement
     */
    initSlider(sliderElement) {
        if (sliderElement.classList.contains("slider-nav-mousedrag"))
            sliderElement.addEventListener("mousedown", (e) => this.handleMouseDrag(e, sliderElement), { passive: true });
    },

    /**
     * Handles a mousedown event to enable click-and-drag scrolling.
     * Intended for internal use — called automatically by `initSlider`.
     * @param {MouseEvent} e
     * @param {Element} sliderElement
     */
    handleMouseDrag(e, sliderElement) {
        if (e.target.closest(".slider-nav, .slider-indicators"))
            return;

        const container = sliderElement.querySelector(".slider-container");
        if (!container.children.length) return;

        container.style.cursor = "grabbing";
        sliderElement.classList.add("dragging");

        const startingLeftPos = container.scrollLeft;
        const mouseDownStartingXPos = e.clientX;
        const slideWidth = container.children[0].offsetWidth + parseInt(window.getComputedStyle(container).columnGap);
        const maxLeftPosition = slideWidth * (container.children.length - 1);
        let nextSlideLeftPos = startingLeftPos;
        let draggingTimer = null;

        const moveDelegate = (e) => {
            const mouseMovedXpos = e.clientX - mouseDownStartingXPos;
            const nextDraggingLeftPosition = startingLeftPos - (mouseMovedXpos * 1.8);
            if (nextDraggingLeftPosition > 0 && nextDraggingLeftPosition <= maxLeftPosition) {
                container.scrollLeft = nextDraggingLeftPosition;
            } else {
                return;
            }
            if (mouseMovedXpos < 0) {
                nextSlideLeftPos = maxLeftPosition <= startingLeftPos
                    ? startingLeftPos
                    : container.scrollLeft + (slideWidth + (mouseMovedXpos * 1.8));
            } else {
                if (startingLeftPos > 0)
                    nextSlideLeftPos = container.scrollLeft - (slideWidth - (mouseMovedXpos * 1.8));
            }
        };

        container.addEventListener("mousemove", moveDelegate, { passive: true });
        document.addEventListener("mouseup", () => {
            container.removeEventListener("mousemove", moveDelegate);
            container.style.cursor = null;
            if (nextSlideLeftPos < 0) nextSlideLeftPos = 0;
            container.scroll({ left: nextSlideLeftPos, behavior: "smooth" });
            clearTimeout(draggingTimer);
            draggingTimer = setTimeout(() => sliderElement.classList.remove("dragging"), 550);
        }, { once: true, passive: true });
    }
};
