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
  const name = "Makintern";
  const age = 18;
  const data = {
    address: "Phu Yen",
    country: "Vietnam",
  };

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoData name={name} age={age} data={data} />
        <TodoNew addNewTodo={addNewTodo} />
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
