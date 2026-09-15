let numAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite = 101;


while (palpite != numAleatorio) {
    palpite = Number(prompt("Qual seu palpite?"));

    if (palpite > numAleatorio) {
        console.log(`${palpite}, Seu palpite é maior que o numero aleatorio.`)   
    }

    else if (palpite < numAleatorio) {
        console.log(`${palpite}, Seu palpite é menor que o numero aleatorio.`)       
    }

    else {
        console.log("Você acertou o numero.")       
    }
}

