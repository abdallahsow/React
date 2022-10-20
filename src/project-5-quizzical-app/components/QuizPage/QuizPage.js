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

  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    console.log(results);
    const quiz = [];
    for (const result of results) {
      const { question, correct_answer, incorrect_answers } = result;
      const answers = [...incorrect_answers, correct_answer];
      const shuffledAnswers = shuffle(answers);
      quiz.push({ question, shuffledAnswers });
    }
    setQuizData(quiz);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function chooseAnswer(event, chosenAnswer) {
    quizData.map(({ shuffledAnswers }) =>
      shuffledAnswers.map(
        (answer) =>
          answer === chosenAnswer &&
          (event.target.style.backgroundColor = "#D6DBF5")
      )
    );
  }

  console.log(quizData);

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, shuffledAnswers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.question}>{question}</h4>
          <div>
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                className={styles.singleAnswer}
                onClick={(event) => chooseAnswer(event, answer)}
              >
                {answer}
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
