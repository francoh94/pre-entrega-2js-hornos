//consultar profe por function
const ver = document.getElementById("i1")
const ver1 = document.getElementById("i2")
const ver2 = document.getElementById("i3")
const ver3 = document.getElementById("i4")
const ver4 = document.getElementById("i5")
const ver5 = document.getElementById("i6")
const ver6 = document.getElementById("i7")
const ver7 = document.getElementById("i8")
const ver8 = document.getElementById("i9")
const ver9 = document.getElementById("i10")
const ver10 = document.getElementById("i11")
const ver11 = document.getElementById("i12")
let carrito = []
const productos = [
    producto1 = {id:"1", nombre:"adidas1", precio:"7500", descuento:"10%"},
    producto2 = {id:"2", nombre:"adidas2", precio:"4000"},
    producto3 = {id:"3", nombre:"adidas3", precio:"4500"},
    producto4 = {id:"4", nombre:"adidas4", precio:"5500"},
    producto5 = {id:"5", nombre:"jordan1", precio:"15000", descuento:"15%"},
    producto6 = {id:"6", nombre:"jordan2", precio:"10000"},
    producto7 = {id:"7", nombre:"jordan3", precio:"12000"}, 
    producto8 = {id:"8", nombre:"jordan4", precio:"10500"},
    producto9 = {id:"9", nombre:"nike1", precio:"5500"},
    producto10 = {id:"10", nombre:"nike2", precio:"8000"},
    producto11 = {id:"11", nombre:"nike3", precio:"6500"}, 
    producto12 = {id:"12", nombre:"nike4", precio:"7600"},
    ];

ver.addEventListener("click", () =>{
    carrito.push(productos[0])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver1.addEventListener("click", () =>{
    carrito.push(productos[1])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver2.addEventListener("click", () =>{
    carrito.push(productos[2])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver3.addEventListener("click", () =>{
    carrito.push(productos[3])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver4.addEventListener("click", () =>{
    carrito.push(productos[4])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver5.addEventListener("click", () =>{
    carrito.push(productos[5])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver6.addEventListener("click", () =>{
    carrito.push(productos[6])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver7.addEventListener("click", () =>{
    carrito.push(productos[7])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver8.addEventListener("click", () =>{
    carrito.push(productos[8])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver9.addEventListener("click", () =>{
    carrito.push(productos[9])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver10.addEventListener("click", () =>{
    carrito.push(productos[10])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
ver11.addEventListener("click", () =>{
    carrito.push(productos[11])
    console.log(carrito)
    localStorage.setItem("encarrito", JSON.stringify (carrito));
console.log(localStorage.getItem("encarrito"))
});
