console.log("Script cargado correctamente");

    // DATOS
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

    // Renderizar tarjetas
    function renderCelulares() {
        const grid = document.getElementById('hitos-grid');
        if (!grid) return console.error("No se encontró #hitos-grid");

        grid.innerHTML = '';

        celulares.forEach(cel => {
            const card = document.createElement('article');
            card.className = 'hito-card';
            card.innerHTML = `
                <img src="${cel.img}" alt="${cel.titulo}" loading="lazy">
                <div class="hito-info">
                    <h3>${cel.titulo}</h3>
                    <p>${cel.año}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Inicializar
    renderCelulares();
    console.log("✅ Celulares cargados");
});




