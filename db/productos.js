export const productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 3500,
        imagen: "https://img.freepik.com/foto-gratis/hamburguesa-parrilla-tomate-cebolla-papas-fritas-generada-ia_188544-43039.jpg?w=1380&t=st=1699225604~exp=1699226204~hmac=8348992bbed352dadac0393dcde6fd685001dedf6374344c601ba34611d97f6b",
        categoria: "comida"
    }
    // {
    //     id: 2,
    //     nombre: "Lomito",
    //     precio: 4900,
    //     imagen: "../imagenes/lomito.jpg",
    //     categoria: "comida"
    // },
    // {
    //     id: 3,
    //     nombre: "Pizza",
    //     precio: 2800,
    //     imagen: "../imagenes/pizza.jpg",
    //     categoria: "comida"
    // },
    // {
    //     id: 4,
    //     nombre: "Cerveza",
    //     precio: 1800,
    //     imagen: "../imagenes/cerveza.jpg",
    //     categoria: "bebida"
    // },
    // {
    //     id: 5,
    //     nombre: "Gaseosa",
    //     precio: 1300,
    //     imagen: "../imagenes/gaseosa.jpg",
    //     categoria: "bebida"
    // },
    // {
    //     id: 6,
    //     nombre: "Agua",
    //     precio: 900,
    //     imagen: "../imagenes/agua.jpg",
    //     categoria: "bebida"
    // }
];

JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));