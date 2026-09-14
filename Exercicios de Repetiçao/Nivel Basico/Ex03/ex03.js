const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    const numUsuario = document.getElementById("numero").value;
    let contUsuario = 0;

    for (let i = 0; i < numUsuario; i++) {
        contUsuario =+ i;
    }

    console.log(contUsuario)

})