import React, { useState, useEffect } from "react";
import "./window.css";
import WindowTracker from "./WindowTracker";

function App() {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <button className="toggle-button" onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
