import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";
import Todo from "./Todo.js";
import "./todo.css";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(toDos, action) {
  console.log(toDos);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...toDos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return toDos.filter((todo) => todo.id !== action.payload.id);
    default:
      break;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [toDos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(toDos);
  return (
    <div className="container">
      <div className="form">
        <div className="form-title">
          <h3 className="title">Todo List</h3>

          <div className="main-form">
            <form onSubmit={handleSubmit}>
              <input
                type={"text"}
                value={name}
                style={{ padding: "5px" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </form>
          </div>

          {toDos.map((todo) => {
            return <Todo todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
