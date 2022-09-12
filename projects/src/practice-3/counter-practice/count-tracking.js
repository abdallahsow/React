import './count.css'

const Count = () => {
  return (
    <div className="counter">
      <button className="counter-minus">-</button>
      <div className="counter-count">
        <h1>0</h1>
      </div>
      <button className="counter-plus">+</button>
    </div>
  );
};

export default Count