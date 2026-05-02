<script>
// script.js - Versión Profesional (fuerza de recarga)

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    console.log('%c🚀 Script profesional cargado correctamente', 'color:#00f5ff; font-size:14px; font-weight:bold');

    // Navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            const target = document.getElementById(sectionId);
            if (target) target.classList.add('active');
        });
    });

    // ==================== MODAL (mejorado) ====================
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    const modelos = { /* ... mantengo exactamente el mismo objeto que tenías ... */
        startac: { titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", texto: "El primer teléfono plegable comercialmente exitoso." },
        s10: { titulo: "Siemens S10", año: "1997", img: "Siemens S10.jpg", texto: "Uno de los primeros con pantalla a color." },
        nokia5110: { titulo: "Nokia 5110", año: "1998", img: "Nokia-5110.jpg", texto: "Icono de los 90s famoso por Snake." },
        sph: { titulo: "Samsung SPH-M100", año: "1999", img: "Samsung SPH-M100.jpg", texto: "Primer teléfono con MP3 nativo." },
        kyocera: { titulo: "Kyocera VP-210", año: "1999", img: "Kyocera VP-210.jpeg", texto: "Pionero en videollamadas." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", texto: "El legendario Nokia 3310." },
        ericsson: { titulo: "Ericsson R380s", año: "2000", img: "Ericsson_R380s_004.jpg", texto: "Primer Smartphone oficial." },
        sl45i: { titulo: "Siemens SL45i", año: "2001", img: "Siemens-SL45i.jpg", texto: "Uno de los primeros con MP3 integrado." },
        t68i: { titulo: "Sony Ericsson T68i", año: "2002", img: "Sony-Ericsson-T68i.jpg", texto: "Primer teléfono con Bluetooth y pantalla a color." }
    };

    function abrirModal(id) {
        const data = modelos[id];
        if (!data) return;

        modalBody.innerHTML = `
            <img src="${data.img}" alt="${data.titulo}" loading="lazy">
            <h2>${data.titulo} <span>(${data.año})</span></h2>
            <p>${data.texto}</p>
        `;
        modal.style.display = "flex";
    }

    modalClose?.addEventListener('click', () => modal.style.display = "none");
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-modal');
            if (id) abrirModal(id);
        });
    });

    // Formularios (con console para verificar que funciona)
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Registro enviado');
            alert('¡Registro exitoso!');
            formRegistro.reset();
        });
    }

    // Resto de formularios igual...
    console.log('%c✅ Todo listo - Prueba haciendo clic en las tarjetas', 'color:#ff2a7a');
});
</script>


