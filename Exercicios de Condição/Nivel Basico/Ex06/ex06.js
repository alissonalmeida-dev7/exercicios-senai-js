const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);

    if(numUsuario % 2 === 0) {
        alert("O número é par");
    }

    else {
        alert("O número é ímpar");
    }
})