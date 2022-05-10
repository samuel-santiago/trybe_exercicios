const readline = require('readline-sync');

const calculateBMI = () => {
  const weight = readline.questionFloat('What is your weight?')
  let height = readline.questionFloat('What is your height?');
  height > 100 ? height = height / 100 : height;
  
  const IMC = weight/ (height ** 2);

  printBMI_rating(IMC);
}

const printBMI_rating = (IMC) => {
  switch (true) {
    case IMC <= 18.5:
      console.log('UnderWeight');
      break;
    case IMC >= 18.5 && IMC < 25:
      console.log('Fit');
      break;
    case IMC >= 25 && IMC < 30:
      console.log('Overweight')
      break;
    case IMC >= 30 && IMC < 35:
      console.log('Obesity I');
      break;
    case 35 <= IMC <= 39.9:
      console.log('Obesity II');
      break;
    case IMC >= 40:
      console.log('Obesity IV & V');
      break;
    default:
      break;
  }
} 
calculateBMI();