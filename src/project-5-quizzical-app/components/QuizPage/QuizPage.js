import { useEffect, useState } from "react";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [quizData, setQuizData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    const quiz = [];
    for (const result of results) {
      const { question, correct_answer, incorrect_answers } = result;
      const answers = [...incorrect_answers, correct_answer];
      quiz.push({ question, answers });
    }
    setQuizData(quiz);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(quizData);

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, answers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.quizHeader}>{question}</h4>
          <div>
            {answers.map((answer, index) => (
              <button key={index} className={styles.singleAnswer}>
                {answer}
              </button>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
