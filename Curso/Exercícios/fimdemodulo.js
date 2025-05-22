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

let numeros = [10, 5, 20, 15, 20, 20, 20];

function media(array) {
  let soma = array.reduce(function (soma, i) {
    return soma + i;
  });
  return soma / array.length;
}

// console.log(media(numeros));

function palindromo(palavra) {
  let palavra2 = "";
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavra2 += palavra[i];
  }
  if (palavra === palavra2) {
    return "é um palíndromo";
  } else {
    return "não é um palíndromo";
  }
}

// console.log(palindromo("cachorro"));

function primo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return "Não é numero primo";
    } else {
      return "É um numero primo";
    }
  }
}

// console.log(primo(31));

function quantasPalavras(frase) {
  let arrayFrase = frase.split(" ");
  return arrayFrase.length;
}

// console.log(quantasPalavras("Olá, tudo bem?"));

function distancia(p1, p2) {
  if (p1 < p2) {
    return "Pessoa um está mais próxima";
  } else if (p2 < p1) {
    return "Pessoa dois está mais próxima";
  } else {
    return "Estão na mesma distância";
  }
}

// console.log(distancia(30, 30));

let despesas = [150, 80, 200, 60, 120];

function altoGasto(despesas) {
  let array = [];
  for (let despesa of despesas) {
    if (despesa < 100) {
      array.push("Gasto controlado");
    } else {
      array.push("Alto gasto");
    }
  }
  return array;
}

// console.log(altoGasto(despesas));

const investimentos = [5000, 2000, 15000];
const nome = "Sullivan";

function investimento(valor, nome) {
  valor.sort(function (a, b) {
    return a - b;
  }); // Ordena os valores do menor pro maior
  let investimentoFinal = [];
  for (let investimento in valor) {
    investimentoFinal.push({
      investimento: valor[investimento],
      nome: nome,
    });
  }
  return investimentoFinal;
}

// console.log(investimento(investimentos, nome));

function codificar(frase) {
  let fraseNova = frase.toLowerCase();
  let palavraCodificada = "";
  const result = {
    a: "1",
    á: "1",
    à: "1",
    e: "2",
    é: "2",
    è: "2",
    i: "3",
    í: "3",
    ì: "3",
    o: "4",
    ó: "4",
    ò: "4",
    u: "5",
    ú: "5",
    ù: "5",
  }; // Tentativa de evitar uso de IF ELSE
  for (let letra of fraseNova) {
    if (letra in result) {
      palavraCodificada += result[letra];
    } else {
      palavraCodificada += letra;
    }
  }
  return palavraCodificada;
}

// console.log(codificar("A casa e o sol"));
