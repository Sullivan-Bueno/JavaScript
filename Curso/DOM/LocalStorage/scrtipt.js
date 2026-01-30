document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const limpar = document.getElementById("limpar");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //Capturar dados
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    // Verifica se os campos estão preenchidos
    if (nome && idade) {
      // Salvo no localStorage
      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);

      document.getElementById("nome").value = "";
      document.getElementById("idade").value = "";
    }
  });
  limpar.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("idade");
  });
});
