// Exercício 1: Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes;
// Descreva todos os testes que serão feitos utilizando its;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const { expect, assert } = require('chai');
const {describe, it} = require('mocha');

const verifyNumber = require('../ex2');

describe('EX 1: \n Testar VerifyNumber', ()=> {
  it('Se número passado for maior que 0 deverá retornar "positivo"', () => {
    expect(verifyNumber(5)).to.be.equal('positivo');
  })
  it('Se número passado for menor que 0 deverá retornar "negativo"', () => {
    expect(verifyNumber(-5)).to.be.equal('negativo');
  })
  it('Se número passado for IGUAL que 0 deverá retornar "neutro"', () => {
    expect(verifyNumber(0)).to.be.equal('neutro');
  })
  it('Se não for NUMBER, retornar erro: "o valor deve ser um número"', () => {
    expect(()=> verifyNumber('string')).throw ('o valor deve ser um número');
  })
})