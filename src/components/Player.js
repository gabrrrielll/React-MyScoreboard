import React from 'react';
import Counter from './Counter';


const Player = (props)=>{
    return(
        <div className="player">
          <span className="player-name"
            ><button className="remove-player">✖</button>{props.nume}</span>          
        
        <Counter handleScorChange = {props.handleScorChange} scor={props.scor}  key= {props.key} />
        </div>
    )
}
export default Player;