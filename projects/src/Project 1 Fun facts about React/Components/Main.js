export default function Main({ state }) {
  const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 100k stars on GitHub",
    "Is maintained by Facebook",
    "Powers thousands of entreprise apps, including mobile apps",
  ];

  const mainBody = state ? "main-body main-body-dark" : "main-body";

  return (
    <main className={mainBody}>
      <h1 className="h1-title">Fun facts about React</h1>
      <ul className="facts">
        {facts.map((fact) => (
          <li key={fact} className="body-text">
            {fact}
          </li>
        ))}
      </ul>
    </main>
  );
}
