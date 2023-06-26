const storyTimeline = gsap.timeline();

gsap.set("section.scene img", {x: i => (i * 100) + 300 + "vh"});
gsap.set("section.house", {x: 300, y: 30});

storyTimeline
    .to("header", {opacity: 0, delay: 3})
    .addLabel("startScene")
    .to("section.scene", {opacity: 1, duration: 5}, "startScene")
    .to("section.scene img", {x: "0dvh", duration: 10, ease: "linear"}, "startScene")
    .addLabel("endScene")
    .to("section.scene", {opacity: 0}, "endScene")
    .to("section.house", {opacity: 1, x: 0, y: 0, duration: 2}, "endScene")

storyTimeline.pause();

/** Used scroll trigger instead of the native solution below (commented out), since this has scrub delay and is probably better. **/
ScrollTrigger.create({
    animation: storyTimeline,
    scrub: 1
});

// let update;
//
// window.addEventListener('scroll', () => {
//     const pixels = window.scrollY;
//     const currentTime = pixels / 300;
//
//     cancelAnimationFrame(update);
//
//     update = requestAnimationFrame(() => storyTimeline.seek(currentTime))
// })

const eyesTimeline = gsap.timeline({repeat: -1});

const eyeBalls = document.querySelectorAll("path[id*='ball']")

eyesTimeline
    .to(eyeBalls, {y: 7, duration: 0.25, delay: 2, stagger: 0.25})
    .to(eyeBalls, {y: 0, duration: 0.25, delay: 4});

const hatTimeline = gsap.timeline({repeat: -1, repeatDelay: 4});

const hat = document.querySelector("g#hat");

hatTimeline
    .to(hat, {y: -50, rotation: -10, duration: 0.25, delay: 1})
    .to(hat, {y: 0, rotation: 0, duration: 0.5, delay: 0.1});

const leftArmTimeline = gsap.timeline({repeat: -1});

const leftArm = document.querySelector("#left-arm");

leftArmTimeline
    .to(leftArm, {rotation: 20, duration: 0.25, delay: 2})
    .to(leftArm, {rotation: 0, duration: 0.25, delay: 2})

const rightArmTimeline = gsap.timeline({repeat: -1});

const rightArm = document.querySelector("#right-arm");

rightArmTimeline
    .to(rightArm, {rotation: -20, duration: 0.25, delay: 3})
    .to(rightArm, {rotation: 0, duration: 0.25, delay: 2})

const tvTimeline = gsap.timeline({repeat: -1})

const tvLight = document.querySelector("#tv-light");

const opacity = 0.75;

tvTimeline
    .set(tvLight, {opacity: opacity})
    .to(tvLight, {opacity: 1, duration: 1, delay: 0.5})
    .to(tvLight, {opacity: opacity})
    .to(tvLight, {opacity: 1, duration: 0.4, delay: 0.5})
    .to(tvLight, {opacity: opacity})

const label = document.querySelector('.label');
const links = document.querySelectorAll('svg a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        label.classList.add('is-visible');
        label.innerHTML = link.getAttribute('aria-label');

        const otherLinks = [...links].filter(a => a !== link);
        gsap.to(otherLinks, {opacity: 0.25});
    })

    link.addEventListener('mouseleave', () => {
        label.classList.remove('is-visible');
        label.innerHTML = "Label";

        gsap.to(links, {opacity: 1});
    })
})

document.addEventListener('mousemove', (e) => {
    label.style.left = e.clientX + 'px';
    label.style.top = e.clientY + 'px';
})