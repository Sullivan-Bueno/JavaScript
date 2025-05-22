function fibonacci(p) {
  if (p == 1) {
    return 0;
  } else if (p == 2) {
    return 1;
  }
  return fibonacci(p - 1) + fibonacci(p - 2);
}

console.log(fibonacci(5));


