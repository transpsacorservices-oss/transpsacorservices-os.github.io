/* =========================
   MENÚ HAMBURGUESA
========================= */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* =========================
   CERRAR MENÚ AL SELECCIONAR
========================= */
const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

/* =========================
   CAMBIAR COLOR DEL MENÚ AL HACER SCROLL
   (Ajustado a la paleta negro/rojo)
========================= */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = 'transparent'; // Negro puro al bajar
        nav.style.boxShadow = "0 4px 15px rgba(192, 0, 0, 0.3)"; // Sombra roja sutil
        nav.style.transition = "0.4s";
    } else {
        nav.style.background = "#111111"; // Fondo inicial
        nav.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.5)";
    }
});

/* =========================
   ANIMACIÓN APARICIÓN DE TARJETAS
========================= */
const tarjetas = document.querySelectorAll(".card, .valor, .servicio, .cert");

const mostrarTarjetas = () => {
    tarjetas.forEach(tarjeta => {
        const posicion = tarjeta.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 80) {
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "none"; // Permite que el hover de CSS funcione libremente
            tarjeta.style.transition = "opacity 0.8s ease, transform 0.4s ease";
        }
    });
};

// Estado inicial antes de aparecer
tarjetas.forEach(tarjeta => {
    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", mostrarTarjetas);
window.addEventListener("load", mostrarTarjetas);

/* =========================
   BOTÓN VOLVER ARRIBA
========================= */
const botonTop = document.querySelector(".top");

if (botonTop) {
    botonTop.style.display = "none";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            botonTop.style.display = "flex";
        } else {
            botonTop.style.display = "none";
        }
    });
}

/* =========================
   EFECTO EN EL BOTÓN HERO
========================= */
const boton = document.querySelector(".btn");

if (boton) {
    boton.addEventListener("mouseover", () => {
        boton.style.transform = "scale(1.05)";
    });

    boton.addEventListener("mouseout", () => {
        boton.style.transform = "scale(1)";
    });
}

/* =========================
   AÑO AUTOMÁTICO EN FOOTER
========================= */
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Transportes SACOR | Todos los derechos reservados.`;
}
