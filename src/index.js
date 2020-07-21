import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/index";
import "./index.css";
import Todo from "./components/Todo";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
