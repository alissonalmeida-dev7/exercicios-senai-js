const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);
    let soma = 0;

    for (let i = 1; i <= numUsuario; i++) {
        soma += i;
    }

    console.log(soma)
})