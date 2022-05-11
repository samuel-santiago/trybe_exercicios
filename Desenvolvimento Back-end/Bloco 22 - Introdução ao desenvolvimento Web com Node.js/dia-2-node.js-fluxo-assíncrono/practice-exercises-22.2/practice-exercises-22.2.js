const fs = require('fs');

// EX1 
const func = (param1, param2, param3) => {
  const promisse = new Promise((resolve, reject) => {
    if(typeof param1 !== 'number'||typeof param2 !== 'number'|| typeof param3 !== 'number') {
      reject(new Error ('Informe apenas números'));
    }
    const result = (param1 + param2) * param3;
    if (result < 50 ) reject (new Error('Valor muito baixo'));
    resolve(result);
  })
  return promisse;
}

// func(5,2,10).then(result=> console.log('result', result)).catch(e => console.log(e.message));

// EX 2
const gnrateNumber = () => {
  // return Math.floor(Math.random() * 101)
  return Math.floor(Math.random() * 100 + 1)
}

func(gnrateNumber(),gnrateNumber(),gnrateNumber()).then(result=> console.log(result)).catch(error => error.message);

// EX 3
const laland = async () => {
  // const result = await func(gnrateNumber(),gnrateNumber(),gnrateNumber());
  try {
    const result = await func(1,3,10);
    console.log('ex3', result);
  } catch (error) {
    console.error('error', error.message)
  }
}
laland();

// EX 4 (Síncrono)


// const readData = () => {
//   const archiveName = 'simpsons.json';
//   try {
//     const data = fs.readFileSync(archiveName, 'utf8');
//     console.log('ex4', data);
//   }
//   catch (error) {
//     console.error('ex4',error.message);
//   }
// }
// readData();

// Olhar gabarito para ver como proceder no EX 4 //

// EX 4 (Assíncrono)
// const readData = () => {
//   const archiveName = './simpsons.json';
//     fs.promises.readFile(archiveName, 'utf8')
//       .then(response => {
//         const data = JSON.parse(response);
//         data.forEach(element => {
//           console.log(`${element.id} - ${element.name}`);
//         })
//        })
//       .catch(error=> console.log('error', error.message))
// }
// readData()

// Ex 4;
const getCharacterByID = (id) => {
  const promise = new Promise((resolve, reject) => {
    try {
      const charactersResponse =  fs.promises.readFile('simpsons.json', 'utf8');
      const responseArray =  JSON.parse(charactersResponse);
      const response = responseArray.find((element)=> element.id === id );
      if (response) resolve(response);
      reject(new Error('Id não encontrado'));
    } catch (error) { 
      console.log(error.message);
    }
  })
  return promise;
} 

getCharacterByID(5)


// EX 4;


// Ex 5
// file<index + 1>.txt

const readAndWriteManyArch = async () => {
  const stringsList = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  stringsList.map((string, index) => {
    fs.promises.writeFile(`file${index+1}.txt`, string)
  })

  const filesList = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
  const promisesList = await Promise.all(filesList.map((elem) =>fs.readFile(elem, 'utf-8')));
  console.log(promisesList);
  // .then((...variavel) => {
    // const totalLength = 0;
    // variaveis.forEach((file) => console.log('file', file) )
  // } )

}

readAndWriteManyArch();








