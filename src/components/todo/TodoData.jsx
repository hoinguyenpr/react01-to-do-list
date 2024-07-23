const TodoData = (props) => {
  //pros is an object
  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-data">
      {todoList.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div>{todo.name}</div>
          <button
            onClick={() => handleClick(todo.id)}
            style={{ cursor: "pointer" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
