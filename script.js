const slidingNewsletter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    if (topElementToTopViewport <= clientHeight * 0.8) {
        slidingNewsletter.classList.add('active');
    }
});

const aeklysNewsletter = document.querySelector('.aeklys');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementAeklysToTopViewport = aeklysNewsletter.getBoundingClientRect().top;

    if (topElementAeklysToTopViewport <= clientHeight * 0.6) {
        aeklysNewsletter.classList.add('active');
    }
});

const mouseNewsletter = document.querySelector('.mouse');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementMouseToTopViewport = mouseNewsletter.getBoundingClientRect().top;

    if (topElementMouseToTopViewport <= clientHeight * 0.6) {
        mouseNewsletter.classList.add('active');
    }
});