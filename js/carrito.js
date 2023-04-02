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
let button1 = document.createElement(`button`)
button1.innerHTML = `eliminar`
button1.setAttribute("id", "ec")
let button2= document.createElement(`button`)
button2.innerHTML = `pagar`
button2.setAttribute("id", "pagar")
console.log(p)
p.append(ptext);
div.append(p);
p.append(button1);
p.append(button2);


let eliminarc = document.getElementById("ec");

eliminarc.addEventListener("click", function(){
    localStorage.removeItem("encarrito");
    location.reload()
})

let pagart = document.getElementById("pagar");

pagart.addEventListener("click", function (){
    if(sessionStorage.getItem
        ("log") === "true") {
            if (!document.getElementById("miPpago")) {
        const p = document.createElement("p");
        p.setAttribute("id", "miPpago")
const ptext = document.createTextNode(`Pagao realizado Total:${totalCarrito}`)
p.append(ptext);
ptotal.append(p);}
    } else {
        
        laul.innerHTML = "";
        if (!document.getElementById("miParrafo")) {
        const p = document.createElement("p");
        p.setAttribute("id", "miParrafo")
        const ptext = document.createTextNode("Debes loguerte para completar el pago")
        
        p.append(ptext);
ptotal.append(p);
    }
    }
});
