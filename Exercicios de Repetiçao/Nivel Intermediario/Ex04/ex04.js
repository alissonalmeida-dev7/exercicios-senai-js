const btnEnviar = document.getElementById("enviar");
let numUsuario = Number(prompt("Digite a senha?"));
let senha = Number(1234);

while (numUsuario != senha) {
    numUsuario = Number(prompt("Senha incorreta, tente novamente."));
}

alert(`Você acertou a senha !\nA senha é: ${senha}`);
