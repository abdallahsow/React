import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import QuizPage from "./components/QuizPage/QuizPage";
import styles from "./App.module.css";

const App = function () {
  const [quizData, setQuizData] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  function createAnswerArray(correctAnswer, incorrectAnswers) {
    const answerArray = [];
    answerArray.push({ answer: correctAnswer, isHeld: false });
    incorrectAnswers.forEach((answer) => {
      answerArray.push({ answer: answer, isHeld: false });
    });
    return shuffle(answerArray);
  }

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

  const hold = (selectAnswer) => {
    setQuizData((prevQuiz) =>
      prevQuiz.map((quiz) => ({
        ...quiz,
        shuffledAnswers: quiz.shuffledAnswers.map((data) => ({
          ...data,
          isHeld: data.answer === selectAnswer ? !data.isHeld : false,
        })),
      }))
    );
  };

  console.log(quizData);

  function createNewGame() {
    setQuizData(fetchData());
  }

  return (
    <div className="app">
      <div className={styles.orangeBalloon}></div>
      {quizData.length ? (
        <QuizPage quizData={quizData} hold={hold} />
      ) : (
        <HomePage handleClick={createNewGame} />
      )}
      <div className={styles.blueBalloon}></div>
    </div>
  );
};

export default App;
