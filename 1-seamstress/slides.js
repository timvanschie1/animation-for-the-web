const slidesElements = document.querySelectorAll('.slides')

slidesElements.forEach((slides) => {
    let current = 0;
    const images = slides.querySelectorAll('div');

    let z = 1000000;
    images.forEach((image) => {
        z--;
        image.style.zIndex = z;
    })

    imagesLoaded(images, () => {
        const tl = gsap.timeline();

        tl.set(images, {
            x: () => {
                return 500 * Math.random() - 250;
            },
            y: '500%',
            rotation: () => {
                return 90 * Math.random() - 45;
            },
            opacity: 1,
        })
            .to(images, {x: 0, y: 0, stagger: -0.25})
            .to(images, {
                rotation: () => {
                    return 16 * Math.random() - 8;
                },
            })

        slides.addEventListener('click', () => {
            z--;

            const currentImage = images[current];

            let direction = "150%";
            let angle = 15;
            let rotateY = -30;

            if (Math.random() > 0.5) {
                direction = "-150%";
                angle = -15;
                rotateY = 30;
            }

            const flipTimeline = gsap.timeline();
            flipTimeline
                .set(currentImage, {x: 0})
                .to(currentImage, {x: direction, rotation: angle, rotationY: rotateY, scale: 1.1, duration: 0.4})
                .set(currentImage, {zIndex: z})
                .to(currentImage, {x: 0, rotation: 16 * Math.random() - 8, rotationY: 0, scale: 1, duration: 0.4})

            current++;
            current = current % images.length;
        })
    })
})