const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    if(num1 >= num2 && num1 >= num3) {
        alert(`O maior número é: ${num1}`);
    }

    else if(num2 >= num1 && num2 >= num3) {
        alert(`O maior número é: ${num2}`);
    }

    else {
        alert(`O maior número é: ${num3}`);
    }
})