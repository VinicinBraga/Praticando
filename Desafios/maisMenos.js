array = [1, 2, 0, -1];

maisMenos = (numberArray) => {
  let positives = 0;
  let zeros = 0;
  let negatives = 0;
  for (const number of numberArray) {
    if (number > 0) {
      positives++;
    } else if (number === 0) {
      zeros++;
    } else {
      negatives++;
    }
  }
  total = numberArray.length;
  return [positives / total, zeros / total, negatives / total];
};
console.log(maisMenos(array));
