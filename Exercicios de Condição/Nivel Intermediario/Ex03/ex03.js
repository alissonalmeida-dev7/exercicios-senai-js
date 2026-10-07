const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let valorCompra = Number(document.getElementById("valor").value);

    if(valorCompra > 100) {
        let valorFinal = valorCompra - (valorCompra * 0.10);
        alert(`Desconto de 10% aplicado!\nValor final: R$ ${valorFinal.toFixed(2)}`);
    }

    else {
        alert(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
    }
})