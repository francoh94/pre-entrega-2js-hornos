let carrito = []
const productos = [
    producto = {id:"i1", nombre:"adidas1", precio:"7500", descuento:"10%"},
    producto = {id:"i2", nombre:"adidas2", precio:"4000"},
    producto = {id:"i3", nombre:"adidas3", precio:"4500"},
    producto = {id:"i4", nombre:"adidas4", precio:"5500"},
    producto = {id:"i5", nombre:"jordan1", precio:"15000", descuento:"15%"},
    producto = {id:"i6", nombre:"jordan2", precio:"10000"},
    producto = {id:"i7", nombre:"jordan3", precio:"12000"}, 
    producto = {id:"i8", nombre:"jordan4", precio:"10500"},
    producto = {id:"i9", nombre:"nike1", precio:"5500"},
    producto = {id:"i10", nombre:"nike2", precio:"8000"},
    producto = {id:"i11", nombre:"nike3", precio:"6500"}, 
    producto = {id:"i12", nombre:"nike4", precio:"7600"},
    ];
    const todosloschamps = document.querySelector(`.todosloschamps`)
    productos.forEach(producto => {
        const card = document.createElement("div")
        card.className = "col-md-3 mb-3 mx-2 champs" 
        card.id = `${producto.id}`
        card.innerHTML = `
        <div class="precio">${producto.precio}</div><button class="btn container-fluid comprar" type="button">comprar</button></div>`
        
        todosloschamps.append(card)
    });
    const addbuttons = document.querySelectorAll(`.comprar`);
    console.log(addbuttons);
    addbuttons.forEach((addbtn) => {
        addbtn.addEventListener(`click`, ()=>{
            let producto = productos.find(function(p) {
                return p.id === addbtn.parentNode.id;
            });
            carrito.push(producto);
            console.log(carrito); 
            localStorage.setItem("encarrito", JSON.stringify (carrito));
            console.log(localStorage.getItem("encarrito"))
            Toastify({
                text: "zapas agregadas",
                duration: 3000
                })
                .showToast();
                })
    }
    )
    const nombre = JSON.parse(sessionStorage.getItem("user"))
    if(sessionStorage.getItem
        ("log") === "true") {
    if (!document.getElementById("hola")) {
        
        const p = document.createElement("p");
        p.setAttribute("id", "holalogin")
const ptext = document.createTextNode(`Hola  ${nombre}`)
p.append(ptext);
divindex.append(p);}
    }
const key = `a5e17608ff67eb9703700ec1458f41de`
const tempvalor = document.getElementById("temp")
const divtemp = document.getElementById("divtemp")
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(ubi => {
        const lat = ubi.coords.latitude;
        const long = ubi.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
        fetch(url)
        .then(response => response.json())
        .then(data => { console.log(data)
        let temp = (data.main.temp);
        let tempc = parseInt(temp - 273.15)
        tempvalor.textContent = `${tempc}°C`;
        })
    });
}
