document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const peso1 = document.getElementById("peso").value;

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    let dados = new FormData(formulario);
    let pessoa = { nome: "Sullivan" };
    const nome = dados.get("nome");
    const altura = dados.get("altura");
    const peso = dados.get("peso");
    const imc = peso / (altura * altura);

    console.log(imc);
  });
});
