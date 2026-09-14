// let nome = "Diego";
// let idade = 30;

// //* CONCATENAÇÂO
// console.log("Nome: " + nome + ", idade: " + idade);

// //* INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3;
// let sub = "5" - 3;

// console.log(soma);
// console.log(sub);

// console.log(typeof sub);
// console.log(typeof soma);


// //* CONVERTENDO VALORES
// let numero = "53"; // String

// let convertido = Number(numero); // Converte o valor para number

// console.log(typeof convertido);


// //* OPERADORES RELACIONAIS

// //* VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 1 -> true

// //* VALIDA IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 1 -> false

//* &&: Compara os 2 valores e retorna true se ambos os valores forem verdadeiros, senão retorna false
//* ||: Siginifica OR (OU)
//* !: Significa NEGAÇÃO

// //* ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) { // forEach = Para cada 
//     console.log(`Fruta: ${fruta}`);
// })

// //* ARROW FUNCTION (Estruta de cima simplificada)
// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// //* FUNÇÕES NATIVAS JS

//* FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista cm base em uma condição

// let numeros = [1, 2, 3, 4];

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2;
// })

// // numerosDobrados = [2, 4, 6, 8];
// console.log(numerosDobrados);

// // Arrow function com retorno implicito

// let numerosDobradosArrow = numeros.map();


// //* FILTER 
// // Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioreQueDez = numeros.filter(num => num > 10);

// // maioresQueDez = [15,20];
// console.log(maioreQueDez);


// //* REDUCE
// // Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4];

// // acumulador inicia em 0
// // Variavel auxiliar (auxliar)
// // acumulador começa em 0 e soma com o auxiliar até o ultimo valor do array

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// // ac 0
// // ac 1
// // ac 3
// // ac 6
// // ac 10

// console.log(soma);


// //* FIND
// Retorna o primeiro elemento que atende a condição

let produtos = [
    { id: 1, nome: "Teclado", preco: 50 }, // Produto
    { id: 2, nome: "Mouse", preco: 30 },
    { id: 2, nome: "Caderno", preco: 30 }
]

let item = produtos.find(produto => produto.id === 2)

console.log(item)