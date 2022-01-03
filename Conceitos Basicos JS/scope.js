// Escopo
//O escopo define onde as variaveis estarão disponiveis(possam ser acessadas)
//Pois não é interessante que as variaveis possam ser acessadas por qualquer parte do codigo, possibilitando inclusive uma "Namespace Collision"
//É mportante que variaveis cridas dentro de uma função não possoam ser acessadas - Como no exemplo:

let nome = "Renata";
console.log(nome);
//nome e console.log estão no escopo global

//Scope Chain
//Quando declaramos as variaveis em um escopo, todos os escopos internos conseguem acessá-la

const returnName = () => {
  return nome;
};
console.log(returnName()); //Nao existe variavel (nome) na função, mas ela busca a variavel do escopo acima como esperado.
//Essa busca por uma variavel acima termina quando atinge o escopo global.
