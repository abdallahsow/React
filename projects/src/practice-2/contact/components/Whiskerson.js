import whiskerson from "../images/mr-whiskerson.png";
import Phone from "../images/phone-icon.png";
import Email from "../images/mail-icon.png";

const Whiskerson = () => (
  <div className="contacts">
    <div className="card-alignment">
      {/* Card 1 */}
      <div className="contact-card">
        <img className="client-pic" src={whiskerson} alt="Whiskerson the Cat" />
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
        <img className="client-pic" src={whiskerson} alt="Whiskerson the Cat" />
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
    </div>

    <div className="card-alignment">
      {/* Card 3 */}
      <div className="contact-card">
        <img className="client-pic" src={whiskerson} alt="Whiskerson the Cat" />
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

      {/* Card 4 */}
      <div className="contact-card">
        <img className="client-pic" src={whiskerson} alt="Whiskerson the Cat" />
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
    </div>
  </div>
);

export default Whiskerson;
