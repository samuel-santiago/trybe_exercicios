// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).



// REF https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const dragonDamage = () => Math.random() * (dragon.strength - 15)  + 15;

const warriorDamage = () => Math.random() * ((battleMembers.warrior.strength*2) - battleMembers.warrior.strength)  + battleMembers.warrior.strength;

const mageDamage = (callbackDamage, callbackMana) => ({
  damage: callbackDamage(),
  mana: callbackMana()
});
    
const chkMageDamage = () => Math.round(Math.random()*(mage.intelligence * 2 - mage.intelligence) + mage.intelligence);

const notEnoughMana = () => battleMembers.mage.mana < 15 || battleMembers.mage.mana === 'Não possui mana suficiente';

const statusMana = () => notEnoughMana() ? battleMembers.mage.mana = 'Não possui mana suficiente' : battleMembers.mage.mana -= 15;

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.


// Parte II

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .


// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

const warriorTurns = (callback) => {
  warrior.damage = callback();
  dragon.healthPoints -= callback();
}

const mageTurns = (callback) => {
  if (typeof mage.mana === 'number' && dragon.healthPoints> 0) {
    dragon.healthPoints -= callback(chkMageDamage, statusMana).damage
    mage.damage = chkMageDamage();
  }
  else {
    mage.damage = 0;
  }
};

const dragonTurns = (callback) => {
  dragon.damage = callback();
  warrior.healthPoints -= callback();
  mage.healthPoints -= callback();
}

const gameActions = {
  warriorTurns: () => warriorTurns(warriorDamage),
  mageTurns: () => mageTurns(mageDamage),
  dragonTurns: () => dragonTurns(dragonDamage),
  turnResult: () => turnResult
}

function turnResult(){
  const finalResult = {
    mage: battleMembers.mage,
    warrior: battleMembers.warrior,
    dragon: battleMembers.dragon
  }
  return finalResult;
}
console.log(turnResult());

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.


// 4 - Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.