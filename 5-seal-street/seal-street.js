const sections = document.querySelectorAll('section');
let currentInViewIndex = -1;

function setNewInViewClass(entries, entry) {
    const newInViewIndex = [...sections].findIndex(section => section === entry.target);

    const classes = ['in-view'];
    if (newInViewIndex > currentInViewIndex) {
        classes.push('in-view--from-bottom');
    } else {
        classes.push('in-view--from-top');
    }

    entry.target.classList.add(...classes);
    currentInViewIndex = newInViewIndex;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1) {
            setNewInViewClass(entries, entry);
        } else {
            entry.target.classList.remove('in-view', 'in-view--from-bottom', 'in-view--from-top');
        }
    })
}, {
    threshold: [0.0, 0.1, 1.0]
})

sections.forEach(section => {
    observer.observe(section);
})
