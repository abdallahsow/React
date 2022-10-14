import { useEffect, useState } from "react";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [apiData, setApiData] = useState([]);

  console.log(apiData);

  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    setApiData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.quiz}>
      {apiData.map(
        ({ question, correct_answer, incorrect_answers }, index) => (
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
        )
      )}
    </div>
  );
}
