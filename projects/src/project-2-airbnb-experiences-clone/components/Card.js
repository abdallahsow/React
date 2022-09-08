export default function Card(props) {
  const { image, icon, rating, reviewCount, country, title, price } = props;
  
  return (
    <section className="cards">
      <p className="badge">SOLD OUT</p>
      <img className="cards--pic" src={image} alt="Olympic Swimmer" />
      <div>
        <img className="cards--star" src={icon} alt="" />
        <p className="cards--text">
          {rating} <span className="text--location">({reviewCount}) • {country}</span>
        </p>
      </div>
      <p className="cards--text">{title}</p>
      <p className="cards--price">
        <strong>From ${price}</strong> / person
      </p>
    </section>
  );
}
