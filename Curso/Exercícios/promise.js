// const minhaPromise = new Promise((resolve, reject) => {
//   let sucesso = false;
//   if (sucesso) {
//     resolve("Operacao bem sucedida");
//   } else {
//     reject("Operacao nao concluida");
//   }
// });

function minhaoperacaoAssicrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random() > 0.5;
      if (sucesso) {
        resolve("operacao concluida");
      } else {
        reject("operacao nao concluida");
      }
    }, 2000);
  });
}
minhaoperacaoAssicrona()
  .then((resultado) => {
    console.log({ resultado: resultado, message: "deu certo" });
  })
  .catch((erro) => {
    console.log({ erro: erro, message: "deu errado" });
  });
