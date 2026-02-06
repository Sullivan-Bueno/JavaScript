const fs = require("fs");

function lerarquivo(nomearquivo, callback) {
  fs.readFile(nomearquivo, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    callback(data);
  });
}

lerarquivo("./textoExercicio2.txt", (conteudo) => console.log(conteudo));

function teste() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolvida apos 1 segundo");
    }, 1000);
  });
}

teste().then((data) => {
  console.log(data);
});

function encadeamentoPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ola");
    }, 1000);
  });
}

function encadeamentoPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mundo");
    }, 2000);
  });
}

encadeamentoPromise().then((data1) => {
  encadeamentoPromise2().then((data) => {
    console.log(data1, data);
  });
});

const error = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Deu erro");
  }, 1000);
});

error
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const um = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("um 1");
  }, 1000);
});

const dois = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("dois 2");
  }, 2000);
});

const tres = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("tres 3");
  }, 3000);
});

Promise.all([um, dois, tres]).then((values) => {
  console.log(values);
});

function api() {
  const verdadeiro = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    if (verdadeiro) {
      setTimeout(() => {
        resolve("Dados");
      }, 2000);
    } else {
      reject("erro");
    }
  });
}

async function buscarDados() {
  try {
    const data = await api();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

buscarDados();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2);
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3);
  }, 1000);
});

async function callPromise() {
  const data = await Promise.all([promise1, promise2, promise3]);
  console.log(data);
}

callPromise();

