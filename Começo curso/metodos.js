//  String - sequencia de caracteres

let string = "Olá, mundo!";


console.log(string.toLowerCase());

// slice(start, end);

console.log(string.slice(0, 3)); // numeros negativos vão de tras pra frente

console.log(string.substring(0, 3)); // não aceita indice negativo

string.replace("mundo", "Sullivan");

string.indexOf("mundo"); // indice

// split(delimiter [, limlter]);
let texto = "maça,banana,laranja,uvas"
let frutas = texto.split(",", 3); // (/\s+/)
console.log(frutas);

// splice(inicial, itensARemover) metodo de array