const TodoData = (props) => {
  //pros is an object
  const { todoList } = props;
  return (
    <div className="todo-data">
      {todoList.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div>{todo.name}</div>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
