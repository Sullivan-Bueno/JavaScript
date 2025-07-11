let string = "radar";

function inverterString(string) {
  let novaString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
  }
  if (novaString === string) {
    return "eh palidromo";
  } else {
    return "nao eh palidromo";
  }
}

console.log(inverterString(string));
