let numero = 6;

function ehPrimo(n) {
  let divisores = 0;

  for (let i = 1; 1 <= n; i++) {
    if (n % i === 0) {
      divisores++;
    }
  }

  if (divisores === 2) {
    console.log("Eh primo");
  } else {
    console.log("Nao eh primo");
  }
}

ehPrimo(numero);
