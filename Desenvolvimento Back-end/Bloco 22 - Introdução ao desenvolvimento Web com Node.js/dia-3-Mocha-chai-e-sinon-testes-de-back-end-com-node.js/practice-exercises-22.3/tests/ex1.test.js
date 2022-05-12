const { expect } = require('chai');
const {describe, it} = require('mocha');

const verifyNumber = require('../ex2');

describe('Testar VerifyNumber', ()=> {
  it('Se número passado for maior que 0 deverá retornar "positivo"', () => {
    expect(verifyNumber(5)).to.be.equal('positivo');
  })
  it('Se número passado for menor que 0 deverá retornar "negativo"', () => {
    expect(verifyNumber(-5)).to.be.equal('negativo');
  })
  it('Se número passado for IGUAL que 0 deverá retornar "neutro"', () => {
    expect(verifyNumber(0)).to.be.equal('neutro');
  })
})