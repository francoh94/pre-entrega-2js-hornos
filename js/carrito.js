let paracarrito = JSON.parse(localStorage.getItem("encarrito"));
let ul = document.getElementById("laul");
let div = document.getElementById("productos");
console.log (paracarrito);
for(const element of paracarrito){
    const zapa = element
const li = document.createElement(`li`);
const litext = document.createTextNode(`${zapa.nombre}$${zapa.precio}`);
console.log(zapa)
li.appendChild(litext);
ul.appendChild(li)
}
let totalCarrito = paracarrito.reduce((acc, prod) => acc + parseInt( prod.precio),0)
console.log(totalCarrito)
const p = document.createElement("p");
const ptext = document.createTextNode(`Total uyu = ${totalCarrito} `)
let button1 = document.createElement(`button`)
button1.innerHTML = `eliminar`
button1.setAttribute("id", "ec")
let button2= document.createElement(`button`)
button2.innerHTML = `pagar`
button2.setAttribute("id", "pagar")
console.log(p)
p.append(ptext);
ptotal.append(p);
p.append(button1);
p.append(button2);
let eliminarcarrito = document.getElementById("ec");
eliminarcarrito.addEventListener("click", function(){
    localStorage.removeItem("encarrito");
    location.reload()
})
let pagart = document.getElementById("pagar");
pagart.addEventListener("click", function (){
    if(sessionStorage.getItem
        ("log") === "true") {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
                title: 'Completar pago?',
                text: `Total:${totalCarrito}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'pagar!',
                cancelButtonText: 'cancelar!',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Pago realizado!',
                    'Que lo disfrutes.',
                    'success'
                )
            localStorage.removeItem("encarrito");
            laul.innerHTML = ""
            cambio.innerHTML = ""
            ptotal.innerHTML = "Disfruta tu compra";
                } else if (
                    
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire(
                    'pago cancelado',
                    '',
                    'error'
                )
                }
            })
            } 
    else {
        (Swal.fire({
            icon: 'error',
            title: 'Debes logearte para terminar la compra',
            text: '',
            footer: '<a href="">Why do I have this issue?</a>'
            })).then((result) => {
                if (result.isConfirmed) {
                    window.location.href="./login.html";;
}})
}})
const keymoneda = `d9ba5d8d4d9344fd9367402ed0e360d7`
const divcambio = document.getElementById(`cambio`)
const url = `https://openexchangerates.org/api/latest.json?app_id=${keymoneda}`;
        fetch(url)
        .then(response => response.json())
        .then(data => { console.log(data)
        let uyu = (data.rates.UYU)
        console.log(uyu);
        if (totalCarrito !== `undefined` && totalCarrito !== 0 && totalCarrito !== `null`){
            divcambio.textContent = `Total usd = ${parseInt(totalCarrito/uyu).toFixed(1)}`
        }
        })