import React from "react";
import "./state.css";

const UseState = () => {
  const [isImportant, setIsImportant] = React.useState("Yes");
  console.log(isImportant);

  function handleClick() {
    setIsImportant(function (prevValue) {
      return prevValue === "Yes" ? "No" : "Yes";
    });
  }

  return (
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div
        onClick={handleClick}
        className="state-value"
      >
        <h3>{isImportant}</h3>
      </div>
    </div>
  );
};

export default UseState;
