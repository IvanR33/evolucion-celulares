/* script.js - Validación de Formularios Unidad 2 */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== VALIDACIONES ====================
    const Validator = {
        isValidEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        isSecurePassword: (pass) => pass.length >= 8,
        passwordsMatch: (p1, p2) => p1 === p2,
        sanitize: (str) => {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }
    };

    // ==================== FORMULARIO REGISTRO ====================
    const formRegistro = document.getElementById('formRegistro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            // Limpiar errores previos
            document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

            const email = document.getElementById('regEmail').value.trim();
            const pass = document.getElementById('regPass').value;
            const passConf = document.getElementById('regPassConf').value;

            let esValido = true;

            if (!Validator.isValidEmail(email)) {
                document.getElementById('errEmail').textContent = 'Formato de email inválido';
                esValido = false;
            }
            if (!Validator.isSecurePassword(pass)) {
                document.getElementById('errPass').textContent = 'La contraseña debe tener mínimo 8 caracteres';
                esValido = false;
            }
            if (!Validator.passwordsMatch(pass, passConf)) {
                document.getElementById('errPassConf').textContent = 'Las contraseñas no coinciden';
                esValido = false;
            }

            if (esValido) {
                alert('¡Registro exitoso! Datos validados correctamente.');
                formRegistro.reset();
            }
        });
    }

    // ==================== FORMULARIO LOGIN ====================
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('logFeedback');
            feedback.innerHTML = `<p class="success-msg">Acceso concedido. Bienvenido al sistema.</p>`;

            setTimeout(() => {
                formLogin.reset();
                feedback.innerHTML = '';
            }, 2500);
        });
    }

    // ==================== FORMULARIO CONTACTO ====================
    const textarea = document.getElementById('conMensaje');
    const charCount = document.getElementById('charCount');

    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            const length = textarea.value.length;
            charCount.textContent = `Caracteres: ${length}`;
            charCount.style.color = length > 150 ? '#f87171' : '#94a3b8';
        });
    }

    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('conNombre').value.trim();
            alert(`¡Reporte enviado correctamente!\nGracias ${nombre || 'usuario'}.`);
            formContacto.reset();
            if (charCount) charCount.textContent = 'Caracteres: 0';
        });
    }
});
