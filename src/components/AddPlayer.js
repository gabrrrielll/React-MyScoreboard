import React, { Component } from "react";

class AddPlayer extends Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.value){
      this.props.addPlayer(this.state.value);
      this.setState({value: ""});
    }    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a new player" 
          value={this.state.value} onChange={this.handleChange} 
          />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayer;