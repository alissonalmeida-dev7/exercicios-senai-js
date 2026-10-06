const btnEnviar = document.getElementById("enviar");
let total = 0;

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(document.getElementById("numero").value);

    total += numUsuario; 

    if (numUsuario === 0) {
        btnEnviar.disabled = true;
        console.log(`Total final: ${total}`);
    } 
    
    else {
        console.log(`Soma parcial: ${total}`);
    }

    document.getElementById("numero").value = "";
});