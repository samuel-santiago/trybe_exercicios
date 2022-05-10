const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => { console.log(item); return Object.values(item)});
  const despesaTotal = custoItem.reduce((acc, curr) => {console.log(curr); return acc += curr[0]}, 0);
  console.log(despesaTotal);
  return despesaTotal;
};
console.log(despesaMensal(renda, despesas, somaDespesas));


// ####################################################################


const userFullName = ( {firstName, lastName}  ) => `Hello! My name is ${[firstName]} ${[lastName]}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return callback(userToReturn);
};
console.log(getUser(userFullName));


// ####################################################################

