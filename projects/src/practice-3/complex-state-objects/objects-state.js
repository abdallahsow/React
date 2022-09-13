import "./app.css";
import User from "./images/user.png";
import emptyStar from "./images/star-empty.png";
import filledStar from "./images/star-filled.png";
import React from "react";

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "Marcus",
    lastName: "Cracius",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const { firstName, lastName, phone, email, isFavorite } = contact;

  let starIcon = contact.isFavorite ? filledStar : emptyStar;

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...contact,
      isFavorite: !prevContact.isFavorite,
    }));
  };

  return (
    <article className="user">
      <img className="user-pic" src={User} alt="user" />
      <div>
        <img
          className="user-star"
          src={starIcon}
          alt="star"
          onClick={toggleFavorite}
        />
        <h3 className="title">
          {firstName} {lastName}
        </h3>
        <p className="text">{phone}</p>
        <p className="text">{email}</p>
      </div>
    </article>
  );
};

export default App;
