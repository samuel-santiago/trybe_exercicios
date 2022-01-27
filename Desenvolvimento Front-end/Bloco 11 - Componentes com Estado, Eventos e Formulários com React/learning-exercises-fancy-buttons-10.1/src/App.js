import react from 'react';
import './App.css';


class App extends react.Component {

   handleClick = (string) => {
    console.log(string);
  }

  render(){
    return (
      <>
        <button key={'botão1'} onClick={(evt) => this.handleClick(evt.target.innerText)}>
          Botão1
        </button>
        <button key='botão2' onClick={(evt) => this.handleClick(evt.target.innerText)}>
          Botão2
        </button>
        <button key='botão3' onClick={(evt) => this.handleClick(evt.target.innerText)}>
          Botão3
        </button>
    </>
    )
  }
}

export default App;
