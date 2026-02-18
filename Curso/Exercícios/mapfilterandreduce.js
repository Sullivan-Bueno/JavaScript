// const salario = [3000, 4500, 5000, 6000, 7500];

// const reajuste = salario.map((salario) => {
//   return salario + (salario * 10) / 100;
// });

// console.log(reajuste);

// const precos = [50, 100, 150, 200, 250];

// const precosReajustados = precos.map((precos) => {
//   return precos + precos * 0.05;
// });

// console.log(precosReajustados);

// const funcionarios = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

// let funcionariosComId = funcionarios.map((funcionario) => {
//   return { id: funcionarios.indexOf(funcionario), nome: funcionario };
// });

// console.log(funcionariosComId);

// const imoveis = [
//   {
//     id: 1,
//     tipo: "Apartamento",
//     valor: 400000,
//     disponivel: true,
//     bairro: "Centro",
//   },
//   {
//     id: 2,
//     tipo: "Casa",
//     valor: 550000,
//     disponivel: false,
//     bairro: "Subúrbio",
//   },
//   {
//     id: 3,
//     tipo: "Cobertura",
//     valor: 900000,
//     disponivel: true,
//     bairro: "Centro",
//   },
//   {
//     id: 4,
//     tipo: "Apartamento",
//     valor: 300000,
//     disponivel: false,
//     bairro: "Zona Sul",
//   },
//   { id: 5, tipo: "Casa", valor: 700000, disponivel: true, bairro: "Centro" },
// ];

// const disponiveis = imoveis.filter((imoveis) => {
//   return imoveis.disponivel == false;
// });

// console.log(disponiveis);

// const acima500mil = imoveis.filter((imoveis) => {
//   return imoveis.valor > 500000;
// });

// console.log(acima500mil);

// const faturamento = [
//   { id: 1, valor: 1500 },
//   { id: 2, valor: 2300 },
//   { id: 3, valor: 3200 },
//   { id: 4, valor: 4100 },
//   { id: 5, valor: 1800 },
// ];

// const total = faturamento.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.valor,
//   0,
// );

// console.log(total);

const objs = [
  { cliente: "João", pontuacao: 4 },
  { cliente: "Maria", pontuacao: 5 },
  {
    cliente: "Pedro",
    pontuacao: 3,
  },
  { cliente: "Ana", pontuacao: 4 },
  { cliente: "Lucas", pontuacao: 5 },
];

const result =
  objs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.pontuacao,
    0,
  ) / objs.length;

