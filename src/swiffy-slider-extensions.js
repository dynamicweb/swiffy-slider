const swiffysliderextensions = function() {
    return {
        version: "1.6.0",
        draggingtimer: null,
        init(rootElement = document.body) {
            rootElement.querySelectorAll(".swiffy-slider").forEach(sliderElement => this.initSlider(sliderElement));
        },

        initSlider(sliderElement) {
            if (sliderElement.classList.contains("slider-nav-mousedrag")) {
                sliderElement.addEventListener("mousedown", (e) => this.handleMouseDrag(e, sliderElement), {passive: true});
                sliderElement.addEventListener("touchstart", (e) => this.handleMouseDrag(e, sliderElement), {passive: true});
            }
        },

        handleMouseDrag(e, sliderElement) {
            if (e.srcElement.classList.contains('slider-nav') || e.srcElement.parentElement.classList.contains('slider-indicators'))
                return;

            const container = sliderElement.querySelector(".slider-container");
            if (sliderElement.classList.contains("dragging")) {
                clearTimeout(this.draggingtimer);
            }
            container.style.cursor = "grabbing";
            sliderElement.classList.add("dragging");

            const startingLeftPos = container.scrollLeft;
            const mouseDownStartingXPos = e.clientX ?? e.touches[0].pageX;
            const slideWidth = container.children[0].offsetWidth + parseInt(window.getComputedStyle(container).columnGap);
            const maxLeftPosition = slideWidth * (container.children.length - 1);
            const startLeftScroll = container.scrollLeft;
            let nextSlideLeftPos = startLeftScroll;

            const moveDelegate = (e) => {
                const mouseMovedXpos = (e.clientX ?? e.touches[0].pageX) - mouseDownStartingXPos;
                const nextDraggingLeftPosition = startingLeftPos - (mouseMovedXpos * 1.8);

                if (nextDraggingLeftPosition > 0 && nextDraggingLeftPosition <= maxLeftPosition) {
                    container.scrollLeft = nextDraggingLeftPosition;
                } else {
                    return;
                }
                if (mouseMovedXpos < 0) {
                    //Dragging from right to left
                    if (maxLeftPosition <= startLeftScroll) {
                        //Dragging right on last slide which is should not try to move the slides
                        nextSlideLeftPos = startLeftScroll;
                    } else {
                        nextSlideLeftPos = container.scrollLeft + (slideWidth + (mouseMovedXpos * 1.8));
                    }
                } else {
                    //Dragging from left to right
                    if (startLeftScroll > 0) {
                        nextSlideLeftPos = container.scrollLeft - (slideWidth - (mouseMovedXpos * 1.8));
                    }
                }
            }

            const getVisibleSliders = (e, sliderElement) => {
                const container = sliderElement.querySelector('.slider-container');
                //returns an array of slide elements that are fully or partially visible
                const visibleSlides = [];
                //We are using a grid layout and the slides left and right properties include the width of the gap, so when comparing with container width add a gap for each side of the slide gap.
                const gapWidth = parseInt(window.getComputedStyle(container).columnGap);
                for (const slide of container.children) {
                    var slideScrollLeftPosition = slide.getBoundingClientRect().left - container.getBoundingClientRect().left;
                    var slideScrollRightPosition = slideScrollLeftPosition + slide.offsetWidth - gapWidth;
                    if (slideScrollLeftPosition >= 0 && slideScrollRightPosition <= container.offsetWidth) {
                        visibleSlides.push(slide);
                    }
                }
                return visibleSlides;
            }

            const sliderTrigger = (e) => {
                container.removeEventListener('mousemove', moveDelegate);
                container.removeEventListener('touchmove', moveDelegate);
                container.style.cursor = null;

                if(nextSlideLeftPos != maxLeftPosition && Math.abs(startingLeftPos - nextSlideLeftPos) <= 10) {
                    currentSlider = getVisibleSliders(e, sliderElement);
                    if (currentSlider.length > 0) {
                        if(currentSlider[0].querySelector('a'))
                        currentSlider[0].querySelector('a').click();
                    }
                }

                if(nextSlideLeftPos == maxLeftPosition) {
                    nextSlideLeftPos = 0;
                    window.swiffyslider.slide(sliderElement, true);
                }
                else if (nextSlideLeftPos <= 0) {
                    nextSlideLeftPos = 0;
                }
                else {
                    container.scroll({
                        left: nextSlideLeftPos,
                        behavior: "smooth"
                    });
                }
                this.draggingtimer = setTimeout(() => { sliderElement.classList.remove("dragging"); }, 550);
            }

            container.addEventListener('mousemove', moveDelegate, { passive: true });
            container.addEventListener('touchmove', moveDelegate, { passive: true });
            document.addEventListener('mouseup', sliderTrigger, { once: true, passive: true });
            document.addEventListener('touchend', sliderTrigger, { once: true, passive: true });
        }
    };
}();

window.swiffyslider.extensions = swiffysliderextensions;
if (!document.currentScript.hasAttribute("data-noinit")) {
    window.addEventListener("load", () => {
        swiffyslider.extensions.init();
    });
}
