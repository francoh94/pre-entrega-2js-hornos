let paracarrito = JSON.parse(localStorage.getItem("encarrito"));
let ul = document.getElementById("laul");
let div = document.getElementById("productos");


console.log (paracarrito);
for(let i = 0; i < paracarrito.length; i++){
    const zapa = paracarrito[i]
const li = document.createElement(`li`);
const litext = document.createTextNode(`${zapa.nombre}$${zapa.precio}`);

console.log(zapa)
li.appendChild(litext);
ul.appendChild(li)
}

let totalCarrito = paracarrito.reduce((acc, prod) => acc + parseInt( prod.precio),0)
console.log(totalCarrito)
const p = document.createElement("p");
const ptext = document.createTextNode(`total = ${totalCarrito} `)
let button = document.createElement(`button`)
button.innerHTML = `eliminar`
button.setAttribute("id", "ec")
console.log(p)
p.append(ptext);
div.append(p);
p.append(button);

let eliminarc = document.getElementById("ec");

eliminarc.addEventListener("click", function(){
    localStorage.removeItem("encarrito");
    location.reload()
})


