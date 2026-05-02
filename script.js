document.addEventListener('DOMContentLoaded', () => {

    // ==================== DATOS CENTRALIZADOS ====================
    const celulares = [
        { id: "startac", titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", texto: "El primer teléfono plegable comercialmente exitoso." },
        { id: "s10", titulo: "Siemens S10", año: "1997", img: "Siemens S10.jpg", texto: "Uno de los primeros con pantalla a color." },
        { id: "nokia5110", titulo: "Nokia 5110", año: "1998", img: "Nokia-5110.jpg", texto: "Icono de los 90s famoso por Snake." },
        { id: "sph", titulo: "Samsung SPH-M100", año: "1999", img: "Samsung SPH-M100.jpg", texto: "Primer teléfono con MP3 nativo." },
        { id: "kyocera", titulo: "Kyocera VP-210", año: "1999", img: "Kyocera VP-210.jpeg", texto: "Pionero en videollamadas." },
        { id: "nokia3310", titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", texto: "El legendario Nokia 3310." },
        { id: "ericsson", titulo: "Ericsson R380s", año: "2000", img: "Ericsson_R380s_004.jpg", texto: "Primer Smartphone oficial." },
        { id: "sl45i", titulo: "Siemens SL45i", año: "2001", img: "Siemens-SL45i.jpg", texto: "Uno de los primeros con MP3 integrado." },
        { id: "t68i", titulo: "Sony Ericsson T68i", año: "2002", img: "Sony-Ericsson-T68i.jpg", texto: "Primer teléfono con Bluetooth y pantalla a color." }
    ];

    // ==================== RENDER GRID ====================
    function renderCelulares(filteredCelulares) {
        const grid = document.getElementById('hitos-grid');
        grid.innerHTML = '';

        filteredCelulares.forEach(cel => {
            const cardHTML = `
                <article class="hito-card" data-modal="${cel.id}">
                    <img src="${cel.img}" alt="${cel.titulo} - ${cel.año}" loading="lazy">
                    <div class="hito-info">
                        <h3>${cel.titulo}</h3>
                        <p>${cel.año}</p>
                    </div>
                </article>
            `;
            grid.innerHTML += cardHTML;
        });

        // Agregar eventos a las nuevas cards
        document.querySelectorAll('.hito-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-modal');
                const cel = celulares.find(c => c.id === id);
                if (cel) abrirModal(cel);
            });
        });
    }

    // ==================== MODAL ====================
    function abrirModal(cel) {
        const body = document.getElementById('modal-body');
        body.innerHTML = `
            <img src="${cel.img}" alt="${cel.titulo}">
            <h2>${cel.titulo} <span style="font-size:1.1rem; opacity:0.8;">(${cel.año})</span></h2>
            <p>${cel.texto}</p>
        `;
        document.getElementById('modal').style.display = "flex";
    }

    // Cerrar modal
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = "none";
    });

    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') document.getElementById('modal').style.display = "none";
    });

    // ==================== TIMELINE INTERACTIVA ====================
    function crearTimeline() {
        const container = document.getElementById('timeline');
        const uniqueYears = [...new Set(celulares.map(c => c.año))];

        uniqueYears.forEach(year => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <span class="timeline-year">${year}</span>
            `;

            item.addEventListener('click', () => {
                document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const filtered = celulares.filter(c => c.año === year);
                renderCelulares(filtered);
            });

            container.appendChild(item);
        });
    }

    // ==================== NAVEGACIÓN SPA ====================
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            const section = document.getElementById(link.getAttribute('data-section'));
            if (section) section.classList.add('active');
        });
    });

    // ==================== INICIALIZACIÓN ====================
    crearTimeline();
    renderCelulares(celulares); // Carga todos al inicio

    // ==================== FORMULARIOS (mantén tu código original aquí) ====================
    // Pega aquí todo tu código de formularios (registro, login, contacto, contador de caracteres, etc.)
});

