import React from "react";

class DadJoke extends React.Component{
  constructor(){
    super()
    this.state= {
      jokeObj: undefined,
      loading:true,
      arrayOfJokes: [],
    }
  }

  fetchJoke = async () => {
    const URL_API = "https://icanhazdadjoke.com/";
    const HEADERS_API =  { headers: { Accept: 'application/json' } }

    this.setState(
      { loading: true },
      async () => {
        const request = await fetch(URL_API, HEADERS_API);
        const requestObj = await request.json();
        this.setState({
          loading: false,
          jokeObj: requestObj,
        });
      });
  }
  
  componentDidMount = () => {
    this.fetchJoke();
  }
  
  saveJoke() {
    this.setState(({ arrayOfJokes, jokeObj }) => ({
      arrayOfJokes: [...arrayOfJokes, jokeObj]
    }));

    this.fetchJoke();
    console.log('ok');
  }


  renderJokeElement = () => {
    return (
      <div>
      <p>{this.state.jokeObj.joke}</p>
      <button type="button" onClick={this.saveJoke}>
        Salvar Piada
      </button>
    </div>
    )
  }
  
  
  render(){

    const { jokeObj, arrayOfJokes, loading } = this.state;
    const loadingElement = <span> Loading... </span>;

    return (
      <div>
        <span>
          {arrayOfJokes.map(({id, joke}) => (<p key={id}>{joke}</p>))}
        </span>

        <p> { loading ? loadingElement: this.renderJokeElement()}</p>
      </div>
    )
  }
}

export default DadJoke 


