<script>
// script.js - Versión Profesional y Robusta

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // ==================== NAVEGACIÓN ====================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Mostrar Hero por defecto
    const heroSection = document.getElementById('hero');
    if (heroSection) heroSection.classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remover active de todo
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activar nuevo
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                // Scroll suave al inicio de la sección (opcional pero profesional)
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==================== MODAL ====================
    const modelos = {
        startac: { 
            titulo: "Motorola StarTAC", 
            año: "1996", 
            img: "Motorola-StarTAC.jpg", 
            texto: "El primer teléfono plegable comercialmente exitoso." 
        },
        s10: { 
            titulo: "Siemens S10", 
            año: "1997", 
            img: "Siemens S10.jpg", 
            texto: "Uno de los primeros con pantalla a color." 
        },
        nokia5110: { 
            titulo: "Nokia 5110", 
            año: "1998", 
            img: "Nokia-5110.jpg", 
            texto: "Icono de los 90s famoso por Snake." 
        },
        sph: { 
            titulo: "Samsung SPH-M100", 
            año: "1999", 
            img: "Samsung SPH-M100.jpg", 
            texto: "Primer teléfono con MP3 nativo." 
        },
        kyocera: { 
            titulo: "Kyocera VP-210", 
            año: "1999", 
            img: "Kyocera VP-210.jpeg", 
            texto: "Pionero en videollamadas." 
        },
        nokia3310: { 
            titulo: "Nokia 3310", 
            año: "2000", 
            img: "Nokia-3310.jpg", 
            texto: "El legendario Nokia 3310." 
        },
        ericsson: { 
            titulo: "Ericsson R380s", 
            año: "2000", 
            img: "Ericsson_R380s_004.jpg", 
            texto: "Primer Smartphone oficial." 
        },
        sl45i: { 
            titulo: "Siemens SL45i", 
            año: "2001", 
            img: "Siemens-SL45i.jpg", 
            texto: "Uno de los primeros con MP3 integrado." 
        },
        t68i: { 
            titulo: "Sony Ericsson T68i", 
            año: "2002", 
            img: "Sony-Ericsson-T68i.jpg", 
            texto: "Primer teléfono con Bluetooth y pantalla a color." 
        }
    };

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');

    function abrirModal(id) {
        const data = modelos[id];
        if (!data || !modalBody) return;

        modalBody.innerHTML = `
            <img src="${data.img}" alt="${data.titulo}" loading="lazy">
            <h2>${data.titulo} <span>(${data.año})</span></h2>
            <p>${data.texto}</p>
        `;

        modal.style.display = "flex";
        modal.classList.add('show'); // Para animaciones futuras
    }

    // Cerrar modal
    function cerrarModal() {
        if (modal) {
            modal.style.display = "none";
            modal.classList.remove('show');
        }
    }

    if (modalClose) modalClose.addEventListener('click', cerrarModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal();
        });
    }

    // Abrir modales desde las cards
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-modal');
            if (id) abrirModal(id);
        });
    });

    // ==================== FORMULARIOS ====================
    const forms = {
        formRegistro: document.getElementById('formRegistro'),
        formLogin: document.getElementById('formLogin'),
        formContacto: document.getElementById('formContacto')
    };

    // Registro
    if (forms.formRegistro) {
        forms.formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí iría la lógica real de envío (fetch / API)
            alert('¡Registro exitoso! 🎉'); // Temporal
            forms.formRegistro.reset();
        });
    }

    // Login
    if (forms.formLogin) {
        forms.formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('logFeedback');
            if (feedback) {
                feedback.innerHTML = '<p class="success-msg">¡Acceso exitoso! Bienvenido.</p>';
            }
            // Reset después de unos segundos (opcional)
            setTimeout(() => {
                if (feedback) feedback.innerHTML = '';
            }, 4000);
        });
    }

    // Contacto + Contador de caracteres
    const textarea = document.getElementById('conMensaje');
    const charCount = document.getElementById('charCount');

    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            charCount.textContent = `Caracteres: ${textarea.value.length}`;
        });
    }

    if (forms.formContacto) {
        forms.formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado correctamente! Gracias.');
            forms.formContacto.reset();
            if (charCount) charCount.textContent = 'Caracteres: 0';
        });
    }

    // ==================== TECLA ESC PARA CERRAR MODAL ====================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });

});
</script>


