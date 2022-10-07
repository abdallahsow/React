import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import QuizPage from "./components/QuizPage/QuizPage";

const App = function () {
  return (
    <div className="app">
      <div className={"orange-balloon"}></div>
      <QuizPage />
      <div className={"blue-balloon"}></div>
    </div>
  );
};

export default App;
