const carousels = document.querySelectorAll('header h1, header h2')

const tl = gsap.timeline()

tl.set(carousels, {opacity: 0}).to(carousels, {opacity: 1, delay: 1, stagger: 1, duration: 3})

carousels.forEach((carousel) => {
    const spanTag = carousel.querySelector('span')

    const spanWidth = spanTag.clientWidth;
    // Use custom property en vanilla CSS for the animation, since it's smoother
    carousel.style.setProperty("--_spanWidth", spanWidth);

    for (let i = 0; i < 20; i++) {
        const newSpan = spanTag.cloneNode(true)
        newSpan.setAttribute('aria-hidden', true)
        carousel.appendChild(newSpan)
    }
})