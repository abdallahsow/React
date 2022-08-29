import "./index.css";
import react from "./images/react-logo.png";
import angular from "./images/angular-logo.png";
import view from "./images/view-logo.png";
import next from "./images/next-logo.png";
import node from "./images/node-logo.png";
import express from "./images/express-logo.jpg";

const Page = function () {
  return (
    <div>
      <nav className="logo-container">
        <img className="logos" src={react} alt="" />
        <img className="logos" src={angular} alt="" />
        <img className="logos" src={view} alt="" />
        <img className="logos" src={next} alt="" />
        <img className="logos" src={node} alt="" />
        <img className="logos" src={express} alt="" />
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

export default Page
