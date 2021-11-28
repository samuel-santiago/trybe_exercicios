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


// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .