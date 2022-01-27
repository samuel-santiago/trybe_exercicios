import react from 'react';
import './App.css';

const handleClick = () => {
  console.log('Evento Clicado1')
}

const handleClick2 = () => {
  console.log('Evento Clicado2')
}

const handleClick3 = () => {
  console.log('Evento Clicado3')
}

class App extends react.Component {
  render(){
    return (
      <>
        <button key='botão1' onClick={handleClick}>
          Botão1
        </button>
        <button key='botão2' onClick={handleClick2}>
          Botão2
        </button>
        <button key='botão3' onClick={handleClick3}>
          Botão3
        </button>
    </>
    )
  }
}

export default App;
