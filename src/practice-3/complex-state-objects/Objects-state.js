import "./app.css";
import User from "./images/user.png";
import React from "react";
import Img from "./Image.js";

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "Marcus",
    lastName: "Cracius",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const { firstName, lastName, phone, email, isFavorite } = contact;

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
        <Img isFilled={isFavorite} handleClick={toggleFavorite} />
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
