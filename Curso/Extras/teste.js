let inicio = 18;
let fim = 200;

function pares(inicio, fim) {
  let j = 0;
  let lista = [];
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
      lista[j] = [i];
      j++;
    }
  }
  return lista;
}

let resultado = pares(inicio, fim);

console.log(resultado);
