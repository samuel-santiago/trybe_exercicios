// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async() => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const jokeContainer = document.querySelector('#jokeContainer');
  console.log(jokeContainer);
  await fetch(API_URL, myObject)
  .then((response) =>  response.json())
  .then((data)=> jokeContainer.innerHTML = data.joke);

};

window.onload = () => fetchJoke();