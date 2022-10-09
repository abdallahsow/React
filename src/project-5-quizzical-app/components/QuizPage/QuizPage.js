import { useState } from "react";
import Answer from "../Answer/Answer";
import { quizData } from "../../data/quizData";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [isClicked, setIsClicked] = useState(false);

  function chooseAnswer(item) {
    setIsClicked(() => {
      for (const quiz of quizData) {
        const { answers } = quiz;
        for (const answer of answers) {
          if (answer === item) {
            return !isClicked;
          }
        }
      }
    });
  }

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, answers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.quizHeader}>{question}</h4>
          <div>
            {answers.map((answer, index) => (
              <Answer
                key={index}
                answer={answer}
                isClicked={isClicked}
                handleClick={chooseAnswer}
              />
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
