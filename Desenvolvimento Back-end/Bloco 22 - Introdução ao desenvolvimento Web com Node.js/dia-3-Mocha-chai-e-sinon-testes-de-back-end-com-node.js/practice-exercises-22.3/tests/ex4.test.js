// Exercício 4
// Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok.
// Descreva todos os cenários de teste utilizando describes;
// Descreva todos os testes que serão feitos utilizando it's;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

const { expect } = require('chai');
const { describe, it } = require('mocha');
const writeContent = require('../ex5');

describe('EX 4: ', ()=> {
  it('Testar se recebe dois parâmetros:', ()=> {
    expect(writeContent.arguments.length(2)).to.be.true();
  })
  // it('', ()=> {

  // })
  // it('', ()=> {

  // })
  // it('', ()=> {

  // })
  // it('', ()=> {

  // })

})
