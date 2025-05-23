/* Requisito 1: Simulação de Investimento
❖ Crie uma função que simule o rendimento de um investimento com base em um valor
inicial, uma taxa mensal de rendimento e um período de meses.
❖ A função deve retornar o saldo final após o período especificado, com duas casas
decimais. */

function investimento(valor, meses, taxa) {
  let aux = valor;
  for (let i = 0; i < meses; i++) {
    aux += aux * taxa;
  }
  let formatado = aux.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatado;
}

let saldoInvestimento = investimento(1000, 5, 0.01);

/* Requisito 2: Gerenciamento de Despesas
❖ Crie uma função que receba um objeto representando as despesas mensais em
diferentes categorias.
❖ A função deve calcular e retornar o total de despesas. */

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

let totalDespesas = gerenciarDespesas(despesas);

/* Requisito 3: Obtenção do Mês Atual
❖ Crie uma função que retorne o nome do mês atual em formato string.
❖ A função deve utilizar um array de nomes dos meses para identificar o mês atual. */

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
  12: "Dezembro",
};

let data = meses[obterMesAtual(dataAtual)];

/* Requisito 4: Geração de Relatório Financeiro
❖ Crie uma função que gere um relatório financeiro com base no investimento inicial, taxa
de rendimento, duração do investimento, despesas mensais, meta de investimento e
meta de orçamento.
❖ O relatório deve incluir:
■ O mês atual.
■ O saldo final do investimento.
■ O total de despesas.
■ Uma mensagem de economia ou excedente em relação ao orçamento.
■ Uma verificação se a meta de investimento foi atingida.
■ Um resumo das despesas por categoria.
 */

function gerarRelatorio() {
  console.log(`O mês atual é: ${data}`);
  console.log(`O saldo final do investimento é: R$ ${saldoInvestimento}`);
  console.log(`O total de despesas é: ${totalDespesas}`);
}

gerarRelatorio();
