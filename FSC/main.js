// Map

const numbers = [1, 2, 3, 4, 5];

const numbersx2 = numbers.map((numbers) => {
  return numbers * 2;
});

console.log(numbersx2);

// Filter

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter((ages) => {
  return ages % 2 === 0;
});

console.log(evenAges);

// Reduce

const sumOfAges = ages.reduce(function (ages, accumulator) {
  return accumulator + ages;
}, 0);

console.log(sumOfAges);
