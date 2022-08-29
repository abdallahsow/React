const Page = function () {
  return (
    <div>
      <nav className="logo-container">
        <img className="logos" src="images/react-logo.png" alt="" />
        <img className="logos" src="images/angular-logo.png" alt="" />
        <img className="logos" src="images/view-logo.png" alt="" />
        <img className="logos" src="images/next-logo.png" alt="" />
        <img className="logos" src="images/node-logo.png" alt="" />
        <img className="logos" src="images/express-logo.jpg" alt="" />
      </nav>
      <h1>Example of frameworks</h1>
      <ul>
        <li>React.JS</li>
        <li>Angular.JS</li>
        <li>View.JS</li>
        <li>Next.JS</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
      </ul>
    </div>
  );
};

const divRoot = ReactDOM.createRoot(document.getElementById("root"));
divRoot.render(<Page />);
