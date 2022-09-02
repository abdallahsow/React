import Athlete from "../images/zaferes-usa.png";
import Star from "../images/star-icon.png";

export default function Card() {
  return (
    <section className="cards">
      <img className="cards--pic" src={Athlete} alt="Olympic Swimmer" />
      <div>
        <img src={Star} alt="" />
          <p className="go">
            5.0 <span>(6) USA</span>
          </p>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </section>
  );
}
