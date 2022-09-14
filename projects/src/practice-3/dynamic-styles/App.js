import boxeData from ".boxeData";

export default App = function () {
  const [square, setSquare] = React.useState(boxeData);

  const squareElements = square.map(({ id, on }) => (
    <div key={id} className="boxe"></div>
  ));

  return (
    <div>
      <h1>Boxes goes here !</h1>
      {squareElements}
    </div>
  );
};
