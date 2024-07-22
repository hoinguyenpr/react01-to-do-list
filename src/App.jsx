import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import { useState } from "react";

function App() {
  const addNewTodo = (name) => {
    console.log("Test");
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Leaning ReactJS" },
    { id: 2, name: "Leaning English" },
    { id: 3, name: "Leaning Algorithms" },
  ]);

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData todoList={todoList} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
