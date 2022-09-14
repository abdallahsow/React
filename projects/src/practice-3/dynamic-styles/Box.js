const Box = function (props) {
  const styling = {
    backgroundColor: props.on ? "#222" : "none",
  };

  return <div className="boxe" style={styling}></div>;
};

export default Box;
