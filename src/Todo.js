import React from "react";
import { ACTIONS } from "./App";
import "./todo.css";

function Todo({ todo, dispatch }) {
  return (
    <div className="todo-list">
      <div className="todo">
        <div className="todo-entry">
          <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
            {todo.name}
          </span>
        </div>

        <div className="toggle">
          <button
            className="toggle-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.TOGGLE_TODO,
                payload: { id: todo.id },
              });
            }}
          >
            Toggle
          </button>
        </div>
        <div className="delete">
          <button
            className="delete-button"
            onClick={() => {
              dispatch({
                type: ACTIONS.DELETE_TODO,
                payload: { id: todo.id },
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
