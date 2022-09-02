import "./App.css";
import { Navbar, Pictures, Advertisement } from "./components/HeroSection";
import Card from "./components/Card";

const App = () => (
  <main className="app">
    <Navbar />
    <div className="experiences">
      <Pictures />
      <Advertisement />
      <Card />
    </div>
  </main>
);

export default App;
