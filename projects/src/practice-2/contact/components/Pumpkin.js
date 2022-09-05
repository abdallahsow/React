import pumpkin from "../images/pumpkin.png";
import Phone from "../images/phone-icon.png";
import Email from "../images/mail-icon.png";

const Pumpkin = () => (
  <div className="contacts">
    <div className="card-alignment">
      {/* Card 1 */}
      <div className="contact-card">
        <img className="client-pic" src={pumpkin} alt="Pumpkin the Cat" />
        <h3 className="client">Pumpkin</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Pumpkin's phone number" />
          <p className="info-text">(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Pumpkin's email adress" />
          <p className="info-text">pumpkin@scrimba.com</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="contact-card">
        <img className="client-pic" src={pumpkin} alt="Pumpkin the Cat" />
        <h3 className="client">Pumpkin</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Pumpkin's phone number" />
          <p className="info-text">(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Pumpkin's email adress" />
          <p className="info-text">pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>

    <div className="card-alignment">
      {/* Card 3 */}
      <div className="contact-card">
        <img className="client-pic" src={pumpkin} alt="Pumpkin the Cat" />
        <h3 className="client">Pumpkin</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Pumpkin's phone number" />
          <p className="info-text">(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Pumpkin's email adress" />
          <p className="info-text">pumpkin@scrimba.com</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="contact-card">
        <img className="client-pic" src={pumpkin} alt="Pumpkin the Cat" />
        <h3 className="client">Pumpkin</h3>
        <div className="info-group">
          <img className="info-img" src={Phone} alt="Pumpkin's phone number" />
          <p className="info-text">(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img className="info-img" src={Email} alt="Pumpkin's email adress" />
          <p className="info-text">pumpkin@scrimba.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Pumpkin;
