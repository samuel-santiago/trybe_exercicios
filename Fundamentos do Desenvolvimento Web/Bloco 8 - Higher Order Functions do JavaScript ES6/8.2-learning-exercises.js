const lista = [
  'jazz',
  'mel',
  'Fep',
  'Gumercindo',
  'samuel',
  'Rafael',
  'GeroNimo',
  'JawIlton'
]

const bigLetter = (item ) => {
  return item.toUpperCase();
}

const smallLetter = (item) => {
  return item.toLowerCase()
}

lista.forEach((elemento, index, array) => {
  elemento.length >= 4 ? array[index] = bigLetter(elemento): array[index] = smallLetter(elemento);
})
console.log(lista);

// #####################################################################

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (number) => {
  console.log(`${number} * 2 = ${number * 2}`)
} 
multipliesFor2()

numbers.forEach((element)=>{
  multipliesFor2(element);
})


// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((elemento)=> {
  showEmailList(elemento);
})


const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const isEven = (number) => {
  return number % 2 === 0;
}
console.log(isEven(10));

const isBigger21 = (number) => {

  return number > 21;
}

console.log(numbers2.find(isEven));
console.log(numbers2.sort((a,b)=> a-b).find(isBigger21));

// #################################################################


// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers3 = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  return (number % 5 === 0 && number % 3 === 0)
}

console.log(numbers3.find(findDivisibleBy3And5));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => {
  return name.length === 5;
}

console.log(names.find(findNameWithFiveLetters));
