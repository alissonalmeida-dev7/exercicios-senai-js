let numAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite = Number(prompt("Qual seu palpite?"));

while (palpite !== numAleatorio) {

    if (palpite > numAleatorio) {
        alert(`${palpite}, seu palpite é maior que o número aleatório.`);
    } 
    
    else {
        alert(`${palpite}, seu palpite é menor que o número aleatório.`);
    }

    palpite = Number(prompt("Tente novamente. Qual seu palpite?"));
}

alert(`Você acertou o número!\nO numero era: ${numAleatorio}.`);