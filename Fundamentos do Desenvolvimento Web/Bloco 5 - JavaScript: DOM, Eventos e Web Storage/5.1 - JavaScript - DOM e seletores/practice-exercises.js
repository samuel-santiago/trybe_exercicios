const changeParagraph = () => {
  let paragraphDescription = document.querySelectorAll('.center-content p')[1];
  paragraphDescription.textContent = 'Eu quero aprender DOM';
}
changeParagraph();

const changeColorSquareToGreen = () => {
  let yellowBoard = document.getElementsByClassName('main-content')[0];
  yellowBoard.style.backgroundColor = 'rgb(76,164,109';
}
changeColorSquareToGreen()

const changeColorSquareToWhite = () => {
  let redBoard = document.getElementsByClassName('center-content')[0];
  redBoard.style.backgroundColor = 'white';
}
changeColorSquareToWhite()

const corrigirH1 = () => {
  let h1 = document.getElementsByTagName('h1')[0];
  h1.innerText = "Exercício 5.1 - JavaScript"
}
corrigirH1();


let paragraphs = document.getElementsByTagName('p');

const transformarMaiúsculo = (input) => {
  for (let paragraph of input){
    paragraph.style.textTransform = 'uppercase'
  }
}
transformarMaiúsculo(paragraphs);

//quando a função transformar funciona, fica dando erro no console.
const showParagraphs = (input) => {
  for (let i of input) {
    console.log(i.innerText)
  }
}
showParagraphs(paragraphs);

