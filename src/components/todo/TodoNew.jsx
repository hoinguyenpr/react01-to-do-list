import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;

  const [valueInput, setValueInput] = useState("");

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  const handleClickOnChange = (value) => {
    setValueInput(value);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleClickOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
