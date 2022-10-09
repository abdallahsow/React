import styles from "./Answer.module.css";

const Answer = ({ answer, handleClick, isClicked }) => {
  const styling = {
    backgroundColor: isClicked ? "#D6DBF5" : "#F5F7FB",
  };
  return (
    <button
      style={styling}
      className={styles.singleAnswer}
      onClick={() => handleClick(answer)}
    >
      {answer}
    </button>
  );
};

export default Answer;
