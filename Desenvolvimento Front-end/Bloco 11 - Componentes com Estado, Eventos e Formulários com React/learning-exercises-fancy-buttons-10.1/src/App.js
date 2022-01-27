import react from 'react';
import './App.css';


class App extends react.Component {

  constructor () {
    super()

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    // Observação, se eu tirar os 3 binds, não acontece nada...

    this.state = {
      clickButton1: 0,
      clickButton2: 0,
      clickButton3: 0,
    }
  }
  getCollorButton (num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1 (string) {
    this.setState(({clickButton1}) => ({
      clickButton1: clickButton1 +1,
    }));
    console.log(this.state.clickButton1)
    console.log(string)
  }

  handleClick2 (string) {
    this.setState(({clickButton2}) => ({
      clickButton2: clickButton2 +1,
    }));
    console.log(this.state.clickButton2)
    console.log(string)
  }

  handleClick3 (string) {
    this.setState(({clickButton3}) => ({
      clickButton3: clickButton3 +1,
    }));
    console.log(this.state.clickButton3)
    console.log(string)
  }

  render(){
    return (
      <>
        <button key={'botão1'} onClick={(evt) => this.handleClick1(evt.target.innerText)} style={{backgroundColor: this.getCollorButton(this.state.clickButton1)}}>
          Botão1
        </button>
        <button key='botão2' onClick={(evt) => this.handleClick2(evt.target.innerText)} style={{backgroundColor: this.getCollorButton(this.state.clickButton2)}}>
          Botão2
        </button>
        <button key='botão3' onClick={(evt) => this.handleClick3(evt.target.innerText)} style={{backgroundColor: this.getCollorButton(this.state.clickButton3)}}>
          Botão3
        </button>
    </>
    )
  }
}

export default App;
