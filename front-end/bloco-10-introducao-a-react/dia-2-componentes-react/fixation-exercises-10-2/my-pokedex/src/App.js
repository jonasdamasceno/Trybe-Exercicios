import pokemons from "./data";
import React from "react";
import Pokedex from "./pokedex";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
