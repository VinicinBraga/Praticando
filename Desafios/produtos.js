produto = (numberArray) => {
  let result = 1;
  for (const number of numberArray) {
    result = result * number;
  }
  return result;
};
console.log(produto([1, 4, 7]));
console.log(produto([10, 40, 70]));
console.log(produto([100, 400, 700]));
