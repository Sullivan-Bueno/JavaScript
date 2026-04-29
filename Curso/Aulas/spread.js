const objectA = {
  id: 0,
  name: "Sullivan",
  lastName: "Bueno",
};

const listA = [10, 2, 3, 3465, 123, 67];

const listB = [...listA];
listB[2] = 39932;
console.log(listA, listB);
