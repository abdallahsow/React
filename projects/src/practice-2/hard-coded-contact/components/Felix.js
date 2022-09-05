import felixcat from "../images/felix.png";
import Phone from "../images/phone-icon.png";
import Email from "../images/mail-icon.png";

const Felix = () => (
  <div className="contacts">
    <div className="card-alignment">
      {/* Card 1 */}
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

      {/* Card 2 */}
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
    </div>

    <div className="card-alignment">
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

      {/* Card 4 */}
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
    </div>
  </div>
);

export default Felix;
