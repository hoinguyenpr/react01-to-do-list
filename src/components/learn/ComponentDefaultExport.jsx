import "./styles.css";

function ComponentDefaultExport() {
  return (
    <>
      <div>My First Component</div>
      <div className="child" style={{ backgroundColor: "green" }}>
        Child
      </div>
    </>
  );
}

export default ComponentDefaultExport;
