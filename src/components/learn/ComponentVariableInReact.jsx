const ComponentVariableInReact = () => {
  //7 data types in JS
  const varString = "Mak Intern"; //Mak Intern
  const varNumber = 123; //123
  const varBigint = 123; //123
  const varBoolean = true; //
  const varUndefined = undefined; //
  const varNull = null; //
  const varSymbol = Symbol("mySymbol"); //
  const varObject = {
    name: "Mak",
    age: 18,
  };

  return (
    <div>
      <div>String: {varString}</div>
      <div>Number: {varNumber}</div>
      <div>BigInt: {varBigint}</div>
      <div>Boolean: {varBoolean}</div>
      <div>Undefined: {varUndefined}</div>
      <div>Null: {varNull}</div>
      <div>Symbol: {varSymbol}</div>
      <div>Object: {JSON.stringify(varObject)}</div>
    </div>
  );
};

export default ComponentVariableInReact;
