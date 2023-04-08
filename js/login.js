let btnLogin = document.getElementById("btnLogin");
let btnVaciarSessionStorage = document.getElementById("btnVaciarSessionStorage");
let btnVaciarTodo = document.getElementById("btnVaciarLocalStorage");
let checkRememberMe = document.getElementById("rememberMe");
let formulario = document.getElementById("form")
usuarior = []
ausuario =[]
console.log(ausuario)
function guardarDatos(storage) {
    let userr = document.getElementById("emailr").value;
    let pass = document.getElementById("passwordr").value;
    let nombre = document.getElementById("name").value
    let usuario = {
        nombre : nombre,
        user: userr,
        password: pass
    }
    const userdr = ausuario.find(u => u.user === userr);
    console.log(userdr)
    if (userdr !== undefined){
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ESTE CORREO YA ESTA REGISTRADO!',
        footer: '<a href="">Why do I have this issue?</a>'
        });}else{
            Swal.fire(
                'registro exitoso!',
                '',
                'success'
            ).then((result) => {
                if (result.isConfirmed) {
                location.reload();
        }})
            usuarior.push(usuario)
            storage.setItem("user", JSON.stringify(usuarior));
            }
        console.log(usuarior);}

formulario.addEventListener("submit" , (e) =>{
    e.preventDefault()
    guardarDatos(localStorage)
})

function borrarDatoUnico(storage) {
    storage.removeItem("log");
}
const usuariosstorage = (ausuario) => {
    const ustorage = JSON.parse(localStorage.getItem("user"));
    console.log(ustorage)
    if (ustorage !== null) {
        ustorage.forEach(function(user) {
        ausuario.push(user);
        });
    }
}
usuariosstorage(ausuario)
console.log(ausuario)

    
    function login(){
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;
    console.log(ausuario)
    console.log(emailInput)
    const user = ausuario.find(u => u.user === emailInput);
    if (user != undefined){
        console.log(user);}else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'correo incorrecto!',
                footer: '<a href="">Why do I have this issue?</a>'
                })
        }
    if(user.password === passwordInput)
    {
        isLoggedIn = true;
        sessionStorage.setItem("user", JSON.stringify(user.nombre));
        window.location.href="./carrito.html";
    console.log(isLoggedIn)
    
}else{
        isLoggedIn = false
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'contraseña incorrecto!',
            footer: '<a href="">Why do I have this issue?</a>'
            })
    }

    sessionStorage.setItem("log", JSON.stringify(isLoggedIn));
    }
    btnLogin.addEventListener("click" , (e) =>{
        e.preventDefault()
        login()
        
    })




btnVaciarSessionStorage.addEventListener("click", () => {
    borrarDatoUnico(sessionStorage);
    location.reload()
});

//btnLogin.addEventListener("click", (e) => {
    //e.preventDefault()
    //if (checkRememberMe.checked) {
    //    guardarDatos(localStorage);
    //} else {
    //guardarDatos(sessionStorage);
//}
//});
