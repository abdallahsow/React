import Felix from "./components/Felix";
import Fluffykins from "./components/Fluffykins";
import Whiskerson from "./components/Whiskerson";
import Pumpkin from "./components/Pumpkin";
import Contact from "./components/Contact";
import "./App.css";

const App = () => (
  <main className="app">
    <div className="alignment">
      <Felix />
      <Fluffykins />
    </div>
    <div className="alignment">
      <Whiskerson />
      <Pumpkin />
    </div>
    <Contact />
  </main>
);

export default App;
