import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state={
    characters: [], 
  }
  }
  fetchCharacter= async () => {
    const API_URL = 'https://rickandmortyapi.com/api/character';
    const request = await fetch(API_URL);
    const requestObj = await request.json();

    this.setState({
      characters: requestObj.results,
    })
  }

  componentDidMount= () =>{
    this.fetchCharacter();
  }

  render(){
    const { characters } = this.state;
    
     

    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        {characters.map(({ name, image }) => {
          return (
            <div className='container' key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}></img>
            </div>
          )
        }
        )}
      </div>
    )
      
  }


}
export default App;