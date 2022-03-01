import react from 'react';
import './App.css';


class App extends react.Component {

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this);
    // this.handleClick2 = this.handleClick2.bind(this);
    // this.handleClick3 = this.handleClick3.bind(this);
    // Observação, se eu tirar os 3 binds, não acontece nada...

    this.state = {
      Botão1: 0,
      Botão2: 0,
      Botão3: 0,
    }
  }
  getCollorButton (num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick (string) {
    this.setState(({string}) => ({
      [string]: string + 1,
    }), () => {
      console.log(`
      ${string} 
      Count: ${this.state[string]} 
      Color: ${this.getCollorButton(this.state[string])}` )
    });
  }

  // handleClick (string) {
  //   this.setState(({Botão2}) => ({
  //     Botão2: Botão2 +1,
  //   }), () => {
  //     console.log(`
  //     ${string} 
  //     Count: ${this.state.Botão2} 
  //     Color: ${this.getCollorButton(this.state.Botão2)}` )
  //   });
  // }

  // handleClick3 (string) {
  //   this.setState(({Botão3}) => ({
  //     Botão3: Botão3 +1,
  //   }), () => {
  //     console.log(`
  //     ${string} 
  //     Count: ${this.state.Botão3} 
  //     Color: ${this.getCollorButton(this.state.Botão3)}` )
  //   });
  // }

  render(){
    return (
      <>
        <button key={'botão1'} 
          onClick={(evt) => {
            this.handleClick(evt.target.innerText)
          }} 
          style={{backgroundColor: this.getCollorButton(this.state.Botão1)}}>
          Botão1
        </button>
        <button key='botão2' 
          onClick={(evt) => this.handleClick(evt.target.innerText)} 
          style={{backgroundColor: this.getCollorButton(this.state.Botão2)}}>
          Botão2
        </button>
        <button key='botão3' 
          onClick={(evt) => this.handleClick(evt.target.innerText)} 
          style={{backgroundColor: this.getCollorButton(this.state.Botão3)}}>
          Botão3
        </button>
    </>
    )
  }
}

export default App;
