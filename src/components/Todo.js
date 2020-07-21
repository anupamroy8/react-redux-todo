import React from "react";
import { connect } from "react-redux";

class Todo extends React.Component {
  state = {
    text: "",
  };

  setText = (text) => {
    this.setState({ text });
  };
  submit = (e) => {
    e.preventDefault();
    setText("");
    props.dispatch(addTodo(text));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={submit}>
          <input
            type="text"
            value={text}
            onChange={({ target: { value } }) => setText(value)}
          />
        </form>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Todo);
