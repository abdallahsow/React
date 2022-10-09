import styles from "./Answer.module.css";

const Answer = ({ answer }) => {
  return <button className={styles.singleAnswer}>{answer}</button>;
};

export default Answer;
