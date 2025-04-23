// Math e Date

console.log(Math.PI);
console.log(Math.E);

const raizQuadrada = Math.sqrt(4);
console.log(raizQuadrada);

const potencia = Math.pow(2, 3);
console.log(potencia);

let numero = 3.45;
console.log(Math.round(numero));

let aleatorio = Math.random()*10;
console.log(aleatorio.toFixed());

// Math.min - retorna o menor valor dentro de uma lista 
// Math.max - retorna o maior valor dentro de uma lista
// Spread operator ... (espalha informações da lista)

console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.max(1, 2, 3, 4, 5));

// Classe vs Instância 

class Pessoa {
  nome = "Sullivan";
  aniversario = "16/01/2006";
  profissao =  "Auxiliar de sistema";
}

const classePessoa = new Pessoa(); // Inicializei o objeto segundo o modelo - Instância

console.log(classePessoa.aniversario); // Após instanciada, é possivel acessar as propriedades

// Date 

const dataAtual = new Date();
console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth() + 1); // getMonth() - 0 janeiro 11 dezembro
console.log(dataAtual.getDate());
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

console.log(dataAtual);
let timestamp = dataAtual.getTime();
console.log(timestamp);
// timestamp - representação numérica - data referencia 1 de janeiro de 1970
console.log(new Date(1745400762203));