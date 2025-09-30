function calculadoraJurosComposta(
  valorInicial,
  valorMensal,
  taxaDeJurosMensal,
  Meses
) {
  let valorFinal = valorInicial;
  for (let i = 0; i < Meses; i++) {
    valorFinal += (valorFinal * taxaDeJurosMensal) / 100;
    valorFinal += valorMensal;
  }
  return valorFinal;
}

console.log(calculadoraJurosComposta(100, 0, 2, 5));
