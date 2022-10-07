import Answer from "../Answer/Answer";
import { quizData } from "../../data/quizData";

export default function QuizPage() {
  return (
    <div>
      {quizData.map(({ question, answers }) => (
        <div>
          <h4>{question}</h4>
          <div>
            {answers.map((answer) => (
              <Answer answer={answer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
