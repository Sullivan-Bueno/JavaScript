document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("forms");

  formulario.addEventListener("submit", function (event) {
    if (!validate()) {
      event.preventDefault();
    }

    if (!comparePasswords()) {
      event.preventDefault();
    }
  });

  function validate() {
    let input = document.querySelectorAll(".obrigatorio");
    let camposValidos = true;

    for (let i = 0; i < input.length; i++) {
      if (input[i].value === "" || input[i].value === null) {
        showError(input[i], "Campo obrigatorio");
        camposValidos = false;
      } else {
        resetInput(input[i]);
      }
    }
    return camposValidos;
  }

  function comparePasswords() {
    const firstPassword = document.getElementById("password");
    const secondPassword = document.getElementById("repeatPassword");

    if (firstPassword.value !== secondPassword.value) {
      showError(secondPassword, "As senhas nao coincidem");
      return false;
    }
    return true;
  }

  function showError(elemento, message) {
    let errorMessage = elemento.parentElement.querySelector(".error-message");
    errorMessage.textContent = message;
    errorMessage.style.display = "inline-block";
  }

  function resetInput(elemento) {
    let errorMessage = elemento.parentElement.querySelector(".error-message");
    errorMessage.style.display = "none";
  }
});
