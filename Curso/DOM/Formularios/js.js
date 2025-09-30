let campoTexto = document.getElementById("campoTexto");

// Evento submit
document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    alert("Formulario enviado");
    event.preventDefault();
    campoTexto.value = "";
  });
});

// Evento change
campoTexto.addEventListener("change", function () {
  console.log("campo de texto foi alterado: " + campoTexto.value);
});

// Evento de focus
campoTexto.addEventListener("focus", function () {
  console.log("campo de texto focado");
});

// Evento de blur
campoTexto.addEventListener("blur", function () {
  console.log("campo de texto desfocado");
});
