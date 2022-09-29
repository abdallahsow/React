import "./state.css";
import React from "react";
const App = () => {
  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function flip() {
    setIsGoingOut((prevValue) => !prevValue);
  }
  console.log(isGoingOut);
  let answer = isGoingOut ? "Yes" : "No";

  return (
    <div className="state">
      <h1 className="state-title">Do I feel like going out tonight ?</h1>
      <div onClick={flip} className="state-value">
        <h3>{answer}</h3>
      </div>
    </div>
  );
};

export default App;
