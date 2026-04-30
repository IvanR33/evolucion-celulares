/* script.js - Navegación + Modal + Formularios */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== NAVEGACIÓN ENTRE SECCIONES ====================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Mostrar Hero por defecto
    document.getElementById('hero').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Quitar "active" de todos los links y secciones
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activar el link clickeado y su sección
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // ==================== MODAL ====================
    const modelos = {
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
        const modal = document.getElementById('modal');
        const body = document.getElementById('modal-body');
        const data = modelos[id];
        if (!data) return;

        body.innerHTML = `
            <img src="${data.img}" alt="${data.titulo}">
            <h2>${data.titulo} <span style="font-size:1.1rem; opacity:0.8;">(${data.año})</span></h2>
            <p>${data.texto}</p>
        `;
        modal.style.display = "flex";
    }

    // Eventos del modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = "none";
    });

    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            document.getElementById('modal').style.display = "none";
        }
    });

    // Abrir modal desde tarjetas
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            abrirModal(modalId);
        });
    });

    // ==================== FORMULARIOS (básicos) ====================
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Registro exitoso!');
            formRegistro.reset();
        });
    }

    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('logFeedback').innerHTML = '<p class="success-msg">¡Acceso exitoso! Bienvenido.</p>';
            setTimeout(() => {
                formLogin.reset();
                document.getElementById('logFeedback').innerHTML = '';
            }, 2500);
        });
    }

    const textarea = document.getElementById('conMensaje');
    const charCount = document.getElementById('charCount');
    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            charCount.textContent = `Caracteres: ${textarea.value.length}`;
        });
    }

    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado correctamente!');
            formContacto.reset();
            if (charCount) charCount.textContent = 'Caracteres: 0';
        });
    }

});


