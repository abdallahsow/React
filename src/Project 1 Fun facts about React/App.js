import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const app = darkMode ? "app app-dark" : "app";

  function change() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={app}>
      <div className="container">
        <Navbar state={darkMode} handleClick={change} />
        <Main state={darkMode}/>
      </div>
    </div>
  );
};

export default App;
