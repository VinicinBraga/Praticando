const eletronics = [
  {
    name: "TV",
    cost: 2100,
  },
  {
    name: "smartphone",
    cost: 400,
  },
  {
    name: "headphones",
    cost: 250,
  },
];

function soma(a, b) {
  return a + b.cost;
}

console.log(eletronics.reduce(soma, 100));
