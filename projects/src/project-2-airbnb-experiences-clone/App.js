import "./App.css";
import Athlete from "./images/zaferes-usa.png";
import Star from "./images/star-icon.png";
import { Navbar, Pictures, Advertisement } from "./components/HeroSection";
import Card from "./components/Card";

const App = () => (
  <main className="app">
    <Navbar />
    <div className="experiences">
      <Pictures />
      <Advertisement />
      <Card
        img={Athlete}
        star={Star}
        rating={5.0}
        reviews={6}
        location="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  </main>
);

export default App;
