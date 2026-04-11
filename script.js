document.addEventListener("DOMContentLoaded", () => {
    
    const hiddenElements = document.querySelectorAll('.card, .info-box, .schedule-highlight');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Ha az elem megjelenik a képernyőn (viewportban)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});