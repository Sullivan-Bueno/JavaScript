// const titulo = document.getElementsByTagName("h2");
// console.log("Selecionando por tag: ", titulo);

// const classeDOM = document.getElementsByClassName("texto-lista");
// console.log("Selecionando por classe: ", classeDOM);

// const destacado = document.getElementById("destacado");
// console.log("Selecionando por ID: ", destacado);

// const destacadoSelector = document.querySelector("#destacado");
// console.log("Selecionando ID por seletor CSS: ", destacadoSelector);

// const all = document.querySelectorAll(".texto-lista");
// console.log("Selecionando multiplos elementos por seletor CSS: ", all);

// const inputName = document.getElementsByName("username");
// console.log("Selecionando por atributo name (username): ", inputName);

// const allElements = document.querySelectorAll("*");
// console.log("Selecionando todos os elementos: ", allElements);

function criarElemento() {
  const ul = document.getElementById("lista-de-elementos");

  const novaLi = document.createElement("li");

  const novoInput = document.createElement("input");
  ul.appendChild(novaLi);
  novaLi.appendChild(novoInput);
}
