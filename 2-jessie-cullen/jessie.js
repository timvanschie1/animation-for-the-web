const headerTag = document.querySelector('header');
const arrowTag = document.querySelector('.arrow');
const blobGroups = document.querySelectorAll('g.blob');
const sectionTags = document.querySelectorAll('section');

function easing (x) {
    return x * x * x;
}

function fadeHeaderAndArrow () {
    const pixels = window.scrollY;
    const opacity = (1 - easing(pixels / 500)).toString();
    headerTag.style.opacity = opacity;
    arrowTag.style.opacity = opacity;
}

function checkBlobs () {
    const pixels = window.scrollY;

    blobGroups.forEach((blob, i) => {
        const currentSection = sectionTags[i];

        if (pixels > currentSection.offsetTop - 300) {
            blob.classList.add('in-view');
        } else {
            blob.classList.remove('in-view');
        }
    })
}

window.addEventListener('scroll', () => {
    fadeHeaderAndArrow()
    checkBlobs()
});