import boxeData from "./boxeData";
import React from "react";
import "./styles.css";
import Box from "./Box";

const App = function () {
  const [square, setSquare] = React.useState(boxeData);

  const squareElements = square.map(square => <Box key={square.id} {...square} />);

  return (
    <div>
      <h1>Boxes goes here !</h1>
      {squareElements}
    </div>
  );
};

export default App;
