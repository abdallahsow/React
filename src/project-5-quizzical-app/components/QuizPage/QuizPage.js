import styles from "./QuizPage.module.css";

export default function QuizPage({ quizData, hold, checkAnswers }) {
  const requiredClassName = (isHeld, isCorrect) => {
    if (isHeld) {
      return styles.held;
    } else if (isCorrect) {
      return styles.correct;
    } else {
      return styles.incorrect;
    }
  };

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
                  data.isHeld === false
                    ? styles.normal
                    : requiredClassName(data.isHeld, data.isCorrect)
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
        <p className={styles.gameState}>You scored 3/5 correct answers</p>
        <button className={styles.submitButton} onClick={checkAnswers}>
          Check Answers
        </button>
      </div>
    </div>
  );
}
