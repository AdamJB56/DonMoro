
document.addEventListener("DOMContentLoaded", inicio);

function inicio() {

    //Funcion que genera imagenes en el pie de pagina
    function imagenesPieDePagina() {

    let aleatorio = Math.floor(Math.random() * 12 + 1);
    console.log(aleatorio);

    let footer = document.getElementsByTagName("footer");

    if (aleatorio == 12) {
        footer[0].style.background = `url(./media/img/guille.gif) repeat-x`;
    } else {
        footer[0].style.background = `url(./media/img/carr${aleatorio}.jpeg) repeat-x`;
    }

    
    footer[0].style.backgroundSize = 'contain';
    footer[0].style.height = '20vh';
    }

    imagenesPieDePagina();


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

    function cursorChicote() {
        let random = Math.random() < 0.01;

        if (random) {
            document.body.style.cursor = "url('./media/img/chicote.png'), auto";
        }

        console.log(random);
    }

    cursorChicote();

}