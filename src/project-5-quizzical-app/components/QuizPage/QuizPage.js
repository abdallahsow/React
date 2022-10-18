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

  console.log(quizData);

  return (
    <div className={styles.quiz}>
      {quizData.map(({ question, shuffledAnswers }, index) => (
        <div key={index} className={styles.quizBox}>
          <h4 className={styles.quizHeader}>{question}</h4>
          <div>
            {shuffledAnswers.map((answer, index) => (
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
