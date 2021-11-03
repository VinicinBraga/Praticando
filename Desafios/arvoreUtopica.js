alturaArvoreUtopica = (ciclos) => {
  let count = 1;

  for (let i = 0; i < ciclos; ) {
    count = count * 2;
    i++;
  
 
    if (i === ciclos) {
      return count;
    }
    count = count + 1;
    i++;
 
  }
  return count;
};
console.log(alturaArvoreUtopica(5));
