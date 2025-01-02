document.addEventListener("DOMContentLoaded", inicio);

function inicio() {

    //Funcion nav desplegable
    let icono = document.getElementById("icono");

    icono.addEventListener("click", toggleNav);
    function toggleNav() {
        let x = document.getElementById("linksNav");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    //Funcion que cambia el color del header

    let header = document.getElementById("nav");

    document.addEventListener("scroll", cambiarColorHeader);

    function cambiarColorHeader() {
        let scrollY = window.scrollY;

        if (scrollY != 0) {
            header.style.backgroundColor = "#333333fa";
        } else {
            header.style.backgroundColor = "transparent";
        }
        
    }

    cambiarColorHeader();

    let divs = document.querySelectorAll(".divPech");
    let imagenes = document.querySelectorAll(".imagenPechIzq, .imagenPechDcha");


    document.addEventListener("scroll", () => {
        divs.forEach((div, index) => {
            let imagen = imagenes[index]; // Relaciona cada div con su imagen
            slideImagen(div, imagen);
        });
    });

    function slideImagen(div, imagen) {
        // Distancia del div respecto al viewport
        const rect = div.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const margen = 300; // Cambie este valor para ajustar la proximidad

        // Verifica si el div está dentro del margen cerca del viewport
        if ((rect.top < windowHeight - margen && rect.bottom > margen)) {
            if (imagen.classList.contains("imagenPechIzq")) {
                imagen.style.left = "0"; // Mueve la imagen al centro
            } else {
                imagen.style.right = "0"; // Mueve la imagen al centro
            }
            
        } else {
            if (imagen.classList.contains("imagenPechIzq")) {
                imagen.style.left = "-100%"; // Retorna la imagen a su posición inicial  
            } else {
                imagen.style.right = "-100%"; // Retorna la imagen a su posición inicial  
            }
              
        }
    }

    function reproduccionAudio() {
    
        let audio = new Audio("../media/audio/videoPech.mp3");

        let botonReproducir = document.getElementById("botonReproducir");
        let botonPausar = document.getElementById("botonPausar");

        let contenedorLyrics = document.getElementById("lyrics");

        botonReproducir.addEventListener("click", reproducirAudio);
        function reproducirAudio() {
            audio.play();
            contenedorLyrics.style.animationPlayState = "running";
        }

        botonPausar.addEventListener("click", pausarAudio);
        function pausarAudio() {
            audio.pause();
            contenedorLyrics.style.animationPlayState = "paused";
        }
    }

    reproduccionAudio();



}

