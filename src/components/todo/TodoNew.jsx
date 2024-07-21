const TodoNew = (props) => {
  const { addNewTodo } = props;
  //addNewTodo("Hello");

  const handleClick = () => {
    alert("Click me");
  };

  const handleClickOnChange = (value) => {
    console.log(">>> handleClickOnChange ", value);
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
    </div>
  );
};

export default TodoNew;
