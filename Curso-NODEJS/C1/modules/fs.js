const fs = require("fs");
const path = require("path");

//Criar Pasta
/* fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("pasta criada com sucesso");
}); */

//Criar Arquivo
/* fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Pasta e arquivo criados com sucesso");
  }
); */

//Incluindo Conteúdo no arquivo
/* fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  " Hello Everyone!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Conteúdo Incluido no arquivo de texto");
  }
); */

//Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(`Conteudo do arquivo é: ${data}`);
  }
);
