let array = [10, 5, 20, 8, 15, 30];

function secondNumber(array) {
  array.sort((a, b) => {
    return a - b;
  });
  let secondBiggestNumber = array.length - 2;
  return array[secondBiggestNumber];
}
console.log(secondNumber(array));
