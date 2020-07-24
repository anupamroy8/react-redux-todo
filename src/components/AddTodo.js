import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInputAction } from "../redux/actions";

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  updateInput = (event) => {
    if (event.keyCode === 13) {
      this.setState({ input: event.target.value });
      this.props.dispatch(handleInputAction(event.target.value));
      event.target.value = "";
    }
  };
  render() {
    return (
      <div>
        <input
          onKeyDown={(e) => this.updateInput(e)}
          type="text"
          className="input-todo"
          placeholder="Things to do..."
        />
      </div>
    );
  }
}

function mapState(state) {
  return { state };
}

export default connect(mapState)(AddTodo);
