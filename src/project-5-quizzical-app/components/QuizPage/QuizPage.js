import { useEffect, useState } from "react";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
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

  useEffect(() => {
    fetchData();
  }, []);

  const hold = (selectAnswer) => {
    quizData.map(({ shuffledAnswers }) =>
      shuffledAnswers.map((data) => {
        data.answer === selectAnswer
          ? (data.isHeld = !data.isHeld)
          : (data.isHeld = false);
        return (styling = {
          backgroundColor: data.isHeld ? "#D6DBF5" : "#f5f7fb",
          border: data.isHeld & "none",
        });
      })
    );
  };

  console.log(quizData);

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, shuffledAnswers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.question}>{question}</h4>
          <div>
            {shuffledAnswers.map((data, index) => (
              <button
                key={index}
                className={styles.singleAnswer}
                onClick={() => hold(data.answer)}
              >
                {data.answer}
              </button>
            ))}
          </div>
          <hr />
        </div>
      ))}
      <div className={styles.scoreBox}>
        <button className={styles.submitButton}>Check Answers</button>
      </div>
    </div>
  );
}
