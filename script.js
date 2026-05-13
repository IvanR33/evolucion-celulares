document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVEGACIÓN (SPA) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function cambiarSeccion(targetId) {
        sections.forEach(s => s.classList.remove('active'));
        navLinks.forEach(l => l.classList.remove('active'));
        
        document.getElementById(targetId).classList.add('active');
        document.querySelector(`[data-section="${targetId}"]`).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            cambiarSeccion(link.getAttribute('data-section'));
        });
    });

    // --- 2. CARRUSEL (Criterio 2.1.1 / 2.1.4) ---
    const slides = document.querySelectorAll('.carousel-img');
    let indexActual = 0;

    function mostrarSlide(n) {
        slides[indexActual].classList.remove('active');
        indexActual = (n + slides.length) % slides.length;
        slides[indexActual].classList.add('active');
    }

    document.getElementById('nextBtn')?.addEventListener('click', () => mostrarSlide(indexActual + 1));
    document.getElementById('prevBtn')?.addEventListener('click', () => mostrarSlide(indexActual - 1));

    // --- 3. MODAL Y OBJETOS (Criterio 2.1.3) ---
    const modelos = {
        startac: { titulo: "Motorola StarTAC", año: "1996", img: "Motorola-StarTAC.jpg", desc: "El primer teléfono clamshell." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", img: "Nokia-3310.jpg", desc: "El rey de la resistencia." },
        kyocera: { titulo: "Kyocera VP-210", año: "1999", img: "Kyocera VP-210.jpeg", desc: "Primer teléfono con cámara frontal." }
    };

    function abrirModal(id) {
        const info = modelos[id];
        if (!info) return;
        
        const body = document.getElementById('modal-body');
        body.innerHTML = `
            <img src="${info.img}" style="width:100%; height:200px; object-fit:contain; margin-bottom:15px;">
            <h2 style="color:var(--primary)">${info.titulo}</h2>
            <p><strong>Año:</strong> ${info.año}</p>
            <p>${info.desc}</p>
        `;
        document.getElementById('modal').style.display = 'flex';
    }

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => abrirModal(card.dataset.modal));
    });

    document.querySelector('.modal-close').onclick = () => {
        document.getElementById('modal').style.display = 'none';
    };

    // --- 4. VALIDACIONES Y ARREGLOS (Criterio 2.1.2 / 2.1.3) ---
    const listaInscritos = []; // Arreglo para almacenar objetos de usuario

    const esEmailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Registro
    document.getElementById('formRegistro')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('regNombre').value.trim();
        const email = document.getElementById('regEmail').value.trim();

        if (nombre.length < 3 || !esEmailValido(email)) {
            alert("Error: Nombre muy corto o email inválido.");
            return;
        }

        // Crear objeto y guardar en arreglo
        const nuevoUsuario = { nombre, email, fecha: new Date().toLocaleDateString() };
        listaInscritos.push(nuevoUsuario);
        
        alert(`¡Registro exitoso! Usuarios en sistema: ${listaInscritos.length}`);
        e.target.reset();
    });

    // Contador de caracteres (Contacto)
    const areaTexto = document.getElementById('conMensaje');
    areaTexto?.addEventListener('input', () => {
        document.getElementById('charCount').textContent = `Caracteres: ${areaTexto.value.length}`;
    });

    // Login Simple
    document.getElementById('formLogin')?.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('logFeedback').innerHTML = '<p style="color:var(--primary)">Acceso concedido...</p>';
    });
});



