import Phone from "./images/phone-icon.png";
import Email from "./images/mail-icon.png";

export default function ContactProps(props) {
  const { img, pic_alt, phone_alt, email_alt, name, phone, email } = props;
  
  return (
    <div className="contact-card">
      <img className="client-pic" src={img} alt={pic_alt} />
      <h3 className="client">{name}</h3>
      <div className="info-group"> 
        <img className="info-img" src={Phone} alt={phone_alt} />
        <p className="info-text">{phone}</p>
      </div>
      <div className="info-group">
        <img className="info-img" src={Email} alt={email_alt} />
        <p className="info-text">{email}</p>
      </div>
    </div>
  );
}
