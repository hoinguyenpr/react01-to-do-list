import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  //addNewTodo("Hello");

  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    alert("Click me");
  };

  const handleClickOnChange = (value) => {
    setValueInput(value);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleClickOnChange(event.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>{valueInput}</div>
    </div>
  );
};

export default TodoNew;
