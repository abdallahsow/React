const Dice = function ({ handleClick, value, isHeld, id }) {
  return (
    <div
      className={isHeld ? "dice-box dice-box-clicked" : "dice-box"}
      onClick={() => handleClick(id)}
    >
      <p className="dice">{value}</p>
    </div>
  );
};

export default Dice;
