document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.dataset.section;
            const section = document.getElementById(id);

            if (!section) return;

            e.preventDefault();

            sections.forEach(s => s.classList.remove('active'));
            navLinks.forEach(l => l.classList.remove('active'));

            section.classList.add('active');
            link.classList.add('active');

            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // MODAL PRO
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    document.querySelectorAll('.hito-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.innerText;
            modalBody.innerHTML = `<h2>${title}</h2>`;
            modal.classList.add('active');
        });
    });

    document.querySelector('.modal-close').onclick = () => {
        modal.classList.remove('active');
    };

    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('active');
    };

    // VALIDACIÓN PRO
    const form = document.getElementById('formRegistro');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const pass = document.getElementById('regPass').value;

        if (pass.length < 6) {
            alert('Contraseña débil');
            return;
        }

        alert('Registro exitoso');
    });

});


