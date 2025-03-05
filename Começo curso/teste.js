let inicio = 13;
let fim = 130;

function pares(inicio, fim) {
  let j = 0;
  let lista = [];
  for (let i = inicio; i < fim; i++) {
    if (i % 2 == 0) {
      lista[j] = [i];
      j++;
    }
  }
  console.log(lista);
}

pares(inicio, fim);
