// ==================== CARRUSEL EN HERO ====================
document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.getElementById('main-carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Autoplay (opcional - cada 5 segundos)
    let autoplay = setInterval(nextSlide, 5000);

    // Pausar autoplay al pasar el mouse
    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', () => {
        autoplay = setInterval(nextSlide, 5000);
    });

    // Teclas flecha (opcional)
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('hero').classList.contains('active')) {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        }
    });

});



