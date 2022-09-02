import AirBnB from '../images/airbnb-logo.png';
import Cooker from '../images/cooker.png';
import Worker from '../images/worker.png';
import Balina from '../images/balina.png';
import Food from '../images/food.png';
import Guitar from '../images/guitar.png';
import Piano from "../images/piano.png";
import Swimmer from "../images/swimmer.png";
import Yoga from "../images/yoga.png";
import Singer from "../images/singer.png";

function HeroSection() {
    return (
      <div className="hero-section">
        <nav className="logo">
          <img src={AirBnB} alt="" />
        </nav>
        <section>
          <img src={Cooker} alt="" />
          <img src={Worker} alt="" />
          <img src={Balina} alt="" />
          <img src={Food} alt="" />
          <img src={Guitar} alt="" />
          <img src={Piano} alt="" />
          <img src={Swimmer} alt="" />
          <img src={Yoga} alt="" />
          <img src={Singer} alt="" />
        </section>
      </div>
    );
    
}

export default HeroSection;