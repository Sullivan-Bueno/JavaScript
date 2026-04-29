const clientes = [
  {
    nome: "Ana",
    enderecos: [
      { cidade: "São Paulo" },
      {
        cidade: "Campinas",
      },
    ],
  },
  { nome: "Pedro", enderecos: [{ cidade: "Rio de Janeiro" }] },
  { nome: "Maria", enderecos: [] },
];

const enderecos2 = clientes
  .filter((cliente) => cliente.enderecos && cliente.enderecos.length > 0)
  .map((clientes) => clientes.enderecos.map((endereco) => endereco.cidade))
  .reduce(
    (acummulator, cidadesCliente) => acummulator.concat(cidadesCliente),
    [],
  );

// 2

const produtos = [
  { nome: "Camiseta", quantidade: 10 },
  { nome: "Calça", quantidade: null },
  { nome: "Tênis", quantidade: 5 },
  { nome: "Jaqueta", quantidade: 0 },
];

const produtosdisponiveis = produtos.filter(
  (produtos) => produtos.quantidade > 0,
);

// 3

const valores = [100, 200, 300, 400, 500];

function somarValores(...valores) {
  const total = valores.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0,
  );
  return total;
}

// console.log(somarValores(...valores));

// 4

const produtos2 = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 150 },
];

function alterar(produtos3) {
  return produtos3.map((produto) => {
    return { nome: produto.nome, preco: produto.preco, emEstoque: true };
  });
}

// console.log(alterar(produtos2));

// 5

const vendas = [
  { vendedor: "Ana", valor: 1000, mes: "Agosto" },
  {
    vendedor: "Pedro",
    valor: 1500,
    mes: "Agosto",
  },
  { vendedor: "Maria", valor: 1200, mes: "Julho" },
];

function calcularValorMedio(vendas) {
  const valoreMedioDeVendas =
    vendas
      .map((obj) => obj.valor)
      .reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) /
    vendas.length;
  return valoreMedioDeVendas;
}

// console.log(calcularValorMedio(vendas));
