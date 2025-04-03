// exercicio 1

let produtos = ["Produto A", "Produto B"];

produtos.push("Produto C");
produtos.shift();

console.log(produtos);

// exercicio 2

let produtos2 = ["Produto A", "Produto B"];
let produtos3 = ["Produto X", "Produto Y"];

produtos3.push("Produto Z");
let produtos4 = produtos2.concat(produtos3);
console.log(produtos4);

// exercicio 3

let estoque = ["Caderno", "Lápis", "Estojo"];

console.log(estoque.includes("Lápis"));
console.log(estoque.includes("Agenda"));

// exercicio 4

let numeros = [2, 5, 8, 1];

let resultadoSome = numeros.some((numero) => numero > 7);
console.log(resultadoSome);

// exercicio 5

let numeros1 = [4, 6, 8, 2];

let resultadoEvery = numeros1.every((numero) => numero > 3);
console.log(resultadoEvery);
