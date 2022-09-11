import "./styles.css"

const App = function () {
  function handleClick() {
    console.log("I'm clicked");
  }

  const Hovered = function () {
    console.log("I'm hovered");
  };

  return (
    <div className="styling">
      <img
        onMouseOver={Hovered}
        src="https://picsum.photos/640/360"
        alt="random"
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App
