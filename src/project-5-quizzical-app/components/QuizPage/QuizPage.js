import Answer from "../Answer/Answer";
import { quizData } from "../../data/quizData";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  return (
    <div>
      {quizData.map(({ question, answers }) => (
        <div>
          <h4>{question}</h4>
          <div className={styles.options}>
            {answers.map((answer) => (
              <Answer answer={answer} />
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
