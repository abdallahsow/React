import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import QuizPage from "./components/QuizPage/QuizPage";
import styles from "./App.module.css";

const App = function () {
  const [quizData, setQuizData] = useState([]);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    const quiz = [];
    for (const result of results) {
      const { question, correct_answer, incorrect_answers } = result;
      const shuffledAnswers = createAnswerArray(
        correct_answer,
        incorrect_answers
      );
      quiz.push({ question, shuffledAnswers });
    }
    setQuizData(quiz);
  };
  fetchData();
  console.log(quizData)

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function createNewGame() {
  //   setQuizData(fetchData());
  // }

  return (
    <div className="app">
      <div className={styles.orangeBalloon}></div>
      <HomePage />
      <div className={styles.blueBalloon}></div>
    </div>
  );
};

export default App;
