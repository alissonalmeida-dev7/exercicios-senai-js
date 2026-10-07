const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);

    if(numUsuario > 60) {
        alert(`Você foi APROVADO`)
    }

    else {
        alert(`Você foi REPROVADO`)
    }
})