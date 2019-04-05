import React, { Component } from "react";

class Stopwatch extends Component {
  
  state = {
    isRunning: false,
    totalTime: 0
  };

  componentDidMount(){
    this.clockId = setInterval(this.tick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = ()=>{
    if(this.state.isRunning){
      this.setState({
        totalTime: this.state.totalTime + 1 
      })
    }

  }

  handleStart = () => {
    this.setState(
      { isRunning: !this.state.isRunning }
      );    
  }

  handleReset = () => {
    this.setState(
      { 
        totalTime: 0,
        isRunning: false
       }
      );    
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.totalTime}</span>
        <button onClick={ this.handleStart }>
          {this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;