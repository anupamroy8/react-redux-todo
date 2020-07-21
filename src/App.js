import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, RESET } from "./store/types";

class App extends React.Component {
  handleIncrement = () => {
    this.props.dispatch({ type: INCREMENT });
  };
  handleDecrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };
  handleReset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.count}</h1>
        <button onClick={this.handleIncrement} className="inc">
          Increment
        </button>
        <button onClick={this.handleDecrement} className="dec">
          Decrement
        </button>
        <button onClick={this.handleReset} className="reset">
          Reset
        </button>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(App);
