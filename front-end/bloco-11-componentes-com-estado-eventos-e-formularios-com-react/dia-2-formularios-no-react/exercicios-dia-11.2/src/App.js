
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
  };
}

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
         <form>
          <fieldset>
          <label>Nome:</label>
            <input type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
            <label>email</label>
            <input 
            type="text" 
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
          </fieldset>
          <div>
           <label>mensagem</label>
           <textarea 
            name="mensagem" 
            rows="4" 
            cols="50" 
            value={this.state.mensagem}
            onChange={this.handleChange} />

            <input 
            type="checkbox" 
            name="newsletter" 
            value={this.state.newsletter} 
            onChange={this.handleChange} />

            <input 
            type="file" 
            name="arquivo" />
            
          </div>  
        </form>
      </div>
    );
  }
}

export default App;
