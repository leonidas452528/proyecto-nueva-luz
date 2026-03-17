const NAVBAR_FALLBACK = `
<nav>
    <img src="img/logo.ico" alt="Logo Nueva Luz" width="50" height="50">
    <h2>Nueva Luz</h2>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="transparencia.html">Transparencia</a></li>
        <li><a href="tienda.html">Tienda</a></li>
    </ul>
    <a href="https://wa.me/573215344609" target="_blank" rel="noopener">
        <button>Donar Ahora</button>
    </a>
</nav>`;

const FOOTER_FALLBACK = `
<footer>
    <div>
        <div>
            <h2>Nueva Luz</h2>
            <p>Fundación Asociación Nueva Luz. Entidad sin ánimo de lucro registrada en Cali, Colombia.</p>
        </div>
        <div>
            <h5>Organización</h5>
            <ul>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="transparencia.html">Transparencia</a></li>
                <li><a href="tienda.html">Tienda</a></li>
                <li><a href="https://wa.me/573215344609" target="_blank" rel="noopener">Donación</a></li>
            </ul>
        </div>
        <div>
            <h5>Ubicación</h5>
            <p>Sede Principal - Cali</p>
            <p>Valle del Cauca, Colombia</p>
        </div>
    </div>
    <hr>
    <div>
        <p>&copy; ${new Date().getFullYear()} Fundación Nueva Luz. Todos los derechos reservados.</p>
        <p>
            <a href="#">Términos</a> |
            <a href="#">Privacidad</a> |
            <a href="#">Cookies</a>
        </p>
    </div>
</footer>`;

async function cargarNavbar() {
    const contenedor = document.getElementById("navbar-dinamico");
    if (!contenedor) return;
    try {
        const respuesta = await fetch("plantillas/navbar.html");
        if (respuesta.ok) {
            contenedor.innerHTML = await respuesta.text();
        } else {
            contenedor.innerHTML = NAVBAR_FALLBACK;
        }
    } catch {
        contenedor.innerHTML = NAVBAR_FALLBACK;
    }
}

async function cargarFooter() {
    const contenedor = document.getElementById("footer-dinamico");
    if (!contenedor) return;
    try {
        const respuesta = await fetch("plantillas/footer.html");
        if (respuesta.ok) {
            contenedor.innerHTML = await respuesta.text();
        } else {
            contenedor.innerHTML = FOOTER_FALLBACK;
        }
    } catch {
        contenedor.innerHTML = FOOTER_FALLBACK;
    }
}

cargarNavbar();
cargarFooter();

document.addEventListener('DOMContentLoaded', function () {

    // WhatsApp — tienda preview en index.html (.tienda-grid)
    const tiendaGrid = document.querySelector('.tienda-grid');
    if (tiendaGrid) {
        tiendaGrid.addEventListener('click', function (event) {
            const boton = event.target.closest('.boton-whatsapp');
            if (boton) {
                event.preventDefault();
                const card = boton.closest('.producto-card');
                const nombreProducto = card.querySelector('h3').innerText;
                const message = `Hola, quiero encargar el producto: "${nombreProducto}" de tu tienda.`;
                window.open(`https://wa.me/573215344609?text=${encodeURIComponent(message)}`, '_blank');
            }
        });
    }

    // WhatsApp — catálogo completo en tienda.html (.productos-grid)
    const productosGrid = document.querySelector('.productos-grid');
    if (productosGrid) {
        productosGrid.addEventListener('click', function (event) {
            const boton = event.target.closest('.boton-whatsapp');
            if (boton) {
                event.preventDefault();
                const card = boton.closest('.producto-card');
                const nombreProducto = card.querySelector('h3').innerText;
                const message = `Hola, quiero encargar el producto: "${nombreProducto}" de tu tienda.`;
                window.open(`https://wa.me/573215344609?text=${encodeURIComponent(message)}`, '_blank');
            }
        });
    }

    // Botón asesor en tienda.html
    const botonAsesor = document.querySelector('.boton-asesor');
    if (botonAsesor) {
        botonAsesor.addEventListener('click', function (e) {
            e.preventDefault();
            const msg = encodeURIComponent("Hola, me gustaría recibir atención personalizada de un asesor.");
            window.open(`https://wa.me/573215344609?text=${msg}`, '_blank');
        });
    }

    // Botón "Ver Historias de Impacto" en index.html → va a transparencia
    const btnVerHistorias = document.querySelector('.hero-buttons .btn-primary');
    if (btnVerHistorias) {
        btnVerHistorias.addEventListener('click', function () {
            window.location.href = 'transparencia.html';
        });
    }

    // Botón "Nuestra Misión" en index.html → scroll a sección misión
    const btnMision = document.querySelector('.hero-buttons .btn-secondary');
    if (btnMision) {
        btnMision.addEventListener('click', function () {
            document.getElementById('seccion-mision')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón "Descargar Reporte Auditado" en index.html → va a transparencia
    const btnReporte = document.querySelector('.transparencia-container .btn-primary');
    if (btnReporte) {
        btnReporte.addEventListener('click', function () {
            window.location.href = 'transparencia.html';
        });
    }

    // Formulario Portal del Donante
    const portalForm = document.querySelector('.portal-formulario form');
    if (portalForm) {
        portalForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Portal en construcción. Próximamente disponible para donantes registrados.');
        });
    }

    // Link "¿Olvidaste tu contraseña?"
    const linkOlvido = document.querySelector('.link-olvido');
    if (linkOlvido) {
        linkOlvido.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Recuperación de contraseña próximamente disponible.');
        });
    }
});
