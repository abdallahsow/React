import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [thingsArray, setThingsArray] = useState([
    "Thing 1",
    "Thing 2",
    "Thing 3",
  ]);
  const thingsElement = thingsArray.map((thing) => (
    <p className="item" key={thing}>
      {thing}
    </p>
  ));

  function addItem() {
    setThingsArray(function () {
      return [...thingsArray, `Thing ${thingsArray.length + 1}`];
    });
  }

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      {thingsElement}
    </div>
  );
};

export default App;
