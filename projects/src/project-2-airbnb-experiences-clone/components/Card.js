export default function Card(props) {
  const { img, star, rating, reviews, location, title, price } = props;
  
  return (
    <section className="cards">
      <img className="cards--pic" src={img} alt="Olympic Swimmer" />
      <div>
        <img className="cards--star" src={star} alt="" />
        <p className="cards--text">
          {rating} <span className="text--location">({reviews}) • {location}</span>
        </p>
      </div>
      <p className="cards--text">{title}</p>
      <p className="cards--price">
        <strong>From ${price}</strong> / person
      </p>
    </section>
  );
}
