import './App.css';
// import logo from './react-logo.png';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

// const StaticPage = () => (
//   <div>
//     <img className="react-logo" src={logo} alt="" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of entreprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

// export default StaticPage;

const App = () => (
  <div>
    <Navbar />
    <Main />
  </div>
)

export default App;
