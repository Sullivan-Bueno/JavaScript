// Exercicio 1

function verificaDesconto(venda) {
  if (venda >= 100) {
    desconto = 0.1;
    console.log(`Voce tem direito a ${desconto * 100}% de desconto`);
  } else {
    console.log(`Voce não tem desconto`);
  }
}

verificaDesconto(99);

// Exercicio 2

function verificaEstoque(produto) {
  if (produto > 0) {
    console.log(`Produto disponivel ${produto}`);
  } else {
    console.log(`Produto indisponivel`);
  }
}

verificaEstoque(0);

// Exercicio 3

function categoriaCliente(cliente) {
  if (cliente < 50) {
    console.log("Cliente comum");
  } else if (cliente < 85) {
    console.log("Cliente regular");
  } else {
    console.log("Cliente premium");
  }
}

categoriaCliente(50);

// Exercicio 4
const meta = 100000;

function desempenhoIndividualDeVenda(venda) {
  if (venda < (61 * meta) / 100) {
    console.log("Insatisfatorio");
  } else if (venda < (80 * meta) / 100) {
    console.log("Satisfatorio");
  } else if (venda < (90 * meta) / 100) {
    console.log("Bom desempenho");
  } else if (venda < (100 * meta) / 100) {
    console.log("Otimo desempenho");
  } else {
    console.log("Excelente");
  }
}

desempenhoIndividualDeVenda(101000);

// Exercicio 5

function verificarVelocidade(velocidade) {
  80 >= velocidade ? console.log("true") : console.log("false");
}

verificarVelocidade(80);

// Exercicio 6
function mensagemSemaforo(cor) {
  const mensagem =
    cor === "vermelho"
      ? "Pare"
      : cor === "amarelo"
      ? "reduza"
      : cor === "verde"
      ? "Continue"
      : "sei la";
  return mensagem;
}

console.log(mensagemSemaforo("verde"));

// Exercicio 7

function coresSemaforo(cor) {
  let mensagem;
  switch (cor) {
    case "vermelho":
      mensagem = "pare";
      break;
    case "verde":
      mensagem = "continue";
      break;
    case "amarelo":
      mensagem = "reduza";
      break;
    default:
      mensagem = "q cor q eh essa ai q eu n conheco";
  }
  return mensagem;
}

console.log(coresSemaforo("amarelo"));

// exercicio 8


