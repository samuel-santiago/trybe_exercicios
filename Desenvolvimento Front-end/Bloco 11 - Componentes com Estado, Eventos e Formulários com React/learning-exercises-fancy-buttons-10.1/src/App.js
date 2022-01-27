import react from 'react';
import './App.css';


class App extends react.Component {

  // constructor () {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);
  //   console.log('constructor: ',this)
  // }

  handleClick = () => {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
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

  // class App extends react.Component {
  //   handleClick () {
  //     // Essa chamada ao `this` retorna `undefined`? !
  //     console.log(this)
  //     console.log('Clicou')
  //   }
  
  //   render() {
  //     // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
  //     // console.log(this)
  //     return <button onClick={this.handleClick}>Meu botão</button>
  //   }
  // }

export default App;
