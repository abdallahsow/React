import felixcat from "../images/felix.png";
import whiskerson from "../images/mr-whiskerson.png";
import fluffykins from "../images/fluffykins.png";
import pumpkin from "../images/pumpkin.png";
import Phone from "../images/phone-icon.png";
import Email from "../images/mail-icon.png";

export default function Contact() {
  return (
    <div>
      <div className="main-card-alignment">
        {/* Card 1 */}
        <div className="contact-card">
          <img
            className="client-pic"
            src={whiskerson}
            alt="Whiskerson the Cat"
          />
          <h3 className="client">Mr. Whiskerson</h3>
          <div className="info-group">
            <img
              className="info-img"
              src={Phone}
              alt="Whiskerson's phone number"
            />
            <p className="info-text">(212) 555-1234</p>
          </div>
          <div className="info-group">
            <img
              className="info-img"
              src={Email}
              alt="Whiskerson's email adress"
            />
            <p className="info-text">mr.whiskaz@catnap.meow</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="contact-card">
          <img
            className="client-pic"
            src={fluffykins}
            alt="Fluffykins the Cat"
          />
          <h3 className="client">Fluffykins</h3>
          <div className="info-group">
            <img
              className="info-img"
              src={Phone}
              alt="Fluffykins' phone number"
            />
            <p className="info-text">(212) 555-2345</p>
          </div>
          <div className="info-group">
            <img
              className="info-img"
              src={Email}
              alt="Fluffykins' email adress"
            />
            <p className="info-text">fluff@me.com</p>
          </div>
        </div>
      </div>

      <div className="main-card-alignment">
        {/* Card 3 */}
        <div className="contact-card">
          <img className="client-pic" src={felixcat} alt="Felix the Cat" />
          <h3 className="client">Felix</h3>
          <div className="info-group">
            <img className="info-img" src={Phone} alt="Felix's phone number" />
            <p className="info-text">(212) 555-4567</p>
          </div>
          <div className="info-group">
            <img className="info-img" src={Email} alt="Felix's email adress" />
            <p className="info-text">thecat@hotmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <img className="client-pic" src={pumpkin} alt="Pumpkin the Cat" />
          <h3 className="client">Pumpkin</h3>
          <div className="info-group">
            <img
              className="info-img"
              src={Phone}
              alt="Pumpkin's phone number"
            />
            <p className="info-text">(0800) CAT KING</p>
          </div>
          <div className="info-group">
            <img
              className="info-img"
              src={Email}
              alt="Pumpkin's email adress"
            />
            <p className="info-text">pumpkin@scrimba.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
