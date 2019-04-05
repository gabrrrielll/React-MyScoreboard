import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({changeScore, id, score}) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
    </div>
  );
}

Counter.propTypes= {
  changeScore: PropTypes.func,
  id: PropTypes.number,
  score: PropTypes.number
}

export default Counter;