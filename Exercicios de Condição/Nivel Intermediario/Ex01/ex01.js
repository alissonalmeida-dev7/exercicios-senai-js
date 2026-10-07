const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if(operacao === "+") {
        resultado = num1 + num2;
    }

    else if(operacao === "-") {
        resultado = num1 - num2;
    }

    else if(operacao === "*") {
        resultado = num1 * num2;
    }

    else if(operacao === "/") {
        if(num2 === 0) {
            alert("Não é possível dividir por zero");
            return;
        }

        resultado = num1 / num2;
    }

    alert(`${num1} ${operacao} ${num2} = ${resultado}`);
})