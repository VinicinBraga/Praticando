//var - O var aceita ser 'redeclarado' quantas vezes precisarmos. E seu valor será sempre a ultima declaração.
//let - Pode ser alterado, porem ele respeita o limite do bloco(funcao, condicional, loops) onde foi declarado.
//const - O prorpio nom define como Constante, ou seja, não pode ser redeclarado.

//Exemplos
//var
var nome = "Vini";

if (1 + 1 === 2) {
  var nome = "Vinicius"; //Retorna 'Vinicius' pois é redeclarado
}

console.log(nome);

var nome = "Vini";

if (1 + 1 === 2) {
  nome = "Vinicius";
}

console.log(nome); //Retorna 'Vinicius' pois é redeclarado

//let
var nome = "Vini";

if (1 + 1 === 2) {
  let nome = "Vinicius";
}

console.log(nome); // Retorna 'Vini' pois o o let esta dentro de um bloco e respeita o escopo.
