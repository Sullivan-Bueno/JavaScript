// Exercicio 1
const Venda = {
  produto: "TV",
  quantidade: 2,
  precoUnitario: 1500,
  desconto: 0.1,
  calcularTotal: function () {
    return this.precoUnitario * this.quantidade * (1 - this.desconto);
  },
  detalharVenda: function () {
    return `Produto: ${this.produto}, 
    Quantidade: ${this.quantidade},
    Preço unitário: ${this.precoUnitario},
    Desconto: ${this.desconto * 100}%,
    Total: ${this.calcularTotal()}`;
  },
};

// console.log(Venda.detalharVenda());

// Exercicio 2

Venda.aplicarDesconto = function (percentual) {
  this.desconto = percentual;
  return this.detalharVenda();
};

// console.log(Venda.aplicarDesconto(0.2));

// Exercício 3

Venda.atualizarQuantidade = function (novaQuantidade) {
  this.quantidade = novaQuantidade;
  return this.detalharVenda();
};

console.log(Venda.atualizarQuantidade(6));

// Exercício 4

Venda.verificarEstoque = function (quantidadeDisponivel) {
  if (this.quantidade <= quantidadeDisponivel) {
    return "Estoque suficiente";
  } else {
    return "Estoque insuficiente";
  }
};

// console.log(Venda.verificarEstoque(10));

// Exercício 5

// console.log(Object.entries(Venda));

// Exercício 6
// 
// console.log(Object.keys(Venda));

// Exercício 7

// console.log(Object.values(Venda));

// Exercício 8

// console.log(Venda.hasOwnProperty("desconto"));

// Exercício 9

const NovaVenda = Object.assign(Venda);
Object.defineProperty(NovaVenda, "produto",{
  value: "caderno",
})
Object.defineProperty(NovaVenda, "quantidade",{
  value: 20,
})

// console.log(NovaVenda);

// Exercício 10

Object.defineProperty(Venda, "data", {
  value: "06/04/2025",
  enumerable: false,
  writable: true,
  configurable: true,
});
// console.log(Venda.data);

// Exercício 11

const DescontoEspecial = Object.create(Venda);
DescontoEspecial.desconto = 0.20;
// console.log(DescontoEspecial.calcularTotal());

// Exercício 12

delete Venda.desconto;
// console.log(Venda);
