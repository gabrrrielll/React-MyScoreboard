import React, { Component } from 'react';
import './scoreboard.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {
  state = {
    players: [
      {nume: "Mario", id: 0, scor: 0 },
      {nume: "Alex", id: 1, scor: 0},
      {nume: "Andrei", id: 2, scor: 0},
    ]
    
  }
  handleScorChange = (id, direction) => {
    //direction = this.state.scor +1
   const scor="11";

  }

  render() {
    
    const jucatori = this.state.players.map(element => {
      return(
        <Player key= {element.id.toString()} nume={element.nume} handleScorChange={this.handleScorChange} scor={element.scor}/>
        

    )})
    return (
     
      <div className = "scoreboard">
     <Header titlu = "Titlul meu" totalPlayers={this.state.players.length} />
     
     {jucatori}
      
    </div>
    );
  }
}

export default App;
