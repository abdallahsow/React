import AirBnB from "../images/airbnb-logo.png";
import Cooker from "../images/cooker.png";
import Worker from "../images/worker.png";
import Balina from "../images/balina.png";
import Food from "../images/food.png";
import Guitar from "../images/guitar.png";
import Piano from "../images/piano.png";
import Swimmer from "../images/swimmer.png";
import Yoga from "../images/yoga.png";
import Singer from "../images/singer.png";

const Navbar = function () {
  return (
    <nav className="navbar">
      <img src={AirBnB} alt="" />
    </nav>
  );
};

function Pictures() {
  return (
    <section>
      <div className="pictures-section">
        <img src={Cooker} alt="" />
        {/* Group 1 */}
        <div className="group-style-1">
          <img src={Worker} alt="" />
          <img src={Balina} alt="" />
        </div>
        {/* Group 2 */}
        <div className="group-style-2">
          <img src={Food} alt="" />
          <img src={Guitar} alt="" />
        </div>
        {/* Group 3 */}
        <div className="group-style-3">
          <img src={Piano} alt="" />
          <img src={Swimmer} alt="" />
        </div>
        {/* Group 4 */}
        <div className="group-style-4">
          <img src={Yoga} alt="" />
          <img src={Singer} alt="" />
        </div>
      </div>
    </section>
  );
}

function Advertisement() {
  return (
    <div className="advert-layout">
      <h1 className="advert-title">Online Experiences</h1>
      <p className="advert-p">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export { Navbar, Pictures, Advertisement };
