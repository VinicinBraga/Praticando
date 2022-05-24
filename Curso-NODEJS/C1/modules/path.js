const path = require("path");

//Apenas o nome do aquivo atual
console.log(path.basename(__filename));

//Nome do Diretorio atual
console.log(path.dirname(__filename));

//Extensão do aqrquivo
console.log(path.extname(__filename));

//Criando objeto Path
console.log(path.parse(__filename));

//Acrescentar caminhos aos diretorios
console.log(path.join(__dirname, "teste", "test.html"));
