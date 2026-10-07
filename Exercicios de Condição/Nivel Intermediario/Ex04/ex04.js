const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido");
    }

    else {
        alert("Acesso negado");
    }
})