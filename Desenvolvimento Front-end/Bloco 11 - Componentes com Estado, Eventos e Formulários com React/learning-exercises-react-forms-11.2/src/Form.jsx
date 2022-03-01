import react from "react";
import './Form.css'

// Para fixar
// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.

class Form extends react.Component {
  
  constructor(){
    super();
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.state={
      State: '',
      Name: '',
      Age: '',
      Checkbox: true,
      Description: '',
    }
  }

  handleChangeEvent(evt){
    const name = evt.target.name;
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    this.setState({

      [name]:value, 
    })
  }
  
  render(){
    
    return(
      <form className="form" type="Submit">
        <select name="State" placeholder="State" onChange={this.handleChangeEvent}>
          <option>Sudeste</option>
          <option>Centro-Oeste</option>
          <option>Nordeste</option>
          <option>Sul</option>
          <option>Norte</option>
        </select>

          <input type="text" name="Name" placeholder="Name" required onChange={this.handleChangeEvent} value={this.state.name}/>
          <input type="Number" name="Age" placeholder="Age" max="100" min="18" required onChange={this.handleChangeEvent} value={this.state.age}/>
          <input type="checkbox" name="Checkbox" placeholder="Checkbox" onChange={this.handleChangeEvent} value={this.state.checkbox}/>


        <textarea name="Description" cols="30" rows="5" maxLength="240" placeholder="Description" onChange={this.handleChangeEvent} required></textarea>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;