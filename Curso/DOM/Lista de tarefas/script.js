let input = document.getElementById("taskInput");
let ul = document.getElementById("taskList");

function addTask() {
  if (input.value != "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Insira algo no input");
  }
}
