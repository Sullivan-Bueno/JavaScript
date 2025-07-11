let saque = 467;

function caixaMenosNotas(valor) {
  const cedulas = [200, 100, 50, 20, 10, 5, 2, 1];
  const resultado = {};

  for (let cedula of cedulas) {
    let quantidade = Math.floor(valor / cedula);
    if (quantidade > 0) {
      resultado[cedula] = quantidade;
      valor = valor % cedula;
    }
  }
  return resultado;
}

const resultado = caixaMenosNotas(saque);

console.log(`Valor: R$${saque}`);
for (let cedula in resultado) {
  console.log(`${resultado[cedula]} nota(s) de R$${cedula}`);
}
