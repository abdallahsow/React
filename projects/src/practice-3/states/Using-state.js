import React from "react";
import "./state.css";

const UseState = () => {
  const [isImportant, func] = React.useState("Yes");
  console.log(isImportant);

  function handleClick() {
    func("No");
  }

  function handleClick2() {
    func("Yes");
  }

  return (
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div
        onDoubleClick={handleClick2}
        onClick={handleClick}
        className="state-value"
      >
        <h3>{isImportant}</h3>
      </div>
    </div>
  );
};

export default UseState;
