import React from 'react';



const Counter = (props) => {
    
        
    return(
        <div className="counter">
        <button className="counter-action decrement" onClick={ props.handleScorChange }>-</button>
        <span className="counter-score">{props.scor}</span>
        <button className="counter-action increment" onClick={ props.handleScorChange(props.key, 1)}>+</button>
        </div>
    )

    }

export default Counter;