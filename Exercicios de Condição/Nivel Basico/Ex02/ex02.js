const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);

    if(numUsuario > 0) {
        console.log(`O numero ${numUsuario} é positivo.`)
    }

    else {
        console.log(`O numero ${numUsuario} é negativo.`)
    }
})