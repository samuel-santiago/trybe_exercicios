// Exercício 2: Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
// DICA: Lembre-se de adicionar o script de test no package.json e de instalar as dependências.


// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number.
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

const verifyNumber = (number) => {
  if(typeof number !== 'number') throw new Error('Não é número')
  try {
    if (number > 0 ) return 'positivo';
    else if (number === 0 ) return 'neutro';
    return 'negativo';
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = verifyNumber;