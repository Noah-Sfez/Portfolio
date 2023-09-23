const slidingNewsletter = document.querySelector('.slide-in');
let animationTriggered = false; // Variable de drapeau pour vérifier si l'animation a été déclenchée

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    if (topElementToTopViewport <= clientHeight * 0.8 && !animationTriggered) {
        slidingNewsletter.classList.add('active');
        animationTriggered = true; // Marquez l'animation comme déclenchée
    }
});
