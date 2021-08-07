import React from "react";
import "./App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App m-5">
     <h2>React Redux ToDo App</h2>
     <TodoInput />
     <TodoList />
    </div>
  );
}

export default App;
