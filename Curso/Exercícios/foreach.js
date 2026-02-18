const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];

// Exercicio 1
function primeiroExercicio(array) {
  array.forEach((item) => {
    console.log(item.destino, item.preco);
  });
}

// Exercicio 2

function segundoExercicio(array) {
  array.forEach((item) => {
    console.log(item.destino, item.vagasDisponiveis);
  });
}

// Exercicio 3

let contador = 0;
let destinosDisponiveis = [];

function terceiroExercicio(array) {
  array.forEach((item) => {
    if (item.vagasDisponiveis == true) {
      contador += 1;
      destinosDisponiveis.push(item);
    }
  });
  console.log(destinosDisponiveis, contador);
}


