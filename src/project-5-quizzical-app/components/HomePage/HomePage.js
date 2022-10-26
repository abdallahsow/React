import styles from "./HomePage.module.css";

export default function HomePage({ handleClick}) {
  return (
    <div className={styles.homePage}>
      <h3 className={styles.title}>Quizzical</h3>
      <p className={styles.description}>Some description if needed</p>
      <button className={styles.startButton} onClick={handleClick}>Start quiz</button>
    </div>
  );
}
