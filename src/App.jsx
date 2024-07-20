import { useState } from "react";
import ComponentDefaultExport from "./components/learn/ComponentDefaultExport";
import {
  ComponentObjectExportA,
  ComponentObjectExportB,
} from "./components/learn/ComponentObjectExport";
import ComponentVariableInReact from "./components/learn/ComponentVariableInReact";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";

function App() {
  const [count, setCount] = useState(0);

  const myFunction = () => {
    console.log("Run my arrow function");
  };

  myFunction();

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoData />
        <TodoNew />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
