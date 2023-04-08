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
const ptext = document.createTextNode(`total = ${totalCarrito} `)
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


let eliminarc = document.getElementById("ec");

eliminarc.addEventListener("click", function(){
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
