const sneakers = [
  {
    name: "nike",
    price: 120,
  },
  {
    name: "adidas",
    price: 80,
  },
];

const index = 0;
const sneaker = sneakers[index].name;
const priceOnDolar = sneakers[index].price;

const changeCoin = (p) =>
  p.map((user) => {
    user.price *= 4;
    return user.price;
  });

const priceOnReal = changeCoin(sneakers)[index];

console.log(
  `The price of ${sneaker} sneakers is R$${priceOnReal} or ${priceOnDolar}$.`
);
