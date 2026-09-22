/* ==================================================
   GUÍA DEL MOTOCICLISTA
================================================== */


/* ==================================================
   ANIMACIÓN AL HACER SCROLL
================================================== */

const elementos = document.querySelectorAll(
    ".tarjeta, .kit-item, .paso, .advertencia, .lista-item, .foto"
);


const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    elemento.classList.add("oculto");

    observador.observe(elemento);

});


/* ==================================================
   ESTILOS DE ANIMACIÓN
================================================== */

const estilo = document.createElement("style");

estilo.textContent = `

.oculto {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.mostrar {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(estilo);


/* ==================================================
   CERRAR OTROS FAQ
================================================== */

const preguntas = document.querySelectorAll(".faq details");

preguntas.forEach(function (pregunta) {

    pregunta.addEventListener("toggle", function () {

        if (pregunta.open) {

            preguntas.forEach(function (otraPregunta) {

                if (otraPregunta !== pregunta) {
                    otraPregunta.removeAttribute("open");
                }

            });

        }

    });

});


/* ==================================================
   MENÚ SUAVE
================================================== */

const enlaces = document.querySelectorAll(
    ".menu-guia a"
);

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

        const destino = document.querySelector(
            enlace.getAttribute("href")
        );

        if (destino) {

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});