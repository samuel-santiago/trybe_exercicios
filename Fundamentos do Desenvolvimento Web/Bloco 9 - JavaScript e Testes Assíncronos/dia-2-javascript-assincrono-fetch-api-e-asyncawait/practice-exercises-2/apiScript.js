// api.js
document.write('kkk');
// api.js
const body = document.getElementsByTagName('body')[0];

const cryptoContainer = document.getElementById('cryptoContainer');


const API_URL = 'https://api.coincap.io/v2/assets'
// const myObj = {}
const fetchCoins = async () => {
  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => `fudeu: ${error}`);

  // console.log(coins);
  // console.log(coins.data.map((el)=> el.id));
}

fetchCoins();