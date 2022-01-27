import react from 'react';
import './App.css';

const handleClick = () => {
  console.log('Evento Clicado')
} 
class App extends react.Component {
  render(){
    return (
      <button onClick={handleClick}>
        Botão
      </button>
    )
  }
}

export default App;
