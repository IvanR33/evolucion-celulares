document.addEventListener('DOMContentLoaded', () => {
    // Datos técnicos de los 9 modelos
    const modelos = {
        startac: { t: "Motorola StarTAC", a: "1996", d: "El primer teléfono plegable del mundo. Su diseño compacto y ligero cambió la percepción de lo que debía ser un móvil." },
        s10: { t: "Siemens S10", a: "1997", d: "Considerado el primer teléfono con pantalla a color (aunque solo mostraba 4 colores). Un hito en la interfaz de usuario." },
        nokia5110: { t: "Nokia 5110", a: "1998", d: "El teléfono que popularizó el juego Snake. Destacó por su durabilidad y sus carcasas frontales intercambiables." },
        sph: { t: "Samsung SPH-M100", a: "1999", d: "El primer teléfono móvil capaz de reproducir música en formato MP3 de forma nativa." },
        kyocera: { t: "Kyocera VP-210", a: "1999", d: "Pionero en integrar una cámara frontal para videollamadas, adelantándose años a su época." },
        nokia3310: { t: "Nokia 3310", a: "2000", d: "Un ícono de resistencia y fiabilidad. Vendió más de 126 millones de unidades en todo el mundo." },
        ericsson: { t: "Ericsson R380s", a: "2000", d: "El primer dispositivo comercializado como 'Smartphone'. Utilizaba el sistema operativo Symbian." },
        sl45i: { t: "Siemens SL45i", a: "2001", d: "Uno de los primeros móviles con memoria expandible mediante tarjetas MMC y soporte para Java." },
        t68i: { t: "Sony Ericsson T68i", a: "2002", d: "El primer teléfono con Bluetooth de amplia distribución y uno de los primeros con pantalla de 256 colores." }
    };

    // Manejo de clic en las tarjetas
    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const m = modelos[card.dataset.modal];
            const body = document.getElementById('modal-body');
            body.innerHTML = `
                <h2 style="color: #00e0ff; margin-bottom: 10px;">${m.t}</h2>
                <h3 style="color: #ff2a6d; margin-bottom: 20px;">Año: ${m.a}</h3>
                <p style="font-size: 1.1rem; line-height: 1.6;">${m.d}</p>
            `;
            document.getElementById('modal').style.display = 'flex';
        });
    });

    // Cerrar el modal
    document.querySelector('.modal-close').onclick = () => {
        document.getElementById('modal').style.display = 'none';
    };

    // Cerrar modal al hacer clic fuera del contenido
    window.onclick = (event) => {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Contador de caracteres para el mensaje
    const tx = document.getElementById('conMensaje');
    if (tx) {
        tx.oninput = () => {
            document.getElementById('charCount').innerText = `Caracteres: ${tx.value.length}`;
        };
    }

    // Manejo del formulario
    document.getElementById('formContacto').onsubmit = (e) => {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
        e.target.reset();
        document.getElementById('charCount').innerText = "Caracteres: 0";
    };
});


