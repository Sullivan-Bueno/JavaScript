function investimento(valor, meses) {
  let rendimento = valor + valor * (meses * 0.01);
  // let formatado = rendimento.toFixed(2);
  let formatado = rendimento.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatado;
}

// console.log(investimento(1000, 5));

const despesas = [250, 43, 99.75, 540, 540, 630];

function gerenciarDespesas(despesas) {
  let totalDespesas = 0;
  for (despesa of despesas) {
    totalDespesas += despesa;
  }
  return totalDespesas.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// console.log(gerenciarDespesas(despesas));
const dataAtual = new Date();

function obterMesAtual(data) {
  return data.getMonth() + 1;
}

const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro"
};

// console.log(meses[obterMesAtual(dataAtual)]);
