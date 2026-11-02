//VARIABLES
const arrayHeader = [
    {
        imagen: "assets/banner/1.jpg",
        titulo: "Imagen 1",
        descripcion: "Cielo,nubes y sol",
        alt: "Cielo,nubes y sol , atardecer",
    },

    {
        imagen: "assets/banner/2.jpg",
        titulo: "Imagen 4",
        descripcion:
            "fotografía panorámica de montañosa cubierta de nieve bajo un cielo azul despejado.",
        alt: "Panorámica de montañas nevadas y montañas y un cielo azul claro",
    },

    {
        imagen: "assets/banner/3.jpg",
        titulo: "Imagen 3",
        descripcion: "Fotografía panorámica de muchos globos aerostáticos",
        alt: "Varios globos aerostáticos de colores en el cielo entre nubes blancas",
    },

    {
        imagen: "assets/banner/4.jpg",
        titulo: "Imagen 4",
        descripcion:
            "Fotografía de una rama con fondo oscuro con brotes suaves",
        alt: "Brotes blancos y esponjosos de una planta, sobre una rama con fondo oscuro",
    },
    {
        imagen: "assets/banner/5.jpg",
        titulo: "Imagen 5",
        descripcion:
            "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
        alt: "Varios globos aerostáticos de colores sobrevolando sobre parcelas de trigo en el cielo entre nubes blancas",
    },

    {
        imagen: "assets/banner/6.jpg",
        titulo: "Imagen 6",
        descripcion: " Lorem ipsum dolor sit amet.",
        alt: " Lorem ipsum dolor sit amet.",
    },

    {
        imagen: "assets/banner/7.jpg",
        titulo: "Imagen 7",
        descripcion: "Lorem ipsum dolor sit amet",
        alt: "Lorem ipsum dolor sit amet",
    },
];

const arrayCards = [
    {
        imagen: "assets/viajes/viajes-1.jpg",
        titulo: "Imagen 1",
        descripcion:
            "fotografía panorámica de montañosa cubierta de nieve bajo un cielo azul despejado.",
        alt: "fotografía panorámica de montañosa cubierta de nieve bajo un cielo azul despejado",
    },
    {
        imagen: "assets/viajes/viajes-2.jpg",
        titulo: "Imagen 2",
        descripcion: "Fotografía panorámica de muchos globos aerostáticos",
        alt: "Fotografía panorámica de muchos globos aerostáticos",
    },
    {
        imagen: "assets/viajes/viajes-3.jpg",
        titulo: "Imagen 3",
        descripcion:
            "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
        alt: "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
    },
    {
        imagen: "assets/viajes/viajes-4.jpg",
        titulo: "Imagen 4",
        descripcion:
            "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
        alt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minus qui cupiditate pariatur architecto magni recusandae quam quod in ad?",
    },
    {
        imagen: "assets/viajes/viajes-6.jpg",
        titulo: "Imagen 5",
        descripcion:
            "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
        alt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minus qui cupiditate pariatur architecto magni recusandae quam quod in ad?",
    },

    {
        imagen: "assets/viajes/viajes-7.jpg",
        titulo: "Imagen 6",
        descripcion:
            "Fotografía panorámica de muchos globos aerostáticos sobrevolando sobre parcelas de trigo",
        alt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minus qui cupiditate pariatur architecto magni recusandae quam quod in ad?",
    },
];

/* TODO: capturar los elementos del DOM */

const cabecera = document.querySelector(".cabecera");
const imgHeaderA = document.querySelector("img");
const tituloGaleria = document.querySelector("h1");
const contenedor = document.querySelector(".container");

//EVENTOS

//FUNCIONES

/* funcion crearBanner

    1- crear el elemento img
        mirar usar document.create element
    2- asignar atributos - alt src tittle
        mirar asignar atributos con set atribute y co lo que sea
    3-añadir la imagen al DOM (header)
        creo que era con .... miralo
*/
function pintarImgCabecera() {
    const aleatoria = Math.floor(Math.random() * arrayHeader.length);
    const fotoaleatoria = arrayHeader[aleatoria];
    const imgHeader = document.createElement("img"); // crear elemento img
    imgHeader.setAttribute("src", fotoaleatoria.imagen); // luego añada atributos
    imgHeader.setAttribute("alt", fotoaleatoria.alt);
    imgHeader.setAttribute("title", fotoaleatoria.titulo);
    cabecera.append(imgHeader); //añada al dom -header-
    // console.log(arrayHeader.length);
}

//titulo
function estilizarTituloGaleria() {
    tituloGaleria.classList.add("nombreFotos");
}

/* function pintar Galeria

    crear uan pieza de estas por cada elemento del array (forEach)

        - crear un contenedor
        - crear el div para meter la imagen
        - crear elemento img cons sus atributos (alt,src)
        - crer un titulo
        - crer la descripcion

        - meter la imagen en el div
        - meter el titulo, el div, la descripcion


        añadirlo al DOM en el div flexContainer
*/
function pintarImgCards() {
    arrayCards.forEach((e) => {
        const card = document.createElement("div"); // div para la tarjeta
        card.classList = "card"; // clase para la tarjeta

        const imgCard = document.createElement("img"); // creando elemento img
        imgCard.setAttribute("src", e.imagen); // luego añadir atributos
        imgCard.setAttribute("alt", e.alt);
        imgCard.setAttribute("title", e.titulo);

        const tit = document.createElement("h2"); // crear un titulo
        tit.textContent = `${e.titulo}`;

        const describir = document.createElement("p"); // creacion de descripcion
        describir.textContent = `${e.descripcion}`;
        card.append(imgCard); //se añade a div card la imagen
        card.append(tit); //se añade a div card el tit
        card.append(describir); //se añade a div card la descrpcion
        contenedor.append(card); // se agrega al contenedor el div de la card
    });
}

//INVOCAR LA FUNCION

pintarImgCabecera();
pintarImgCards();
estilizarTituloGaleria();
