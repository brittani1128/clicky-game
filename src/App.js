import React, { Component } from 'react';
import './App.css';
// import CharacterCard from "./components/CharacterCard";
// import characters from "./characters.json";
import Game from "./components/Game/Game";
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  }

  render(){
    return (
      <div>
        <Game />  
      </div>
    )
  }

}

export default App;
