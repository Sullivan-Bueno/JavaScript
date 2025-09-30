let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
  meuElemento.classList.add("circle");
  meuElemento.classList.remove("square");
}

function tornarQuadrado() {
  meuElemento.classList.add("square");
  meuElemento.classList.remove("circle");
}

function alternar() {
  meuElemento.classList.toggle("circle");
  meuElemento.classList.toggle("square");
}

function verificarClasse() {
  let teste = meuElemento.classList.contains("circle");
  console.log(teste);
}
