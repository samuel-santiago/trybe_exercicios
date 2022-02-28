const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const reducer2 = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN" :
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
      default:
      return state;
  }
};
module.exports = reducer2