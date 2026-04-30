/* script.js - Validación de Formularios + Modal para Línea de Tiempo */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== VALIDACIONES ====================
    const Validator = {
        isValidEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        isSecurePassword: (pass) => pass.length >= 8,
        passwordsMatch: (p1, p2) => p1 === p2,
        sanitize: (str) => {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    };

    // ==================== MODAL PARA HITOS (9 celulares) ====================
    const modelos = {
        startac: {
            titulo: "Motorola StarTAC",
            año: "1996",
            img: "Motorola StarTAC.jpg",
            texto: "El primer teléfono plegable comercialmente exitoso. Revolucionó el diseño de los celulares con su formato compacto y ligero."
        },
        s10: {
            titulo: "Siemens S10",
            año: "1997",
            img: "Siemens S10.jpg",
            texto: "Uno de los primeros teléfonos con pantalla a color (aunque limitada a 4 colores). Marcó un hito en la visualización de información en móviles."
        },
        nokia5110: {
            titulo: "Nokia 5110",
            año: "1998",
            img: "Nokia 5110.jpg",
            texto: "Icono de los años 90. Conocido por su durabilidad, batería de larga duración y el famoso juego Snake."
        },
        sph: {
            titulo: "Samsung SPH-M100",
            año: "1999",
            img: "Samsung SPH-M100.jpg",
            texto: "El primer teléfono del mundo capaz de reproducir música en formato MP3 de forma nativa. Inicio de la era multimedia."
        },
        kyocera: {
            titulo: "Kyocera VP-210",
            año: "1999",
            img: "Kyocera VP-210.jpeg",
            texto: "Pionero mundial en integrar cámara para videollamadas. Uno de los primeros pasos hacia las videollamadas modernas."
        },
        nokia3310: {
            titulo: "Nokia 3310",
            año: "2000",
            img: "Nokia 3310.jpg",
            texto: "El legendario 'indestructible'. Vendió más de 126 millones de unidades y popularizó el juego Snake en todo el mundo."
        },
        ericsson: {
            titulo: "Ericsson R380s",
            año: "2000",
            img: "Ericsson_R380s_004.jpg",
            texto: "Considerado oficialmente el primer Smartphone de la historia. Incluía pantalla táctil y sistema operativo Symbian."
        },
        sl45i: {
            titulo: "Siemens SL45i",
            año: "2001",
            img: "Siemens SL45i.jpg",
            texto: "Uno de los primeros teléfonos con reproductor MP3 integrado y ranura para Memory Stick. Gran avance en multimedia."
        },
        t68i: {
            titulo: "Sony Ericsson T68i",
            año: "2002",
            img: "Sony Ericsson T68i.jpg",
            texto: "Primer teléfono con Bluetooth y pantalla a color real. Diseño premium y gran influencia en los celulares de la siguiente generación."
        }
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

    // Eventos del Modal
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            document.getElementById('modal').style.display = "none";
        });
    }

    const modalElement = document.getElementById('modal');
    if (modalElement) {
        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement) {
                modalElement.style.display = "none";
            }
        });
    }

    // Click en las tarjetas de hitos
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            abrirModal(modalId);
        });
    });

    // ==================== FORMULARIOS ====================

    // Registro
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPass').value;
            const passConf = document.getElementById('regPassConf').value;

            let esValido = true;

            if (!Validator.isValidEmail(email)) {
                document.getElementById('errEmail').textContent = 'Formato de email inválido';
                esValido = false;
            }
            if (!Validator.isSecurePassword(pass)) {
                document.getElementById('errPass').textContent = 'La contraseña debe tener mínimo 8 caracteres';
                esValido = false;
            }
            if (!Validator.passwordsMatch(pass, passConf)) {
                document.getElementById('errPassConf').textContent = 'Las contraseñas no coinciden';
                esValido = false;
            }

            if (esValido) {
                alert('¡Registro exitoso! Datos validados correctamente.');
                formRegistro.reset();
            }
        });
    }

    // Login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('logFeedback');
            feedback.innerHTML = `<p class="success-msg">¡Acceso concedido! Bienvenido al sistema.</p>`;

            setTimeout(() => {
                formLogin.reset();
                feedback.innerHTML = '';
            }, 2800);
        });
    }

    // Contacto con contador
    const textarea = document.getElementById('conMensaje');
    const charCount = document.getElementById('charCount');

    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            const length = textarea.value.length;
            charCount.textContent = `Caracteres: ${length}`;
            charCount.style.color = length > 150 ? '#f87171' : '#b0b8c9';
        });
    }

    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('conNombre').value.trim();
            const nombreSeguro = Validator.sanitize(nombre);

            alert(`¡Mensaje enviado correctamente!\nGracias ${nombreSeguro || 'usuario'}.`);
            formContacto.reset();
            if (charCount) charCount.textContent = 'Caracteres: 0';
        });
    }

});
