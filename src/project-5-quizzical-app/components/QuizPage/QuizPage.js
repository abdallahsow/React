import { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import { quizData } from "../../data/quizData";
import styles from "./QuizPage.module.css";

export default function QuizPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [quiz, setQuiz] = useState([]);

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

  const answers = () => {
    const possibleAnswers = [];
    for (let i = 0; i < quiz.length; i++) {
      const answers = [];
      for (let j = 0; j < quiz[i].incorrect_answers.length; j++) {
        answers.push(quiz[i].incorrect_answers[j]);
      }
      answers.push(quiz[i].correct_answer);
      possibleAnswers.push(answers);
    }
    return possibleAnswers;
  };

console.log(answers());

  const fetchData = async () => {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    );
    const { results } = await data.json();
    setQuiz(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
