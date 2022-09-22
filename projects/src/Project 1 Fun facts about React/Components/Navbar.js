import logo from "../images/react-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-logo">
        <img className="react-logo" src={logo} alt="" />
        <h3 className="logo-title">React Facts</h3>
      </div>
      <div className="toggle">
        <p>Light</p>
        <div className="toggle-switch">
          <div className="toggle-switch__circle"></div>
        </div>
        <p>Dark</p>
      </div>
    </nav>
  );
}
