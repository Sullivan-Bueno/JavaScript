const produto = {
  nome: "laptop",
  preco: 5000,
  disponibilidade: true,
};

console.log(Object.keys(produto)); // chave em uma lista
console.log(Object.values(produto)); // valores em uma lista
console.log(Object.entries(produto)); // listas contendo chave e valor

Object.assign(produto, { emEstoque: 10, categoria: "Eletronicos" }); // adiciona chave e valor
console.log(produto);

Object.defineProperty(produto, "disponibilidade", { value: false }); // altera propriedade do objeto
console.log(produto);

const pessoa = {
  nome: "Carlos",
  idade: 30,
};

const trabalho = {
  profissao: "Desenvolvedor",
  cidade: "Águas de Lindóia",
};

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // junção de propriedades de dois objetos
Object.defineProperty(funcionario, "salario", {
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true,
});
console.log(funcionario);

delete funcionario.salario;
console.log(funcionario);