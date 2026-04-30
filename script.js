document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Modal
    const modelos = {
        startac: { titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", texto: "El primer teléfono plegable exitoso." },
        s10: { titulo: "Siemens S10", año: "1997", img: "Siemens-S10.jpg", texto: "Uno de los primeros con pantalla a color." },
        nokia5110: { titulo: "Nokia 5110", año: "1998", img: "Nokia-5110.jpg", texto: "Famoso por Snake y su durabilidad." },
        sph: { titulo: "Samsung SPH-M100", año: "1999", img: "Samsung-SPH-M100.jpg", texto: "Primer teléfono con MP3 nativo." },
        kyocera: { titulo: "Kyocera VP-210", año: "1999", img: "Kyocera-VP-210.jpeg", texto: "Pionero en videollamadas." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", texto: "El legendario Nokia 3310." },
        ericsson: { titulo: "Ericsson R380s", año: "2000", img: "Ericsson-R380s_004.jpg", texto: "Uno de los primeros smartphones." },
        sl45i: { titulo: "Siemens SL45i", año: "2001", img: "Siemens-SL45i.jpg", texto: "Reproductor MP3 integrado." },
        t68i: { titulo: "Sony Ericsson T68i", año: "2002", img: "Sony-Ericsson-T68i.jpg", texto: "Bluetooth y pantalla a color." }
    };

    function abrirModal(id) {
        const modal = document.getElementById('modal');
        const body = document.getElementById('modal-body');
        const data = modelos[id];
        if (!data) return;
        body.innerHTML = `
            <img src="${data.img}" alt="${data.titulo}" style="width:100%; border-radius:18px; margin-bottom:20px;">
            <h2>${data.titulo} (${data.año})</h2>
            <p>${data.texto}</p>
        `;
        modal.style.display = "flex";
    }

    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = "none";
    });

    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') document.getElementById('modal').style.display = "none";
    });

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            abrirModal(card.getAttribute('data-modal'));
        });
    });

    // Formularios básicos (puedes mejorarlos más en CSS)
    document.getElementById('formRegistro')?.addEventListener('submit', (e) => { e.preventDefault(); alert('Registro exitoso (simulado)'); });
    document.getElementById('formLogin')?.addEventListener('submit', (e) => { e.preventDefault(); alert('Login exitoso (simulado)'); });
    document.getElementById('formContacto')?.addEventListener('submit', (e) => { e.preventDefault(); alert('Mensaje enviado (simulado)'); });

});

