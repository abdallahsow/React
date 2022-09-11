import "./styles.css";

const App = () => {
  const thingsArray = ["Thing 1", "Thing 2", "Thing 3"];
  const thingsElement = thingsArray.map((thing) => (
    <p className="item" key={thing}>
      {thing}
    </p>
  ));

  function addItem() {
    const newItem = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newItem);
    console.log(thingsArray);
  }

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      {thingsElement}
    </div>
  );
};

export default App;
