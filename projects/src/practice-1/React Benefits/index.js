function Header() {
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

const MainContent = () => (
  <div>
    <h1>Reasons I'm excited to learn React</h1>
    <ol>
      <li>
        It's a popular library, so I'll be able to fit in with the cool kids!
      </li>
      <li>I'm more likely to get a job as a developer if I know React</li>
    </ol>
  </div>
);

const Footer = () => (
  <footer>
    <small>© 2021 Apo development. All rights reserved.</small>
  </footer>
);

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
