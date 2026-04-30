/* script.js - Versión Final con 9 celulares */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MODAL - 9 CELULARES ====================
    const modelos = {
        "startac": {
            titulo: "Motorola StarTAC",
            año: "1996",
            img: "Motorola-StarTAC.jpg",
            texto: "El primer teléfono plegable comercialmente exitoso. Revolucionó el diseño de los celulares con su formato compacto."
        },
        "s10": {
            titulo: "Siemens S10",
            año: "1997",
            img: "Siemens-S10.jpg",
            texto: "Uno de los primeros teléfonos con pantalla a color. Gran avance en visualización de información en móviles."
        },
        "nokia5110": {
            titulo: "Nokia 5110",
            año: "1998",
            img: "Nokia-5110.jpg",
            texto: "Icono de los 90s. Famoso por su resistencia y el juego Snake."
        },
        "sph": {
            titulo: "Samsung SPH-M100",
            año: "1999",
            img: "Samsung-SPH-M100.jpg",
            texto: "Primer teléfono del mundo con reproductor MP3 nativo."
        },
        "kyocera": {
            titulo: "Kyocera VP-210",
            año: "1999",
            img: "Kyocera-VP-210.jpeg",
            texto: "Pionero en videollamadas con cámara integrada."
        },
        "nokia3310": {
            titulo: "Nokia 3310",
            año: "2000",
            img: "Nokia-3310.jpg",
            texto: "El legendario Nokia 3310. Vendió más de 126 millones de unidades."
        },
        "ericsson": {
            titulo: "Ericsson R380s",
            año: "2000",
            img: "Ericsson-R380s_004.jpg",
            texto: "Considerado el primer Smartphone oficial de la historia."
        },
        "sl45i": {
            titulo: "Siemens SL45i",
            año: "2001",
            img: "Siemens-SL45i.jpg",
            texto: "Uno de los primeros teléfonos con reproductor MP3 integrado."
        },
        "t68i": {
            titulo: "Sony Ericsson T68i",
            año: "2002",
            img: "Sony-Ericsson-T68i.jpg",
            texto: "Primer teléfono con Bluetooth y pantalla a color real."
        }
    };

    function abrirModal(id) {
        const modal = document.getElementById('modal');
        const body = document.getElementById('modal-body');
        const data = modelos[id];

        if (!data) return;

        body.innerHTML = `
            <img src="${data.img}" alt="${data.titulo}">
            <h2>${data.titulo} <span style="font-size:1.05rem; opacity:0.75;">(${data.año})</span></h2>
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

    // Click en tarjetas
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-modal');
            abrirModal(id);
        });
    });

    // ==================== FORMULARIOS ====================
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPass').value;
            const passConf = document.getElementById('regPassConf').value;

            let valid = true;

            if (!Validator.isValidEmail(email)) {
                document.getElementById('errEmail').textContent = 'Formato de email inválido';
                valid = false;
            }
            if (!Validator.isSecurePassword(pass)) {
                document.getElementById('errPass').textContent = 'Mínimo 8 caracteres';
                valid = false;
            }
            if (!Validator.passwordsMatch(pass, passConf)) {
                document.getElementById('errPassConf').textContent = 'Las contraseñas no coinciden';
                valid = false;
            }

            if (valid) {
                alert('¡Registro exitoso!');
                formRegistro.reset();
            }
        });
    }

    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('logFeedback').innerHTML = '<p class="success-msg">¡Acceso exitoso! Bienvenido.</p>';
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
            alert('Mensaje enviado correctamente');
            formContacto.reset();
            if (charCount) charCount.textContent = 'Caracteres: 0';
        });
    }

});


