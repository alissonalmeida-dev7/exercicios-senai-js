const btnEnviar = document.getElementById("enviar");
const inputNumero = document.getElementById("numero");

let total = 0;
let contador = 0;
const LIMITE = 3;

btnEnviar.addEventListener("click", function() {
    let numUsuario = Number(inputNumero.value);

    // Acumula o valor e incrementa a contagem
    total += numUsuario;
    contador++;

    console.log(`Número ${contador} recebido: ${numUsuario}`);

    // Verifica se atingiu a quantidade de 3 números
    if (contador === LIMITE) {
        let media = total / LIMITE;
        
        console.log(`--- FIM DO PROGRAMA ---`);
        console.log(`Soma dos números: ${total}`);
        console.log(`Média final: ${media}`);
        
        btnEnviar.disabled = true;
        inputNumero.disabled = true;
    }

    // Limpa o campo do input para o próximo valor
    inputNumero.value = "";
});