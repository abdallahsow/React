import { useEffect, useState } from "react";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [quizData, setQuizData] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);

  console.log(quizData);

  const answers = () => {
    const possibleAnswers = [];
    for (let i = 0; i < quizData.length; i++) {
      const answers = [];
      for (let j = 0; j < quizData[i].incorrect_answers.length; j++) {
        answers.push(quizData[i].incorrect_answers[j]);
      }
      answers.push(quizData[i].correct_answer);
      possibleAnswers.push(answers);
    }
    return possibleAnswers;
  };

  useEffect(() => {
    setQuizAnswers(answers());
  }, [quizData]);

  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    setQuizData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, correct_answer, incorrect_answers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.quizHeader}>{question}</h4>
          <div>
            {incorrect_answers.map((answer, index) => (
              <button key={index} className={styles.singleAnswer}>
                {answer}
              </button>
            ))}
            <button className={styles.singleAnswer}>{correct_answer}</button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
