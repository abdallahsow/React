import HomePage from "./components/HomePage/HomePage";
import QuizPage from "./components/QuizPage/QuizPage";
import styles from "./App.module.css";

const App = function () {
  return (
    <div className="app">
      <div className={styles.orangeBalloon}></div>
      <QuizPage />
      <div className={styles.blueBalloon}></div>
    </div>
  );
};

export default App;
