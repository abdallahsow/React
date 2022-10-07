import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h3 className={styles.title}>Quizzical</h3>
      <p className={styles.description}>Some description if needed</p>
      <button className={styles.startButton}>Start quiz</button>
    </div>
  );
}
