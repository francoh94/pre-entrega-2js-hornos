function Validacion(edad, ci){
    if ( edad > 18){
        validar = true;
        console.log(edad);}
    if ( edad < 18){
        validar = false;
        alert("edad no permitida");
    }
    if ( ci > 10000000 && ci < 70000000) {
        validar = true;
        console.log(ci);}
    if (ci < 10000000 || ci > 70000000) {
        validar = false;
        alert("ci no admitida");
    }
    return validar;
}

function buscarproducto(nombre, propiedades){
    const buscador = productos.filter(producto => producto[propiedades] == nombre);
    return buscador;
}

function buscarporid(articulobuscado) {
    for(i=0 ; i<productos.length; i++){
    if (productos[i].id === articulobuscado){
        return productos[i].precio;
    }
    }
    return null
}
alert("bienvenido a tuzapas.")
let idp = prompt("ingrese su nombre y apellido")
console.log(idp);
let edad = parseInt(prompt("ingrese su edad"))
let ci = parseInt(prompt("ingrese su CI(sin puntos o guiones)"))
Validacion(edad, ci);

const productos = [
    {id : 1, articulo: "air force", marca: "nike", precio: "6000" },
    {id : 2, articulo: "Forum Mid", marca: "adidas", precio: "5000" },
    {id : 3, articulo: "bambas", marca: "puma", precio: "5500" },
    {id : 4, articulo: "jordan 1", marca: "nike", precio: "7000" },
];
let marcaelegida = prompt("De que marca van a ser tus zapas?");
let marcaproductos = buscarproducto(marcaelegida, "marca");

console.log(marcaproductos)

while(marcaproductos.length === 0) {
    marcaelegida = prompt("Marca incorrecta, vuelva a ingresarla. De que marca van a ser tus zapas?");
    marcaproductos = buscarproducto(marcaelegida, "marca");
}
let nombrearticulo = marcaproductos.map(producto => producto.articulo);
let articulobuscado = prompt(`cual es el modelo que te gustaria seleccionar: ${JSON.stringify(marcaproductos)} (ingrese el precio de las zapas que quieres:)`);
let preciofinal = articulobuscado *1.22;
alert (`el precio final de tus zapas ${idp} es: ${preciofinal}`)
console.log(preciofinal);

const mismarcas = ["jordan", "nike" , "puma" , "adidas"];
const ofertas = [
    {id : 1, marca : "jordan", articulo : "short", precio : "1700", descuento : "15%off" },
    {id : 2, marca : "jordan", articulo : "remera", precio : "700", descuento : "15%off" },
    {id : 3, marca : "jordan", articulo : "bolso", precio : "2700", descuento : "25%off" },
    {id : 4, marca : "nike", articulo : "medias", precio : "500", descuento : "25%off" },
    {id : 5, marca : "nike", articulo : "remera", precio : "700", descuento : "15%off" },
    {id : 6, marca : "nike", articulo : "canguro", precio : "3700", descuento : "20%off" },
    {id : 7, marca : "puma", articulo : "remera", precio : "700", descuento : "15%off" },
    {id : 8, marca : "puma", articulo : "gorro", precio : "500", descuento : "15%off" },
    {id : 9, marca : "puma", articulo : "camiseta", precio : "1700", descuento : "25%off" },
    {id : 10, marca : "adidas", articulo : "musculosa", precio : "700", descuento : "20%off" },
    {id : 11, marca : "adidas", articulo : "pantalon deportivo", precio : "2700", descuento : "15%off" },
    {id : 12, marca : "adidas", articulo : "billetera", precio : "700", descuento : "15%off" },
];
let marcafavorita = prompt("cual es tu marca favorita?");
if (mismarcas.includes(marcafavorita) ){
    console.log(marcafavorita)
    let tuoferta = ofertas.filter(ofertas => ofertas.marca === marcafavorita);
        alert("te dejamos algunas ofertas:" + " " );
        tuoferta.forEach(ofertas => alert(`- ${ofertas.articulo} ${ofertas.marca}: $${ofertas.precio}(${ofertas.descuento})`))
}else { 
    console.log(marcafavorita)
}