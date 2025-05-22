function somar(n1, n2) {
  return n1 + n2;
}

// console.log(somar(1, 2));

nomes1 = ["Elias", "Ana", "Beatriz", "Carlos"];

function nomes(nomes) {
  return nomes.sort();
}

// console.log(nomes(nomes1));

function truthy(v1, v2) {
  let boleano = Boolean(v1 && v2);
  return boleano;
}

// console.log(truthy(0, "texto"));

function rendimento(v1, v2) {
  return v1 * (v2 / 100);
}

// console.log(rendimento(1000, 5));

function separar(frase) {
  return frase.split(" ");
}

// console.log(separar("Olá Mundo do JavaScript"));

function vitorias(v1, v2) {
  return v1 * 3 + v2;
}

// console.log(vitorias(5, 2));

function contarVogais(frase) {
  let vogais = "aeiouáéíóúãâêîôû";
  let contador = 0;
  for (let index = 0; index < frase.length; index++) {
    const letra = frase[index].toLowerCase();
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// console.log(contarVogais("Olá Mundo!"));
let gastos = [10, 5, 20, 15, 20, 20, 20];

function gastosmaior(gastos) {
  gastos.sort(function (a, b) {
    return b - a;
  });

  let contador = 0;

  for (let i = 0; i < gastos.length; i++) {
    if (gastos[i] === gastos[0]) {
      contador++;
    }
  }
  return contador;
}

// console.log(gastosmaior(gastos));

