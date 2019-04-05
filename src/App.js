import React, { Component } from "react";
import Header from "./components/Header";
import { PLAYERS } from "./utils/players";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayer";
import './scoreboard.css';

class App extends Component {
  state = {
    players: PLAYERS
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleChangeScore = (id, modifier) => {
  
    this.setState(prevState => ({
      players: prevState.players.map(player => {
        if (player.id !== id) {
          return player;
        }
        else {
          return Object.assign(player, { score: player.score + modifier });
        }
      })
    }));
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  handleAddPlayer = name => {

    const genUniqIncrId = () => 1 + Math.max(...this.state.players.map(player => player.id));

    this.setState(prevState => ({
      players: [...prevState.players, { name, id: genUniqIncrId(), score: 0 }]
    }));
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard" >
        <Header title="Scoreboard" players={this.state.players} />

        {this.state.players.map(player => (
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore}
            score={player.score}
            isHighScore={highScore === player.score}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;