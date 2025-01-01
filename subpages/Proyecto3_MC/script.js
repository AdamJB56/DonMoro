const archivoXML = 'productos.xml';
mostrarTodos(archivoXML);

function cargarXML(nombreArchivo) {
    return fetch(nombreArchivo)
        .then(response => response.text())
        .then(text => new DOMParser().parseFromString(text, 'text/xml'));
}


function mostrarTodos() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/*', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarXML(producto) {
    const tipo = producto.getAttribute('tipo');
    const unidades = parseInt(producto.querySelector('unidades').textContent);
    const imagen = producto.querySelector('foto').textContent;
    const nombre = producto.querySelector('nombre').textContent;
    const material = producto.querySelector('material').textContent;
    const usos = parseInt(producto.querySelector('usos').textContent);

    //Recojo todo el contenido de la etiqueta bloques, y creo las variables del primer hijo y del posible segundo hijo 
    const bloques = producto.querySelector('bloques');
    let bloque1 = '';
    let bloque2 = '';

    const bloqueChildren = bloques.children;
    if (bloqueChildren.length > 0) {
        bloque1 = bloqueChildren[0].textContent;
    }
    if (bloqueChildren.length > 1) {
        bloque2 = bloqueChildren[1].textContent;
    }

    const precio = parseInt(producto.querySelector('precio').textContent);

    const productoElemento = document.createElement('div');
    productoElemento.innerHTML = `
    <div class="productoFicha">
        <div class="fichaTop">
            <p class="fichaTopParrafo">Tipo: ${tipo}</p>
            <p class="fichaTopParrafo">‎ ‎ ‎ ‎Ud. Restantes: ${unidades}</p>
        </div>
        <img src="${imagen}"/>
        <h2 class="h2Ficha">${nombre}</h2>
        <hr>
        <p>Material: ${material}</p>
        <p>Usos: ${usos}</p>
        <p>Bloques usados:</p>
        <ul>
            <li>${bloque1}</li>
            <li>${bloque2}</li>
        </ul>
        <hr>
        <h2 class="h2Ficha">${precio} Esmeraldas</h2>
    </div>
    `;

    datosProductos.appendChild(productoElemento);
}


function mostrarMadera() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[material="madera"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarDiamante() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[material="diamante"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarSinStock() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[unidades=0]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarArmas() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[@tipo="arma"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarUtensilios() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[@tipo="utensilio"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarPalas() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[contains(nombre, "Pala") or contains(nombre, "pala")]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarPrimero() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[1]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarUltimo() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[last()]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarPalo() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[bloques/bloque = "Palo"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarCorazon() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[bloques/bloque = "Corazón de Mar"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarBuenos() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[material="diamante" or material="hierro"]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}


function mostrarGangas() {
    const datosProductos = document.getElementById('datosProductos');
    datosProductos.innerHTML = '';
    cargarXML(archivoXML)
        .then(
            XMLDoc => {
                const productos = XMLDoc.evaluate('/tienda/productos/herramienta[precio < 600 and unidades > 0]', XMLDoc, null, XPathResult.ANY_TYPE, null);

                let producto = productos.iterateNext();
                while (producto) {
                    mostrarXML(producto);
                    producto = productos.iterateNext();
                }
            }
        )
}

//Esta funcion hace scroll hasta la seccion de los productos. Tiene un setTimeout debido a que si se muestran los productos al mismo tiempo que se hace el scroll, se llegaria a la seccion cuando todavia esta vacia, es decir, el inicio de la sección tan solo se veria en la parte inferior de la ventana y no se verian los productos por completo. Al hacer un setTimeout se da tiempo a que se muestren los productos antes de que se scrolee hasta estos
function scrollear() {
    setTimeout(() => {
        document.getElementById("datosProductos").scrollIntoView({behavior: "smooth"});
    }, 50);
    
}