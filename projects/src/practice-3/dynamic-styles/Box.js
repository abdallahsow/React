import React from "react";

const Box = function (props) {
  const [isOn, setIsOn] = React.useState(props.on);

  const styling = {
    backgroundColor: isOn ? "#222" : "#fff",
  };

  function flip() {
    setIsOn((prevValue) => !prevValue);
  }

  return <div className="boxe" style={styling} onClick={flip}></div>;
};

export default Box;
