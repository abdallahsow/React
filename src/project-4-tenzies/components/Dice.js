const Dice = function ({ handleClick, value, isHeld, id }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#fff",
  };
  
  return (
    <div
      className="dice-box"
      onClick={() => handleClick(id)}
      style={styles}
    >
      <p className="dice">{value}</p>
    </div>
  );
};

export default Dice;
