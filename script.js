// script.js - Funcionalidad completa para el proyecto

document.addEventListener('DOMContentLoaded', () => {

    // ==================== NAVEGACIÓN ENTRE SECCIONES ====================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remover clase active de todos los links y secciones
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activar el link y la sección correspondiente
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // ==================== MODAL PARA HITOS ====================
    const modelos = {
        s10: {
            titulo: "Siemens S10",
            año: "1997",
            img: "Siemens S10.jpg",
            texto: "Fue uno de los primeros teléfonos móviles en incorporar una pantalla a color, aunque limitada a solo 4 colores (rojo, verde, azul y blanco). Representó un gran avance en la visualización de información en dispositivos portátiles."
        },
        sph: {
            titulo: "Samsung SPH-M100",
            año: "1999",
            img: "Samsung SPH-M100.jpg",
            texto: "El primer teléfono del mundo capaz de reproducir archivos MP3 de forma nativa. Marcó el comienzo de la era multimedia en los teléfonos celulares."
        },
        kyocera: {
            titulo: "Kyocera VP-210",
            año: "1999",
            img: "Kyocera VP-210.jpeg",
            texto: "Pionero en la integración de cámara para videollamadas. Fue uno de los primeros dispositivos que permitió transmitir video en tiempo real."
        },
        ericsson: {
            titulo: "Ericsson R380s",
            año: "2000",
            img: "Ericsson_R380s_004.jpg",
            texto: "Reconocido como el primer Smartphone oficial de la historia. Incluía pantalla táctil y sistema operativo Symbian."
        }
    };

    function abrirModal(id) {
        const modal = document.getElementById('modal');
        const body = document.getElementById('modal-body');
        const data = modelos[id];

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

    // Click en las tarjetas de hitos
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            abrirModal(modalId);
        });
    });

    // ==================== VALIDACIÓN DE FORMULARIOS ====================

    // Formulario de Registro
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            // Limpiar errores previos
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPass').value;
            const passConf = document.getElementById('regPassConf').value;

            let valid = true;

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('errEmail').textContent = 'Formato de email inválido';
                valid = false;
            }
            if (pass.length < 8) {
                document.getElementById('errPass').textContent = 'La contraseña debe tener mínimo 8 caracteres';
                valid = false;
            }
            if (pass !== passConf) {
                document.getElementById('errPassConf').textContent = 'Las contraseñas no coinciden';
                valid = false;
            }

            if (valid) {
                alert('¡Registro exitoso! Los datos han sido validados correctamente.');
                formRegistro.reset();
            }
        });
    }

    // Formulario de Login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('logFeedback');
            feedback.innerHTML = '<p class="success-msg">¡Acceso exitoso! Bienvenido al sistema.</p>';

            // Limpiar después de 3 segundos
            setTimeout(() => {
                formLogin.reset();
                feedback.innerHTML = '';
            }, 3000);
        });
    }

    // Formulario de Contacto + Contador de caracteres
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
