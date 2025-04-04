let letras = ["d", "g", "a", "h", "b", "f", "c", "e"];
let numeros = [1,6,5,4,10,8,2,19,3];

letras.sort(); // ordena
console.log(letras);

letras.reverse(); // reverte
console.log(letras);

let novalista = letras.concat(numeros); // concatena
console.log(novalista);


let frutas = ["maca", "banana", "laranja", "uva"];	

console.log(frutas.includes("maca"));

//.every() // todos os elementos possuem uma condição verdadeira
//.some() // algum elemento possui condição verdadeira
//.join(", ") // junta o array em uma string 