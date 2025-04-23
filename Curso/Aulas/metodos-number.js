let inteiro = 42;
let numeroPontoFlutuante = 3.4567;

// Verifica se o numero é inteiro - retorna booleano
console.log(Number.isInteger(inteiro));
console.log(Number.isInteger(numeroPontoFlutuante));

// Formata de acordo com as casas decimais
console.log(numeroPontoFlutuante.toFixed(1));

// Formatar número precisão específica
console.log(numeroPontoFlutuante.toPrecision(4));
console.log(inteiro.toPrecision(1));
console.log(inteiro.toPrecision(2));
console.log(inteiro.toPrecision(3));

//Converter o valor (geralmente string) para um numero
let inteirostring = "42";
let string = "42.65132"
console.log(Number.parseFloat(string));
console.log(Number.parseFloat(inteirostring));

//Inteiro para string
let numero = 42;
console.log(String(numero));
console.log(numero.toString(2)); // base binaria

