# LEARNINGS
- Vanilla CSS animation seems smoother than GSAP, so for the simple header carrousel at the top, a simple vanilla CSS animation seems the better choice (instead of the proposed GSAP solution).
- The small ImagesLoaded library seems useful for these animations. On sites with a lot of assets, it's probably better than the vanilla DOMContentLoaded event.
- JS cloneNode is handy for cloning elements
- Set values in GSAP with a callback function and learned a simple way to include a random effect for both positive and negative values, with Math.random()
- Better understanding of CSS perspective
- z-index trick and how to include it in the GSAP animation
- modulo trick as a simple way to get the current index in the card deck (slides.js:56-57)