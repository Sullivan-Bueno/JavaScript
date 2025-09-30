const number = [60, 58, 65, 65, 59, 54, 63, 49, 49, 51, 49, 51, 67, 63, 68];
let total = 0;

for (let i = 0; i < number.length; i++) {
   let quadrado = (number[i] - 58.06) * (number[i] - 58.06);
  total += quadrado;
  console.log(total);
}
