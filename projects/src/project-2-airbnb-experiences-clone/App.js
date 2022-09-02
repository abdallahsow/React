import "./App.css";
import { Navbar, Pictures, Advertisement } from "./components/HeroSection";

const App = () => (
  <main className="app">
    <Navbar />
    <div className="experiences">
      <Pictures />
      <Advertisement />
    </div>
  </main>
);

export default App;
