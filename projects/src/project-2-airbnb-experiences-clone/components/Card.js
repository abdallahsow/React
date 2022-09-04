import Athlete from "../images/zaferes-usa.png";
import Star from "../images/star-icon.png";

export default function Card() {
  return (
    <section className="cards">
      <img className="cards--pic" src={Athlete} alt="Olympic Swimmer" />
      <div>
        <img className="cards--star" src={Star} alt="" />
        <p className="cards--text">
          5.0 <span className="text--location">(6) USA</span>
        </p>
      </div>
      <p className="cards--text">Life lessons with Katie Zaferes</p>
      <p className="cards--price">
        <strong>From $136</strong> / person
      </p>
    </section>
  );
}
