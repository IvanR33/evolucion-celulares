/* script.js - Versión Final con 9 celulares */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MODAL PARA LOS 9 CELULARES ====================
    const modelos = {
        startac: {
            titulo: "Motorola StarTAC",
            año: "1996",
            img: "Motorola-StarTAC.jpg",
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
            texto: "Icono de los años 90. Famoso por su durabilidad, excelente batería y el legendario juego Snake."
        },
        sph: {
            titulo: "Samsung SPH-M100",
            año: "1999",
            img: "Samsung SPH-M100.jpg",
            texto: "El primer teléfono del mundo capaz de reproducir música en formato MP3 de forma nativa."
        },
        kyocera: {
            titulo: "Kyocera VP-210",
            año: "1999",
            img: "Kyocera VP-210.jpeg",
            texto: "Pionero en integrar cámara para videollamadas. Uno de los primeros pasos hacia las videollamadas modernas."
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
            texto: "Considerado el primer Smartphone oficial de la historia con pantalla táctil y Symbian OS."
        },
        sl45i: {
            titulo: "Siemens SL45i",
            año: "2001",
            img: "Siemens SL45i.jpg",
            texto: "Uno de los primeros teléfonos con reproductor MP3 integrado y ranura para Memory Stick."
        },
        t68i: {
            titulo: "Sony Ericsson T68i",
            año: "2002",
            img: "Sony-Ericsson-T68i.jpg",
            texto: "Primer teléfono con Bluetooth y pantalla a color real. Gran influencia en el diseño de celulares posteriores."
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

    // Eventos del modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = "none";
    });

    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            document.getElementById('modal').style.display = "none";
        }
    });

    // Click en las tarjetas
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

    // Login
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('logFeedback');
            feedback.innerHTML = '<p class="success-msg">¡Acceso exitoso! Bienvenido al sistema.</p>';

            setTimeout(() => {
                formLogin.reset();
                feedback.innerHTML = '';
            }, 3000);
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


