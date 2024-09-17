import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();  // Chamada para o construtor da classe pai

    this.state = { 
      countBotton1: 0,
      countBotton2: 0,
      countBotton3: 0,
    }
   

    this.handleClick = this.handleClick.bind(this); 
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.collorButton = this.collorButton.bind(this);
  }
  handleClick() {
    this.setState((countBotton1) => ({
      countBotton1: countBotton1.countBotton1 + 1,
      }), () => {
        console.log(`Botton 1: ${this.collorButton(this.state.countBotton1)}`);
      });
  
  }
  handleClick2() {
    this.setState(( countBotton2) => ({
        countBotton2: countBotton2.countBotton2 + 1,
      }), () => {
        console.log(`Botton 2: ${this.collorButton(this.state.countBotton2)}`);
      } // Retorna o novo estado
      );
  }
  handleClick3() {
    this.setState(( countBotton3 ) => ({
        countBotton3: countBotton3.countBotton3 + 1,
      }), () => {
        console.log(`Botton 3: ${this.collorButton(this.state.countBotton3)}`);
      } // Retorna o novo estado
      );
  }
 
  collorButton(number) {
    return number % 2 === 0 ? 'green' : 'white';

  }
  render() {
  const { countBotton1, countBotton2, countBotton3 } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick}
          style={{backgroundColor: this.collorButton(this.handleClick)}}>
          botao 1 | count = {countBotton1}
          </button>
        
        <button onClick={this.handleClick2}
         style={{backgroundColor: this.collorButton(this.handleClick2)}}>
          botao 2 | count = {countBotton2}</button>
        <button onClick={this.handleClick3}
          style={{backgroundColor:this.collorButton(this.handleClick3)}}>
          botao 3 | count = {countBotton3}
          </button>
      </div>
    );
  }
  
}
export default App;