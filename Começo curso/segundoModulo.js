// Funcoes

// function nome() {instrução} - sintaxe basica 

// function saudacao(nome) {
//   console.log("Ola " + nome + ", bem vindo ao nosso site!");
// }

// nome = "Sullivan";
// saudacao(nome);

function aplicarOperacao(x, operacao) {
  return operacao(x);
}

function dobrar(numero) {
  return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar);
console.log(resultado);