import styles from "./Answer.module.css";

export default function Answer({ answer }) {
  return (
      <div className={styles.answerBox}>
      <p>{answer}</p>
    </div>
  );
}
