import styles from "./QuizPage.module.css";

export default function QuizPage({ quizData, hold }) {
  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, shuffledAnswers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.question}>{question}</h4>
          <div>
            {shuffledAnswers.map((data, index) => (
              <button
                key={index}
                className={
                  data.isHeld ? styles.holdAnswer : styles.singleAnswer
                }
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
