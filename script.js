document.addEventListener('DOMContentLoaded', () => {

    // 1. NAVEGACIÓN ENTRE SECCIONES
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-section');
            
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // 2. CARRUSEL MODULAR (Criterio 2.1.1 y 2.1.4)
    const slides = document.querySelectorAll('.carousel-img');
    let currentSlide = 0;

    function moverCarrusel(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    document.getElementById('nextBtn')?.addEventListener('click', () => moverCarrusel(currentSlide + 1));
    document.getElementById('prevBtn')?.addEventListener('click', () => moverCarrusel(currentSlide - 1));

    // Autoplay opcional
    setInterval(() => moverCarrusel(currentSlide + 1), 5000);

    // 3. OBJETOS Y MODAL (Criterio 2.1.3)
    const modelos = {
        startac: { titulo: "Motorola StarTAC", año: "1996", texto: "El primer teléfono plegable." },
        nokia3310: { titulo: "Nokia 3310", año: "2000", texto: "Indestructible y legendario." },
        ericsson: { titulo: "Ericsson R380s", año: "2000", texto: "El primer smartphone con Symbian OS." }
    };

    function abrirModal(id) {
        const data = modelos[id];
        if(!data) return;
        document.getElementById('modal-body').innerHTML = `
            <h2 style="color:var(--primary)">${data.titulo} (${data.año})</h2>
            <p style="margin-top:20px">${data.texto}</p>
        `;
        document.getElementById('modal').style.display = "flex";
    }

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => abrirModal(card.dataset.modal));
    });

    document.querySelector('.modal-close').onclick = () => {
        document.getElementById('modal').style.display = "none";
    };

    // 4. VALIDACIONES DE FORMULARIOS (Criterio 2.1.2)
    // Almacenamiento local (Criterio 2.1.3)
    const usuariosInscritos = [];

    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Formulario Registro
    document.getElementById('formRegistro')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('regNombre').value.trim();
        const email = document.getElementById('regEmail').value.trim();

        if (nombre === "" || !validarEmail(email)) {
            alert("Por favor, ingresa un nombre válido y un email correcto.");
            return;
        }

        usuariosInscritos.push({ nombre, email }); // Guardar en arreglo (Objeto)
        alert("¡Registro exitoso! Bienvenido a la red.");
        e.target.reset();
    });

    // Formulario Contacto con Contador
    const txtArea = document.getElementById('conMensaje');
    txtArea?.addEventListener('input', () => {
        document.getElementById('charCount').textContent = `Caracteres: ${txtArea.value.length}`;
    });

    document.getElementById('formContacto')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Mensaje enviado correctamente.");
        e.target.reset();
    });
});




