// Exercicio 1

function decimal(num) {
  console.log(Math.floor(num));
  console.log(Math.ceil(num));
  return console.log(Math.round(num));
}

// decimal(7.89)

// Exercicio 2

function minemax(lista) {
  console.log(`O valor mínimo é ${Math.min(...lista)}`);
  return console.log(`O valor máximo é ${Math.max(...lista)}`);
}
let array = [10, 5, 20, 40, 1, 7];
// minemax(array);

// Exercicio 3

function random(min, max) {
  console.log(Math.random());
  console.log(Math.random() * 100);
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return console.log(
    Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  );
}

// random(50, 60)

// Exercicio 4

function data(data1, data2) {
  let diferençaMilissegundos = new Date(data2) - new Date(data1);
  let diferençaEmDias = diferençaMilissegundos / (1000 * 60 * 60 * 24)
  console.log(diferençaEmDias)
}

data("2024-01-01", "2025-01-01");