alturaArvoreUtopica = (ciclos) => {
  let count = 1;

  for (let i = 0; i < ciclos; ) {
    console.log(`i -> ${i}`);
    count = count * 2;
    console.log(`count -> ${count}`);
    i++;
    console.log(`new i -> ${i}`);
    console.log(`  `);
    if (i === ciclos) {
      return count;
    }
    count = count + 1;
    i++;
    console.log(`2 new count -> ${count}`);
    console.log(`2 new i  -> ${i}`);
    console.log(`  `);
  }
  return count;
};
console.log(alturaArvoreUtopica(5));
