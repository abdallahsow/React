import logo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-logo">
        <img className="react-logo" src={logo} alt="" />
        <h3 className="logo-title">React Facts</h3>
      </div>
      <div>
        <label htmlFor="switch">
          <p id="switch">Light</p>
          <button>switch</button>
          <p id="switch">Dark</p>
        </label>
      </div>
    </nav>
  );
}
