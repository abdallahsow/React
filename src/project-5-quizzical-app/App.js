import "./App.css";
import HomePage from "./components/HomePage/HomePage";

const App = function () {
  return (
    <div className="app">
      <div className={"orange-balloon"}></div>
      <HomePage />
      <div className={"blue-balloon"}></div>
    </div>
  );
};

export default App;
