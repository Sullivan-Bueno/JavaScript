// Resolução exercicio 1

const media = function media(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / media.length;
  
}

console.log(`A média desse aluno é ${media(8, 5, 9)}`);

// Resolução exercicio 2

const media_final = function media_final(nota1, nota2, nota3) {
  const mediaDasNotas = (nota1, nota2, nota3) / 3;
  return mediaDasNotas
}

function notafinal(nota1, nota2, nota3, notapf) {
  const mediasempf = media(nota1, nota2, nota3);
  const mediafinal = (mediasempf + notapf) / 2;
  console.log(`a media final do aluno é ${mediafinal}`)
}

notafinal(8, 5, 9, 8);

// Resolução exercicio 3

const farenheit = function farenheit(celsius) {
  return (celsius * 1.8 + 32);
}

console.log(`A temperatura correspondente em Farenheit é de ${farenheit(35)}`);

// Resolução exercicio 4

const imposto = function imposto(valor) {
  return ((valor/100) * 8.875 + valor);
}

console.log(`O valor a ser pago é ${imposto(150)}`);