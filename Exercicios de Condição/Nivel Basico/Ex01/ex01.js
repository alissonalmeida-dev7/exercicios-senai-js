const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let idadeUsuario = Number(document.getElementById("numero").value);

    if(idadeUsuario >= 18) {
        alert("Você é maior de idade");
    }

    else {
        alert("Você é menor de idade");
    }
})