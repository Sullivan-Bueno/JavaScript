document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");
  const resultadoElement = document.getElementById("resultado");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // validação do nome
    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);

    let categoria;

    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      resultadoElement.style.backgroundColor = "#FFF000";
    } else if (imc < 25) {
      categoria = "Normal";
      resultadoElement.style.backgroundColor = "#00FF00";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultadoElement.style.backgroundColor = "#FFA500";
    } else {
      categoria = "Obesidadae";
      resultadoElement.style.backgroundColor = "#FF0000";
    }

    resultadoElement.innerHTML = `<p> ${nome}, seu IMC é ${imc.toFixed(
      2
    )}</p><p>Você está na categoria ${categoria}</p>`;

    document.getElementById("categoria").value = categoria;
    let dados = new FormData(form);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ": " + valor);
    }
  });
});
