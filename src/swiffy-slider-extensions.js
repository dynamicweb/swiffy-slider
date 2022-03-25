const swiffysliderextensions = function() {
    return {
        version: "1.5.2",
        draggingtimer: null,
        init(rootElement = document.body) {
            for (const sliderElement of rootElement.querySelectorAll(".swiffy-slider")) {
                this.initSlider(sliderElement);
            }
        },

        initSlider(sliderElement) {
            if (sliderElement.classList.contains("slider-nav-mousedrag"))
                sliderElement.addEventListener("mousedown", (e) => this.handleMouseDrag(e, sliderElement), { passive: true });
        },

        handleMouseDrag(e, sliderElement) {
            const container = sliderElement.querySelector(".slider-container");
            if (container.classList.contains("dragging")) {
                clearTimeout(this.draggingtimer);
            }
            container.style.cursor = "grabbing";
            container.classList.add("dragging");

            const startingLeftPos = container.scrollLeft;
            const mouseDownStartingXPos = e.clientX;
            const slideWidth = container.children[0].offsetWidth + parseInt(window.getComputedStyle(container).columnGap);
            let nextSlideLeftPos = 0;

            const moveDelegate = (e) => {
                const mouseMovedXpos = e.clientX - mouseDownStartingXPos;
                container.scrollLeft = startingLeftPos - (mouseMovedXpos * 1.8);
                if (mouseMovedXpos < 0) {
                    nextSlideLeftPos = container.scrollLeft + (slideWidth + (mouseMovedXpos * 1.8));
                } else {
                    nextSlideLeftPos = container.scrollLeft - (slideWidth - (mouseMovedXpos * 1.8));
                }
            }

            container.addEventListener('mousemove', moveDelegate, { passive: true });
            document.addEventListener('mouseup', () => {
                container.removeEventListener('mousemove', moveDelegate);
                container.style.cursor = null;
                if (nextSlideLeftPos != 0)
                    container.scroll({
                        left: nextSlideLeftPos,
                        behavior: "smooth"
                    });
                this.draggingtimer = setTimeout(() => { container.classList.remove("dragging"); }, 550);
            }, { once: true, passive: true });
        }
    };
}();

window.swiffyslider.extensions = swiffysliderextensions;
if (!document.currentScript.hasAttribute("data-noinit")) {
    window.addEventListener("load", () => {
        swiffyslider.extensions.init();
    });
}