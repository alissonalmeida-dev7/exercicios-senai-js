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
// //* FUNÇÃO MAP()
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

// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50 }, // Produto
//     { id: 2, nome: "Mouse", preco: 30 },
//     { id: 2, nome: "Caderno", preco: 30 }
// ]

// let item = produtos.find(produto => produto.id === 2)

// console.log(item)


// //* DIFERENÇA ENTRE O FILTER E FIND
//* find -> retorna somente o primeiro elemento qie ele encontra com a condição
//* filter -> retorna todos os elementos que enconra com a condição
//* arrow function / lambda
// let itemFiltrado = produtos.filter(produto => produto.id == 2);

// console.log(itemFiltrado);

// produtos.filter(function(produto) {
//     produto.id === 2
// });


// //* SPLIT
// Divide a string em partes, transformando em um array

// let frase = "JS é top";

// let palavras = frase.split(" ")
// console.log(palavras)


// //* TRIM
// trim remove espaços no inicio e final de string
// let nome = "        Paulo"
// let nomeLimpo = nome.trim()

// console.log(nome)
// console.log(nomeLimpo)

// //* INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um booleano
// verdadeiro ou falso

// let frutas = ["maçã", "banana"];

// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes); // true

// toLoweCase() -> transforma o texto em minusculo
// toUpperCase() -> transforma o texto em maiusculo

// let nome = "KESSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase()); // kessia
// console.log(nome.toUpperCase()); // INSTRUTORA

// //* FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// console.log(nomes);

// nomes.forEach(nome => console.log(nome));


// //* SOME
// Verifica se pelo menos um item atende a condição
// retrona booleano 

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar); // true 

// //* EVERY
// Verifica se TODOS os elementos atendem a confição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false 

// //* SORT

// Ordena os elementos do array
// let numeros = [3, 10, 5, 2, 4];
// let letras = ["c", "a", "x", "h"];

// para letras
// letras.sort();
// console.log(letras);

// para números
// numeros.sort((a, b) => a - b);
// console.log(numeros);


// //* REVERSE
// Inverte a ordem dos elementos no array
// let numeros = [1, 2, 3];

// numeros.reverse();
// console.log(numeros); // [3, 2, 1]

// //* JOIN
// Junta os elementos de um array em uma string
// let palavras = ["JS", "é", "top"];
// let frase = palavras.join(" ");

// console.log(frase); 

// //* ADICIONANDO E REMOVENDO ELEMENTOS DO ARRAY
// //* PUSH
// //* POP
// //* SHIFT
// //* UNSHIFT

// let lista = ["A", "B"];

// // PUSH -> Adiciona elementos no final do array
// lista.push("C"); // Adicionando
// console.log(lista);

// // POP -> Remove os elementos no final da lista
// lista.pop(); // Removendo
// console.log(lista);

// // SHIFT -> Remove elemento no começo da lista
// lista.shift(); // Removendo
// console.log(lista);

// // UNSHIFT -> Adicionar elementos no inicio da lista
// lista.unshift("A") // Adicionando
// console.log(lista);


// //* SLICE
// Cria uma cópia de uma parte da lista

/*
    array.slice(inicial, final)

    inicial -> onde começa
    final -> onde termina (não inclui a posição/indice/index), ele vai até onde você informar mas não pega)
*/

// let numeros = [1, 2, 3, 4];

// let parte = numeros.slice(1, 3); // Posições do array

// console.log(parte) // [2, 3]


// //* SPLICE
// Remove ou adiciona elementos em qualquer posição

/*
    array.splice(index, count, item1, ..., itemX);

    index -> indice(posição do elemento no array);
    count -> numero de elementos a serem removidos (pode ser 0)
    item1, ..., itemX -> itens a serem adicionados
*/

// let numeros = [1, 2, 3, 4];

// removendo elementos, sem adicionar
// numeros.splice(1, 1);
// console.log(numeros); // [1, 3, 4]

// Removendo elementos e adicionando mais dois elementos
// let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// frutas.splice(0, 3, "Limão", "Kiwi");
// console.log(frutas);

// Adicionando elementos sem remover
// frutas.splice(2, 0, "Limão", "Kiwi");
// console.log(frutas);


// //* REPLACE
// Substitui uma parte da string

/*
    replace(valorProcurado, "valorQueSubstitui")
*/

// let texto = "Ola, mundo!";

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto)


// //* NOSSA FUNÇÕES

//* função comum
// function exibirMensagem() {
//     console.log("Bem vindo(a)!");
// }

// exibirMensagem(); 

//* função com parâmetros
// function cumprimentar(nome) {
//     console.log(`Ola, ${nome}`);
// }

// cumprimentar("Ana");
// cumprimentar("Carlos");

//* função com mais de um parametro
// function somar(n1, n2) {
//     let soma = n1 + n2;
//     console.log(soma);
// }

// somar(1, 2);

// Outra forma de fazer a função somar()
// const somar = (n1, n2) => n1 + n2;

// console.log(somar(1,2));


// //* PROMPT
// recebe/solicita uma informação do usuario
// o valor recebido pelo prompt normalmente é string

// let nome = prompt("Digite o seu nome: ");
// console.log(nome);
// alert(nome);

// recebendo um número e convertido
// Number() -> converte de forma generica
// let idade = Number(prompt("Digite sua idade: "));

// ParseInt() -> Converte o valor para um número inteiro
// idade = parseInt(prompt("Digite sua idade: "));

// ParseFloat() -> converte o valor para número decimal/ponto flutuante
// idade = parseInt(prompt("Digite sua idade: "));