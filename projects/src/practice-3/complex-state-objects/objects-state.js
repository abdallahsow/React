import "./app.css";
import User from "./images/user.png";
import emptyStar from "./images/star-empty.png";
import React from 'react';

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
  });

  const toggleFavorite = () => {
    console.log("Toggle Favorite");
  };

  return (
    <article className="user">
      <img className="user-pic" src={User} alt="user" />
      <div>
        <img
          className="user-star"
          src={emptyStar}
          alt="star"
          onClick={toggleFavorite}
        />
        <h3 className="title">
          {contact.firstName} {contact.lastName}
        </h3>
        <p className="text">{contact.phone}</p>
        <p className="text">{contact.email}</p>
      </div>
    </article>
  );
};

export default App;
