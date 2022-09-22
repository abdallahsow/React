import logo from "../images/react-logo.png";

export default function Navbar(props) {
  const { state, handleClick } = props;

  const classNames = {
    light: state ? "light light-dark__mode" : "light",
    dark: state ? "dark dark-dark__mode" : "dark",
    change: state ? "toggle-switch toggle-switch-dark" : "toggle-switch",
    navbar: state ? "navbar navbar-dark" : "navbar",
    circle: state ? "switch__circle switch__circle-dark" : "switch__circle",
  };

  const { light, dark, change, navbar, circle } = classNames;

  return (
    <nav className={navbar}>
      <div className="main-logo">
        <img className="react-logo" src={logo} alt="" />
        <h3 className="logo-title">React Facts</h3>
      </div>
      <div className="toggle">
        <p className={light}>Light</p>
        <div className={change} onClick={handleClick}>
          <div className={circle}></div>
        </div>
        <p className={dark}>Dark</p>
      </div>
    </nav>
  );
}
