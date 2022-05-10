const readline = require('readline-sync');

const calculateBMI = () => {
  const weight = readline.questionFloat('What is your weight?')
  let height = readline.questionFloat('What is your height?');
  height > 100 ? height = height / 100 : height;
  
  const IMC = weight/ (height * height);
  console.log(IMC.toFixed(2));
}
calculateBMI();