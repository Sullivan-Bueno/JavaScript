let string = "programar";

function inverterString(string) {
  let novaString = "";
  for (let i = string.length -1; i >= 0; i--) {
    novaString += string[i];
  }
  return novaString;
}

console.log(inverterString(string));
