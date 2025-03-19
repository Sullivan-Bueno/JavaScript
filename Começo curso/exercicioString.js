// exercicio 1

let ex = "javascript eh divertido";
console.log(ex.replace("javascript", "javascript".toUpperCase()));

// exercicio 2

let ex1 = "Aprendendo Javascript";
console.log(ex1.substring(0, 10).toLowerCase());

// exercicio 3

let frase = "Aprendendo Python";
let palavraExtrair = frase.slice(!1);
let fraseNova = frase.replace(palavraExtrair, "Javascript");
console.log(fraseNova);

// exercicio 4

let string4 = "cadeira, mesa, sofá, armário";
let string5 = string4.split(", ", 4);
string5.splice(string5.indexOf("sofá"), 1);
console.log(string5);
