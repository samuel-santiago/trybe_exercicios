const InitialState = {
  counter: 0,
};
function clickReducer(state = InitialState, action) {
  switch (action.type) {
    case 'ADD_CLICK':
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}
export default clickReducer;
