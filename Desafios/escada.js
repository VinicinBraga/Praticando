escada = (altura) => {
  let resultado = []; //onde vou inserir meu resultado

  for (let i = 1; i <= altura; i++) {
    let floor = "";

    for (let s = 1; s <= altura - i; s++) {
      floor = floor + " ";
    }
    for (let d = 1; d <= i; d++) {
      floor = floor + "#";
    }
    resultado.push(floor);
  }

  return resultado;
};
const stairs = escada(10);

for (const nivel of stairs) {
  console.log(nivel);
}
