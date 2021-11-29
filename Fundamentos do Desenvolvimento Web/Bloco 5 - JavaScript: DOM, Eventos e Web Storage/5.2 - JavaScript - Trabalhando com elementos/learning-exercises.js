// PARTE 1
// Acesse o elemento elementoOndeVoceEsta .
const ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeVoceEsta.parentNode.style.color = "blue";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
ondeVoceEsta.firstElementChild.innerHTML = "OK";

// Acesse o primeiroFilho a partir de pai .
const pai = document.querySelector('#pai');
pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
ondeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
ondeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
ondeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
pai.children[2];

// PARTE 2
//Crie um irmão para elementoOndeVoceEsta .
const siblingOndeVoceEsta = document.createElement('section');
siblingOndeVoceEsta.id = "siblingOndeVoceEsta";
pai.appendChild(siblingOndeVoceEsta);
console.log(pai);
// Crie um filho para elementoOndeVoceEsta .
const childOndeVoceEsta = document.createElement('section');
childOndeVoceEsta.id = "childOndeVoceEsta";
ondeVoceEsta.appendChild(childOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho .
const childPrimeiroFilhoDoFilho = document.createElement('section');
childPrimeiroFilhoDoFilho.id = "childPrimeiroFilhoDoFilho";
pai.children[1].children[0].appendChild(childPrimeiroFilhoDoFilho);


// A partir desse filho criado, acesse terceiroFilho
childPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
