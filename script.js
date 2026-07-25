/*=========================
    MENÚ RESPONSIVE
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/*=========================
 CERRAR MENÚ AL SELECCIONAR
=========================*/

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

/*=========================
 CAMBIAR COLOR DEL MENÚ
=========================*/

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#081729";
        nav.style.transition = "0.4s";
    } else {
        nav.style.background = "#0b1f3a";
    }

});

/*=========================
 ANIMACIÓN DE LAS TARJETAS
=========================*/

const tarjetas = document.querySelectorAll(".card, .valor, .servicio, .cert");

const mostrarTarjetas = () => {

    tarjetas.forEach(tarjeta => {

        const posicion = tarjeta.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";
            tarjeta.style.transition = "all .8s";

        }

    });

};

tarjetas.forEach(tarjeta => {

    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(40px)";

});

window.addEventListener("scroll", mostrarTarjetas);
window.addEventListener("load", mostrarTarjetas);

/*=========================
 BOTÓN VOLVER ARRIBA
=========================*/

const botonTop = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        botonTop.style.display = "flex";
    } else {
        botonTop.style.display = "none";
    }

});

botonTop.style.display = "none";

/*=========================
 EFECTO EN EL BOTÓN
=========================*/

const boton = document.querySelector(".btn");

boton.addEventListener("mouseover", () => {

    boton.style.transform = "scale(1.05)";

});

boton.addEventListener("mouseout", () => {

    boton.style.transform = "scale(1)";

});

/*=========================
 AÑO AUTOMÁTICO EN FOOTER
=========================*/

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Transportes SACOR | Todos los derechos reservados.`;