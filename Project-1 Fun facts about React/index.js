const StaticPage = () => (
  <div>
    <img className="react-logo" src="images/react-logo.png" alt="" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of entreprise apps, including mobile apps</li>
    </ul>
  </div>
);
const divRoot = ReactDOM.createRoot(document.querySelector("#root"));
divRoot.render(<StaticPage />);
