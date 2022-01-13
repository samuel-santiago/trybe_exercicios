const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = '://api.chucknorris.io/jokes/random?category=dev';

  await fetch(url)
    .then((response) => response.json() )
    .then((data) => console.log(data.value))
    .catch((xablau) => console.log(`deu merda:( \n ${xablau}`));

}

fetchJoke();

