document.addEventListener('DOMContentLoaded', () => {

    // 1. NAVEGACIÓN SPA
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.section;
            sections.forEach(s => s.classList.remove('active'));
            navLinks.forEach(l => l.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            link.classList.add('active');
        });
    });

    // 2. CARRUSEL (Criterio 2.1.1)
    const slides = document.querySelectorAll('.carousel-img');
    let currentSlide = 0;

    function moverSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    document.getElementById('nextBtn')?.addEventListener('click', () => moverSlide(currentSlide + 1));
    document.getElementById('prevBtn')?.addEventListener('click', () => moverSlide(currentSlide - 1));

    // 3. OBJETOS Y MODAL (Criterio 2.1.3)
    const modelos = {
        startac: { titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", desc: "El primer teléfono plegable del mundo." },
        s10: { titulo: "Siemens S10", año: "1997", img: "Siemens S10.jpg", desc: "Primer móvil con pantalla a color (4 colores)." },
        nokia5110: { titulo: "Nokia 5110", año: "1998", img: "Nokia-5110.jpg", desc: "Famoso por el juego Snake y carcasas intercambiables." },
        sph: { titulo: "Samsung SPH-M100", año: "1999", img: "Samsung SPH-M100.jpg", desc: "El primer teléfono con MP3 nativo." },
        kyocera: { titulo: "Kyocera VP-210", año: "1999", img: "Kyocera VP-210.jpeg", desc: "Primer móvil con cámara para videollamadas." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", desc: "El teléfono más resistente de la historia." },
        ericsson: { titulo: "Ericsson R380s", año: "2000", img: "Ericsson_R380s_004.jpg", desc: "Primer dispositivo llamado 'Smartphone'." },
        sl45i: { titulo: "Siemens SL45i", año: "2001", img: "Siemens-SL45i.jpg", desc: "Primer móvil con memoria expandible." },
        t68i: { titulo: "Sony Ericsson T68i", año: "2002", img: "Sony-Ericsson-T68i.jpg", desc: "Primer Sony Ericsson con Bluetooth y color." }
    };

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const data = modelos[card.dataset.modal];
            document.getElementById('modal-body').innerHTML = `
                <img src="${data.img}" style="width:100%; height:250px; object-fit:contain;">
                <h2 style="color:var(--primary); margin-top:15px;">${data.titulo} (${data.año})</h2>
                <p>${data.desc}</p>
            `;
            document.getElementById('modal').style.display = 'flex';
        });
    });

    document.querySelector('.modal-close').onclick = () => document.getElementById('modal').style.display = 'none';

    // 4. VALIDACIONES Y ARREGLOS (Criterio 2.1.2)
    const inscritos = [];

    document.getElementById('formRegistro').onsubmit = (e) => {
        e.preventDefault();
        const nombre = document.getElementById('regNombre').value;
        const email = document.getElementById('regEmail').value;
        inscritos.push({ nombre, email });
        alert(`¡Inscrito correctamente! Total: ${inscritos.length}`);
        e.target.reset();
    };

    const txtArea = document.getElementById('conMensaje');
    txtArea.oninput = () => document.getElementById('charCount').innerText = `Caracteres: ${txtArea.value.length}`;
});


