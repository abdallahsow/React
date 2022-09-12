import "./count.css";

const Count = () => {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount(count + 1);
  }

  function substract() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button onClick={substract} className="counter-minus">
        -
      </button>
      <div className="counter-count">
        <h1>0</h1>
      </div>
      <button onClick={add} className="counter-plus">
        +
      </button>
    </div>
  );
};

export default Count;
