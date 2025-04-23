// Exercicio 1

let numero1 = "150.50";
let numero2 = "200px";
let numero3 = "abc";

console.log(Number(numero1).toFixed(2));
console.log(parseInt(numero2));
console.log(parseInt(numero3));

// Exercicio 2

let numero4 = "10";
let numero5 = "20.5";

let soma = Number(numero4) + Number(numero5);
console.log(soma);

// Exercicio 3

let valor1 = 1234.56789;
console.log(valor1.toFixed(2));

// Exercicio 4

let valor2 = 12345.6789;
console.log(valor2.toPrecision(4));

// Exercicio 5

let valor3 = "123abc";
if (isNaN(Number(valor3)) == true) {
  console.log("A entrada não é um número válido.");
}

// Exercicio 6

let valor4 = 1/0;
let valor5 = NaN;

if (isFinite(valor4) == false && isNaN(valor5) == true) {
  console.log("Os valores são Infinity e NaN."); 
}