import { useState } from "react";
import "./App.css";
import ComponentDefaultExport from "./components/learn/ComponentDefaultExport";
import {
  ComponentObjectExportA,
  ComponentObjectExportB,
} from "./components/learn/ComponentObjectExport";
import ComponentVariableInReact from "./components/learn/ComponentVariableInReact";

function App() {
  const [count, setCount] = useState(0);

  const myFunction = () => {
    console.log("Run my arrow function");
  };

  myFunction();

  return (
    <>
      <h1>Hello World</h1>
      <ComponentDefaultExport />
      <ComponentObjectExportA />
      <ComponentObjectExportB />
      <ComponentVariableInReact />
    </>
  );
}

export default App;
