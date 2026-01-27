function padovan(n) {
  if (n == 0 || n < 3) {
    return 1;
  } else {
    return padovan(n - 2) + padovan(n - 3);
  }
}

console.log(padovan(15))