const TodoData = (props) => {
  //pros is an object
  const { name, age, data } = props;
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>I'm {age} years old</div>
      <div>I'm come from {data.country}</div>
      <div>Learning React</div>
      <div>Watching Youtube</div>
    </div>
  );
};

export default TodoData;
