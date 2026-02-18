function sum(...parcels) {
  return parcels.reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(sum(1, 2, 3));
