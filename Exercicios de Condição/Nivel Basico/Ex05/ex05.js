const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let idadeUsuario = Number(document.getElementById("numero").value);

    if(idadeUsuario >= 0 && idadeUsuario <= 12) {
        alert("Você é uma Criança");
    }

    else if(idadeUsuario >= 13 && idadeUsuario <= 17) {
        alert("Você é um Adolescente");
    }

    else if(idadeUsuario >= 18) {
        alert("Você é um Adulto");
    }

    else {
        alert("Idade inválida, insira um numero positivo.");
    }
})