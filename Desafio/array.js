let numeros = [2, 15, 8, 23, 4, 16];

function maiorQueDez(array) {
  let numerosMaioresQueDez = array.filter((numero) => {
    return numero > 10;
  });
  return numerosMaioresQueDez.length;
}

console.log(maiorQueDez(numeros));
