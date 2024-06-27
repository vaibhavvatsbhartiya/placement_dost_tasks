// Example using ScrollReveal.js for animations
ScrollReveal().reveal('.container', {
    delay: 200,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${(index + 1) * 0.5}s`;
    });
});
