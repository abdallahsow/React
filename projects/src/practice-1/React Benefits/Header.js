import logo from "./react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="react-style" src={logo} alt="" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
