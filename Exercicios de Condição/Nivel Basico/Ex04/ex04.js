const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);

    if(numUsuario > 0) {
        alert("O número é positivo");
    }

    else if(numUsuario < 0) {
        alert("O número é negativo");
    }

    else {
        alert("O número é zero");
    }
})