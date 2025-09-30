let array = [20, 14, 234, 56, 4];

function inverterLista(array) {
  array.sort((a, b) => {
    return b - a;
  });
  return array;
}

console.log(inverterLista(array));
