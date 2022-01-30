import react from "react";
import './Form.css'

class Form extends react.Component {
  constructor() {
    super()

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state={
      estadoFavorito: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }
  
  handleTextAreaChange (evento){
    this.setState({
      estadoFavorito: evento.target.value
    })
  }
  render(){
    return(
      <div className="Form">
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">

          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleTextAreaChange } />
          </label>

          <label>
            Email
            <input name="email" type="email" />
          </label>

          <label>
            Nome
            <input name="nome" type="text" />
          </label>
        </form>

          <label>
            Idade 
            <input type="number" name="idade" />
          </label>

          <label>
            Vai comparecer à conferência?
            <input type="checkbox" name="vaiComparecer" />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavraChaveFavorita" >
              <option value=""></option>
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
      </div>
    )
  }
}

export default Form;