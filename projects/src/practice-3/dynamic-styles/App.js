import boxeData from "./boxeData";
import React from "react";
import "./styles.css";

const App = function ({ darkMode }) {
  const [square, setSquare] = React.useState(boxeData);

  const styles = {
    backgroundColor: darkMode ? "#222" : "#ccc",
  };

  const squareElements = square.map(({ id, on }) => (
    <div style={styles} key={id} className="boxe"></div>
  ));

  return (
    <div>
      <h1>Boxes goes here !</h1>
      {squareElements}
    </div>
  );
};

export default App;
