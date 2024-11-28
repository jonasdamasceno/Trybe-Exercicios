import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const obrigaçoes = ['fazer o projeto solar system', 'exercicios dia 10.2',]

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {obrigaçoes.map(obrigaçao => Task (obrigaçao))}
        </ul>
      </div>
    );
  }
}

export default App;
