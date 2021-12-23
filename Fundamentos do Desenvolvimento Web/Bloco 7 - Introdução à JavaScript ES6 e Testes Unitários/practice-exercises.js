// Parte I
// EX1
// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

      // function testingScope(escopo) {
      //   if (escopo === true) {
      //     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      //     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      //     console.log(ifScope);
      //   } else {
      //     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      //     console.log(elseScope);
      //   }
      //   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      // }

      // testingScope(true);

      const testingScope = (escopo) => {
        if (escopo === true) {
          let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
          ifScope = `ifScope ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
          let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
          console.log(elseScope);
        }
        console.log(`${ifScope}  o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
      }

      // testingScope(true);

// EX2
//  Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


// Seu código aqui.
//criar array "RESULT";
//criar laço que itera sobre o array dado até que o tamanho de "RESULT" seja igual ao array dado de parâmetro.
// criar outro sublaço que itera sobre os mesmos elementos do array;
//SE o elemento[i] for menor/igual a todos os elementos[j], então adicionar elemento[i] em "RESULT";
//SENÃO, passa para frente;
//retornar array "RESULT";

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderArray = (array) => {
  oddsAndEvens.sort((a,b) => a-b);
//   let result = [];
  
//   for (let i = 0; i < array.length && result.length <= array.length; i += 1 ) {
//     for (let j = i + 1; j < array.length; j += 1 ){
//       let smallest = array[i];
//       if (smallest >= array[j] ) {
//         result.push(array[i])
//       }
//       else {
//         result.push(array[j])
//       }
//     }
//   }
// console.log(result);
// }
  return oddsAndEvens;
}
console.log(` os números ${orderArray(oddsAndEvens)} estao ordenados`);
// console.log(oddsAndEvens); // será necessário alterar essa linha 😉