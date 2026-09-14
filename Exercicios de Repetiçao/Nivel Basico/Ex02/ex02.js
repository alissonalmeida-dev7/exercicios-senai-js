const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    const numTabuada = document.getElementById("tabuada").value;

    for (let i = 1; i < 11; i++) {
        console.log(`${numTabuada} x ${i} = ${numTabuada*i}`);
    }
})