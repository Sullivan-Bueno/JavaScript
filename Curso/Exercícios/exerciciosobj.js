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
  let diferençaEmDias = diferençaMilissegundos / (1000 * 60 * 60 * 24);
  console.log(diferençaEmDias);
}

// data("2024-01-01", "2025-01-01");

// Exercicio 5

function data2(dataInformada) {
  let data = new Date(dataInformada);
  let ano = data.getFullYear();
  let mes = data.getMonth() + 1;
  let dia = data.getDate();
  return console.log(`Ano: ${ano}, Mes: ${mes}, Dia: ${dia}`);
}

// data2("2024-10-07");

// Exercicio 6

function idade(datanascimento) {
  let nascimento = new Date(datanascimento);
  let anoAtual = new Date();
  return console.log(
    `A idade é: ${anoAtual.getFullYear() - nascimento.getFullYear()}`
  );
}
// idade("1990-05-15");

// Exercicio 7

function dataformatada(dataparaFormatar) {
  let data3 = new Date(dataparaFormatar);
  let dataUTC3 = `${data3.getDate() + 1}/${
    data3.getMonth() + 1
  }/${data3.getFullYear()}`;
  return console.log(`O ano formatado é: ${dataUTC3}`); // NÃO É UMA DATA - O TIPO DE DADO RETORNADO NÃO É DATE()
}

// dataformatada("2024-10-07");

function formatoBrasileiro(datastring) {
  let data = new Date(datastring + "T00:00:00");

  let dataFormatada = data.toLocaleDateString("pt-BR");
  console.log("Data formatada: " + dataFormatada);
}

formatoBrasileiro("2025-05-15");
