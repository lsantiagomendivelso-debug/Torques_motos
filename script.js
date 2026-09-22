// ==================================================
// BUSCADOR
// ==================================================

function buscarProducto() {

    const buscador =
        document.getElementById("buscador");

    const texto =
        buscador.value.trim();


    if (texto === "") {

        alert(
            "Escribe el producto que estás buscando."
        );

        return;
    }


    // Llevar a la tienda virtual

    window.open(
        "https://torquesymotos.soomi.co/",
        "_blank"
    );

}




document
    .getElementById("buscador")
    .addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                buscarProducto();

            }

        }
    );



const elementos =
    document.querySelectorAll(
        ".categoria, .producto, .taller"
    );


const observer =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach(
                (entrada) => {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target.style.opacity = "1";

                        entrada.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.1
        }

    );


elementos.forEach(
    (elemento) => {

        elemento.style.opacity = "0";

        elemento.style.transform =
            "translateY(25px)";

        elemento.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(elemento);

    }
);