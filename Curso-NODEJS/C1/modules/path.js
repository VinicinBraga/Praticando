const path = require("path");

//Apenas o nome do aquivo atual
console.log(path.basename(__filename)); //retorna -> path.js

//Nome do Diretorio atual
console.log(path.dirname(__filename)); //retorna -> /home/vinicin/MyRepository/Revisão & Estudo/Praticando/Curso-NODEJS/C1/modules

//Extensão do aqrquivo
console.log(path.extname(__filename)); //retorna -> .js

//Criando objeto Path
console.log(path.parse(__filename));
/*retorna -> {
  root: '/',
  dir: '/home/vinicin/MyRepository/Revisão & Estudo/Praticando/Curso-NODEJS/C1/modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}*/

//Acrescentar caminhos aos diretorios
console.log(path.join(__dirname, "teste", "test.html")); //retorna -> /home/vinicin/MyRepository/Revisão & Estudo/Praticando/Curso-NODEJS/C1/modules/teste/test.html
