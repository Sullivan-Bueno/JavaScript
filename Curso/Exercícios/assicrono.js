// // setTimeout(func callback, tempo);
// // setInterval(func callback, tempo);

function tarefaAssicrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Tarefa Assíncrona concluída!");
      resolve("Resultado da tarefa");
    }, 5000);
  });
}

console.log("Iniciando a tarefa assíncrona...");

tarefaAssicrona((resultado) => {
  console.log(resultado);
});

console.log("fim da execução do código");

