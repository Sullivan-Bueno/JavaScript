const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxicilina", estoque: 80, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 200, preco: 7.8 },
];

const ul = document.getElementById("unordered-list-1");

medicamentos.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `${item.nome} ${item.estoque}`;
  ul.appendChild(li);
});

const ul2 = document.getElementById("unordered-list-2");

medicamentos.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `Medicamento: ${item.nome} R$ ${item.preco}`;
  ul2.appendChild(li);
});
