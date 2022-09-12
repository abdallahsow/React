import "./count.css";
import React from "react";

const Count = () => {
    const [value, setValue] = React.useState(0);

    function add() {
      setValue(value + 1);
    }

    function substract() {
      setValue(value - 1);
    }

    return (
      <main className="counter">
        <button onClick={substract} className="counter-minus">
          -
        </button>
        <div className="counter-count">
          <h1>0</h1>
        </div>
        <button onClick={add} className="counter-plus">
          +
        </button>
      </main>
    );
};

export default Count;
