const batata = require('readline-sync');
// console.log(batata);

const name = batata.question('QUal o seu nome? ');
const age = batata.questionInt('Qual a sua idade?');
console.log('Olá ',name,"!");
age > 30 ? console.log('tá véinho heim!'): console.log('tá tchutchuco');

