let btnLogin = document.getElementById("btnLogin");
let btnVaciarSessionStorage = document.getElementById("btnVaciarSessionStorage");
let btnVaciarTodo = document.getElementById("btnVaciarLocalStorage");
let checkRememberMe = document.getElementById("rememberMe");
let btnr = document.getElementById("btnr")
const ausuario = []



function guardarDatos(storage) {
    let user = document.getElementById("emailr").value;
    let pass = document.getElementById("passwordr").value;
    let usuario = {
        user: user,
        password: pass
    }
    ausuario.push(usuario)
    storage.setItem("user", JSON.stringify(ausuario));
}
btnr.addEventListener("click" , (e) =>{
    e.preventDefault()
    guardarDatos(localStorage)
})

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(storage, clave) {
    storage.removeItem(clave);
}

const usuariosstorage = () => {
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

let usuarior = JSON.parse(localStorage.getItem("user"))
    console.log(usuarior)
    
    function login(){
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;
    console.log(ausuario)
    console.log(emailInput)
    const user = ausuario.find(u => u.user === emailInput);
    
    if(user.password === passwordInput)
    {
        isLoggedIn = true;
        window.location.href="../index.html";
    console.log(isLoggedIn)
}else{
        isLoggedIn = false
console.log(isLoggedIn)
    }
    sessionStorage.setItem("log", JSON.stringify(isLoggedIn));
    }
    btnLogin.addEventListener("click" , () =>{
        login()
    })










//btnVaciarTodo.addEventListener("click", () => {
//    borrarDatos(localStorage);
//    borrarDatos(sessionStorage);
//});

btnVaciarSessionStorage.addEventListener("click", () => {
    borrarDatos(sessionStorage);
});

btnLogin.addEventListener("click", () => {

    if (checkRememberMe.checked) {
        guardarDatos(localStorage);
    } else {
    guardarDatos(sessionStorage);
}
});
