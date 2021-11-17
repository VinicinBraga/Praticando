let n1 = 10;
let n2 = 2;

const calc = (valor1, operador, valor2) => {
  const somar = () => {
    return valor1 + valor2;
  };
  const subtrair = () => {
    return valor1 - valor2;
  };
  const multiplicar = () => {
    return valor1 * valor2;
  };
  const dividir = () => {
    return valor1 / valor2;
  };

  if (operador === "+") return somar();
  if (operador === "-") return subtrair();
  if (operador === "*") return multiplicar();
  if (operador === "/") return dividir();
};

let resultado = calc(n1, "+", n2);
console.log(`O resultado da soma é ${resultado}`);

resultado = calc(n1, "-", n2);
console.log(`O resultado da subtração é ${resultado}`);

resultado = calc(n1, "*", n2);
console.log(`O resultado da multiplicação é ${resultado}`);

resultado = calc(n1, "/", n2);
console.log(`O resultado da divisão é ${resultado}`);
