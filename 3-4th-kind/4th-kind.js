const bodyTag = document.querySelector('body');
const mqDark = window.matchMedia('(prefers-color-scheme: dark)');

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeToggleText = darkModeToggle.querySelector('span');

const menuToggle = document.querySelector('.menu-toggle');
const menuToggleText = menuToggle.querySelector('span');

gsap.registerPlugin(CustomEase);

let tl = gsap.timeline({defaults: {duration: 0.1, ease: 'linear', transformOrigin: "center"}});
tl.to('.burger-top', {y: 8});
tl.to('.burger-bottom', {y: -8}, '<');
tl.to('.burger-mid', {scaleX: 0}, '<');
tl.to('.burger-top', {rotation: 45});
tl.to('.burger-bottom', {rotation: -45}, '<');
tl.pause();

menuToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('nav-open');

    if (bodyTag.classList.contains('nav-open')) {
        menuToggleText.innerHTML = 'Close';
        tl.play();
    } else {
        menuToggleText.innerHTML = 'Open';
        tl.reverse();
    }
})

darkModeToggle.addEventListener('click', () => {
    updateDarkMode(true);
});

function toggleDarkModeClass (showAsDark) {
    if (showAsDark) {
        bodyTag.classList.add('dark-mode');
    } else {
        bodyTag.classList.remove('dark-mode');
    }
}

function updateDarkMode(isManualToggle = false) {
    let showAsDark;
    if (isManualToggle) {
        showAsDark = !bodyTag.classList.contains('dark-mode');
    } else {
        showAsDark = mqDark.matches;
    }

    const defaults = {duration: 0.2, ease: "Expo.easeInOut"};
    if (showAsDark) {
        darkModeToggleText.innerHTML = "Light mode";
        gsap.to('circle.toggle', {cx: 19, ...defaults});
    } else {
        darkModeToggleText.innerHTML = "Dark mode";
        gsap.to('circle.toggle', {cx: 43, ...defaults});
    }

    if (isManualToggle) {
        const tl = gsap.timeline();
        tl.set("div.wipe", {height: '0', top: '0'})
        tl.to("div.wipe", {height: '100%'})
        tl.add(() => {
            toggleDarkModeClass(showAsDark);
        })
        tl.to("div.wipe", {height: '0', top: '100%'})
    } else {
        toggleDarkModeClass(showAsDark);
    }
}

updateDarkMode();
mqDark.addEventListener('change', updateDarkMode);

/** Replaced the gsap solution below for a CSS only solution, which is more smooth (from https://4th-kind.superhi.com) **/
// const spiralTimeline = gsap.timeline({repeat: -1})
// spiralTimeline
//     .set("svg.spiral rect", {transformOrigin: "center"})
//     .set("svg.spiral rect:nth-child(1)", {rotation: 15})
//     .set("svg.spiral rect:nth-child(3)", {rotation: -15})
//     .to("svg.spiral rect", {rotation: "+=90", duration: 3, stagger: -0.25 , ease: CustomEase.create("custom", "0.46,0.03,0.52,0.96")})