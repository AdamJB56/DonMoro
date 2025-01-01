
document.addEventListener("DOMContentLoaded", inicio);

function inicio() {

    //Funcion que genera imagenes en el pie de pagina
    function imagenesPieDePagina() {

    let aleatorio = Math.floor(Math.random() * 12 + 1);
    console.log(aleatorio);

    let footer = document.getElementsByTagName("footer");

    if (aleatorio == 12) {
        footer[0].style.background = `url(../media/img/guille.gif) repeat-x`;
    } else {
        footer[0].style.background = `url(../media/img/carr${aleatorio}.jpeg) repeat-x`;
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

    let otrosProyectos = document.getElementById("otrosProyectos");

    let botonesProyectos = document.getElementsByClassName("botonesProyectos");

    for (const element of botonesProyectos) {
        element.addEventListener("mouseenter", cambiarFondoListaProyectos);
        element.addEventListener("touchstart", cambiarFondoListaProyectos);
    }

    function cambiarFondoListaProyectos(ev) {
        let tipo = ev.target.getAttribute("tipo");

        if (tipo == "django") {
            otrosProyectos.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(../media/img/fondoDjango.jpg) center / cover no-repeat fixed";
        } else if (tipo == "tienda") {
            otrosProyectos.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(../media/img/carr4.jpeg) center / cover no-repeat fixed";
        } else if (tipo == "lebron"){
            otrosProyectos.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(../media/img/fondoLebron.jpg) center / cover no-repeat fixed";
        } else if (tipo == "museo") {
            otrosProyectos.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(../media/img/negros.gif) center / cover no-repeat fixed";
        } else if (tipo == "rocas") {
            otrosProyectos.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(../media/img/carr9.jpeg) center / cover no-repeat fixed";
        }
    }

}