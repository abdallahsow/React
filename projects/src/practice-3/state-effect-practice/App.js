import React, { useState, useEffect } from "react";
import "./window.css";
import WindowTracker from "./WindowTracker";

function App() {
  return (
    <div className="container">
      <button className="toggle-button">Toggle WindowTracker</button>
      <WindowTracker />
    </div>
  );
}

export default App;
