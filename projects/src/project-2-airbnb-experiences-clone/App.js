import "./App.css";
import data from './components/data';
import { Navbar, Pictures, Advertisement } from "./components/HeroSection";
import Card from "./components/Card";

const App = () => (
    <main className="app">
    <Navbar />
    <div className="experiences">
      <Pictures />
      <Advertisement />
      <div className="cards-data">
        {data.map(({ img, star, rating, reviews, location, title, price }) =>
        (<Card
          image={img}
          icon={star}
          rating={rating}
          reviewCount={reviews}
          country={location}
          title={title}
          price={price}
        />))}
      </div>
    </div>
  </main>
);

export default App;
