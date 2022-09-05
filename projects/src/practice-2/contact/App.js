import Felix from "./components/Felix";
import Fluffykins from "./components/Fluffykins";
import Whiskerson from "./components/Whiskerson";
import "./App.css";

const App = () => (
  <main className="app">
    <div className="alignment">
      <Felix />
      <Fluffykins />
    </div>
    <div className="alignment">
      <Whiskerson />
    </div>
  </main>
);

export default App;
