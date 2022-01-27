import react from 'react';
import './App.css';


class App extends react.Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this);
    console.log('constructor: ',this)
    this.state = {
      clickButton1: 0,
      clickButton2: 0,
      clickButton3: 0,
    }
  }

  handleClick (string) {
    this.setState((previousValue) => ({
      clickButton1: previousValue.clickButton1 +1,
      clickButton2: previousValue.clickButton2 +1,
      clickButton3: previousValue.clickButton3 +1,
    }));
    console.log(this.state)
    console.log(string)

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
