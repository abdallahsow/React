import "./App.css";
import Navbar from "./components/Navbar";
import MemeInput from "./components/MemeInput";

const App = () => (
  <div className="app">
    <Navbar />
    <section className="meme-section">
      <MemeInput />
    </section>
  </div>
);

export default App;
