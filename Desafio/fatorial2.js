function fatorial(n) {
  let aux = 1;
  for (let i = 0; i < n; i++) {
    aux += i * aux;
  }
  return aux;
}

console.log(fatorial(8));
