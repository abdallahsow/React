import "./App.css";
import Navbar from "./components/Navbar";
import MemeInput from "./components/MemeInput";
import GeneratedMeme from "./components/GeneratedMeme";

const App = () => (
  <div className="app">
    <Navbar />
    <section className="meme-section">
      <MemeInput />
      <GeneratedMeme />
    </section>
  </div>
);

export default App;
