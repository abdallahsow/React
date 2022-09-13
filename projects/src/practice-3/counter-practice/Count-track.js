import "./count.css";
import React from "react";
import Count from "./Count";

const App = () => {
  const [value, setValue] = React.useState(0);

  function substract() {
    setValue(function (prevValue) {
      return prevValue - 1;
    });
  }

  function add() {
    setValue(function () {
      return value + 1;
    });
  }

  return (
    <main className="counter">
      <button onClick={substract} className="counter-minus">
        -
      </button>
      <Count number={value} />
      <button onClick={add} className="counter-plus">
        +
      </button>
    </main>
  );
};

export default App;
