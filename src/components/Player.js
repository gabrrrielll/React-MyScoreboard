import React from 'react';
import Counter from "./Counter";
import Icon from './Icon';  

class Player extends React.PureComponent {

  render() { 

    const {removePlayer, isHighScore, name, score, changeScore, id} = this.props;
    
    console.log(name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>

          <Icon isHighScore={isHighScore} /> 
         
          {name}
        </span>

        <Counter 
          score= {score}
          changeScore = {changeScore} 
          id = {id}
          />
      </div>

    );
  }
}
 
export default Player;