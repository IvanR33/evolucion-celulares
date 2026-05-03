document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            const sectionId = link.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // MODAL
    const modelos = {
        startac: { titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", texto: "El primer teléfono plegable exitoso." },
        s10: { titulo: "Siemens S10", año: "1997", img: "Siemens S10.jpg", texto: "Pantalla a color." },
        nokia5110: { titulo: "Nokia 5110", año: "1998", img: "Nokia-5110.jpg", texto: "Famoso por Snake." },
        sph: { titulo: "Samsung SPH-M100", año: "1999", img: "Samsung SPH-M100.jpg", texto: "MP3 integrado." },
        kyocera: { titulo: "Kyocera VP-210", año: "1999", img: "Kyocera VP-210.jpeg", texto: "Videollamadas." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", texto: "Indestructible." },
        ericsson: { titulo: "Ericsson R380s", año: "2000", img: "Ericsson_R380s_004.jpg", texto: "Primer smartphone." },
        sl45i: { titulo: "Siemens SL45i", año: "2001", img: "Siemens-SL45i.jpg", texto: "MP3 real." },
        t68i: { titulo: "Sony Ericsson T68i", año: "2002", img: "Sony-Ericsson-T68i.jpg", texto: "Bluetooth." }
    };

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    function abrirModal(id) {
        const data = modelos[id];
        if (!data) return;

        modalBody.innerHTML = `
            <img src="${data.img}">
            <h2>${data.titulo} (${data.año})</h2>
            <p>${data.texto}</p>
        `;

        modal.classList.add('active');
    }

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            abrirModal(card.dataset.modal);
        });
    });

    document.querySelector('.modal-close').onclick = () => {
        modal.classList.remove('active');
    };

    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('active');
    };

});


