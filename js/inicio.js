import { comprarProducto } from "./carrito.js"


const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

const generarCardsProductos = (productos) => {

    productos.forEach(producto => {

        let card = document.createElement("div")

        card.className = "producto"
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="imagen 1">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.categoria}</p>
                <p class="card-text">$${producto.precio}</p>
                <button id = comprar${producto.id} class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `
        divProductos.appendChild(card)

        const btnComprar = document.getElementById(`comprar${producto.id}`)
        btnComprar.addEventListener("click", () => comprarProducto(producto.id))

    });

}

