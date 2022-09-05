import fluffykins from "../images/fluffykins.png";
import Phone from "../images/phone-icon.png";
import Email from "../images/mail-icon.png";

const Fluffykins = () => (
  <div className="contacts">
    <div className="card-alignment">
      {/* Card 1 */}
      <div className="contact-card">
        <img className="client-pic" src={fluffykins} alt="Fluffykins the Cat" />
        <h3 className="client">Fluffykins</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Fluffykins' phone number" />
          <p className="info-text">(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Fluffykins' email adress" />
          <p className="info-text">fluff@me.com</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="contact-card">
        <img className="client-pic" src={fluffykins} alt="Fluffykins the Cat" />
        <h3 className="client">Fluffykins</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Fluffykins' phone number" />
          <p className="info-text">(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Fluffykins' email adress" />
          <p className="info-text">fluff@me.com</p>
        </div>
      </div>
    </div>

    <div className="card-alignment">
      {/* Card 3 */}
      <div className="contact-card">
        <img className="client-pic" src={fluffykins} alt="Fluffykins the Cat" />
        <h3 className="client">Fluffykins</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Fluffykins' phone number" />
          <p className="info-text">(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Fluffykins' email adress" />
          <p className="info-text">fluff@me.com</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="contact-card">
        <img className="client-pic" src={fluffykins} alt="Fluffykins the Cat" />
        <h3 className="client">Fluffykins</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Fluffykins' phone number" />
          <p className="info-text">(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Fluffykins' email adress" />
          <p className="info-text">fluff@me.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Fluffykins;
