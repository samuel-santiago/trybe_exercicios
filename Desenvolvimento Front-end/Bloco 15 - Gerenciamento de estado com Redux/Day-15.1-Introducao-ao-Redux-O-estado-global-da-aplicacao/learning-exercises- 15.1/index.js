const Redux = require('redux');
const reducer = require('./src/reducers/reducer1')
const reducer2 = require('./src/reducers/reducer2')

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
})

const rootStore = Redux.combineReducers({
  reducer,
  reducer2,
})

const store = Redux.createStore(rootStore);

store.dispatch(fazerLogin("samucasnascimento@kkk"))

console.log(store.getState());
