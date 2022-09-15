import boxeData from "./boxeData";
import React from "react";
import "./styles.css";
import Box from "./Box";

const App = function () {
  const [square, setSquare] = React.useState(boxeData);

  const toggle = (id) => {
    setSquare((prevSquare) =>
      prevSquare.map((square) =>
        square.id === id ? { ...square, on: !square.on } : square
      )
    );
  };

  const squareElements = square.map((square) => (
    <Box key={square.id} {...square} handleClick={toggle} />
  ));

  return (
    <div>
      <h1>Boxes goes here !</h1>
      {squareElements}
    </div>
  );
};

export default App;
