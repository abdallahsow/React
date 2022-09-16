const Box = function (props) {
  const styling = {
    backgroundColor: props.on ? "#222" : "#ccc",
  };

  return (
    <div className="boxe" style={styling} onClick={() => props.handleClick(props.id)}></div>
  );
};

export default Box;
