import React from 'react';
import { Provider } from 'react-redux';
import NumberClicks from './NumberClicks';
import store from './store';
import ButtonClicks from './ButtonClicks';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ButtonClicks />
        <NumberClicks />
      </Provider>
    </div>
  );
}
export default App;
