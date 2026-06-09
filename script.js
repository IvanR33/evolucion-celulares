document.addEventListener('DOMContentLoaded', () => {
    // === 1. NAVEGACIÓN ENTRE SECCIONES ===
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // Quitar clase activa a todos los links y secciones
            links.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activar el link actual y su sección correspondiente
            link.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // === 2. CARRUSEL DE IMÁGENES (HERO) ===
    const track = document.querySelectorAll('.carousel-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        track.forEach(img => img.classList.remove('active'));
        track[index].classList.add('active');
    }

    if(prevBtn && nextBtn && track.length > 0) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? track.length - 1 : currentIndex - 1;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === track.length - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });
    }

    // === 3. CONTADOR DE CARACTERES (CONTACTO) ===
    const mensajeTextarea = document.getElementById('conMensaje');
    const charCount = document.getElementById('charCount');

    if(mensajeTextarea && charCount) {
        mensajeTextarea.addEventListener('input', () => {
            const totalLetters = mensajeTextarea.value.length;
            charCount.textContent = `Caracteres: ${totalLetters}`;
        });
    }

    // === 4. MODALES (VENTANAS DE HITOS) ===
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');
    const cards = document.querySelectorAll('.hito-card');

    // Información cyberpunk de los teléfonos para mostrar en el modal
    const infoHitos = {
        startac: { title: "Motorola StarTAC (1996)", desc: "El primer teléfono con diseño de concha (clamshell), revolucionando el tamaño y la portabilidad móvil." },
        s10: { title: "Siemens S10 (1998)", desc: "Hito histórico por ser el primer dispositivo móvil con una pantalla a color (4 colores disponibles)." },
        nokia5110: { title: "Nokia 5110 (1998)", desc: "Famoso por su resistencia extrema, carcasas intercambiables y por popularizar el juego de la serpiente (Snake)." },
        sph: { title: "Samsung SPH-M100 (2000)", desc: "El pionero absoluto en reproducir música en formato MP3 directamente desde el dispositivo." },
        kyocera: { title: "Kyocera VP-210 (1999)", desc: "El verdadero primer teléfono comercial de la historia con una cámara integrada para videollamadas." },
        nokia3310: { title: "Nokia 3310 (2000)", desc: "Un ícono de la cultura pop global, recordado como un teléfono virtualmente indestructible." },
        ericsson: { title: "Ericsson R380s (2000)", desc: "El primer dispositivo en ser comercializado oficialmente bajo el término 'Smartphone' con sistema Symbian." },
        sl45i: { title: "Siemens SL45i (2001)", desc: "Primer teléfono con memoria externa expandible mediante tarjeta multimedia y soporte Java." },
        t68i: { title: "Sony Ericsson T68i (2002)", desc: "Conectividad total mediante Bluetooth, pantalla a color avanzada y mensajería multimedia (MMS)." }
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const hitoKey = card.getAttribute('data-modal');
            const data = infoHitos[hitoKey];

            if(data) {
                modalBody.innerHTML = `
                    <h2>${data.title}</h2>
                    <p style="margin-top:15px; line-height:1.6;">${data.desc}</p>
                `;
                modal.style.display = 'block';
            }
        });
    });

    if(modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


