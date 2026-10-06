const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);
    console.log(numUsuario)

    while (numUsuario > 0) {
        numUsuario = numUsuario - 1
        console.log(numUsuario)
    }
})